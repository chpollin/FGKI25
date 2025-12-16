# INSTRUCTIONS.md

## Implementierungsreihenfolge

### Phase 1: Foundation (MVP)

#### Schritt 1.1: HTML-Struktur

Erstelle index.html mit semantischer Struktur:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>(Frontier-)Generative KI 2025</title>
  <meta name="description" content="Ja, nein, vielleicht, don't panic, learn. Ein Forschungsblog von Christopher Pollin.">
  
  <!-- OG Tags -->
  <meta property="og:title" content="(Frontier-)Generative KI 2025">
  <meta property="og:description" content="Ja, nein, vielleicht, don't panic, learn.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://chpollin.github.io/FGKI25">
  
  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
  <header class="site-header">
    <nav class="chapter-nav" aria-label="Kapitel-Navigation">
      <!-- Generiert via JS oder statisch -->
    </nav>
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </header>
  
  <main class="blog-content">
    <article>
      <section id="intro" class="chapter">...</section>
      <section id="januar-schock" class="chapter">...</section>
      <!-- Alle Kapitel -->
    </article>
  </main>
  
  <aside class="audio-player" aria-label="Audio Player">
    <!-- Player Controls -->
  </aside>
  
  <footer class="site-footer">
    <!-- Ressourcen, Zitation -->
  </footer>
  
  <script src="assets/js/app.js" defer></script>
</body>
</html>
```

#### Schritt 1.2: CSS Foundation

Erstelle assets/css/main.css:

```css
/* Custom Properties */
:root {
  /* Colors - Dark Mode Default */
  --bg-primary: #0a0a0b;
  --bg-secondary: #141416;
  --bg-tertiary: #1c1c1f;
  --text-primary: #e8e8e8;
  --text-secondary: #a0a0a0;
  --text-muted: #6b6b6b;
  
  /* Accent Colors */
  --accent-ja: #4ade80;
  --accent-nein: #f87171;
  --accent-vielleicht: #fbbf24;
  --accent-panic: #818cf8;
  --accent-learn: #22d3ee;
  
  /* Chapter Colors */
  --color-januar: #f87171;
  --color-reasoning: #3b82f6;
  --color-agents: #4ade80;
  --color-exodus: #fb923c;
  --color-infra: #6b7280;
  --color-scaling: #22d3ee;
  --color-context: #a855f7;
  --color-research: #2dd4bf;
  --color-aji: #fbbf24;
  --color-expert: #e8e8e8;
  --color-problems: #991b1b;
  
  /* Typography */
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-size-base: 18px;
  --line-height: 1.7;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;
  
  /* Layout */
  --content-width: 720px;
  --content-width-wide: 1200px;
}

/* Light Mode */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e8e8e8;
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #8a8a8a;
}

/* Base Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--font-size-base);
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  line-height: var(--line-height);
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
```

#### Schritt 1.3: Typography CSS

Erstelle assets/css/typography.css:

```css
/* Headings */
h1, h2, h3, h4 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--space-md);
}

h1 {
  font-size: 2.5rem;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 1.75rem;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--bg-tertiary);
}

h3 {
  font-size: 1.25rem;
  color: var(--text-secondary);
}

/* Body Text */
p {
  margin-bottom: var(--space-md);
}

/* Links */
a {
  color: var(--accent-learn);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-ja);
  text-decoration: underline;
}

/* Blockquotes */
blockquote {
  margin: var(--space-lg) 0;
  padding: var(--space-md) var(--space-lg);
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-vielleicht);
  font-style: italic;
}

blockquote cite {
  display: block;
  margin-top: var(--space-sm);
  font-style: normal;
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Code */
code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--bg-secondary);
  padding: 0.1em 0.3em;
  border-radius: 3px;
}

/* Lists */
ul, ol {
  margin: var(--space-md) 0;
  padding-left: var(--space-lg);
}

li {
  margin-bottom: var(--space-sm);
}
```

#### Schritt 1.4: Layout CSS

Erstelle assets/css/layout.css:

```css
/* Site Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--bg-tertiary);
}

.chapter-nav {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  overflow-x: auto;
  scrollbar-width: none;
}

.chapter-nav::-webkit-scrollbar {
  display: none;
}

.progress-bar {
  height: 3px;
  background: var(--accent-learn);
  width: 0%;
  transition: width 0.1s ease;
}

/* Main Content */
.blog-content {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: calc(60px + var(--space-xl)) var(--space-md) var(--space-2xl);
}

/* Chapters */
.chapter {
  min-height: 100vh;
  padding: var(--space-xl) 0;
}

.chapter:first-child {
  padding-top: 0;
}

/* Images */
.chapter-image {
  margin: var(--space-lg) 0;
}

.chapter-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.chapter-image figcaption {
  margin-top: var(--space-sm);
  font-size: 0.875rem;
  color: var(--text-muted);
  font-style: italic;
}

/* Audio Player */
.audio-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-secondary);
  border-top: 1px solid var(--bg-tertiary);
  padding: var(--space-sm) var(--space-md);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.audio-player.visible {
  transform: translateY(0);
}

/* Footer */
.site-footer {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);
  border-top: 1px solid var(--bg-tertiary);
}
```

#### Schritt 1.5: Responsive CSS

Erstelle assets/css/responsive.css:

```css
/* Mobile First - Base styles are mobile */

/* Tablet */
@media (min-width: 768px) {
  :root {
    --font-size-base: 19px;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .blog-content {
    padding-left: var(--space-lg);
    padding-right: var(--space-lg);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --font-size-base: 20px;
  }
  
  h1 {
    font-size: 3.5rem;
  }
  
  .chapter-nav {
    justify-content: center;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .blog-content {
    max-width: var(--content-width-wide);
  }
  
  .chapter {
    display: grid;
    grid-template-columns: 1fr 720px 1fr;
    gap: var(--space-xl);
  }
  
  .chapter-text {
    grid-column: 2;
  }
  
  .chapter-aside {
    grid-column: 3;
    position: sticky;
    top: 100px;
    align-self: start;
  }
}
```

---

### Phase 2: JavaScript Funktionalität

#### Schritt 2.1: App.js Grundstruktur

```javascript
// assets/js/app.js

// State
const state = {
  currentChapter: null,
  scrollProgress: 0,
  audioPlaying: false,
  theme: 'dark'
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollTracking();
  initChapterNavigation();
  initAudioPlayer();
  initLightbox();
});

// Theme
function initTheme() {
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  state.theme = saved || preferred;
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
}
```

#### Schritt 2.2: Scroll Tracking

```javascript
// assets/js/scroll.js

function initScrollTracking() {
  const chapters = document.querySelectorAll('.chapter');
  const progressBar = document.querySelector('.progress-bar');
  
  // Intersection Observer für Kapitel
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCurrentChapter(entry.target.id);
      }
    });
  }, {
    threshold: 0.3
  });
  
  chapters.forEach(chapter => observer.observe(chapter));
  
  // Scroll Progress
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    state.scrollProgress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${state.scrollProgress}%`;
  }, { passive: true });
}

function updateCurrentChapter(chapterId) {
  state.currentChapter = chapterId;
  
  // Update Navigation
  document.querySelectorAll('.chapter-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.chapter === chapterId);
  });
  
  // Update URL ohne Scroll
  history.replaceState(null, null, `#${chapterId}`);
}
```

#### Schritt 2.3: Audio Player

```javascript
// assets/js/audio.js

const playlist = {
  url: "https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473",
  tracks: [
    { id: 1, title: "System Prompt initializing...", chapter: "januar-schock" },
    { id: 2, title: "Prompt Engineer!", chapter: "context-engineering" },
    { id: 3, title: "Lost in the Vault", chapter: "hard-problems" },
    { id: 4, title: "HALLELUJAH, THE GOD MACHINE!", chapter: "infrastruktur" },
    { id: 5, title: "Ich predicte dich", chapter: "aji" },
    { id: 6, title: "Machine of loving grace", chapter: "research-agents" },
    { id: 7, title: "Good morning Claude", chapter: "trotzdem" }
  ]
};

function initAudioPlayer() {
  const player = document.querySelector('.audio-player');
  const toggleBtn = document.querySelector('.audio-toggle');
  
  // Show player on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      player.classList.add('visible');
    }
  }, { passive: true });
  
  // Toggle visibility
  toggleBtn?.addEventListener('click', () => {
    player.classList.toggle('minimized');
  });
}
```

---

### Phase 3: Interaktive Visualisierungen

#### Schritt 3.1: AMI-AGI-AJI-ASI Diagramm

```javascript
// assets/js/visualizations.js

const intelligenceCategories = {
  ami: {
    name: "AMI",
    author: "LeCun",
    description: "Advanced Machine Intelligence. World Models, physisches Verständnis.",
    position: { row: 1, col: 1 },
    stance: "skeptisch"
  },
  agi: {
    name: "AGI",
    author: "diverse",
    description: "Artificial General Intelligence. Undefiniert, nicht agreed.",
    position: { row: 1, col: 2 },
    stance: "spekulativ"
  },
  aji: {
    name: "AJI",
    author: "Mollick",
    description: "Artificial Jagged Intelligence. Ungleichmäßige Fähigkeiten.",
    position: { row: 2, col: 1 },
    stance: "aktuell nützlich"
  },
  asi: {
    name: "ASI",
    author: "spekulativ",
    description: "Artificial Superintelligence. Übermenschlich in allen Domänen.",
    position: { row: 2, col: 2 },
    stance: "spekulativ"
  }
};

function initAJIDiagram() {
  const container = document.querySelector('.aji-diagram');
  if (!container) return;
  
  Object.entries(intelligenceCategories).forEach(([key, data]) => {
    const cell = container.querySelector(`[data-category="${key}"]`);
    if (!cell) return;
    
    cell.addEventListener('mouseenter', () => showTooltip(cell, data));
    cell.addEventListener('mouseleave', hideTooltip);
    cell.addEventListener('click', () => showModal(data));
  });
}
```

#### Schritt 3.2: Hard/Easy Problems

```javascript
const problems = {
  hard: [
    { id: 'alignment', name: 'Alignment', icon: '🎯' },
    { id: 'duck', name: 'Duck-Problem', icon: '🦆' },
    { id: 'blackbox', name: 'Black Box', icon: '📦' },
    { id: 'responsible', name: 'Verantwortungsvolle Nutzung', icon: '⚖️' },
    { id: 'systemzwang', name: 'Systemzwang', icon: '🔒' },
    { id: 'kraenkung', name: '4. Kränkung', icon: '💔' }
  ],
  easy: [
    { id: 'kompetenz', name: 'Kompetenzverfall', icon: '📉' },
    { id: 'expert', name: 'Expert-in-the-Loop', icon: '👤' },
    { id: 'evaluation', name: 'Evaluation', icon: '📊' },
    { id: 'kommunikation', name: 'Kommunikation', icon: '💬' },
    { id: 'attribution', name: 'Attribution', icon: '©️' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'compute', name: 'Compute', icon: '💰' }
  ]
};

function initProblemsViz() {
  const container = document.querySelector('.problems-viz');
  if (!container) return;
  
  // Render jars
  renderJars(container.querySelector('.hard-problems'), problems.hard, 'hard');
  renderJars(container.querySelector('.easy-problems'), problems.easy, 'easy');
}

function renderJars(container, items, type) {
  items.forEach(item => {
    const jar = document.createElement('button');
    jar.className = `jar jar--${type}`;
    jar.innerHTML = `
      <span class="jar-icon">${item.icon}</span>
      <span class="jar-label">${item.name}</span>
    `;
    jar.addEventListener('click', () => showProblemDetail(item, type));
    container.appendChild(jar);
  });
}
```

---

### Phase 4: Content Integration

#### Schritt 4.1: Markdown zu HTML

Option A: Statisch vorkonvertiert (empfohlen für Performance)

```bash
# Convert mit pandoc
pandoc content/blog.md -o content/blog.html --section-divs
```

Option B: Client-side mit marked.js (mehr Flexibilität)

```javascript
// Nur wenn dynamisch nötig
import { marked } from 'marked';

async function loadContent() {
  const response = await fetch('content/blog.md');
  const markdown = await response.text();
  document.querySelector('.blog-content').innerHTML = marked.parse(markdown);
}
```

#### Schritt 4.2: Kapitel-Splitting

```javascript
// Build-Script oder manuell
const chapters = [
  { id: 'intro', start: 0, end: 'Der Januar-Schock' },
  { id: 'januar-schock', start: 'Der Januar-Schock', end: 'Das Reasoning-Monopoly' },
  // ...
];
```

---

### Phase 5: Deployment

#### Schritt 5.1: GitHub Pages Setup

```yaml
# .github/workflows/deploy.yml (optional, für Build-Step)
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

#### Schritt 5.2: Repository Settings

1. Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: / (root)
4. Save

#### Schritt 5.3: Custom Domain (optional)

1. CNAME Datei erstellen mit Domain
2. DNS konfigurieren (A Records zu GitHub IPs)

---

## Checkpoints

### Checkpoint 1: Foundation
- [ ] HTML-Struktur valide
- [ ] CSS lädt ohne Fehler
- [ ] Dark Mode funktioniert
- [ ] Responsive auf Mobile

### Checkpoint 2: Content
- [ ] Alle 13 Kapitel gerendert
- [ ] Bilder laden mit Alt-Text
- [ ] Links funktionieren
- [ ] Blockquotes formatiert

### Checkpoint 3: Navigation
- [ ] Progress Bar aktualisiert
- [ ] Kapitel-Navigation funktioniert
- [ ] URL-Hashes funktionieren
- [ ] Smooth Scroll aktiv

### Checkpoint 4: Audio
- [ ] Player erscheint beim Scrollen
- [ ] SUNO Embed funktioniert
- [ ] Minimieren möglich

### Checkpoint 5: Visualisierungen
- [ ] AJI-Diagramm interaktiv
- [ ] Problems-Gläser clickbar
- [ ] Tooltips erscheinen

### Checkpoint 6: Performance
- [ ] Lighthouse > 90
- [ ] Bilder lazy loaded
- [ ] Keine Console-Errors

### Checkpoint 7: Deployment
- [ ] GitHub Pages aktiv
- [ ] URL erreichbar
- [ ] HTTPS funktioniert

---

## Rollback-Punkte

Bei Problemen zu diesen Versionen zurückkehren:

1. **v0.1**: Nur HTML/CSS, kein JS
2. **v0.2**: Mit Navigation, ohne Audio
3. **v0.3**: Mit Audio, ohne Visualisierungen
4. **v1.0**: Feature Complete

Jeder Commit sollte einen funktionierenden Stand repräsentieren.
