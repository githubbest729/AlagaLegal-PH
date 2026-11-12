/* AlagaLegal PH – Theme, Bilingual UI (EN / FIL), Text Comfort & ARIA Utilities */
(function (global) {
  'use strict';

  const TRANSLATIONS = {
    en: {
      skipToContent: 'Skip to main content',
      offlineBanner: 'You are offline. Saved checklists, notes, and cached legal guides remain available on this device.',
      updateBanner: 'A newer version of AlagaLegal PH is ready.',
      updateAction: 'Refresh App',
      tagline: 'Family Care & Legal Guide',
      navHome: 'Home',
      navSituations: 'Situations',
      navGuides: 'Legal Guides',
      navChecklist: 'Checklist',
      navDirectory: 'Legal Aid',
      navCosts: 'Costs & Steps',
      navFaq: 'FAQ',
      navPlan: 'My Plan',
      installApp: 'Install App',
      disclaimerLead: 'Public Legal Information Only:',
      disclaimerShort: 'AlagaLegal PH provides general Philippine legal education, not formal legal representation. Never falsify a birth certificate or hide a child\'s biological identity. Consult PAO, NACC, LSWDO, or a licensed lawyer for your specific case.',
      heroBadge: 'Free Public-Service Guide • Bataan Pilot & Nationwide PH',
      heroTitle: 'Caring for a child who is not legally yours? Understand your lawful options.',
      heroMission: '“Nobody should have to break the law simply because they cannot afford to understand it.”',
      heroDesc: 'Built for Filipino grandparents, aunts, uncles, and guardians. Learn lawful adoption, guardianship, and civil registry steps in simple English and Filipino—even offline.',
      ctaStartSituation: 'Start with My Family Situation',
      ctaOpenChecklist: 'Open Document Checklist',
      ctaHowToInstall: 'How to Save on Phone',
      statSituationLabel: 'Selected Situation',
      statChecklistLabel: 'Active Checklist Progress',
      statPlanLabel: 'Saved Action Plan Steps',
      dashboardModulesHeading: 'Explore AlagaLegal PH Tools',
      tagStep1: 'Step 1 • Start Here',
      cardSituationsTitle: 'Family Situation Guide',
      cardSituationsDesc: 'Select who you are caring for (grandchild, niece/nephew, abandoned child) to see lawful options and warnings.',
      tagStep2: 'Step 2 • Learn Laws',
      cardGuidesTitle: 'Step-by-Step Legal Guides',
      cardGuidesDesc: 'Plain-language guides on RA 11642 Administrative Adoption, Guardianship, Substitute Parental Authority, and PSA records.',
      tagStep3: 'Step 3 • Prepare',
      cardChecklistTitle: 'Document Checklist',
      cardChecklistDesc: 'Interactive checklists saved privately on your phone so you avoid incomplete requirements and wasted trips.',
      tagStep4: 'Step 4 • Get Help',
      cardDirectoryTitle: 'Legal Aid & Agency Directory',
      cardDirectoryDesc: 'Verified official portals for PAO, NACC, DSWD, LSWDO, PSA, Local Civil Registry, and Bataan pilot partners.',
      tagStep5: 'Step 5 • Plan Budget',
      cardCostsTitle: 'Cost & Process Guide',
      cardCostsDesc: 'Understand which government services are free, where expenses may arise, and how to qualify for indigent support.',
      tagStep6: 'Answers',
      cardFaqTitle: 'Frequently Asked Questions',
      cardFaqDesc: 'Practical answers about separated parents, missing parents, grandparent adoption, and birth certificate errors.',
      tagPrivate: 'Stored Locally on Device',
      cardPlanTitle: 'My Personal Action Plan',
      cardPlanDesc: 'Save your chosen situation, track next steps, and keep private caregiver notes offline without creating an account.',
      safetyTitle: 'Important Child Protection Reminder',
      safetyBody: 'Registering a child under your own name as if you gave birth to them ("simulated birth") is illegal and can harm the child\'s future inheritance, passport, and identity rights. Lawful paths such as Relative Adoption (RA 11642), Legal Guardianship, or Substitute Parental Authority protect both you and the child.',
      btnBack: '← Back',
      situationsHeading: 'Family Situation Guide',
      situationsSubtitle: 'Select the statement that best describes your current caregiving role. We will show general lawful options, key protections, and when to seek a lawyer or social worker.',
      guidesHeading: 'Step-by-Step Legal Guides',
      guidesSubtitle: 'Clear explanations in English and Filipino citing official Philippine statutes and agencies.',
      btnPrint: 'Print Guide',
      checklistHeading: 'Document Checklist',
      checklistSubtitle: 'Choose a legal procedure below. Your checked items are saved automatically on this device via LocalStorage.',
      selectProcedureLabel: 'Select Procedure / Piliin ang Proseso:',
      btnResetChecklist: 'Reset Checklist',
      directoryHeading: 'Legal Aid & Government Directory',
      directorySubtitle: 'Verified government agencies and legal aid providers. Always confirm local branch hours and indigent eligibility directly with the office.',
      costsHeading: 'Cost & Process Guide',
      costsSubtitle: 'Transparent overview of process stages, free public services, and potential documentary expenses. Exact fees vary by municipality, court, or third-party provider and must be verified locally.',
      costsFreeHeading: 'Where Free Government Assistance Is Available',
      costsTableHeading: 'Process Stages & Possible Expense Breakdown',
      faqHeading: 'Frequently Asked Questions',
      faqSubtitle: 'Practical, responsible answers grounded in Philippine family law.',
      planHeading: 'My Personal Action Plan',
      planSubtitle: 'Everything here is stored privately in your browser\'s LocalStorage on this device. Nothing is sent to any server.',
      privacyTitle: 'Child Privacy Protection:',
      privacyNote: 'Avoid typing sensitive personal numbers (such as full birth certificate registry numbers or bank details) if you share this phone with others.',
      planSituationHeading: '1. My Family Situation',
      planSelectSituationLabel: 'Current Caregiving Situation:',
      planTasksHeading: '2. My Next Steps & Tasks',
      btnAddTask: 'Add Step',
      planEmptyTasks: 'No action steps saved yet. Add a task above or click "Add to My Plan" from any situation or checklist.',
      planNotesHeading: '3. Private Caregiver Notes (Local Only)',
      planNotesLabel: 'Write questions to ask PAO, LSWDO, or the Local Civil Registrar:',
      btnClearAllData: 'Clear All Local Data',
      installModalTitle: 'Install AlagaLegal PH on Your Device',
      installModalIntro: 'Install this app for quick offline access without using app store space:'
    },
    fil: {
      skipToContent: 'Dumiretso sa pangunahing nilalaman',
      offlineBanner: 'Ikaw ay offline. Nananatiling bukas sa device na ito ang mga naka-save na checklist, tala, at gabay.',
      updateBanner: 'May bagong bersyon ng AlagaLegal PH.',
      updateAction: 'I-refresh ang App',
      tagline: 'Gabay sa Pangangalaga ng Bata at Batas',
      navHome: 'Home',
      navSituations: 'Sitwasyon',
      navGuides: 'Mga Gabay',
      navChecklist: 'Checklist',
      navDirectory: 'Tulong Legal',
      navCosts: 'Gastos at Hakbang',
      navFaq: 'FAQ',
      navPlan: 'Aking Plano',
      installApp: 'I-install ang App',
      disclaimerLead: 'Pangkalahatang Impormasyong Legal Lamang:',
      disclaimerShort: 'Nagbibigay ang AlagaLegal PH ng simpleng kaalaman sa batas ng Pilipinas at hindi pamalit sa abogado. Huwag kailanman magpeke ng birth certificate o itago ang tunay na pagkakakilanlan ng bata. Kumonsulta sa PAO, NACC, LSWDO, o lisensyadong abogado.',
      heroBadge: 'Libreng Serbisyo Publiko • Bataan Pilot at Buong Pilipinas',
      heroTitle: 'Nag-aalaga ka ba ng batang hindi mo legal na anak? Alamin ang tamang proseso sa batas.',
      heroMission: '“Walang sinuman ang dapat mapilitang lumabag sa batas dahil lang sa kawalan ng kakayahang unawain ito.”',
      heroDesc: 'Para sa mga lolo, lola, tiyahin, tiyuhin, at tagapag-alaga. Unawain ang legal na adoption, guardianship, at civil registry sa simpleng Filipino at English—kahit walang internet.',
      ctaStartSituation: 'Piliin ang Aking Sitwasyon',
      ctaOpenChecklist: 'Buksan ang Document Checklist',
      ctaHowToInstall: 'Paano I-save sa Cellphone',
      statSituationLabel: 'Napiling Sitwasyon',
      statChecklistLabel: 'Progreso ng Checklist',
      statPlanLabel: 'Mga Hakbang sa Plano',
      dashboardModulesHeading: 'Mga Gamit sa AlagaLegal PH',
      tagStep1: 'Hakbang 1 • Magsimula Dito',
      cardSituationsTitle: 'Gabay sa Sitwasyon ng Pamilya',
      cardSituationsDesc: 'Piliin kung sino ang iyong inaalagaan (apo, pamangkin, o inabandonang bata) upang makita ang mga legal na opsyon.',
      tagStep2: 'Hakbang 2 • Alamin ang Batas',
      cardGuidesTitle: 'Hakbang-Hakbang na Gabay sa Batas',
      cardGuidesDesc: 'Simpleng paliwanag tungkol sa RA 11642 Administrative Adoption, Guardianship, Substitute Parental Authority, at PSA.',
      tagStep3: 'Hakbang 3 • Maghanda',
      cardChecklistTitle: 'Checklist ng mga Dokumento',
      cardChecklistDesc: 'Interactive checklist na naka-save sa iyong cellphone upang maiwasan ang kulang na papeles.',
      tagStep4: 'Hakbang 4 • Humingi ng Tulong',
      cardDirectoryTitle: 'Direktoryo ng Tulong Legal at Ahensya',
      cardDirectoryDesc: 'Opisyal na website ng PAO, NACC, DSWD, LSWDO, PSA, Local Civil Registry, at Bataan pilot partners.',
      tagStep5: 'Hakbang 5 • Magplano ng Gastos',
      cardCostsTitle: 'Gabay sa Gastos at Proseso',
      cardCostsDesc: 'Alamin kung aling serbisyo ng gobyerno ang libre at saan maaaring magkaroon ng gastusin sa dokumento.',
      tagStep6: 'Mga Sagot',
      cardFaqTitle: 'Mga Madalas Itanong (FAQ)',
      cardFaqDesc: 'Praktikal na sagot tungkol sa hiwalay na magulang, nawawalang magulang, adoption ng lolo/lola, at maling birth certificate.',
      tagPrivate: 'Naka-save Lamang sa Iyong Device',
      cardPlanTitle: 'Aking Personal na Plano',
      cardPlanDesc: 'I-save ang iyong sitwasyon, mga susunod na hakbang, at pribadong tala nang walang account.',
      safetyTitle: 'Mahalagang Paalala para sa Proteksyon ng Bata',
      safetyBody: 'Ang pagpaparehistro ng bata sa pangalan mo na parang ikaw ang nagsilang ("simulated birth") ay labag sa batas at nakakasira sa karapatan ng bata sa mana, pasaporte, at pagkakakilanlan. Ang legal na paraan gaya ng Relative Adoption (RA 11642), Legal Guardianship, o Substitute Parental Authority ang nagpoprotekta sa inyo.',
      btnBack: '← Bumalik',
      situationsHeading: 'Gabay sa Sitwasyon ng Pamilya',
      situationsSubtitle: 'Piliin ang pahayag na pinakaangkop sa iyong pag-aalaga sa bata upang makita ang mga legal na opsyon at paalala.',
      guidesHeading: 'Hakbang-Hakbang na Gabay sa Batas',
      guidesSubtitle: 'Malinaw na paliwanag sa Filipino at English batay sa mga batas at ahensya ng Pilipinas.',
      btnPrint: 'I-print ang Gabay',
      checklistHeading: 'Checklist ng mga Dokumento',
      checklistSubtitle: 'Pumili ng proseso sa ibaba. Awtomatikong naka-save sa iyong device ang mga napiling dokumento.',
      selectProcedureLabel: 'Piliin ang Proseso / Select Procedure:',
      btnResetChecklist: 'I-reset ang Checklist',
      directoryHeading: 'Direktoryo ng Tulong Legal at Gobyerno',
      directorySubtitle: 'Mga opisyal na ahensya ng gobyerno at legal aid. Laging kumpirmahin ang lokal na oras at patakaran ng opisina.',
      costsHeading: 'Gabay sa Gastos at Proseso',
      costsSubtitle: 'Malinaw na gabay sa mga yugto ng proseso, libreng serbisyo, at posibleng gastusin sa dokumento. Kumpirmahin ang eksaktong bayarin sa lokal na opisina.',
      costsFreeHeading: 'Saan Makakakuha ng Libreng Tulong Legal',
      costsTableHeading: 'Mga Yugto ng Proseso at Posibleng Gastusin',
      faqHeading: 'Mga Madalas Itanong (FAQ)',
      faqSubtitle: 'Mga responsableng sagot batay sa batas ng pamilya sa Pilipinas.',
      planHeading: 'Aking Personal na Plano',
      planSubtitle: 'Ang lahat ng impormasyon dito ay naka-save lamang sa iyong browser sa device na ito. Walang ipinapadala sa anumang server.',
      privacyTitle: 'Proteksyon sa Privacy ng Bata:',
      privacyNote: 'Iwasang maglagay ng sensitibong numero (tulad ng buong registry number o bank details) kung may ibang gumagamit ng cellphone na ito.',
      planSituationHeading: '1. Aking Sitwasyon sa Pamilya',
      planSelectSituationLabel: 'Kasalukuyang Sitwasyon ng Pag-aalaga:',
      planTasksHeading: '2. Mga Susunod na Hakbang',
      btnAddTask: 'Idagdag',
      planEmptyTasks: 'Wala pang naka-save na hakbang. Magdagdag sa itaas o pindutin ang "Idagdag sa Aking Plano" mula sa gabay.',
      planNotesHeading: '3. Pribadong Tala ng Tagapag-alaga (Sa Device Lamang)',
      planNotesLabel: 'Isulat ang mga itatanong sa PAO, LSWDO, o Local Civil Registrar:',
      btnClearAllData: 'Burahin Lahat ng Lokal na Data',
      installModalTitle: 'I-install ang AlagaLegal PH sa Iyong Device',
      installModalIntro: 'I-install ang app na ito para magamit kahit walang internet:'
    }
  };

  const AlagaA11y = {
    currentLang: 'en',

    init() {
      this.currentLang = AlagaStorage.getLang();
      this.applyLanguage(this.currentLang);
      this.applyTheme(AlagaStorage.getTheme());
      this.applyTextSize(AlagaStorage.getTextSize());

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery && mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', () => {
            if (AlagaStorage.getTheme() === 'system') {
              this.applyTheme('system');
            }
          });
      }
    },

    t(key) {
      const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
      return dict[key] || TRANSLATIONS.en[key] || key;
    },

    applyLanguage(lang) {
      this.currentLang = lang === 'fil' ? 'fil' : 'en';
      AlagaStorage.setLang(this.currentLang);
      document.documentElement.lang = this.currentLang === 'fil' ? 'tl' : 'en';

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = this.t(key);
        if (value) el.textContent = value;
      });

      const langLabel = document.getElementById('lang-label');
      if (langLabel) {
        langLabel.textContent = this.currentLang === 'en' ? 'EN → FIL' : 'FIL → EN';
      }
    },

    toggleLanguage() {
      const next = this.currentLang === 'en' ? 'fil' : 'en';
      this.applyLanguage(next);
      this.announce(next === 'fil' ? 'Lumipat sa wikang Filipino.' : 'Switched interface language to English.');
      document.dispatchEvent(new CustomEvent('alagalegal:langchange', { detail: { lang: next } }));
    },

    applyTheme(theme) {
      AlagaStorage.setTheme(theme);
      let effectiveTheme = theme;
      if (theme === 'system') {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        effectiveTheme = prefersDark ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', effectiveTheme);

      const metaTheme = document.getElementById('meta-theme-color');
      if (metaTheme) {
        metaTheme.setAttribute('content', effectiveTheme === 'dark' ? '#0B1520' : '#0F2942');
      }

      const icon = document.getElementById('theme-icon');
      if (icon) {
        icon.textContent = effectiveTheme === 'dark' ? '☀' : '☾';
      }
    },

    toggleTheme() {
      const currentEffective = document.documentElement.getAttribute('data-theme');
      const next = currentEffective === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      this.announce(`Theme switched to ${next} mode.`);
    },

    applyTextSize(size) {
      const normalized = size === 'large' ? 'large' : 'normal';
      AlagaStorage.setTextSize(normalized);
      document.documentElement.setAttribute('data-text-size', normalized);
    },

    toggleTextSize() {
      const current = AlagaStorage.getTextSize();
      const next = current === 'large' ? 'normal' : 'large';
      this.applyTextSize(next);
      this.announce(next === 'large' ? 'Larger reading text enabled.' : 'Standard reading text enabled.');
    },

    announce(message) {
      const el = document.getElementById('sr-announcer');
      if (!el) return;
      el.textContent = '';
      window.setTimeout(() => {
        el.textContent = message;
      }, 40);
    }
  };

  global.AlagaA11y = AlagaA11y;
})(window);