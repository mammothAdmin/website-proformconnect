# Decisions — Proformconnect

Architectural and design decisions made during this project. Each entry records the context, choice, and rationale for future reference.

<!-- Decisions are added by task execution agents. Format:
## YYYYMMDD-HHMMSS-task-slug

### Decision N: Short title

- **Context:** What situation prompted the choice
- **Choice:** What was decided
- **Rationale:** Why this option was selected
-->

## 20260728 — v3 site creation

### Decision 1: Simplified single-page site with separate contact/privacy pages

- **Context:** v2 had too much content — rotating marquee banners, "Why ProformConnect" section, testimonial section, and an inline contact form. User wanted a leaner site.
- **Choice:** Created v3 removing marquee, why section, and testimonial. Moved contact form to a dedicated contact.html page with API submission (same pattern as CG360). Added privacy.html and thank-you.html pages. All "Let's Talk" CTAs now link to contact.html.
- **Rationale:** Less information makes the site faster to scan and keeps the focus on services + how it works. Separate contact page follows the CG360 pattern and uses the shared MammothShift contact API (`contactus.api.mammothshift-labs.com`) with `site: 'proformconnect.com'`.

### Decision 2: Kept LawFabric section

- **Context:** The LawFabric "Powered by" section was not in the removal list.
- **Choice:** Retained the LawFabric section but changed the "Ask us about LawFabric" link to point to contact.html instead of an anchor.
- **Rationale:** LawFabric is a key differentiator and setup accelerator for ProformConnect — worth keeping on the homepage.

### Decision 3: Nav links on sub-pages use index.html# anchors

- **Context:** Sub-pages (contact, thank-you, privacy) need nav links back to homepage sections.
- **Choice:** Used `index.html#services` and `index.html#how` for nav links on sub-pages.
- **Rationale:** Standard pattern — ensures nav works correctly when navigating from a sub-page back to the homepage.
