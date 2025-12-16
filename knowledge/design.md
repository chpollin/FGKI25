# DESIGN.md – FGKI25 Research Blog v1.2

## Design-for-Frontend Specification

Source of Truth für "(Frontier-)Generative KI 2025". Kompakt, implementierungsnah.

**v1.2 Update**: Terminal/IDE-Ästhetik ("Vibe Coding" Look)

---

## 1. Design Tokens

```css
:root {
  /* Backgrounds - Zinc Palette (nicht reines Schwarz) */
  --bg-app: #09090b;        /* zinc-950 */
  --bg-card: #18181b;       /* zinc-900 */
  --bg-surface: #27272a;    /* zinc-800 */
  --bg-elevated: #3f3f46;   /* zinc-700 */
  --bg-figure: #27272a;

  /* Text - Zinc Scale */
  --text-primary: #fafafa;  /* zinc-50 */
  --text-secondary: #a1a1aa; /* zinc-400 */
  --text-muted: #71717a;    /* zinc-500 */
  --text-dim: #52525b;      /* zinc-600 */

  /* Accent - Cyan (Terminal-Vibe) */
  --accent: #22d3ee;        /* cyan-400 */
  --accent-hover: #67e8f9;  /* cyan-300 */
  --accent-glow: rgba(34, 211, 238, 0.15);
  --accent-glow-strong: rgba(34, 211, 238, 0.3);

  /* Border - Zinc */
  --border: #27272a;        /* zinc-800 */
  --border-subtle: #3f3f46; /* zinc-700 */

  /* Typography - Strict Separation */
  --font-body: 'Inter', system-ui, sans-serif;      /* Content only */
  --font-mono: 'JetBrains Mono', 'Geist Mono', 'Fira Code', monospace;  /* UI, Nav, Meta */

  /* Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;

  /* Layout */
  --content-width: 720px;
  --nav-height: 48px;
  --radius: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Glow Effects */
  --glow-sm: 0 0 10px var(--accent-glow);
  --glow-md: 0 0 20px var(--accent-glow);
  --glow-lg: 0 0 30px var(--accent-glow-strong);
}

[data-theme="light"] {
  --bg-app: #fafafa;        /* zinc-50 */
  --bg-card: #ffffff;
  --bg-surface: #f4f4f5;    /* zinc-100 */
  --bg-elevated: #e4e4e7;   /* zinc-200 */
  --text-primary: #18181b;  /* zinc-900 */
  --text-secondary: #52525b; /* zinc-600 */
  --text-muted: #71717a;    /* zinc-500 */
  --accent: #0891b2;        /* cyan-600 */
  --border: #e4e4e7;        /* zinc-200 */
  --accent-glow: rgba(8, 145, 178, 0.1);
}
```

---

## 2. Layout (v1.2 - Terminal/IDE Style)

```
┌──────────────────────────────────────────────────────────┐
│ ~/research/2025/03-agents.md█               [☀] [≡]     │  ← Breadcrumb Nav
│ ████████████░░░░░░░░░░░░░░░░░░░░░░░  Progress Bar       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌────────────────────────────────────────────────┐     │
│   │  (Frontier-)Generative KI 2025                 │     │  ← Sans-Serif
│   │                                                │     │
│   │  03                                            │     │  ← Monospace
│   │  Agentische Systeme funktionieren              │     │  ← Sans-Serif
│   │  `CLAUDE CODE` `AGENTS` `AMODEI`               │     │  ← Monospace Tags
│   │                                                │     │
│   │  Body text in Sans-Serif...                    │     │
│   │                                                │     │
│   │  ┌──────────────────────────────────────┐      │     │
│   │  │ Blockquote mit Cyan-Border + Glow    │      │     │
│   │  └──────────────────────────────────────┘      │     │
│   │                                                │     │
│   │  ┌──────────────────────────────────────┐      │     │
│   │  │         [ Figure ]                   │      │     │
│   │  └──────────────────────────────────────┘      │     │
│   │  Abb. 1: Caption (Monospace Label)             │     │
│   │                                                │     │
│   └────────────────────────────────────────────────┘     │
│                                                          │
│ > playing: trotzdem_v5.mp3 [02:14] ████░░░░░░  ←──────── Console Footer
└──────────────────────────────────────────────────────────┘
```

---

## 3. Navigation (v1.2 - BreadcrumbNav)

**Konzept**: Terminal-Pfad-Metapher statt klassischer Tab-Navigation

```html
<nav class="breadcrumb-nav">
  <span class="nav-prefix">~/research/2025/</span>
  <span class="nav-file" id="current-path">03-agents.md</span>
  <span class="nav-cursor">█</span>
  <div class="nav-actions">
    <button class="theme-toggle" aria-label="Theme wechseln">☀</button>
    <button class="menu-toggle" aria-label="Kapitel-Menu">≡</button>
  </div>
</nav>
<div class="progress-bar"></div>

<!-- Hidden: Chapter Selector (appears on click) -->
<div class="chapter-selector" hidden>
  <a href="#intro" data-file="00-intro.md">Intro</a>
  <a href="#januar-schock" data-file="01-januar.md">Januar-Schock</a>
  <a href="#reasoning-monopoly" data-file="02-reasoning.md">Reasoning</a>
  <!-- ... -->
</div>
```

```css
.breadcrumb-nav {
  position: sticky;
  top: 0;
  height: var(--nav-height);
  background: var(--bg-card);
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.nav-prefix {
  color: var(--text-muted);
}

.nav-file {
  color: var(--text-primary);
  font-weight: 500;
}

.nav-cursor {
  color: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.nav-actions {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
}

.progress-bar {
  height: 2px;
  background: var(--accent);
  width: var(--progress, 0%);
  box-shadow: var(--glow-sm);
}
```

### Dynamisches Verhalten (JS)

```javascript
// Pfad aktualisiert sich beim Scrollen
const chapterFiles = {
  'intro': '00-intro.md',
  'januar-schock': '01-januar.md',
  'reasoning-monopoly': '02-reasoning.md',
  'agentische-systeme': '03-agents.md',
  // ...
};

function updateNavPath(chapterId) {
  const pathEl = document.getElementById('current-path');
  pathEl.textContent = chapterFiles[chapterId] || '00-intro.md';
}
```

---

## 4. Content Card

```css
.content-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  max-width: var(--content-width);
  margin: 2rem auto;
  padding: 3rem;
}
```

---

## 5. Chapter

```html
<section id="agents" class="chapter">
  <span class="chapter-num">03</span>
  <h2 class="chapter-title">Agentische Systeme funktionieren</h2>
  <div class="tags">
    <span>[CLAUDE CODE]</span>
    <span>[AGENTS]</span>
    <span>[AMODEI]</span>
  </div>
  <div class="content">...</div>
</section>
```

```css
.chapter-num {
  color: var(--accent);
  font-size: var(--text-sm);
  font-weight: 600;
}

.chapter-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0.5rem 0 1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tags span {
  font-size: var(--text-xs);
  color: var(--text-muted);
  background: var(--bg-surface);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
}

.content p {
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}
```

---

## 6. Blockquote

```css
.quote {
  border-left: 3px solid var(--accent);
  background: var(--bg-surface);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 var(--radius) var(--radius) 0;
}

.quote p {
  font-style: italic;
  color: var(--text-primary);
}
```

---

## 7. Figure

```html
<figure class="figure">
  <div class="figure-box">
    <img src="..." alt="..." loading="lazy">
  </div>
  <figcaption>Figure 1. Beschreibung</figcaption>
</figure>
```

```css
.figure {
  margin: 2rem 0;
}

.figure-box {
  background: var(--bg-figure);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.figure-box img {
  max-width: 100%;
  height: auto;
}

.figure figcaption {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.75rem;
}
```

---

## 8. Audio Player (v1.2 - ConsolePlayer)

**Konzept**: System-Log-Stil statt Button-Look

```html
<footer class="console-player">
  <span class="console-prompt">></span>
  <span class="console-cmd">playing:</span>
  <a href="https://suno.com/playlist/..." class="console-track" target="_blank">
    trotzdem_v5.mp3
  </a>
  <span class="console-time">[02:14]</span>
  <div class="console-progress">
    <div class="console-progress-bar"></div>
  </div>
</footer>
```

```css
.console-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  z-index: 100;
}

.console-prompt {
  color: var(--accent);
}

.console-cmd {
  color: var(--text-muted);
}

.console-track {
  color: var(--text-primary);
  text-decoration: none;
}

.console-track:hover {
  color: var(--accent);
  text-decoration: underline;
}

.console-time {
  color: var(--text-dim);
}

.console-progress {
  flex: 1;
  max-width: 120px;
  height: 4px;
  background: var(--bg-surface);
  border-radius: 2px;
  margin-left: auto;
}

.console-progress-bar {
  height: 100%;
  width: 35%;
  background: var(--accent);
  border-radius: 2px;
  box-shadow: var(--glow-sm);
}
```

---

## 9. JavaScript

```javascript
// Progress Bar
addEventListener('scroll', () => {
  const p = scrollY / (document.body.scrollHeight - innerHeight) * 100;
  document.documentElement.style.setProperty('--progress', p + '%');
}, { passive: true });

// Active Chapter
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav a').forEach(a => {
        const isActive = a.hash === '#' + e.target.id;
        a.classList.toggle('active', isActive);
        a.textContent = isActive 
          ? `[ ${a.textContent.replace(/[\[\]]/g, '').trim()} ]` 
          : a.textContent.replace(/[\[\]]/g, '').trim();
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.chapter').forEach(c => obs.observe(c));

// Theme Toggle
document.querySelector('.theme-toggle').onclick = () => {
  const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = t;
  localStorage.theme = t;
};
```

---

## 10. Kapitel-Daten

| # | ID | Nav-Label | Tags |
|---|-----|-----------|------|
| 01 | reasoning | Reasoning | DEEPSEEK, MONOPOLY, TEST-TIME |
| 02 | agents | Agents | CLAUDE CODE, AMODEI, AMPLIFIKATION |
| 03 | exodus | Exodus | SUTSKEVER, LECUN, MURATI |
| 04 | infrastruktur | Infrastruktur | MANHATTAN, SANDERS, CHINA |
| 05 | scaling | Scaling | GEMINI 3, GPT-5, BENCHMARKS |
| 06 | context | Context | VIBE CODING, PROMPTOTYPING |
| 07 | research | Research | MCP, GENIE 3, AI-2027 |
| 08 | aji | AJI | MOLLICK, METAPHERN |
| 09 | expert | Expert | AI LITERACY, DHD, AGKI-PM |
| 10 | problems | Problems | HARD, EASY, ALIGNMENT |
| 11 | trotzdem | trotzdem | SUNO, ALBUM, REFLEXIV |

---

## 11. Bilder

| Datei | Kapitel | Figure # |
|-------|---------|----------|
| promptotyping-sphere.png | agents | 1 |
| vibe-coding-tweet.png | context | 2 |
| claude-screenshot.png | context | 3 |
| ami-agi-aji-asi.png | aji | 4 |
| hard-easy-problems.png | problems | 5 |

---

## 12. Changelog

| v1.0 → v1.1 | Änderung |
|-------------|----------|
| Active Nav | Background → [ Brackets ] |
| Layout | Flat → Content Card |
| Progress Bar | 2px → 3px |
| Audio Player | Outline → Solid Cyan |
| Figures | Caption → Figure 1. Nummerierung |
| Background | #18181b → #0f0f0f |

| v1.1 → v1.2 | Änderung |
|-------------|----------|
| Navigation | Tabs → Breadcrumb Path (`~/research/2025/03-agents.md█`) |
| Audio Player | Button → Console Log (`> playing: file.mp3 [02:14]`) |
| Typografie | Mixed → Strict Sans/Mono Separation |
| Farbpalette | Pure Black → Zinc Scale |
| Effects | Flat → Glow Effects (`box-shadow: var(--glow-sm)`) |
| Tags | Background Pills → Monospace Code Style |
| Cursor | None → Blinking Block Cursor in Nav |
| Borders | Simple → Panel-Style Borders (IDE-Vibe) |

---

## 13. Neue Komponenten (v1.2)

### BreadcrumbNav
- Ersetzt klassische Tab-Navigation
- Terminal-Pfad-Metapher: `~/research/2025/03-agents.md█`
- Blinkender Cursor am Ende
- Dynamisch via JS beim Scrollen aktualisiert

### ConsolePlayer
- Ersetzt Button-Style Audio Player
- System-Log-Ästhetik: `> playing: trotzdem_v5.mp3 [02:14]`
- Minimale Progress-Bar mit Glow

### Monospace Meta
- Alle Metadaten in Monospace: Kapitelnummern, Tags, Timestamps
- Tags als `code`-Style statt Pills
- Chapter Numbers: `01`, `02`, etc. in Monospace

### Glow Effects
- Subtile Cyan-Glows für aktive Elemente
- `--glow-sm`, `--glow-md`, `--glow-lg` als CSS-Variablen
- Angewendet auf: Progress Bar, Blockquotes, aktive Panels

---

*Code ist Wegwerf-Artefakt. Dieses Dokument ist die Source of Truth.*