/* AlagaLegal PH – Interactive Offline Document Checklist Module */
(function (global) {
  'use strict';

  const AlagaChecklist = {
    procedures: [],
    activeProcedureId: 'domestic-adoption',

    async init() {
      try {
        const res = await fetch('./data/documents.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        this.procedures = await res.json();
      } catch (err) {
        console.warn('Could not load documents.json:', err);
        this.procedures = [];
      }

      const savedProc = AlagaStorage.getActiveProcedure();
      if (this.procedures.some((p) => p.id === savedProc)) {
        this.activeProcedureId = savedProc;
      } else if (this.procedures.length > 0) {
        this.activeProcedureId = this.procedures[0].id;
      }

      this.populateSelect();
      this.render();
      this.bindEvents();
    },

    bindEvents() {
      const select = document.getElementById('checklist-procedure-select');
      if (select) {
        select.addEventListener('change', (e) => {
          this.selectProcedure(e.target.value);
        });
      }

      const resetBtn = document.getElementById('btn-reset-checklist');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const confirmed = window.confirm('Reset all checked items for this procedure? / I-reset ang lahat ng naka-check sa prosesong ito?');
          if (!confirmed) return;
          AlagaStorage.resetProcedureChecklist(this.activeProcedureId);
          this.render();
          AlagaA11y.announce('Checklist reset.');
          document.dispatchEvent(new CustomEvent('alagalegal:checklistchange'));
        });
      }

      document.addEventListener('alagalegal:langchange', () => {
        this.populateSelect();
        this.render();
      });
    },

    selectProcedure(procedureId) {
      this.activeProcedureId = procedureId;
      AlagaStorage.setActiveProcedure(procedureId);
      const select = document.getElementById('checklist-procedure-select');
      if (select && select.value !== procedureId) {
        select.value = procedureId;
      }
      this.render();
      document.dispatchEvent(new CustomEvent('alagalegal:checklistchange'));
    },

    populateSelect() {
      const select = document.getElementById('checklist-procedure-select');
      if (!select) return;
      const isFil = AlagaA11y.currentLang === 'fil';

      select.innerHTML = this.procedures.map((proc) => `
        <option value="${proc.id}" ${proc.id === this.activeProcedureId ? 'selected' : ''}>
          ${isFil ? proc.titleFil : proc.titleEn}
        </option>
      `).join('');
    },

    getProgressStats(procedureId = this.activeProcedureId) {
      const proc = this.procedures.find((p) => p.id === procedureId);
      if (!proc || !proc.items) return { completed: 0, total: 0, percent: 0 };
      const savedState = AlagaStorage.getProcedureChecklist(procedureId);
      const total = proc.items.length;
      const completed = proc.items.filter((item) => Boolean(savedState[item.id])).length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, percent };
    },

    render() {
      const proc = this.procedures.find((p) => p.id === this.activeProcedureId);
      const container = document.getElementById('checklist-items-container');
      const metaBox = document.getElementById('checklist-meta-box');
      if (!proc || !container) return;

      const isFil = AlagaA11y.currentLang === 'fil';
      const savedState = AlagaStorage.getProcedureChecklist(proc.id);

      if (metaBox) {
        metaBox.innerHTML = `
          <strong>${isFil ? 'Saan Isusumite / Patnubay:' : 'Where to File & Verification Note:'}</strong>
          <span>${isFil ? proc.filingOfficeFil : proc.filingOfficeEn}</span>
        `;
      }

      container.innerHTML = proc.items.map((item) => {
        const isChecked = Boolean(savedState[item.id]);
        const inputId = `chk_${proc.id}_${item.id}`;
        return `
          <div class="checklist-item ${isChecked ? 'checked' : ''}">
            <input type="checkbox" id="${inputId}" class="checklist-checkbox" data-item-id="${item.id}" ${isChecked ? 'checked' : ''} />
            <div class="checklist-body">
              <label for="${inputId}" class="checklist-title">${isFil ? item.nameFil : item.nameEn}</label>
              <p class="checklist-reason">${isFil ? item.reasonFil : item.reasonEn}</p>
              <div class="meta-row">
                <span class="pill">${isFil ? 'Kukunin sa:' : 'Source:'} ${item.whereToGet}</span>
                ${item.verifyWithOffice ? `<span class="pill pill--warn">${isFil ? 'Kumpirmahin sa opisina' : 'Confirm with office'}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('');

      container.querySelectorAll('.checklist-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
          const itemId = e.target.getAttribute('data-item-id');
          AlagaStorage.setChecklistItem(proc.id, itemId, e.target.checked);
          this.render();
          document.dispatchEvent(new CustomEvent('alagalegal:checklistchange'));
        });
      });

      this.updateProgressUI();
    },

    updateProgressUI() {
      const { completed, total, percent } = this.getProgressStats();
      const textEl = document.getElementById('checklist-progress-text');
      const fillEl = document.getElementById('checklist-progress-fill');
      const barEl = document.getElementById('checklist-progressbar');

      if (textEl) {
        textEl.textContent = `${completed} of ${total} documents ready (${percent}%)`;
      }
      if (fillEl) {
        fillEl.style.width = `${percent}%`;
      }
      if (barEl) {
        barEl.setAttribute('aria-valuenow', String(percent));
      }
    }
  };

  global.AlagaChecklist = AlagaChecklist;
})(window);