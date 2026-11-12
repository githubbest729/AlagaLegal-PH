# AlagaLegal PH – Family Care & Legal Guide

> **“Nobody should have to break the law simply because they cannot afford to understand it.”**

**AlagaLegal PH** is a free, open-source, offline-first Progressive Web Application (PWA) built to help Filipino grandparents, aunts, uncles, and informal guardians understand lawful child-care pathways, avoid harmful documentation mistakes, prepare complete government requirements, and connect with verified free legal aid.

---

## 1. Project Overview
Across the Philippines (starting with a community pilot in **Bataan** and designed for nationwide use), many children are raised by grandparents or extended relatives while their biological parents are deceased, working away, separated, or unreachable. Out of fear of complex bureaucracy or legal costs, some families fall prey to misinformation—such as falsifying birth certificates ("simulated birth")—which harms a child's legal identity, schooling, passport, and inheritance rights.

AlagaLegal PH bridges the legal information gap through an accessible, lightweight mobile web app that works offline and requires **zero user accounts, zero servers, and zero paid subscriptions**.

## 2. Core Features
1. **Family Situation Guide**: Interactive pathway matcher for grandparents, aunts/uncles, foundling caregivers, relatives, guardians, prospective adopters, and families fixing birth records.
2. **Step-by-Step Legal Guides (English & Filipino)**: Plain-language explanations of **RA 11642** (Domestic Administrative Adoption), **Family Code Arts. 214 & 216** (Substitute Parental Authority), **A.M. No. 03-02-05-SC** (Judicial Guardianship), **RA 9048 / RA 10172** (Civil Registry Corrections), and **RA 11767** (Foundling Protection).
3. **Offline Document Checklists**: Interactive per-procedure checklists saved automatically via `localStorage` with completion percentage tracking and reset controls.
4. **Verified Legal Aid & Agency Directory**: Searchable directory of **NACC / RACCO**, **PAO**, **DSWD**, **LSWDO**, **LCRO**, **PSA**, and **IBP Legal Aid**, linking strictly to official `.gov.ph` / `ibp.ph` portals.
5. **Cost & Process Guide**: Transparent stage breakdown separating free public services (PAO, LSWDO, NACC administrative adoption) from potential documentary/notarial expenses.
6. **Frequently Asked Questions**: Responsible, statute-referenced answers to common family caregiving questions.
7. **Personal Action Plan**: Local-only task tracker and private caregiver notepad stored exclusively on the user's device.

## 3. Technology Stack
- **HTML5 & Semantic ARIA**
- **CSS3** (Custom properties, CSS Grid/Flexbox, Light/Dark/System themes, Large-Text mode, Print stylesheet)
- **Vanilla JavaScript (ES6+)** (Modular architecture, zero third-party runtime dependencies)
- **Web App Manifest (`manifest.webmanifest`) & Service Worker (`sw.js`)**
- **LocalStorage** (Device-only state persistence)
- **GitHub Pages** (Static HTTPS hosting)

## 4. Local Installation & Asset Generation
1. Clone or download this repository:
   ```bash
   git clone https://github.com/<USERNAME>/alagalegal-ph.git
   cd alagalegal-ph