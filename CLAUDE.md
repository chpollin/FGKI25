# CLAUDE.md - Projekt-Learnings für FGKI25

## Projekt-Kontext
- Forschungsblog "(Frontier-)Generative KI 2025"
- Vanilla HTML/CSS/JS, GitHub Pages
- .mg System für simulierte Versionskontrolle

## Workflow-Learnings

### Bilder umbenennen (Windows)
- `ren` und `move` funktionieren NICHT in der Bash-Shell
- Verwende `mv` mit Unix-Pfaden: `mv "alte datei.png" "neue-datei.png"`
- Bei Sonderzeichen (ÖÄÜ, Anführungszeichen): Erst mit Glob auflisten, dann mit Wildcard umbenennen
- Beispiel: `mv *"(8).png" "simple-name.png"`

### Dateien mit Sonderzeichen lesen
- Windows-Pfade mit Backslash funktionieren manchmal nicht
- Glob findet Dateien zuverlässig, auch mit Umlauten
- Read-Tool hat Probleme mit `„"` (deutschen Anführungszeichen) in Dateinamen

### CSS-Refactoring
- Immer erst `Read` vor `Edit` - sonst Fehler
- Bei großen Änderungen: Variablen zuerst, dann Komponenten

## Bild-Zuordnung (für später)
| Originaldatei | Zielname | Status |
|---------------|----------|--------|
| `Generative KI... (1).png` | `ami-agi-aji-asi.png` | ✅ Done |
| `Generative KI....png` | `hard-easy-problems.png` | ✅ Done |
| `oeaw-10.png` | `promptotyping-sphere.png` | ✅ Done |
| `oeaw-9.png` | `vibe-coding-tweet.png` | ✅ Done |
| Album Cover | `album-cover.jpg` | ❌ Fehlt noch |

## Design v1.2 Status
- [x] design.md aktualisiert
- [x] HTML: Breadcrumb Nav + Console Player
- [x] main.css: Zinc Palette + Glow Effects
- [ ] typography.css: Sans/Mono Trennung
- [ ] layout.css: Neue Komponenten-Styles
- [ ] app.js: Dynamische Pfad-Navigation
- [ ] .mg/commits.md: Commit dokumentieren

## User-Feedback

### Session 3 - Visual Check (16.12.2025)
- Breadcrumb Nav: ✅ Funktioniert, Pfad aktualisiert beim Scrollen
- Console Player: ✅ Sieht gut aus, Terminal-Vibe erreicht
- Bilder: ✅ Laden korrekt (promptotyping-sphere, vibe-coding-tweet)
- Progress Bar: ✅ Mit Glow-Effekt
- Tags: ✅ Monospace-Style

### Verbesserungsideen
- [ ] Progress Bar evtl. 3px statt 2px
- [ ] Console Player Link-Icon größer machen

---
*Letzte Aktualisierung: Session 3, 16. Dezember 2025*
