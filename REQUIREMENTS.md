# REQUIREMENTS.md

## Funktionale Anforderungen

### F1: Kapitel-Navigation

**F1.1** Die Site zeigt 13 Kapitel in einer vertikalen Scroll-Struktur an.

**F1.2** Jedes Kapitel hat eine eigene visuelle Identität (Farbe, optional Animation).

**F1.3** Eine sticky Navigation zeigt den aktuellen Kapitel-Titel und ermöglicht direktes Springen.

**F1.4** Scroll-Snap sorgt für sauberes Einrasten auf Kapitel-Grenzen (optional, per User-Preference).

**F1.5** Der Scroll-Progress wird visuell angezeigt (Progress Bar oder Kapitel-Indikator).

---

### F2: Text-Darstellung

**F2.1** Der Markdown-Content wird als semantisches HTML gerendert.

**F2.2** Headlines, Paragraphen, Zitate und Listen sind klar differenziert.

**F2.3** Englische Zitate sind als Blockquotes mit Quellenangabe formatiert.

**F2.4** Inline-Links sind erkennbar und öffnen in neuem Tab (externe) oder scrollen (intern).

**F2.5** Die Leseposition wird beim Verlassen und Wiederkehren restored (localStorage).

---

### F3: Bild-Integration

**F3.1** Bilder laden lazy (erst wenn im Viewport).

**F3.2** Bilder haben Alt-Texte und Captions.

**F3.3** Bilder können per Click vergrößert werden (Lightbox).

**F3.4** Die abstrakte Linie (turbulence-line.svg) erscheint als Header und optionaler Trenner.

---

### F4: Audio-Integration

**F4.1** Ein sticky Audio-Player am unteren Rand der Site ermöglicht Album-Wiedergabe.

**F4.2** Der Player zeigt Track-Titel, Play/Pause, Progress, Lautstärke.

**F4.3** Tracks können manuell aus einer Playlist gewählt werden.

**F4.4** Optional: Automatische Track-Synchronisation mit Kapiteln (per User-Preference).

**F4.5** Der Player ist minimierbar/ausblendbar.

**F4.6** Audio läuft weiter beim Scrollen.

---

### F5: Interaktive Visualisierungen

**F5.1 AMI-AGI-AJI-ASI Diagramm**
- Zeigt vier Kategorien in einem 2x2 Grid
- Hover auf Kategorie zeigt Definition
- Click öffnet erweiterte Erklärung
- Animation beim Scrollen ins Kapitel

**F5.2 Hard/Easy Problems**
- Zeigt zwei Reihen von Gläsern (Hard: verschlossen, Easy: offen)
- Hover auf Glas zeigt Problem-Name und kurze Erklärung
- Click öffnet vollständige Beschreibung
- Visuelle Unterscheidung durch Farbe und Icon

**F5.3 Timeline (optional)**
- Horizontale Zeitleiste mit Ereignissen 2025
- Zoom-Funktion für Details
- Click auf Ereignis scrollt zum relevanten Kapitel
- Unterscheidung eigene Vorträge vs. externe Ereignisse

---

### F6: Dark Mode

**F6.1** Dark Mode ist der Default.

**F6.2** Ein Toggle ermöglicht Wechsel zu Light Mode.

**F6.3** Die Präferenz wird gespeichert (localStorage).

**F6.4** System-Präferenz wird beim ersten Besuch respektiert (prefers-color-scheme).

---

### F7: Suche (optional)

**F7.1** Ein Suchfeld ermöglicht Volltextsuche im Blog.

**F7.2** Suchergebnisse werden als Liste mit Kapitel-Kontext angezeigt.

**F7.3** Click auf Ergebnis scrollt zur Fundstelle.

---

### F8: Share und Zitation

**F8.1** Jedes Kapitel hat eine eigene URL (Anker-Link).

**F8.2** Share-Buttons ermöglichen Teilen auf Social Media.

**F8.3** Ein "Copy Citation" Button kopiert die BibTeX-Zitation.

---

## Nicht-Funktionale Anforderungen

### NF1: Performance

**NF1.1** First Contentful Paint < 1 Sekunde.

**NF1.2** Largest Contentful Paint < 2.5 Sekunden.

**NF1.3** Cumulative Layout Shift < 0.1.

**NF1.4** Time to Interactive < 3 Sekunden.

**NF1.5** Lighthouse Performance Score > 90.

**NF1.6** Keine externen JavaScript-Frameworks.

**NF1.7** Gesamtgröße < 2 MB (ohne Audio-Streaming).

---

### NF2: Accessibility

**NF2.1** WCAG 2.1 Level AA Konformität.

**NF2.2** Alle Bilder haben aussagekräftige Alt-Texte.

**NF2.3** Kontrastverhältnis mindestens 4.5:1 für Text.

**NF2.4** Vollständige Keyboard-Navigation möglich.

**NF2.5** Screen-Reader-kompatibel (ARIA-Labels wo nötig).

**NF2.6** Fokus-Indikatoren sichtbar.

**NF2.7** Audio-Player hat zugängliche Controls.

---

### NF3: Responsiveness

**NF3.1** Mobile-First Design.

**NF3.2** Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (large).

**NF3.3** Touch-optimierte Interaktionen auf Mobile.

**NF3.4** Audio-Player passt sich der Bildschirmbreite an.

**NF3.5** Visualisierungen sind auf Mobile vereinfacht oder scrollbar.

---

### NF4: Browser-Kompatibilität

**NF4.1** Unterstützte Browser: Chrome 90+, Firefox 90+, Safari 14+, Edge 90+.

**NF4.2** Kein IE11 Support.

**NF4.3** Graceful Degradation für ältere Browser (Basis-Funktionalität ohne Animationen).

---

### NF5: SEO

**NF5.1** Semantisches HTML (article, section, header, nav, etc.).

**NF5.2** Meta-Tags für Title, Description, OG-Tags.

**NF5.3** Strukturierte Daten (JSON-LD für BlogPosting).

**NF5.4** Sitemap.xml vorhanden.

**NF5.5** Canonical URL gesetzt.

---

### NF6: Wartbarkeit

**NF6.1** Klare Trennung von Content (Markdown), Struktur (HTML), Stil (CSS), Verhalten (JS).

**NF6.2** CSS Custom Properties für Theming.

**NF6.3** Kommentierter Code.

**NF6.4** Dokumentation aller Komponenten.

---

### NF7: Sicherheit

**NF7.1** Keine User-Eingaben (reine Static Site).

**NF7.2** Content Security Policy Header (via GitHub Pages beschränkt).

**NF7.3** Keine externen Scripts außer Fonts (optional self-hosted).

---

## Prioritäten

### Must Have (MVP)
- F1 Kapitel-Navigation
- F2 Text-Darstellung
- F3 Bild-Integration
- F6 Dark Mode
- NF1-NF4 (Performance, Accessibility, Responsive, Browser)

### Should Have
- F4 Audio-Integration
- F5.1 AMI-AGI-AJI-ASI Diagramm
- F5.2 Hard/Easy Problems
- F8 Share und Zitation
- NF5 SEO

### Could Have
- F4.4 Audio-Kapitel-Sync
- F5.3 Timeline
- F7 Suche
- Scroll-Snap (F1.4)

### Won't Have (v1)
- Kommentar-Funktion
- Newsletter-Signup
- Multi-Language Support
- PDF-Export

---

## Technische Constraints

**C1**: Hosting auf GitHub Pages (Static Files only, kein Server-Side Rendering).

**C2**: Keine Build-Pipeline erforderlich (Plain HTML/CSS/JS).

**C3**: Audio via SUNO Embed oder direkter Link (kein Self-Hosting der Audio-Files).

**C4**: Bilder müssen im Repository liegen (kein externes CDN).

**C5**: Maximale Repository-Größe beachten (GitHub Limit: 1GB empfohlen).

---

## Testkriterien

### Funktionale Tests

| ID | Test | Erwartetes Ergebnis |
|----|------|---------------------|
| T1.1 | Scroll durch alle Kapitel | Alle 13 Kapitel sichtbar, Navigation aktualisiert |
| T1.2 | Click auf Kapitel in Navigation | Smooth Scroll zum Kapitel |
| T2.1 | Blockquote-Darstellung | Visuell abgesetzt, Quelle sichtbar |
| T3.1 | Bild-Lazy-Loading | Bilder laden erst beim Scrollen |
| T3.2 | Lightbox | Click auf Bild öffnet Vergrößerung |
| T4.1 | Audio Play/Pause | Track startet/stoppt |
| T4.2 | Track-Wechsel | Anderer Track spielt |
| T5.1 | AJI-Diagramm Hover | Definition erscheint |
| T5.2 | Problem-Glas Click | Erklärung öffnet |
| T6.1 | Dark/Light Toggle | Farbschema wechselt |

### Performance Tests

| ID | Metrik | Ziel | Tool |
|----|--------|------|------|
| P1 | FCP | < 1s | Lighthouse |
| P2 | LCP | < 2.5s | Lighthouse |
| P3 | CLS | < 0.1 | Lighthouse |
| P4 | TTI | < 3s | Lighthouse |
| P5 | Score | > 90 | Lighthouse |

### Accessibility Tests

| ID | Test | Tool |
|----|------|------|
| A1 | WCAG Compliance | axe DevTools |
| A2 | Keyboard Navigation | Manual |
| A3 | Screen Reader | NVDA/VoiceOver |
| A4 | Color Contrast | Lighthouse |

### Cross-Browser Tests

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 120+ | Required |
| Firefox | 120+ | Required |
| Safari | 17+ | Required |
| Edge | 120+ | Required |
| Mobile Safari | iOS 17+ | Required |
| Chrome Android | 120+ | Required |

---

## Abnahmekriterien

**Inhalt**:
- [ ] Alle 13 Kapitel vollständig und korrekt dargestellt
- [ ] Alle 4 Bilder laden und haben Captions
- [ ] Audio-Player funktioniert mit SUNO-Playlist
- [ ] Alle internen Links funktionieren
- [ ] Alle externen Links öffnen korrekt

**Technik**:
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Keine Console-Errors
- [ ] Responsive auf allen Breakpoints
- [ ] Dark Mode funktioniert

**UX**:
- [ ] Lesefluss ungestört durch Animationen
- [ ] Navigation intuitiv
- [ ] Audio nicht störend (User-Kontrolle)
- [ ] Visualisierungen verständlich
