# FGKI25 Project Journal

> **Zweck**: Zentrale Dokumentation der Projektstrategie und aller Arbeitssessions.
> **Aktualisierung**: Bei jeder Session durch das LLM.

---

## Projektstrategie

### Vision
Ein interaktiver Forschungsblog über "(Frontier-)Generative KI 2025", der selbst ein Beispiel für die dokumentierte Promptotyping-Methode ist.

### Kernprinzipien

1. **Promptotyping als Methode**
   - Promptotyping-Documents (CONTEXT, DATA, REQUIREMENTS, INSTRUCTIONS) sind Source of Truth
   - Der generierte Code ist "Wegwerf-Code" - die Dokumentation bleibt
   - Jede Session baut auf dem dokumentierten Kontext auf

2. **Einfachheit über Komplexität**
   - Vanilla HTML/CSS/JS (kein Framework)
   - Kein Build-Prozess
   - GitHub Pages für Hosting
   - Weniger Abhängigkeiten = weniger Probleme

3. **LLM-First Documentation**
   - Alle Dokumente in Markdown
   - Strukturiert für LLM-Kontext
   - Komprimiert aber vollständig

4. **Iteratives Vorgehen**
   - Funktionierender Prototyp zuerst
   - Polish und Optimierung später
   - Jede Session dokumentiert

### Projektstruktur

```
_project/
├── index.html              # Haupt-Site (generiert)
├── blog.md                 # Volltext-Content
├── journal.md              # DIESES DOKUMENT
│
├── assets/                 # Statische Assets
│   ├── css/
│   │   ├── main.css        # Basis-Styles, CSS Variables
│   │   ├── typography.css  # Text-Styles
│   │   ├── layout.css      # Layout-Komponenten
│   │   └── responsive.css  # Breakpoints, Accessibility
│   ├── js/
│   │   └── app.js          # Interaktivität
│   └── images/             # Bilder (noch Placeholder)
│
├── knowledge/              # Knowledge Vault
│   ├── 00-index.md         # Vault-Übersicht
│   └── 05-journal.md       # Alte Session-Docs (deprecated)
│
└── [Promptotyping-Documents]
    ├── CONTEXT.md          # Forschungskontext
    ├── DATA.md             # Strukturierte Daten
    ├── REQUIREMENTS.md     # Anforderungen
    └── INSTRUCTIONS.md     # Implementation Guide
```

### Milestones

```
[M1] Foundation     ████████████████████ 100% ✅ COMPLETE
[M2] Assets         ░░░░░░░░░░░░░░░░░░░░   0% ⏳ NEXT
[M3] Deployment     ░░░░░░░░░░░░░░░░░░░░   0%
[M4] Polish         ░░░░░░░░░░░░░░░░░░░░   0%
```

→ Details: [.mg/milestones.md](.mg/milestones.md)

---

## Session Log

### Session 2: Milestone 1 Complete
**Datum**: 16. Dezember 2025
**Modell**: Claude Opus 4.5 via Claude Code
**Kontext**: Fortsetzung nach Context-Overflow
**Milestone**: M1 Foundation ✅

#### Ausgangslage
- Session 1 wurde durch Context-Overflow unterbrochen
- Alle Grundlagen bereits implementiert (HTML, CSS, JS, Content)
- User wollte initialen Git-Commit machen

#### Was passiert ist
1. **Journal-Struktur definiert**
   - Zentrale `journal.md` im Hauptverzeichnis angelegt
   - Strategie-Dokumentation hinzugefügt
   - Session-Logging-Format etabliert

2. **.mg System eingeführt** (Manual Git)
   - `commits.md` für simulierte Versionskontrolle
   - `PLAN.md` für Projektplan
   - `milestones.md` für Meilenstein-Tracking

3. **Milestone 1 abgeschlossen**
   - Alle DoD-Kriterien erfüllt
   - 2 Commits dokumentiert
   - 19 Dateien im Projekt

#### Entscheidungen
| Entscheidung | Begründung |
|--------------|------------|
| .mg statt echtes Git | Simulierte Versionierung, kein Repo nötig |
| Milestones statt Phasen | Klarere Definition of Done |
| journal.md im Root | Schnellster Zugriff für LLM-Kontext |

#### Commits diese Session
- `[001] Initial Commit - FGKI25 Foundation`
- `[002] Milestone 1 Complete - Documentation System`

#### Nächste Schritte
→ **Milestone 2**: Bilder in `assets/images/` ablegen

---

### Session 1: Initiale Implementierung
**Datum**: Dezember 2025 (vor Session 2)
**Modell**: Claude Opus 4.5 via Claude Code
**Dauer**: ~1 Session

#### Was passiert ist

1. **Analyse der Promptotyping-Documents**
   - CONTEXT.md, DATA.md, REQUIREMENTS.md, INSTRUCTIONS.md gelesen
   - Kapitelstruktur (13 Kapitel) identifiziert
   - Visualisierungen definiert (AMI-AGI-AJI-ASI, Hard/Easy Problems)

2. **CSS Foundation**
   - Dark Mode als Default mit Light Mode Toggle
   - CSS Custom Properties für Theming
   - Responsive Breakpoints (Mobile First)
   - Kapitel-spezifische Farben

3. **HTML-Struktur**
   - 13 Kapitel als `<section>` Elemente
   - Semantisches HTML (article, header, nav, aside, footer)
   - Sticky Navigation mit Progress Bar
   - Interaktive SVG-Visualisierungen inline

4. **JavaScript**
   - Intersection Observer für Kapitel-Tracking
   - Theme Toggle mit localStorage
   - Keyboard Navigation (j/k für Kapitel, t für Theme)
   - Audio Player Integration (SUNO Link)
   - Copy Citation Button

5. **Content Integration**
   - Volltext aus blog.md in index.html integriert
   - SVG-Placeholder für fehlende Bilder

#### Entscheidungen

| Entscheidung | Begründung |
|--------------|------------|
| SVG-Visualisierungen inline | Keine externen Abhängigkeiten, CSS-Variablen nutzbar |
| Kein Build-Prozess | Einfachheit, GitHub Pages Kompatibilität |
| SUNO als externer Link | Kein Audio-Hosting nötig |
| Mobile Menu als Overlay | Bessere UX auf kleinen Screens |
| journal.md im Root | Schneller Zugriff, zentrale Dokumentation |

#### Lessons Learned

1. **Promptotyping-Documents als Source of Truth funktioniert**
   - Die vorhandene Dokumentation enthielt alles Nötige
   - Code konnte direkt aus den Templates generiert werden

2. **Volltext ist kritisch**
   - Ohne blog.md wäre nur ein leeres Gerüst entstanden
   - Die Kapitelstruktur in DATA.md reichte nicht

3. **SVG-Placeholder sind guter Fallback**
   - Ermöglichen funktionsfähige Site ohne echte Assets
   - Können später einfach ersetzt werden

4. **CSS Custom Properties sind mächtig**
   - Ein Farbschema für alles (Kapitel, Visualisierungen, UI)
   - Dark/Light Mode mit minimalem Code

---

## Template für neue Sessions

```markdown
### Session N: [Titel]
**Datum**: [TT. Monat JJJJ]
**Modell**: [Modell-ID]
**Kontext**: [Kurzbeschreibung der Ausgangslage]

#### Ausgangslage
- [Was war der Stand zu Beginn?]

#### Was passiert ist
1. [Schritt 1]
2. [Schritt 2]
...

#### Entscheidungen
| Entscheidung | Begründung |
|--------------|------------|
| ... | ... |

#### Offene Punkte
- [ ] [Todo 1]
- [ ] [Todo 2]

#### Lessons Learned
- [Learning 1]
- [Learning 2]
```

---

## Quick Reference

### Wichtige Dateien
- **Content**: `blog.md` (Volltext), `index.html` (generiert)
- **Styling**: `assets/css/main.css` (CSS Variables)
- **Logic**: `assets/js/app.js` (State, Navigation, Theme)
- **Context**: `CONTEXT.md`, `DATA.md`, `REQUIREMENTS.md`, `INSTRUCTIONS.md`

### Commands
```bash
# Lokaler Server
python -m http.server 8000

# Git Workflow
git add .
git commit -m "Message"
git push origin main
```

### Links
- **Repository**: https://github.com/chpollin/FGKI25
- **Live Site**: https://chpollin.github.io/FGKI25
- **SUNO Album**: https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473
