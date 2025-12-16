# FGKI25 Knowledge Vault

## Projektübersicht

**Projekt**: (Frontier-)Generative KI 2025
**Typ**: Interaktiver Forschungsblog als Static Site
**Autor**: Christopher Pollin
**Institution**: Digital Humanities Craft OG, Universität Graz
**Publikation**: Dezember 2025
**URL**: https://chpollin.github.io/FGKI25

---

## Vault-Struktur

Dieser Knowledge Vault dokumentiert das FGKI25-Projekt nach der **Promptotyping-Methode**:

| Dokument | Inhalt | Promptotyping-Phase |
|----------|--------|---------------------|
| [00-index.md](00-index.md) | Diese Übersicht | - |
| [01-context.md](01-context.md) | Forschungskontext, Zielgruppe, Narrative | Preparation |
| [02-data.md](02-data.md) | Strukturierte Daten (Kapitel, Timeline, Personen) | Preparation |
| [03-requirements.md](03-requirements.md) | Funktionale & nicht-funktionale Anforderungen | Destillation |
| [04-implementation.md](04-implementation.md) | Technische Umsetzung, Code-Struktur | Implementation |
| **[../journal.md](../journal.md)** | **Zentrale Strategie & Session-Log** | **Alle Phasen** |

> **Hinweis**: Das zentrale Journal liegt im Root-Verzeichnis (`journal.md`), nicht im Knowledge Vault. Es dokumentiert die Gesamtstrategie und jede Arbeitssession.

---

## Promptotyping-Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  PREPARATION                                                 │
│  ─────────────────────────────────────────────────────────  │
│  • Rohmaterialien: 10 Vorträge 2025, Quellenrecherche       │
│  • Forschungskontext: CONTEXT.md, DATA.md                   │
│  • Ziel: Interaktiver Forschungsblog                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  EXPLORATION & MAPPING                                       │
│  ─────────────────────────────────────────────────────────  │
│  • Visualisierungstypen exploriert (AJI-Diagramm, Problems) │
│  • Kapitelstruktur iteriert                                 │
│  • Design-Entscheidungen (Dark Mode, Scroll-Navigation)     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  DESTILLATION                                                │
│  ─────────────────────────────────────────────────────────  │
│  • REQUIREMENTS.md: User Stories, Testkriterien             │
│  • INSTRUCTIONS.md: Code-Templates, Checkpoints             │
│  • Promptotyping-Documents als Source of Truth              │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  IMPLEMENTATION                                              │
│  ─────────────────────────────────────────────────────────  │
│  • HTML/CSS/JS generiert mit Claude Opus 4.5                │
│  • Iteratives Refactoring                                   │
│  • Blog-Content aus blog.md integriert                      │
│  • Output: Funktionsfähige Static Site                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Technologie-Stack

| Komponente | Technologie |
|------------|-------------|
| Frontend | Vanilla HTML/CSS/JavaScript |
| Framework | Keines (bewusste Entscheidung) |
| Hosting | GitHub Pages |
| Audio | SUNO Embedding |
| Entwicklung | Claude Code mit Opus 4.5 |

---

## Dateien

### Promptotyping-Documents (Source of Truth)
- `CONTEXT.md` - Forschungskontext
- `DATA.md` - Strukturierte Daten
- `REQUIREMENTS.md` - Anforderungen
- `INSTRUCTIONS.md` - Implementierungsanleitung
- `blog.md` - Volltext des Blogs

### Generierte Artefakte (Wegwerf-Code)
- `index.html` - Haupt-HTML
- `assets/css/*.css` - Stylesheets
- `assets/js/app.js` - JavaScript

### Knowledge Vault
- `knowledge/*.md` - Diese Dokumentation

---

## Links

- [GitHub Repository](https://github.com/chpollin/FGKI25)
- [Live Site](https://chpollin.github.io/FGKI25)
- [Album "trotzdem"](https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473)
- [AGKI-DH](https://chpollin.github.io/GM-DH)

---

## Meta

Dieser Vault ist selbst ein Beispiel für die dokumentierte Promptotyping-Methode. Die Dokumente sind LLM-optimiert (Markdown, strukturiert, komprimiert) und dienen sowohl der menschlichen Nachvollziehbarkeit als auch als Kontext für zukünftige LLM-Interaktionen.

**Letzte Aktualisierung**: Dezember 2025
