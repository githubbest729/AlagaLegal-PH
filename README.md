<p align="center">
  <img src="assets/alagalegal-logo.svg" alt="AlagaLegal PH logo" width="150" />
</p>

<h1 align="center">AlagaLegal PH</h1>

<p align="center">
  <strong>Clearer legal information. Safer family-care decisions.</strong><br />
  A community-focused Progressive Web App for Filipino families and caregivers.
</p>

<p align="center">
  <a href="https://githubbest729.github.io/AlagaLegal-PH/">
    <img src="https://img.shields.io/badge/🌐-Open%20AlagaLegal%20PH-0F766E?style=for-the-badge" alt="Open AlagaLegal PH" />
  </a>
  <img src="https://img.shields.io/badge/Platform-PWA-1D4ED8?style=for-the-badge" alt="Progressive Web App" />
  <img src="https://img.shields.io/badge/Focus-Philippines-F59E0B?style=for-the-badge" alt="Philippines" />
  <img src="https://img.shields.io/badge/License-MIT-64748B?style=for-the-badge" alt="MIT license - confirm before use" />
</p>

> **Mission:** "Nobody should have to break the law simply because they cannot afford to understand it."

**Live application:** <https://githubbest729.github.io/AlagaLegal-PH/>

---

## 📌 About the project

AlagaLegal PH is intended to help grandparents, relatives, guardians, and other caregivers understand lawful family-care options and find reliable starting points for navigating Philippine government procedures.

The project responds to common barriers:

- Lack of clear, accessible legal information.
- Confusion about adoption, guardianship, custody, and other care arrangements.
- Difficulty understanding document requirements and government processes.
- Limited awareness of free or affordable legal assistance.
- Risk of relying on misinformation or taking unlawful documentation shortcuts.

The app is an **information and navigation tool**, not a law firm, legal representative, government agency, or substitute for advice from a qualified Philippine lawyer or the appropriate government office.

## 🎯 Goals

1. Explain legal concepts in plain English and Filipino.
2. Help users identify questions to raise with the correct agency or lawyer.
3. Organize document-preparation tasks with practical checklists.
4. Point users toward official government information and verified assistance.
5. Make essential guidance usable on mobile devices and, where supported, offline.

## 🧭 App modules

| Module | Intended value |
| :--- | :--- |
| Family Situation Guide | Helps users describe their caregiving situation and explore general lawful pathways. |
| Legal Guides | Explains relevant processes and concepts in accessible language. |
| Document Checklists | Helps users track preparation tasks and questions to verify. |
| Legal Aid Directory | Provides links and contact details only when verified from reliable sources. |
| Cost & Process Guide | Explains process stages and distinguishes confirmed fees from items requiring confirmation. |
| FAQs | Answers common questions with source links and review dates. |
| Personal Action Plan | Lets users organize next steps and locally saved notes/checklist progress. |

> **Important:** The exact availability and implementation status of each module should be checked against the current deployed application. This README describes the project goals and intended architecture; it does not certify that every feature is already implemented.

## 🏛️ System architecture

The intended deployment is a static, client-side PWA hosted on GitHub Pages. It does not require a custom application server for its basic information, navigation, and local checklist features.

```mermaid
flowchart TD
    U["👤 User<br/>Mobile · Tablet · Desktop"] --> B["🌐 Browser / Installed PWA"]
    B --> UI["Application UI<br/>HTML · CSS · JavaScript"]
    UI --> MOD["Feature modules<br/>Guides · Checklists · FAQ<br/>Directory · Action Plan"]
    MOD --> DATA["Static content<br/>JSON / curated content"]
    MOD --> STORE["Local device storage<br/>LocalStorage / IndexedDB if adopted"]
    B --> SW["Service Worker"]
    SW --> CACHE["Cache Storage<br/>App shell · approved static assets"]
    B --> HOST["GitHub Pages<br/>HTTPS static hosting"]
    HOST --> B
    GOV["Official Philippine sources<br/>Laws · agencies · court decisions"] -. "Research and editorial verification" .-> DATA
