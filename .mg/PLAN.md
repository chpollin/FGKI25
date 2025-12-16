# FGKI25 Implementation Plan

## Status: Milestone 1 Complete ✅

```
[M1] Foundation     ████████████████████ 100% ✅ DONE
[M2] Assets         ░░░░░░░░░░░░░░░░░░░░   0% ⏳ NEXT
[M3] Deployment     ░░░░░░░░░░░░░░░░░░░░   0%
[M4] Polish         ░░░░░░░░░░░░░░░░░░░░   0%
```

→ Details: [milestones.md](milestones.md)

---

## Nächster Milestone: M2 Assets

### Benötigte Bilder
| Datei | Quelle | Priorität |
|-------|--------|-----------|
| `promptotyping-sphere.png` | Vortrag ÖAW | P1 |
| `vibe-coding-tweet.png` | Twitter Screenshot | P1 |
| `ami-agi-aji-asi.png` | Vortrag AGKI-DH | P1 |
| `hard-easy-problems.png` | Vortrag AGKI-DH | P1 |
| `album-cover.jpg` | SUNO | P2 |
| `favicon.ico` | Erstellen | P2 |
| `og-image.png` | Erstellen | P2 |

### Ablageort
```
assets/images/
├── promptotyping-sphere.png
├── vibe-coding-tweet.png
├── ami-agi-aji-asi.png
├── hard-easy-problems.png
├── album-cover.jpg
└── og-image.png
```

---

## Datei-Verantwortung

| Datei | Zweck | Aktualisieren |
|-------|-------|---------------|
| `journal.md` | Strategie + Sessions | Jede Session |
| `.mg/commits.md` | Commit-History | Nach Änderungen |
| `.mg/milestones.md` | Meilensteine | Bei Statusänderung |
| `.mg/PLAN.md` | Dieser Plan | Bei Prioritätsänderung |

---

## Quick Commands

```bash
# Lokal testen
python -m http.server 8000

# Lighthouse CLI
npx lighthouse http://localhost:8000 --view
```

---

## Architektur (Final)

| Entscheidung | Begründung |
|--------------|------------|
| Vanilla HTML/CSS/JS | Keine Dependencies |
| Kein Build-Prozess | GitHub Pages direkt |
| .mg statt .git | Simulierte Versionierung |
| SVG inline | CSS Variables nutzbar |
| Dark Mode default | Moderne UX |
