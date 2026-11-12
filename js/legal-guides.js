/* AlagaLegal PH – Family Situations, Step-by-Step Legal Guides, Directory & FAQs */
(function (global) {
  'use strict';

  const SITUATIONS = [
    {
      id: 'grandchild',
      titleEn: 'I am raising my grandchild.',
      titleFil: 'Inaalagaan ko ang aking apo.',
      summaryEn: 'Grandparents have recognized substitute parental authority under the Family Code when parents are absent or deceased, and may also pursue Relative Adoption under RA 11642.',
      summaryFil: 'May kinikilalang substitute parental authority ang lolo at lola sa ilalim ng Family Code kung wala o pumanaw ang magulang, at maaari ring mag-aplay ng Relative Adoption sa ilalim ng RA 11642.',
      lawfulOptionsEn: [
        'Substitute Parental Authority (Family Code, Arts. 214 & 216): Surviving grandparents automatically exercise substitute parental authority in default of parents or a judicially appointed guardian.',
        'Relative Domestic Administrative Adoption (RA 11642): Permanently establishes parent-child legal status through the National Authority for Child Care (NACC) without costly court trials.',
        'Legal Guardianship (A.M. No. 03-02-05-SC): Court-appointed guardianship if you need formal authority to manage the child\'s benefits, pension, or property.',
        'Notarized Special Power of Attorney (SPA): Helpful when the biological parents are alive (e.g., working elsewhere) and authorize you to handle school enrollment and medical care.'
      ],
      lawfulOptionsFil: [
        'Substitute Parental Authority (Family Code, Arts. 214 & 216): Kinikilala ang lolo o lola bilang pansamantalang may awtoridad kung wala ang mga magulang.',
        'Relative Domestic Administrative Adoption (RA 11642): Permanenteng legal na pag-aampon sa pamamagitan ng NACC nang hindi na kailangan ng mahabang paglilitis sa korte.',
        'Legal Guardianship (A.M. No. 03-02-05-SC): Kinakailangan kung mamamahala ng benepisyo, pensyon, o ari-arian ng bata.',
        'Notarized Special Power of Attorney (SPA): Kung buhay at nakakausap ang magulang at pinapayagan kang mag-asikaso sa paaralan at ospital.'
      ],
      warningEn: 'Never register your grandchild as your own biological child on a birth certificate. If the child\'s birth was previously simulated before RA 11222\'s cutoff, consult NACC/PAO immediately.',
      warningFil: 'Huwag iparehistro ang iyong apo na parang ikaw ang nagsilang sa birth certificate. Kumonsulta sa NACC o PAO para sa legal na proseso.',
      lawyerWhenEn: 'Consult PAO, LSWDO, or NACC/RACCO if biological parents refuse consent, cannot be located, or if you need to claim SSS/GSIS/insurance benefits.',
      recommendedChecklist: 'domestic-adoption'
    },
    {
      id: 'niece-nephew',
      titleEn: 'I am caring for my niece or nephew.',
      titleFil: 'Inaalagaan ko ang aking pamangkin.',
      summaryEn: 'Aunts and uncles within the 4th civil degree of consanguinity qualify for Relative Adoption under RA 11642 or may apply for Legal Guardianship.',
      summaryFil: 'Ang tiyahin at tiyuhin (hanggang 4th degree of consanguinity) ay maaaring mag-aplay ng Relative Adoption sa ilalim ng RA 11642 o Legal Guardianship.',
      lawfulOptionsEn: [
        'Relative Adoption (RA 11642): Available to relatives within the fourth degree of consanguinity or affinity, processed administratively via NACC/RACCO.',
        'Actual Custodian Authority (Family Code, Art. 216): Recognizes an actual custodian over 21 years old in default of parents, grandparents, or older siblings over 21.',
        'Legal Guardianship: Family Court petition to obtain formal Letters of Guardianship for school, travel, or financial administration.'
      ],
      lawfulOptionsFil: [
        'Relative Adoption (RA 11642): Para sa kamag-anak hanggang 4th degree, pinoproseso sa NACC/RACCO.',
        'Actual Custodian Authority (Family Code, Art. 216): Kinikilala ang tagapag-alaga na higit 21 taong gulang kung walang magulang o lolo/lola.',
        'Legal Guardianship: Petisyon sa Family Court para sa opisyal na Letters of Guardianship.'
      ],
      warningEn: 'Informal verbal agreements with siblings are often insufficient for passport applications (DFA), PhilHealth dependent registration, or long-term custody.',
      warningFil: 'Ang kasunduang salita lamang ay madalas na hindi sapat para sa pasaporte (DFA), PhilHealth, o pangmatagalang legal na kustodiya.',
      lawyerWhenEn: 'Seek PAO or LSWDO assistance to document parental consent or establish formal guardianship/adoption.',
      recommendedChecklist: 'domestic-adoption'
    },
    {
      id: 'abandoned-child',
      titleEn: 'I am caring for an abandoned or foundling child.',
      titleFil: 'Nag-aalaga ako ng batang inabandona o napulot (foundling).',
      summaryEn: 'Immediate coordination with your Barangay, LSWDO, and NACC is essential to protect the child\'s citizenship, civil registration, and safety.',
      summaryFil: 'Mahalagang makipag-ugnayan agad sa Barangay, LSWDO, at NACC upang maprotektahan ang pagkamamamayan, rehistro, at kaligtasan ng bata.',
      lawfulOptionsEn: [
        'Foundling Registration (RA 11767 – Foundling Recognition and Protection Act): Ensures the child is recognized as a natural-born Filipino citizen and issued a Certificate of Foundling.',
        'Licensed Foster Care (RA 10165): Allows vetted caregivers licensed by NACC/RACCO to provide temporary family care with social worker support.',
        'Certification Declaring a Child Legally Available for Adoption (CDCLAA) & Adoption (RA 11642): Required before any permanent adoption of an abandoned child can occur.'
      ],
      lawfulOptionsFil: [
        'Foundling Registration (RA 11767): Tinitiyak na kinikilala ang bata bilang natural-born Filipino citizen at mabibigyan ng Certificate of Foundling.',
        'Licensed Foster Care (RA 10165): Nagbibigay-daan sa lisensyadong foster parent sa ilalim ng NACC/RACCO na mag-alaga nang legal.',
        'CDCLAA at Adoption (RA 11642): Kinakailangan bago ang anumang permanenteng pag-aampon sa inabandonang bata.'
      ],
      warningEn: 'Keeping an abandoned child without reporting to LSWDO/Barangay or registering the child as your biological child can expose you to criminal liability under anti-trafficking and civil registry laws.',
      warningFil: 'Ang pagtatago ng batang napulot nang hindi ipinapaalam sa LSWDO/Barangay o pagpaparehistro nito bilang sariling anak ay maaaring magdulot ng kasong kriminal.',
      lawyerWhenEn: 'Report immediately to your Municipal/City Social Welfare and Development Office (LSWDO) and consult PAO or NACC.',
      recommendedChecklist: 'foundling-registration'
    },
    {
      id: 'relative-care',
      titleEn: 'I am a relative taking care of a child.',
      titleFil: 'Isa akong kamag-anak na nag-aalaga ng bata.',
      summaryEn: 'Whether short-term or long-term, formalizing your caregiving role prevents school, medical, and government service barriers.',
      summaryFil: 'Pansamantala man o pangmatagalan, ang pag-aayos ng legal na papel ay nakakaiwas sa problema sa paaralan, ospital, at ahensya ng gobyerno.',
      lawfulOptionsEn: [
        'Caregiver Documentation Packet (Barangay Certification + LSWDO Assessment + Parental SPA if available).',
        'Relative Adoption (RA 11642) if within the 4th civil degree and permanent parenting is intended.',
        'Legal Guardianship if temporary or focused on minor welfare and property.'
      ],
      lawfulOptionsFil: [
        'Caregiver Documentation Packet (Barangay Certification + LSWDO Assessment + Parental SPA kung mayroon).',
        'Relative Adoption (RA 11642) kung hanggang 4th degree at nais nang maging permanenteng magulang.',
        'Legal Guardianship kung nakatuon sa pangangalaga at ari-arian ng menor de edad.'
      ],
      warningEn: 'Do not alter school records or sign birth certificates as a biological parent.',
      warningFil: 'Huwag baguhin ang rekord sa paaralan o pumirma sa birth certificate bilang tunay na magulang.',
      lawyerWhenEn: 'Consult LSWDO or PAO when enrolling the child in high school, applying for government aid, or when parents have been unreachable for over 6 months.',
      recommendedChecklist: 'substitute-care-packet'
    },
    {
      id: 'guardian',
      titleEn: 'I am a guardian seeking formal authority.',
      titleFil: 'Isa akong tagapag-alaga (guardian) na nangangailangan ng pormal na awtoridad.',
      summaryEn: 'Legal guardianship is granted by a Regional Trial Court (Family Court) under A.M. No. 03-02-05-SC.',
      summaryFil: 'Ang Legal Guardianship ay ipinagkakaloob ng Regional Trial Court (Family Court) sa ilalim ng A.M. No. 03-02-05-SC.',
      lawfulOptionsEn: [
        'Judicial Guardianship over the Person and/or Property of a Minor (A.M. No. 03-02-05-SC).',
        'Administering death benefits, insurance proceeds, or bank accounts belonging to a minor orphan (often required when the amount exceeds statutory thresholds).'
      ],
      lawfulOptionsFil: [
        'Judicial Guardianship sa Katauhan at/o Ari-arian ng Menor de Edad (A.M. No. 03-02-05-SC).',
        'Pamamahala ng benepisyo, insurance, o bank account ng naulilang bata.'
      ],
      warningEn: 'Guardianship ends when the child turns 18 and does not give the child the guardian\'s surname or compulsory inheritance rights.',
      warningFil: 'Nagtatapos ang guardianship pagsapit ng bata sa edad na 18 at hindi nito binabago ang apelyido o karapatan sa mana gaya ng adoption.',
      lawyerWhenEn: 'Always consult PAO (for indigent families) or a Family Law attorney because guardianship requires a verified court petition.',
      recommendedChecklist: 'legal-guardianship'
    },
    {
      id: 'understand-adoption',
      titleEn: 'I want to understand adoption in the Philippines.',
      titleFil: 'Gusto kong maunawaan ang legal na pag-aampon (adoption) sa Pilipinas.',
      summaryEn: 'Since 2022, RA 11642 simplified domestic adoption into an administrative process handled by the National Authority for Child Care (NACC).',
      summaryFil: 'Mula 2022, ginawang administratibo ng RA 11642 ang domestic adoption sa pamamagitan ng National Authority for Child Care (NACC).',
      lawfulOptionsEn: [
        'Regular Domestic Administrative Adoption (via NACC / RACCO).',
        'Relative Adoption (for relatives within the 4th degree of consanguinity/affinity).',
        'Step-parent Adoption (when a spouse adopts the legitimate or illegitimate child of the other spouse).'
      ],
      lawfulOptionsFil: [
        'Regular Domestic Administrative Adoption (sa pamamagitan ng NACC / RACCO).',
        'Relative Adoption (para sa kamag-anak hanggang 4th degree).',
        'Step-parent Adoption (pag-aampon sa anak ng asawa).'
      ],
      warningEn: 'Private "direct placement" or paying money in exchange for a child is illegal and constitutes child trafficking under RA 9208 / RA 11642.',
      warningFil: 'Ang pagbabayad ng pera kapalit ng bata o pribadong "bentahan" ay labag sa batas at itinuturing na child trafficking.',
      lawyerWhenEn: 'Visit your local LSWDO or Regional Alternative Child Care Office (RACCO) first; legal counsel helps when complex consent or biological parent issues exist.',
      recommendedChecklist: 'domestic-adoption'
    },
    {
      id: 'correct-birth-cert',
      titleEn: 'I need help correcting a birth certificate.',
      titleFil: 'Kailangan ko ng tulong sa pagtatama ng birth certificate.',
      summaryEn: 'Minor typographical errors can be corrected administratively at the Local Civil Registry Office (LCRO), while substantial changes require court action.',
      summaryFil: 'Ang maliliit na pagkakamali sa baybay o petsa ay maaaring itama sa Local Civil Registry Office (LCRO), samantalang ang malalaking pagbabago ay dumadaan sa korte.',
      lawfulOptionsEn: [
        'RA 9048 & RA 10172 (Administrative Correction): Corrects misspelled first/last names, change of first name, or clerical errors in day/month of birth or sex at the LCRO.',
        'RA 9255 (Affidavit to Use the Surname of the Father): Allows an illegitimate child to use the father\'s surname if paternity is acknowledged.',
        'Rule 108 (Judicial Cancellation/Correction): Court petition required for substantial changes (e.g., nationality, legitimacy, or removing simulated parentage).'
      ],
      lawfulOptionsFil: [
        'RA 9048 & RA 10172 (Administrative Correction): Nagtatama ng maling baybay ng pangalan, araw/buwan ng kapanganakan, o kasarian sa LCRO.',
        'RA 9255 (AUSF): Nagpapahintulot sa batang ipinanganak nang hindi kasal ang magulang na gamitin ang apelyido ng ama kung kinilala nito.',
        'Rule 108 (Petisyon sa Korte): Kinakailangan para sa malalaking pagbabago sa civil status o pagkamamamayan.'
      ],
      warningEn: 'Never use fixers or fake PSA/LCRO stamps. All annotations must appear on official PSA security paper.',
      warningFil: 'Huwag gumamit ng fixer o pekeng tatak ng PSA/LCRO. Ang lahat ng pagtatama ay dapat lumabas sa opisyal na PSA birth certificate.',
      lawyerWhenEn: 'Go to the LCRO where the birth was registered first; consult PAO if the LCRO advises that a Rule 108 court petition is required.',
      recommendedChecklist: 'birth-cert-correction'
    }
  ];

  const AlagaGuides = {
    guides: [],
    directory: [],
    faqs: [],
    selectedGuideCategory: 'all',
    selectedDirType: 'all',

    async init() {
      const [guides, directory, faqs] = await Promise.all([
        this.loadJson('./data/legal-guides.json', []),
        this.loadJson('./data/legal-aid.json', []),
        this.loadJson('./data/faqs.json', [])
      ]);

      this.guides = guides;
      this.directory = directory;
      this.faqs = faqs;

      this.renderSituations();
      this.renderGuideFilters();
      this.renderGuides();
      this.renderDirectoryFilters();
      this.renderDirectory();
      this.renderFaqs();
      this.bindEvents();
    },

    async loadJson(url, fallback) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (err) {
        console.warn(`Could not fetch ${url}:`, err);
        return fallback;
      }
    },

    bindEvents() {
      const guideSearch = document.getElementById('guide-search');
      if (guideSearch) {
        guideSearch.addEventListener('input', () => this.renderGuides());
      }

      const dirSearch = document.getElementById('directory-search');
      if (dirSearch) {
        dirSearch.addEventListener('input', () => this.renderDirectory());
      }

      const faqSearch = document.getElementById('faq-search');
      if (faqSearch) {
        faqSearch.addEventListener('input', () => this.renderFaqs());
      }

      document.addEventListener('alagalegal:langchange', () => {
        this.renderSituations();
        this.renderGuides();
        this.renderDirectory();
        this.renderFaqs();
      });
    },

    getSituationsList() {
      return SITUATIONS;
    },

    renderSituations() {
      const grid = document.getElementById('situations-grid');
      if (!grid) return;

      const isFil = AlagaA11y.currentLang === 'fil';
      const savedId = AlagaStorage.getSelectedSituation();

      grid.innerHTML = SITUATIONS.map((sit) => {
        const isSelected = sit.id === savedId;
        return `
          <button type="button" class="situation-btn ${isSelected ? 'selected' : ''}" data-situation-id="${sit.id}" role="listitem" aria-pressed="${isSelected}">
            <span class="situation-btn-title">${isFil ? sit.titleFil : sit.titleEn}</span>
            <span class="situation-btn-sub">${isFil ? sit.titleEn : sit.titleFil}</span>
          </button>
        `;
      }).join('');

      grid.querySelectorAll('[data-situation-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-situation-id');
          AlagaStorage.setSelectedSituation(id);
          this.renderSituations();
          this.renderSituationDetail(id);
          document.dispatchEvent(new CustomEvent('alagalegal:situationchange', { detail: { id } }));
        });
      });

      if (savedId) {
        this.renderSituationDetail(savedId);
      }
    },

    renderSituationDetail(id) {
      const panel = document.getElementById('situation-detail-panel');
      if (!panel) return;

      const sit = SITUATIONS.find((s) => s.id === id);
      if (!sit) {
        panel.hidden = true;
        return;
      }

      const isFil = AlagaA11y.currentLang === 'fil';
      const options = isFil ? sit.lawfulOptionsFil : sit.lawfulOptionsEn;

      panel.hidden = false;
      panel.innerHTML = `
        <div class="meta-row">
          <span class="pill">${isFil ? 'Napiling Sitwasyon' : 'Selected Situation'}</span>
          <span class="pill pill--warn">${isFil ? 'Pangkalahatang Gabay Lamang' : 'General Legal Information'}</span>
        </div>
        <h2>${isFil ? sit.titleFil : sit.titleEn}</h2>
        <p><strong>${isFil ? sit.summaryFil : sit.summaryEn}</strong></p>

        <h3>${isFil ? 'Mga Legal na Opsyon:' : 'Lawful Care & Legal Options:'}</h3>
        <ul class="bullet-list">
          ${options.map((item) => `<li>${item}</li>`).join('')}
        </ul>

        <div class="disclaimer-bar">
          <strong>${isFil ? 'Mahalagang Babala:' : 'Important Protection Warning:'}</strong>
          <span>${isFil ? sit.warningFil : sit.warningEn}</span>
        </div>

        <p><strong>${isFil ? 'Kailan Dapat Kumonsulta sa Abogado o Social Worker:' : 'When Professional Legal / Social Work Help Is Necessary:'}</strong> ${sit.lawyerWhenEn}</p>

        <div class="hero-actions">
          <button type="button" class="btn btn--primary" id="btn-open-rec-checklist">
            ${isFil ? 'Buksan ang Kaugnay na Document Checklist' : 'Open Recommended Document Checklist'}
          </button>
          <button type="button" class="btn btn--secondary" id="btn-save-sit-to-plan">
            ${isFil ? 'I-save sa Aking Plano' : 'Save to My Personal Plan'}
          </button>
        </div>
      `;

      const openChecklistBtn = document.getElementById('btn-open-rec-checklist');
      if (openChecklistBtn) {
        openChecklistBtn.addEventListener('click', () => {
          AlagaStorage.setActiveProcedure(sit.recommendedChecklist);
          if (global.AlagaChecklist) {
            global.AlagaChecklist.selectProcedure(sit.recommendedChecklist);
          }
          AlagaNav.navigate('checklist');
        });
      }

      const savePlanBtn = document.getElementById('btn-save-sit-to-plan');
      if (savePlanBtn) {
        savePlanBtn.addEventListener('click', () => {
          AlagaStorage.setSelectedSituation(sit.id);
          AlagaA11y.announce('Situation saved to your Personal Action Plan.');
          AlagaNav.navigate('plan');
        });
      }
    },

    renderGuideFilters() {
      const container = document.getElementById('guide-category-filters');
      if (!container) return;

      const categories = [
        { id: 'all', label: 'All Topics' },
        { id: 'adoption', label: 'Adoption (RA 11642)' },
        { id: 'guardianship', label: 'Guardianship & Authority' },
        { id: 'civil-registry', label: 'Birth Certificate & PSA' },
        { id: 'protection', label: 'Child Protection' }
      ];

      container.innerHTML = categories.map((cat) => `
        <button type="button" class="chip ${this.selectedGuideCategory === cat.id ? 'active' : ''}" data-guide-cat="${cat.id}">
          ${cat.label}
        </button>
      `).join('');

      container.querySelectorAll('[data-guide-cat]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.selectedGuideCategory = btn.getAttribute('data-guide-cat');
          this.renderGuideFilters();
          this.renderGuides();
        });
      });
    },

    renderGuides() {
      const container = document.getElementById('guides-list');
      if (!container) return;

      const query = (document.getElementById('guide-search')?.value || '').trim().toLowerCase();
      const isFil = AlagaA11y.currentLang === 'fil';

      const filtered = this.guides.filter((g) => {
        const matchesCat = this.selectedGuideCategory === 'all' || g.category === this.selectedGuideCategory;
        if (!matchesCat) return false;
        if (!query) return true;
        const haystack = [g.titleEn, g.titleFil, g.summaryEn, g.summaryFil, g.lawCitation, ...(g.stepsEn || []), ...(g.stepsFil || [])]
          .join(' ')
          .toLowerCase();
        return haystack.includes(query);
      });

      if (filtered.length === 0) {
        container.innerHTML = `<p class="card empty-state">No legal guides matched your search. Try another keyword such as "adoption", "PSA", or "guardianship".</p>`;
        return;
      }

      container.innerHTML = filtered.map((g) => {
        const title = isFil ? g.titleFil : g.titleEn;
        const altTitle = isFil ? g.titleEn : g.titleFil;
        const summary = isFil ? g.summaryFil : g.summaryEn;
        const steps = isFil ? g.stepsFil : g.stepsEn;

        return `
          <article class="guide-card">
            <div class="meta-row">
              <span class="pill">${g.lawCitation}</span>
              <span class="pill">Verified: ${g.lastVerified}</span>
              ${g.requiresLocalConfirmation ? '<span class="pill pill--warn">Confirm local requirements at office</span>' : ''}
            </div>
            <h2>${title}</h2>
            <p class="muted-text">${altTitle}</p>
            <p>${summary}</p>
            <h3>${isFil ? 'Mga Hakbang:' : 'Step-by-Step Procedure:'}</h3>
            <ol class="step-list">
              ${steps.map((s) => `<li>${s}</li>`).join('')}
            </ol>
            <div class="source-box">
              <strong>Official Source:</strong>
              <a href="${g.sourceUrl}" target="_blank" rel="noopener noreferrer">${g.sourceName}</a>
              <span> • General legal information only; not a substitute for counsel.</span>
            </div>
          </article>
        `;
      }).join('');
    },

    renderDirectoryFilters() {
      const container = document.getElementById('directory-type-filters');
      if (!container) return;

      const types = [
        { id: 'all', label: 'All Agencies' },
        { id: 'legal-aid', label: 'Free Legal Aid (PAO / IBP)' },
        { id: 'child-care', label: 'Child Care & Social Welfare' },
        { id: 'civil-registry', label: 'Civil Registry & PSA' },
        { id: 'pilot-bataan', label: 'Bataan Pilot Guide' }
      ];

      container.innerHTML = types.map((t) => `
        <button type="button" class="chip ${this.selectedDirType === t.id ? 'active' : ''}" data-dir-type="${t.id}">
          ${t.label}
        </button>
      `).join('');

      container.querySelectorAll('[data-dir-type]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.selectedDirType = btn.getAttribute('data-dir-type');
          this.renderDirectoryFilters();
          this.renderDirectory();
        });
      });
    },

    renderDirectory() {
      const container = document.getElementById('directory-list');
      if (!container) return;

      const query = (document.getElementById('directory-search')?.value || '').trim().toLowerCase();
      const isFil = AlagaA11y.currentLang === 'fil';

      const filtered = this.directory.filter((item) => {
        const matchesType = this.selectedDirType === 'all' || item.type === this.selectedDirType;
        if (!matchesType) return false;
        if (!query) return true;
        const text = [item.name, item.acronym, item.descriptionEn, item.descriptionFil, item.coverage]
          .join(' ')
          .toLowerCase();
        return text.includes(query);
      });

      if (filtered.length === 0) {
        container.innerHTML = `<p class="card empty-state">No matching legal aid offices found. Try clearing filters or searching "PAO", "NACC", or "Civil Registry".</p>`;
        return;
      }

      container.innerHTML = filtered.map((item) => `
        <article class="card">
          <div class="meta-row">
            <span class="pill">${item.acronym}</span>
            <span class="pill">${item.coverage}</span>
          </div>
          <h2>${item.name}</h2>
          <p>${isFil ? item.descriptionFil : item.descriptionEn}</p>
          <p class="muted-text"><strong>Where to go:</strong> ${item.whereToVisit}</p>
          <p class="muted-text"><strong>Verification Note:</strong> ${item.verificationNote}</p>
          <p>
            <a href="${item.website}" target="_blank" rel="noopener noreferrer" class="btn btn--small btn--secondary">
              Visit Official Portal ↗
            </a>
          </p>
        </article>
      `).join('');
    },

    renderFaqs() {
      const container = document.getElementById('faq-list');
      if (!container) return;

      const query = (document.getElementById('faq-search')?.value || '').trim().toLowerCase();
      const isFil = AlagaA11y.currentLang === 'fil';

      const filtered = this.faqs.filter((f) => {
        if (!query) return true;
        return [f.questionEn, f.questionFil, f.answerEn, f.answerFil, f.reference]
          .join(' ')
          .toLowerCase()
          .includes(query);
      });

      if (filtered.length === 0) {
        container.innerHTML = `<p class="card empty-state">No matching questions found.</p>`;
        return;
      }

      container.innerHTML = filtered.map((f) => `
        <details class="faq-item">
          <summary>${isFil ? f.questionFil : f.questionEn}</summary>
          <div class="faq-answer">
            <p>${isFil ? f.answerFil : f.answerEn}</p>
            <p class="muted-text"><strong>Official Reference:</strong> ${f.reference} (Verified: ${f.lastVerified})</p>
          </div>
        </details>
      `).join('');
    }
  };

  global.AlagaGuides = AlagaGuides;
})(window);