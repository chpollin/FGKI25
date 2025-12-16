# FGKI25

**(Frontier-)Generative KI 2025**  
**Ja, nein, vielleicht, don't panic, learn.**

Ein interaktiver Forschungsblog als Static Site, der das Jahr 2025 in der Frontier-KI dokumentiert und dabei selbst als Artefakt agentischer Textproduktion fungiert.

---

## Über das Projekt

Dieser Blog synthetisiert zehn Vorträge, verifizierte Recherche und praktische Erfahrung aus einem Jahr Arbeit mit Frontier-Modellen in Forschung und Lehre. Er entstand in Claude Code mit Opus 4.5 nach der Promptotyping-Methode.

**Autor**: Christopher Pollin, Digital Humanities Craft OG, Universität Graz  
**Publikation**: Dezember 2025  
**Lizenz**: CC BY 4.0

---

## Das Narrativ

Die Leitfrage: Muss man auf den "Tech-Bro-AGI-Hypetrain" aufspringen?

Die Antwort ist dialektisch:
- **Ja**, wir müssen uns damit beschäftigen
- **Nein**, aber nicht unkritisch mitmachen
- **Vielleicht**, Differenzierung ist notwendig
- **Don't panic**, Gelassenheit bewahren
- **Learn!**, der konstruktive Imperativ

---

## Features

**Narratives Scrolling**: Die zwölf Kapitel entfalten sich als vertikale Journey mit Parallax-Effekten und progressiver Enthüllung.

**Audio-Integration**: Das Album "trotzdem" ist eingebettet und kann während des Lesens gehört werden. Die Tracks korrespondieren mit den Kapiteln.

**Interaktive Visualisierungen**: 
- AMI-AGI-AJI-ASI Diagramm als navigierbares SVG
- Hard/Easy Problems als interaktive Gläser-Metapher
- Timeline der Entwicklungen 2025

**Dark Mode**: Ästhetik passend zum "Melodic Burnout Math-Rock" des Albums.

**Responsiv**: Optimiert für Desktop, Tablet und Mobile.

---

## Struktur

```
FGKI25/
├── index.html                 # Einstiegspunkt
├── README.md                  # Projektdokumentation
├── LICENSE                    # CC BY 4.0
│
├── content/
│   ├── blog.md               # Vollständiger Blogtext
│   ├── wissensdokument.md    # Methodische Dokumentation
│   └── chapters/             # Kapitel als separate Dateien
│       ├── 01-januar-schock.md
│       ├── 02-reasoning-monopoly.md
│       ├── 03-agentische-systeme.md
│       ├── 04-forscher-exodus.md
│       ├── 05-infrastruktur.md
│       ├── 06-scaling.md
│       ├── 07-context-engineering.md
│       ├── 08-research-agents.md
│       ├── 09-aji.md
│       ├── 10-critical-expert.md
│       ├── 11-hard-problems.md
│       ├── 12-trotzdem.md
│       └── 13-schluss.md
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Haupt-Stylesheet
│   │   ├── typography.css    # Schriften und Textformatierung
│   │   ├── animations.css    # Scroll-Animationen
│   │   └── responsive.css    # Mobile Anpassungen
│   │
│   ├── js/
│   │   ├── app.js            # Hauptlogik
│   │   ├── scroll.js         # Scroll-basierte Animationen
│   │   ├── audio.js          # Audio-Player Steuerung
│   │   ├── visualizations.js # Interaktive Grafiken
│   │   └── chapters.js       # Kapitel-Navigation
│   │
│   ├── images/
│   │   ├── promptotyping-sphere.png
│   │   ├── vibe-coding-tweet.png
│   │   ├── ami-agi-aji-asi.png
│   │   ├── hard-easy-problems.png
│   │   ├── turbulence-line.svg
│   │   └── album-cover.jpg
│   │
│   └── fonts/
│       └── [self-hosted fonts]
│
├── components/
│   ├── header.html           # Navigation und Titel
│   ├── chapter.html          # Kapitel-Template
│   ├── audio-player.html     # Eingebetteter Player
│   ├── visualization.html    # Interaktive Grafik-Container
│   └── footer.html           # Ressourcen und Zitation
│
└── docs/
    ├── PROMPTOTYPING.md      # System Prompt Dokumentation
    ├── CONTEXT.md            # Projekt-Kontext
    ├── DATA.md               # Datenstrukturen
    ├── REQUIREMENTS.md       # Anforderungen
    └── INSTRUCTIONS.md       # Implementierungsschritte
```

---

## Technologie

**Static Site Generator**: Vanilla HTML/CSS/JS ohne Framework-Abhängigkeiten. Bewusste Entscheidung für Langlebigkeit und Einfachheit.

**Styling**: CSS Custom Properties für Theming, CSS Grid und Flexbox für Layout, CSS Scroll-Snap für Kapitel-Navigation.

**Animationen**: Intersection Observer API für scroll-basierte Animationen, CSS Transitions für Micro-Interactions.

**Audio**: HTML5 Audio API mit Custom Controls, Playlist-Management für Album-Integration.

**Visualisierungen**: SVG für skalierbare Grafiken, CSS Animations für Interaktivität.

**Deployment**: GitHub Pages mit Custom Domain Support.

---

## Installation

```bash
# Repository klonen
git clone https://github.com/chpollin/FGKI25.git

# In das Verzeichnis wechseln
cd FGKI25

# Lokalen Server starten (Python)
python -m http.server 8000

# Oder mit Node
npx serve
```

Öffne http://localhost:8000 im Browser.

---

## Design-Prinzipien

**1. Content First**  
Der Text steht im Zentrum. Alle visuellen Elemente unterstützen das Narrativ, ohne abzulenken.

**2. Progressive Disclosure**  
Komplexität entfaltet sich schrittweise. Jedes Kapitel baut auf dem vorherigen auf.

**3. Atmospheric Reading**  
Dark Mode, subtile Animationen und Audio schaffen eine immersive Leseerfahrung, die zum "Melodic Burnout Math-Rock" des Albums passt.

**4. Semantic Structure**  
Klare HTML-Semantik für Accessibility und SEO. Screen-Reader-optimiert.

**5. Performance**  
Keine externen Abhängigkeiten außer Fonts. Lazy Loading für Bilder. Minimaler JavaScript-Footprint.

---

## Visuelle Sprache

**Farbpalette**

```css
:root {
  --bg-primary: #0a0a0b;
  --bg-secondary: #141416;
  --text-primary: #e8e8e8;
  --text-secondary: #a0a0a0;
  --accent-ja: #4ade80;
  --accent-nein: #f87171;
  --accent-vielleicht: #fbbf24;
  --accent-panic: #818cf8;
  --accent-learn: #22d3ee;
}
```

**Typografie**

Headlines: Inter oder System Font Stack  
Body: Optimiert für lange Lesetexte, 18-20px, 1.7 Line Height  
Code: JetBrains Mono oder Monospace Stack

**Die abstrakte Linie**

Das visuelle Leitmotiv ist eine Linie mit Turbulenz in der Mitte. Sie repräsentiert:
- Den Zeitstrahl mit 2025 als Verdichtungspunkt
- Das Signal-Rausch-Verhältnis der KI-Debatte
- Die "Jagged Intelligence" der Systeme

---

## Kapitel-Struktur

Jedes Kapitel hat eine eigene visuelle Identität:

| Kapitel | Farbe | Element |
|---------|-------|---------|
| Januar-Schock | Rot | Seismograph-Animation |
| Reasoning-Monopoly | Blau | Monopoly-Brett Abstraktion |
| Agentische Systeme | Grün | Netzwerk-Visualisierung |
| Forscher-Exodus | Orange | Wanderungs-Pfeile |
| Infrastruktur | Grau | Architektur-Raster |
| Scaling | Cyan | Exponential-Kurve |
| Context Engineering | Lila | Code-Morphing |
| Research Agents | Türkis | Timeline-Projektion |
| AJI | Gold | Zackige Linie |
| Critical Expert | Weiß | Human-in-Loop Diagramm |
| Hard Problems | Dunkelrot | Gläser-Metapher |
| trotzdem | Alle | Audio-Waveform |
| Schluss | Gradient | Fünf-Worte-Animation |

---

## Audio-Integration

Das Album "trotzdem" ist über die SUNO API eingebettet:

```javascript
const playlist = {
  url: "https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473",
  tracks: [
    { title: "System Prompt initializing...", chapter: 1 },
    { title: "Prompt Engineer!", chapter: 7 },
    { title: "Lost in the Vault", chapter: 11 },
    { title: "HALLELUJAH, THE GOD MACHINE!", chapter: 5 },
    { title: "Ich predicte dich", chapter: 9 },
    { title: "Machine of loving grace", chapter: 8 },
    { title: "Good morning Claude", chapter: 12 }
  ]
};
```

Der Player ist sticky am unteren Rand. Tracks können manuell gewählt oder automatisch mit Kapiteln synchronisiert werden.

---

## Interaktive Visualisierungen

**AMI-AGI-AJI-ASI Diagramm**

Interaktives 2x2 Grid mit:
- Hover-States für Definitionen
- Click für erweiterte Erklärungen
- Animation beim Scrollen ins Kapitel

**Hard/Easy Problems**

Zwei Gläser-Reihen mit:
- Drag-and-Drop für Exploration
- Tooltip mit Problemerklärung
- Visuelle Unterscheidung (geschlossen vs. offen)

**Timeline 2025**

Horizontale Zeitleiste mit:
- Zoom-Funktion für Details
- Verknüpfungen zu Kapiteln
- Marker für eigene Vorträge

---

## Promptotyping-Dokumentation

Das Projekt folgt der Promptotyping-Methode. Die vollständige Dokumentation liegt in /docs/:

**CONTEXT.md**: Forschungskontext, Ziele, Zielgruppe  
**DATA.md**: Struktur der Inhalte, Quellen, Medien  
**REQUIREMENTS.md**: Funktionale und nicht-funktionale Anforderungen  
**INSTRUCTIONS.md**: Technische Implementierungsschritte

---

## Deployment

Das Repository ist für GitHub Pages konfiguriert:

1. Repository Settings öffnen
2. Pages aktivieren
3. Branch "main" und Ordner "/" wählen
4. Custom Domain optional konfigurieren

Die Site ist dann unter https://chpollin.github.io/FGKI25 erreichbar.

---

## Beitragen

Dieses Repository dokumentiert einen spezifischen Forschungsblog. Pull Requests für:
- Typo-Korrekturen
- Accessibility-Verbesserungen
- Performance-Optimierungen
- Übersetzungen

sind willkommen.

Für inhaltliche Diskussionen bitte Issues öffnen.

---

## Verwandte Projekte

[GM-DH](https://chpollin.github.io/GM-DH): Angewandte Generative KI in den Geisteswissenschaften  
[LLMDH](https://chpollin.github.io/llmdh): Large Language Models for Digital Humanities Research  
[DHCraft](https://dhcraft.org): Digital Humanities Craft OG

---

## Zitation

```bibtex
@online{pollin2025fgki,
  author = {Pollin, Christopher},
  title = {(Frontier-)Generative KI 2025. Ja, nein, vielleicht, don't panic, learn.},
  year = {2025},
  url = {https://chpollin.github.io/FGKI25},
  urldate = {2025-12-16}
}
```

---

## Lizenz

Inhalte: CC BY 4.0  
Code: MIT

---

*Dieser Blog entstand in Claude Code mit Opus 4.5. Das Modell arbeitete auf einer Meta-Ebene mit, verstand die argumentative Struktur und schlug Verbesserungen vor. Ich habe jede faktische Behauptung geprüft. Die Verantwortung für Inhalt und Argumentation liegt beim Autor.*

---

**I AM YOUR Promptotyping Expert Assistant::**

Als nächsten Schritt empfehle ich, die CONTEXT.md zu vervollständigen und dann mit der DATA.md die Inhaltsstruktur zu formalisieren, bevor wir die REQUIREMENTS.md für die interaktiven Visualisierungen spezifizieren.
