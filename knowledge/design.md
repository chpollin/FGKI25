# DESIGN.md – FGKI25 Research Blog v1.1

## Design-for-Frontend Specification

Source of Truth für "(Frontier-)Generative KI 2025". Kompakt, implementierungsnah.

---

## 1. Design Tokens

```css
:root {
  /* Backgrounds */
  --bg-app: #0f0f0f;
  --bg-card: #1a1a1e;
  --bg-surface: #27272a;
  --bg-elevated: #3f3f46;
  --bg-figure: #2a2a2e;
  
  /* Text */
  --text-primary: #e4e4e7;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  /* Accent */
  --accent: #22d3ee;
  --accent-hover: #67e8f9;
  
  /* Border */
  --border: #3f3f46;
  
  /* Typography */
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
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
}

[data-theme="light"] {
  --bg-app: #f5f5f5;
  --bg-card: #ffffff;
  --bg-surface: #f4f4f5;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --accent: #0891b2;
  --border: #e4e4e7;
}
```

---

## 2. Layout

```
┌──────────────────────────────────────────────────────────┐
│ NAV: Reasoning  Exodus  [Agents]  Infrastruktur ...  ☀☾ │
│ ████████████░░░░░░░░░░░░░░░░░░░░░░░  Progress Bar       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌────────────────────────────────────────────────┐     │
│   │  (Frontier-)Generative KI 2025                 │     │
│   │                                                │     │
│   │  03                                            │     │
│   │  Agentische Systeme funktionieren              │     │
│   │  [CLAUDE CODE] [AGENTS] [AMODEI]               │     │
│   │                                                │     │
│   │  Body text...                                  │     │
│   │                                                │     │
│   │  ┌──────────────────────────────────────┐      │     │
│   │  │ Blockquote mit Cyan-Border           │      │     │
│   │  └──────────────────────────────────────┘      │     │
│   │                                                │     │
│   │  ┌──────────────────────────────────────┐      │     │
│   │  │         [ Figure ]                   │      │     │
│   │  └──────────────────────────────────────┘      │     │
│   │  Figure 1. Caption text                        │     │
│   │                                                │     │
│   └────────────────────────────────────────────────┘     │
│                                                          │
│                              [▶ Auf SUNO anhören]  ←───── Sticky
└──────────────────────────────────────────────────────────┘
```

---

## 3. Navigation

```html
<nav class="nav">
  <a href="#reasoning">Reasoning</a>
  <a href="#agents" class="active">[ Agents ]</a>
  <a href="#exodus">Exodus</a>
  <a href="#infrastruktur">Infrastruktur</a>
  <a href="#scaling">Scaling</a>
  <a href="#context">Context</a>
  <a href="#research">Research</a>
  <a href="#aji">AJI</a>
  <a href="#expert">Expert</a>
  <a href="#problems">Problems</a>
  <a href="#trotzdem">trotzdem</a>
  <span class="nav-overflow">›</span>
  <div class="nav-actions">
    <button class="theme-toggle">☀</button>
  </div>
</nav>
<div class="progress-bar"></div>
```

```css
.nav {
  position: sticky;
  top: 0;
  height: var(--nav-height);
  background: var(--bg-card);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 1.5rem;
  overflow-x: auto;
  border-bottom: 1px solid var(--border);
}

.nav a {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  white-space: nowrap;
  text-decoration: none;
}

.nav a:hover { color: var(--text-primary); }

.nav a.active {
  color: var(--accent);
  font-weight: 500;
}

.nav-overflow {
  color: var(--text-muted);
  font-size: var(--text-lg);
}

.progress-bar {
  height: 3px;
  background: var(--accent);
  width: var(--progress, 0%);
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

## 8. Audio Player

```html
<a href="https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473" class="audio-btn" target="_blank">
  <span class="play-icon">▶</span>
  Auf SUNO anhören
</a>
```

```css
.audio-btn {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent);
  color: #000;
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.audio-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(34, 211, 238, 0.4);
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

---

*Code ist Wegwerf-Artefakt. Dieses Dokument ist die Source of Truth.*