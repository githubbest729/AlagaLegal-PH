/* AlagaLegal PH – Main Application Controller, Web Speech Read Aloud, Personal Action Plan & PWA Lifecycle */
(function (global) {
  'use strict';

  let deferredInstallPrompt = null;
  let waitingServiceWorker = null;
  let isReadingAloud = false;
  let speechSessionId = 0;

  const AlagaApp = {
    async init() {
      AlagaA11y.init();
      AlagaNav.init();

      await Promise.all([
        AlagaGuides.init(),
        AlagaChecklist.init()
      ]);

      this.initPersonalPlan();
      this.updateDashboardSummary();
      this.bindGlobalControls();
      this.initReadAloud();
      this.initConnectivityMonitor();
      this.registerServiceWorker();
    },

    bindGlobalControls() {
      const langBtn = document.getElementById('btn-lang-toggle');
      if (langBtn) {
        langBtn.addEventListener('click', () => AlagaA11y.toggleLanguage());
      }

      const textBtn = document.getElementById('btn-text-size');
      if (textBtn) {
        textBtn.addEventListener('click', () => AlagaA11y.toggleTextSize());
      }

      const themeBtn = document.getElementById('btn-theme-toggle');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => AlagaA11y.toggleTheme());
      }

      // Web Share API + Clipboard Fallback
      const shareHandler = async (triggerBtn) => {
        const shareUrl = window.location.href.split('#')[0];
        const shareData = {
          title: 'AlagaLegal PH – Family Care & Legal Guide',
          text: 'Free Philippine legal guide & document checklists for grandparents, relatives, and guardians caring for children:',
          url: shareUrl
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
            AlagaA11y.announce('Shared AlagaLegal PH link.');
            return;
          }
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareUrl);
            const origText = triggerBtn.textContent;
            triggerBtn.textContent = AlagaA11y.currentLang === 'fil' ? 'Nakopya na!' : 'Link Copied!';
            AlagaA11y.announce('App link copied to clipboard.');
            window.setTimeout(() => {
              triggerBtn.textContent = origText;
            }, 2200);
          }
        } catch (clipErr) {
          window.prompt('Copy this link to share AlagaLegal PH:', shareUrl);
        }
      };

      ['btn-share-app', 'btn-share-app-footer'].forEach((id) => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.addEventListener('click', () => shareHandler(btn));
        }
      });

      // PWA Install Prompt
      const installBtn = document.getElementById('btn-install-app');
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        if (installBtn) installBtn.hidden = false;
      });

      if (installBtn) {
        installBtn.addEventListener('click', async () => {
          if (!deferredInstallPrompt) return;
          deferredInstallPrompt.prompt();
          await deferredInstallPrompt.userChoice;
          deferredInstallPrompt = null;
          installBtn.hidden = true;
        });
      }

      // Manual / iOS Install Modal
      const iosHelpBtn = document.getElementById('btn-ios-install-help');
      const installModal = document.getElementById('install-modal');
      const closeModalBtn = document.getElementById('btn-close-install-modal');

      if (iosHelpBtn && installModal && installModal.showModal) {
        iosHelpBtn.addEventListener('click', () => installModal.showModal());
      }
      if (closeModalBtn && installModal) {
        closeModalBtn.addEventListener('click', () => installModal.close());
      }

      document.addEventListener('alagalegal:checklistchange', () => this.updateDashboardSummary());
      document.addEventListener('alagalegal:situationchange', () => {
        this.syncPlanSituationSelect();
        this.updateDashboardSummary();
      });
      document.addEventListener('alagalegal:langchange', () => {
        this.syncPlanSituationSelect();
        this.updateDashboardSummary();
      });
    },

    initReadAloud() {
      const readBtn = document.getElementById('btn-read-aloud');
      if (!readBtn) return;

      const isSupported =
        'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance !== 'undefined';

      if (!isSupported) {
        readBtn.hidden = true;
        return;
      }

      readBtn.hidden = false;

      const updateButtonState = () => {
        const isFil = AlagaA11y.currentLang === 'fil';
        readBtn.setAttribute('aria-pressed', String(isReadingAloud));
        if (isReadingAloud) {
          readBtn.textContent = isFil ? '⏹ Ihinto ang Pagbasa' : '⏹ Stop Reading';
        } else {
          readBtn.textContent = isFil ? '🔊 Pakinggan' : '🔊 Read Aloud';
        }
      };

      const stopReading = () => {
        speechSessionId += 1;
        isReadingAloud = false;
        try {
          window.speechSynthesis.cancel();
        } catch (err) {
          // Ignore cancel errors on unsupported mobile states
        }
        updateButtonState();
      };

      const pickVoice = (isFil) => {
        const voices = window.speechSynthesis.getVoices() || [];
        if (voices.length === 0) return null;
        if (isFil) {
          return (
            voices.find((v) => /^fil/i.test(v.lang)) ||
            voices.find((v) => /^tl/i.test(v.lang)) ||
            null
          );
        }
        return (
          voices.find((v) => /^en-PH/i.test(v.lang)) ||
          voices.find((v) => /^en/i.test(v.lang)) ||
          null
        );
      };

      const startReadingGuides = () => {
        stopReading();

        const guidesList = document.getElementById('guides-list');
        const guideSection = document.getElementById('view-guides');
        const targetContainer = guidesList || guideSection;
        if (!targetContainer) return;

        // Read card-by-card so long legal guides never time out on mobile Chrome
        const cards = Array.from(targetContainer.querySelectorAll('.guide-card'));
        const textChunks = cards.length > 0
          ? cards.map((card) => card.innerText.replace(/\s+/g, ' ').trim()).filter(Boolean)
          : [targetContainer.innerText.replace(/\s+/g, ' ').trim()].filter(Boolean);

        if (textChunks.length === 0) return;

        const isFil = AlagaA11y.currentLang === 'fil';
        const targetLang = isFil ? 'fil-PH' : 'en-PH';
        const chosenVoice = pickVoice(isFil);
        const currentSession = ++speechSessionId;

        isReadingAloud = true;
        updateButtonState();
        AlagaA11y.announce(isFil ? 'Binabasa nang malakas ang mga gabay.' : 'Reading legal guides aloud.');

        let index = 0;
        const speakNext = () => {
          if (currentSession !== speechSessionId || index >= textChunks.length) {
            if (currentSession === speechSessionId) {
              isReadingAloud = false;
              updateButtonState();
            }
            return;
          }

          const utterance = new window.SpeechSynthesisUtterance(textChunks[index]);
          utterance.lang = targetLang;
          utterance.rate = 0.95;
          if (chosenVoice) {
            utterance.voice = chosenVoice;
          }

          utterance.onend = () => {
            if (currentSession !== speechSessionId) return;
            index += 1;
            speakNext();
          };

          utterance.onerror = () => {
            if (currentSession !== speechSessionId) return;
            isReadingAloud = false;
            updateButtonState();
          };

          window.speechSynthesis.speak(utterance);
        };

        speakNext();
      };

      readBtn.addEventListener('click', () => {
        if (isReadingAloud || window.speechSynthesis.speaking) {
          stopReading();
          AlagaA11y.announce('Stopped reading aloud.');
        } else {
          startReadingGuides();
        }
      });

      document.addEventListener('alagalegal:langchange', () => {
        stopReading();
        updateButtonState();
      });

      document.addEventListener('alagalegal:routechange', () => {
        if (isReadingAloud) stopReading();
      });

      window.addEventListener('beforeunload', stopReading);

      if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = () => {
          // Pre-warm device voice list for mobile browsers
          window.speechSynthesis.getVoices();
        };
      }

      updateButtonState();
    },

    initPersonalPlan() {
      this.syncPlanSituationSelect();

      const sitSelect = document.getElementById('plan-situation-select');
      if (sitSelect) {
        sitSelect.addEventListener('change', (e) => {
          AlagaStorage.setSelectedSituation(e.target.value);
          this.renderPlanSituationSummary();
          this.updateDashboardSummary();
          AlagaGuides.renderSituations();
        });
      }

      const taskForm = document.getElementById('plan-task-form');
      const taskInput = document.getElementById('plan-task-input');
      if (taskForm && taskInput) {
        taskForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const text = taskInput.value.trim();
          if (!text) return;
          const tasks = AlagaStorage.getPlanTasks();
          tasks.push({
            id: `task_${Date.now()}`,
            text,
            done: false
          });
          AlagaStorage.savePlanTasks(tasks);
          taskInput.value = '';
          this.renderPlanTasks();
          this.updateDashboardSummary();
          AlagaA11y.announce('Action step added to your plan.');
        });
      }

      const notesArea = document.getElementById('plan-notes-textarea');
      const notesStatus = document.getElementById('notes-saved-status');
      if (notesArea) {
        notesArea.value = AlagaStorage.getPlanNotes();
        notesArea.addEventListener('input', () => {
          AlagaStorage.savePlanNotes(notesArea.value);
          if (notesStatus) {
            notesStatus.textContent = 'Saved locally on device just now.';
          }
        });
      }

      const clearBtn = document.getElementById('btn-clear-local-data');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          const ok = window.confirm('Erase all saved checklists, action plan tasks, and notes from this device?');
          if (!ok) return;
          AlagaStorage.clearAllUserData();
          if (notesArea) notesArea.value = '';
          this.syncPlanSituationSelect();
          this.renderPlanTasks();
          AlagaChecklist.render();
          AlagaGuides.renderSituations();
          this.updateDashboardSummary();
          AlagaA11y.announce('All local user data cleared.');
        });
      }

      this.renderPlanTasks();
    },

    syncPlanSituationSelect() {
      const sitSelect = document.getElementById('plan-situation-select');
      if (!sitSelect) return;

      const situations = AlagaGuides.getSituationsList();
      const savedId = AlagaStorage.getSelectedSituation();
      const isFil = AlagaA11y.currentLang === 'fil';

      sitSelect.innerHTML = `<option value="">-- ${isFil ? 'Pumili ng sitwasyon' : 'Select your family situation'} --</option>` +
        situations.map((s) => `
          <option value="${s.id}" ${s.id === savedId ? 'selected' : ''}>
            ${isFil ? s.titleFil : s.titleEn}
          </option>
        `).join('');

      this.renderPlanSituationSummary();
    },

    renderPlanSituationSummary() {
      const box = document.getElementById('plan-situation-summary');
      if (!box) return;

      const savedId = AlagaStorage.getSelectedSituation();
      const sit = AlagaGuides.getSituationsList().find((s) => s.id === savedId);
      const isFil = AlagaA11y.currentLang === 'fil';

      if (!sit) {
        box.textContent = isFil
          ? 'Wala pang napiling sitwasyon. Pumili sa itaas upang makita ang inirerekomendang gabay.'
          : 'No situation selected yet. Choose one above to see recommended next steps.';
        return;
      }

      box.innerHTML = `
        <strong>${isFil ? sit.titleFil : sit.titleEn}</strong>
        <p>${isFil ? sit.summaryFil : sit.summaryEn}</p>
      `;
    },

    renderPlanTasks() {
      const list = document.getElementById('plan-tasks-list');
      const empty = document.getElementById('plan-tasks-empty');
      if (!list) return;

      const tasks = AlagaStorage.getPlanTasks();
      if (empty) empty.hidden = tasks.length > 0;

      list.innerHTML = tasks.map((task) => `
        <li class="task-item ${task.done ? 'done' : ''}">
          <label class="task-item-left">
            <input type="checkbox" class="checklist-checkbox" data-toggle-task="${task.id}" ${task.done ? 'checked' : ''} />
            <span>${this.escapeHtml(task.text)}</span>
          </label>
          <button type="button" class="btn btn--small btn--danger-outline" data-delete-task="${task.id}" aria-label="Delete task">
            ✕
          </button>
        </li>
      `).join('');

      list.querySelectorAll('[data-toggle-task]').forEach((chk) => {
        chk.addEventListener('change', (e) => {
          const id = e.target.getAttribute('data-toggle-task');
          const updated = AlagaStorage.getPlanTasks().map((t) =>
            t.id === id ? { ...t, done: e.target.checked } : t
          );
          AlagaStorage.savePlanTasks(updated);
          this.renderPlanTasks();
          this.updateDashboardSummary();
        });
      });

      list.querySelectorAll('[data-delete-task]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-delete-task');
          const updated = AlagaStorage.getPlanTasks().filter((t) => t.id !== id);
          AlagaStorage.savePlanTasks(updated);
          this.renderPlanTasks();
          this.updateDashboardSummary();
        });
      });
    },

    updateDashboardSummary() {
      const sitEl = document.getElementById('home-selected-situation');
      const chkEl = document.getElementById('home-checklist-progress');
      const planEl = document.getElementById('home-plan-count');

      const isFil = AlagaA11y.currentLang === 'fil';
      const savedSitId = AlagaStorage.getSelectedSituation();
      const sit = AlagaGuides.getSituationsList().find((s) => s.id === savedSitId);

      if (sitEl) {
        sitEl.textContent = sit
          ? (isFil ? sit.titleFil : sit.titleEn)
          : (isFil ? 'Wala pang napili' : 'Not selected yet');
      }

      if (chkEl) {
        const stats = AlagaChecklist.getProgressStats();
        chkEl.textContent = `${stats.percent}% (${stats.completed}/${stats.total})`;
      }

      if (planEl) {
        const tasks = AlagaStorage.getPlanTasks();
        planEl.textContent = isFil ? `${tasks.length} Hakbang` : `${tasks.length} Tasks Saved`;
      }
    },

    initConnectivityMonitor() {
      const offlineBanner = document.getElementById('offline-banner');
      const syncBanner = () => {
        if (offlineBanner) {
          offlineBanner.hidden = navigator.onLine;
        }
      };
      window.addEventListener('online', syncBanner);
      window.addEventListener('offline', syncBanner);
      syncBanner();
    },

    registerServiceWorker() {
      if (!('serviceWorker' in navigator)) return;

      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('./sw.js', { scope: './' });

          if (registration.waiting) {
            waitingServiceWorker = registration.waiting;
            this.showUpdateBanner();
          }

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                waitingServiceWorker = newWorker;
                this.showUpdateBanner();
              }
            });
          });

          let refreshing = false;
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
              refreshing = true;
              window.location.reload();
            }
          });
        } catch (err) {
          console.warn('Service worker registration skipped:', err);
        }
      });

      const reloadBtn = document.getElementById('btn-reload-update');
      if (reloadBtn) {
        reloadBtn.addEventListener('click', () => {
          if (waitingServiceWorker) {
            waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
          } else {
            window.location.reload();
          }
        });
      }
    },

    showUpdateBanner() {
      const banner = document.getElementById('update-banner');
      if (banner) banner.hidden = false;
    },

    escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
  };

  document.addEventListener('DOMContentLoaded', () => AlagaApp.init());
})(window);