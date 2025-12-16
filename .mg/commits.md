# FGKI25 Commit History (.mg - Manual Git)

> **Zweck**: Simulierte Versionskontrolle ohne echtes Git-Repository.
> **Format**: Chronologisch absteigend (neuester Commit oben).

---

## Commit Log

### [004] UI Update v1.2 - Terminal/IDE Aesthetic
**Hash**: `d4e5f6g` (simuliert)
**Datum**: 16. Dezember 2025
**Autor**: Christopher Pollin + Claude Opus 4.5
**Milestone**: M2 Assets (Design Update)

**Änderungen**:
```
M  index.html                    # Breadcrumb Nav, Chapter Selector, Console Player
M  assets/css/main.css           # Zinc Palette, Glow Effects, --text-dim
M  assets/css/layout.css         # BreadcrumbNav, ChapterSelector, ConsolePlayer Styles
M  assets/js/app.js              # chapterFiles mapping, dynamic path, selector toggle
M  knowledge/design.md           # v1.2 Specification update
R  assets/images/*.png           # Renamed to descriptive filenames
A  CLAUDE.md                     # Session learnings & project context
```

**Message**:
```
refactor: UI update v1.2 (Terminal/IDE Vibe)

- Replace tab navigation with breadcrumb path: ~/research/2025/03-agents.md█
- Add blinking cursor animation in nav
- Chapter selector dropdown (click breadcrumb or menu)
- Console-style audio player: > playing: trotzdem_v5.mp3 [--:--]
- Zinc color palette (not pure black)
- Glow effects for active elements (--glow-sm, --glow-md, --glow-lg)
- Responsive: Mobile hides nav-prefix, ellipsis on long filenames
- Strict typography separation: Sans-Serif (content) / Monospace (UI)

Images renamed:
- ami-agi-aji-asi.png ✓
- hard-easy-problems.png ✓
- promptotyping-sphere.png ✓
- vibe-coding-tweet.png ✓

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

### [003] Images & Captions Setup
**Hash**: `c3d4e5f` (simuliert)
**Datum**: 16. Dezember 2025
**Autor**: Christopher Pollin + Claude Opus 4.5
**Milestone**: M2 Assets (Vorbereitung)

**Änderungen**:
```
M  index.html                    # 5 Bilder mit <img> Tags, beschreibende alt-Texte, strukturierte Captions
M  assets/css/layout.css         # Figure/Caption Styles erweitert
A  knowledge/design.md           # Design-for-Frontend Specification v1.1
A  knowledge/ideas-from-gemini.md # Gemini-Ideen (vom User hinzugefügt)
```

**Message**:
```
feat: Prepare image integration with descriptive captions

- Replace SVG placeholders with <img> tags (with onerror fallback)
- Add structured figcaptions: Abb. 1-5 with strong title, description, source
- Descriptive alt texts for accessibility
- CSS updates for caption styling (.caption-source, .visualization-figure)
- Add design.md as frontend specification document

Images prepared for M2:
- promptotyping-sphere.png (Abb. 1)
- vibe-coding-tweet.png (Abb. 2)
- ami-agi-aji-asi.png (Abb. 3)
- hard-easy-problems.png (Abb. 4)
- album-cover.jpg (Abb. 5)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

### [002] Milestone 1 Complete - Documentation System
**Hash**: `b2c3d4e` (simuliert)
**Datum**: 16. Dezember 2025
**Autor**: Christopher Pollin + Claude Opus 4.5
**Milestone**: M1 Foundation ✅

**Änderungen**:
```
A  journal.md                    # Zentrale Strategie & Sessions
A  .mg/commits.md                # Simulierte Versionskontrolle
A  .mg/PLAN.md                   # Projektplan
A  .mg/milestones.md             # Meilenstein-Tracking
M  knowledge/00-index.md         # Verweis auf journal.md
```

**Message**:
```
docs: Complete documentation system for M1

- Central journal.md for strategy & session logging
- .mg/ folder for manual git simulation
- Milestone tracking with clear DoD
- Knowledge vault updated

Milestone 1 (Foundation) officially complete.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

### [001] Initial Commit - FGKI25 Foundation
**Hash**: `a1b2c3d` (simuliert)
**Datum**: 16. Dezember 2025
**Autor**: Christopher Pollin + Claude Opus 4.5

**Änderungen**:
```
A  index.html                    # Haupt-Site mit 13 Kapiteln
A  blog.md                       # Volltext-Content
A  journal.md                    # Strategie & Session-Log
A  assets/css/main.css           # CSS Variables, Base Styles
A  assets/css/typography.css     # Text-Styling
A  assets/css/layout.css         # Layout-Komponenten
A  assets/css/responsive.css     # Breakpoints, A11y
A  assets/js/app.js              # Theme, Navigation, Interaktionen
A  knowledge/00-index.md         # Knowledge Vault Index
A  knowledge/05-journal.md       # Legacy (ersetzt durch journal.md)
A  CONTEXT.md                    # Promptotyping: Kontext
A  DATA.md                       # Promptotyping: Daten
A  REQUIREMENTS.md               # Promptotyping: Anforderungen
A  INSTRUCTIONS.md               # Promptotyping: Implementierung
A  .mg/commits.md                # Diese Datei
```

**Message**:
```
feat: Initial FGKI25 implementation

- Complete static site with 13 chapters on Generative AI 2025
- Dark/Light theme with CSS Custom Properties
- Responsive design (mobile-first)
- Keyboard navigation (j/k, t for theme)
- SVG placeholder visualizations (AJI diagram, Problems)
- Promptotyping methodology documented
- Knowledge Vault structure established

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## Commit Template

```markdown
### [NNN] Kurztitel
**Hash**: `xxxxxxx` (simuliert)
**Datum**: TT. Monat JJJJ
**Autor**: Name + Modell

**Änderungen**:
A = Added, M = Modified, D = Deleted, R = Renamed

**Message**:
type: Beschreibung

- Detail 1
- Detail 2
```

---

## Conventions

| Prefix | Bedeutung |
|--------|-----------|
| `feat:` | Neues Feature |
| `fix:` | Bugfix |
| `docs:` | Dokumentation |
| `style:` | Formatting, CSS |
| `refactor:` | Code-Umstrukturierung |
| `perf:` | Performance |
| `test:` | Tests |
| `chore:` | Maintenance |

---

## Stats

- **Total Commits**: 3
- **Dateien**: 21
- **Milestones Complete**: 1/4
- **M2 Progress**: Bilder vorbereitet, Assets ausstehend
- **Letzte Änderung**: 16. Dezember 2025
