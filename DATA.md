# DATA.md

## Inhaltsstruktur

### Blog-Text

**Quelle**: forschungsblog-2025-final.md  
**Wörter**: 4.635  
**Kapitel**: 13 (inkl. Einleitung und Schluss)  
**Sprache**: Deutsch mit englischen Fachbegriffen und Zitaten

### Kapitel-Daten

```yaml
chapters:
  - id: intro
    title: "Einleitung"
    words: ~300
    images: []
    audio: null
    color: null
    
  - id: januar-schock
    title: "Der Januar-Schock"
    words: ~280
    images: []
    audio: "System Prompt initializing..."
    color: "#f87171"
    keywords: ["DeepSeek", "R1", "Europa", "Effizienz"]
    
  - id: reasoning-monopoly
    title: "Das Reasoning-Monopoly"
    words: ~320
    images: []
    audio: null
    color: "#3b82f6"
    keywords: ["OpenAI", "o1", "o3", "Gemini", "Test-Time Compute", "Karpathy"]
    
  - id: agentische-systeme
    title: "Agentische Systeme funktionieren"
    words: ~450
    images: ["promptotyping-sphere.png"]
    audio: null
    color: "#4ade80"
    keywords: ["Claude Code", "Agents", "Amodei", "Expert:innen-Amplifikation"]
    
  - id: forscher-exodus
    title: "Die Forscher verlassen die Konzerne"
    words: ~400
    images: []
    audio: null
    color: "#fb923c"
    keywords: ["Sutskever", "SSI", "LeCun", "AMI", "Murati", "Periodic Labs"]
    
  - id: infrastruktur
    title: "Der Infrastruktur-Wettlauf"
    words: ~480
    images: []
    audio: "HALLELUJAH, THE GOD MACHINE!"
    color: "#6b7280"
    keywords: ["Manhattan Project", "Genesis Mission", "Sanders", "Hinton", "China"]
    
  - id: scaling
    title: "Scaling lebt weiter"
    words: ~420
    images: []
    audio: null
    color: "#22d3ee"
    keywords: ["Gemini 3", "GPT-5", "ARC-AGI", "Benchmarks", "Vector Programs"]
    
  - id: context-engineering
    title: "Von Prompt Engineering zu Context Engineering"
    words: ~520
    images: ["vibe-coding-tweet.png"]
    audio: "Prompt Engineer!"
    color: "#a855f7"
    keywords: ["Vibe Coding", "Karpathy", "Promptotyping", "Meta-Dimension"]
    
  - id: research-agents
    title: "Research Agents zwischen Hype und Praxis"
    words: ~420
    images: []
    audio: "Machine of loving grace"
    color: "#2dd4bf"
    keywords: ["OpenAI Timeline", "MCP", "Genie 3", "AI-2027", "Deep Research"]
    
  - id: aji
    title: "Artificial Jagged Intelligence"
    words: ~380
    images: ["ami-agi-aji-asi.png"]
    audio: "Ich predicte dich"
    color: "#fbbf24"
    keywords: ["AGI", "AJI", "Mollick", "LLM-Metaphern", "System 1.42"]
    
  - id: critical-expert
    title: "Critical Expert in the Loop"
    words: ~340
    images: []
    audio: null
    color: "#e8e8e8"
    keywords: ["AI Literacy", "Salzburg", "DHd", "AGKI-PM"]
    
  - id: hard-problems
    title: "Was offen bleibt"
    words: ~450
    images: ["hard-easy-problems.png"]
    audio: "Lost in the Vault"
    color: "#991b1b"
    keywords: ["Hard Problems", "Easy Problems", "Alignment", "Black Box"]
    
  - id: trotzdem
    title: "trotzdem"
    words: ~400
    images: ["album-cover.jpg"]
    audio: "Good morning Claude"
    color: "gradient"
    keywords: ["SUNO", "Album", "Promptotyping", "Reflexivität"]
    
  - id: schluss
    title: "Der konstruktive Imperativ"
    words: ~280
    images: []
    audio: null
    color: "gradient"
    keywords: ["Ja", "Nein", "Vielleicht", "Don't panic", "Learn"]
```

---

## Bild-Daten

```yaml
images:
  - id: promptotyping-sphere
    file: promptotyping-sphere.png
    alt: "Promptotyping-Konzept: Research Data, Domain Expertise und Context Engineering fließen zusammen"
    caption: "Promptotyping als Transformationsprozess. Aus dem Vortrag zur ÖAW AI Winter School 2026."
    chapter: agentische-systeme
    width: 800
    height: 600
    
  - id: vibe-coding-tweet
    file: vibe-coding-tweet.png
    alt: "Screenshot von Andrej Karpathys Tweet über Vibe Coding"
    caption: "Andrej Karpathy. Vibe Coding. Februar 2025."
    chapter: context-engineering
    width: 600
    height: 400
    link: "https://x.com/karpathy/status/1886192184808149383"
    
  - id: ami-agi-aji-asi
    file: ami-agi-aji-asi.png
    alt: "Vier Kategorien maschineller Intelligenz: AMI, AGI, AJI, ASI"
    caption: "Vier Kategorien maschineller Intelligenz. Aus dem AGKI-DH Webinar Oktober 2025."
    chapter: aji
    width: 800
    height: 600
    interactive: true
    
  - id: hard-easy-problems
    file: hard-easy-problems.png
    alt: "Hard Problems vs. Easy Problems als Gläser-Metapher"
    caption: "Hard Problems (strukturell) vs. Easy Problems (adressierbar). Aus dem AGKI-DH Webinar Oktober 2025."
    chapter: hard-problems
    width: 800
    height: 600
    interactive: true
    
  - id: turbulence-line
    file: turbulence-line.svg
    alt: "Abstrakte Linie mit Turbulenz in der Mitte"
    caption: null
    chapter: null
    usage: "header, separator"
    
  - id: album-cover
    file: album-cover.jpg
    alt: "Cover des Albums trotzdem"
    caption: null
    chapter: trotzdem
    width: 500
    height: 500
```

---

## Audio-Daten

```yaml
audio:
  playlist:
    url: "https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473"
    title: "trotzdem"
    artist: "Digital Humanities Craft Experiments"
    year: 2025
    genre: "Melodic Burnout Math-Rock"
    
  tracks:
    - id: 1
      title: "System Prompt initializing..."
      duration: null
      chapter_link: januar-schock
      mood: "ominous, building"
      
    - id: 2
      title: "Prompt Engineer!"
      duration: null
      chapter_link: context-engineering
      mood: "energetic, assertive"
      
    - id: 3
      title: "Lost in the Vault"
      duration: null
      chapter_link: hard-problems
      mood: "overwhelming, anxious"
      
    - id: 4
      title: "HALLELUJAH, THE GOD MACHINE!"
      duration: null
      chapter_link: infrastruktur
      mood: "ironic, epic"
      
    - id: 5
      title: "Ich predicte dich"
      duration: null
      chapter_link: aji
      mood: "unsettling, introspective"
      
    - id: 6
      title: "Machine of loving grace to control the human race"
      duration: null
      chapter_link: research-agents
      mood: "dystopian, melancholic"
      
    - id: 7
      title: "Good morning Claude"
      duration: null
      chapter_link: trotzdem
      mood: "ambivalent, closing"
```

---

## Timeline-Daten

```yaml
timeline:
  - date: "2025-01-27"
    event: "DeepSeek R1 veröffentlicht"
    type: "external"
    chapter: januar-schock
    
  - date: "2025-01"
    event: "Vortrag: Der DeepSeek-Schock"
    type: "own"
    chapter: januar-schock
    
  - date: "2025-02"
    event: "Karpathy prägt Vibe Coding"
    type: "external"
    chapter: context-engineering
    
  - date: "2025-03"
    event: "Amodei-Prognose: AI schreibt allen Code"
    type: "external"
    chapter: agentische-systeme
    
  - date: "2025-03"
    event: "DHd Bielefeld Panel und Workshop"
    type: "own"
    chapter: critical-expert
    
  - date: "2025-03"
    event: "SSI erreicht 32 Mrd. Bewertung"
    type: "external"
    chapter: forscher-exodus
    
  - date: "2025-07"
    event: "Sutskever wird CEO von SSI"
    type: "external"
    chapter: forscher-exodus
    
  - date: "2025-08"
    event: "Genie 3 veröffentlicht"
    type: "external"
    chapter: research-agents
    
  - date: "2025-10"
    event: "Sanders-Report: 100 Mio. Jobs"
    type: "external"
    chapter: infrastruktur
    
  - date: "2025-10"
    event: "Vortrag: Generative KI Sommer bis Herbst"
    type: "own"
    chapter: null
    
  - date: "2025-10"
    event: "Vortrag: Trust Us, We're Frontier-LLMs"
    type: "own"
    chapter: critical-expert
    
  - date: "2025-10"
    event: "AI-2027-Szenario veröffentlicht"
    type: "external"
    chapter: research-agents
    
  - date: "2025-11"
    event: "LeCun kündigt Meta-Abschied an"
    type: "external"
    chapter: forscher-exodus
    
  - date: "2025-11"
    event: "Sanders/Hinton Georgetown"
    type: "external"
    chapter: infrastruktur
    
  - date: "2025-11"
    event: "Genesis Mission Executive Order"
    type: "external"
    chapter: infrastruktur
    
  - date: "2025-11"
    event: "Workshop: Deep Research Graz"
    type: "own"
    chapter: research-agents
    
  - date: "2025-12"
    event: "Gemini 3 und GPT-5.2"
    type: "external"
    chapter: scaling
    
  - date: "2025-12"
    event: "MCP an Linux Foundation"
    type: "external"
    chapter: research-agents
    
  - date: "2025-12"
    event: "Keynote: Vibe Coding Leipzig"
    type: "own"
    chapter: context-engineering
    
  - date: "2025-12"
    event: "Dieser Blog"
    type: "own"
    chapter: null
```

---

## Personen-Daten

```yaml
people:
  - name: "Ilya Sutskever"
    org: "SSI"
    role: "CEO, Co-Founder"
    relevance: "Forscher-Exodus"
    quote: "We have one goal and one product: a safe superintelligence"
    
  - name: "Yann LeCun"
    org: "AMI (ex-Meta)"
    role: "Founder"
    relevance: "Forscher-Exodus, LLM-Kritik"
    quote: "Every cat is smarter than an LLM"
    
  - name: "Mira Murati"
    org: "Thinking Machines Lab"
    role: "Founder"
    relevance: "Forscher-Exodus"
    quote: null
    
  - name: "Andrej Karpathy"
    org: "Eureka Labs"
    role: "Founder"
    relevance: "Vibe Coding, Three Eras"
    quote: "I just see stuff, say stuff, run stuff, and copy paste stuff"
    
  - name: "Dario Amodei"
    org: "Anthropic"
    role: "CEO"
    relevance: "Code-Prognose"
    quote: "essentially all of the code"
    
  - name: "Bernie Sanders"
    org: "US Senate"
    role: "Senator"
    relevance: "Politische Dimension"
    quote: "Americans must fight back against billionaires"
    
  - name: "Geoffrey Hinton"
    org: "ex-Google"
    role: "Nobelpreisträger"
    relevance: "Politische Dimension"
    quote: null
    
  - name: "Ethan Mollick"
    org: "Wharton"
    role: "Professor"
    relevance: "AJI-Begriff, Co-Intelligence"
    quote: null
    
  - name: "François Chollet"
    org: "Google"
    role: "Researcher"
    relevance: "ARC-AGI, Intelligenz-Definition"
    quote: null
```

---

## Konzept-Daten

```yaml
concepts:
  hard_problems:
    - id: alignment
      name: "Alignment"
      description: "Sicherstellen, dass Systeme tun, was wir wollen"
      solvable: false
      
    - id: duck
      name: "Duck-Problem"
      description: "Unterscheidung zwischen echtem Verstehen und Simulation"
      solvable: false
      
    - id: blackbox
      name: "Black Box"
      description: "Intransparenz der Modell-Entscheidungen"
      solvable: false
      
    - id: no-responsible
      name: "Es-gibt-keine-wahre-verantwortungsvolle-Frontier-KI-Nutzung"
      description: "Jede Nutzung legitimiert das System"
      solvable: false
      
    - id: systemzwang
      name: "Systemzwangs-Problem"
      description: "Druck mitzumachen, auch wenn skeptisch"
      solvable: false
      
    - id: kraenkung
      name: "4. narzisstische Kränkung"
      description: "Maschine zeigt Simulierbarkeit menschlicher Fähigkeiten"
      solvable: false
      
  easy_problems:
    - id: kompetenzverfall
      name: "Kompetenzverfall"
      description: "Verlust untrainierter Fähigkeiten"
      addressable_by: "Curriculum-Design"
      
    - id: expert-loop
      name: "Braucht-Experten-in-der-Schleife"
      description: "Begrenzte Autonomie"
      addressable_by: "Ausbildung, Rollenklärung"
      
    - id: evaluation
      name: "Evaluierungs-Problem"
      description: "Benchmarks versagen oder werden obsolet"
      addressable_by: "Bessere Methoden"
      
    - id: kommunikation
      name: "Kommunikationslücken"
      description: "Wachsende Distanz Experten/Nutzer"
      addressable_by: "Bildung"
      
    - id: attribution
      name: "Attributions-Problem"
      description: "Verantwortung für generierte Inhalte"
      addressable_by: "Rechtliche Klärung"
      
    - id: integration
      name: "Integrations-Problem"
      description: "Einbindung in Workflows"
      addressable_by: "Design"
      
    - id: compute
      name: "Rechen- und Geld-Problem"
      description: "Ungleicher Zugang zu Compute"
      addressable_by: "Policy"

  llm_metaphors:
    - name: "Stochastic Parrots"
      author: "Bender/Gebru"
      description: "Statistische Imitatoren ohne Verständnis"
      
    - name: "Exotic Mind-Like Entities"
      author: "Shanahan"
      description: "Weder Mind noch Maschine"
      
    - name: "Strange New Minds"
      author: "Summerfield"
      description: "Emergente kognitive Phänomene"
      
    - name: "People Spirits"
      author: "Karpathy"
      description: "Simulatoren menschlicher Psychologie"
      
    - name: "Co-Intelligence"
      author: "Mollick"
      description: "Partner in Mensch-Maschine-Kollaboration"
      
    - name: "System 1.42"
      author: "Pollin"
      description: "Zwischen System 1 und System 2"
```

---

## Ressourcen-Links

```yaml
resources:
  own:
    - title: "AGKI"
      url: "https://chpollin.github.io/GM-DH"
      
    - title: "LLMDH"
      url: "https://chpollin.github.io/llmdh"
      
    - title: "YouTube Playlist"
      url: "https://youtube.com/playlist?list=PLaHADNRco7n3GKVUD8mAc36pXQ5pnJQVL"
      
    - title: "Zotero"
      url: "https://www.zotero.org/groups/5319178/agki-dh"
      
    - title: "System 1.42 Blog"
      url: "https://dhcraft.org/excellence/blog/System1-42"
      
    - title: "Vibe Coding Blog"
      url: "https://dhcraft.org/excellence/blog/Vibe-Coding"
      
    - title: "Album trotzdem"
      url: "https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473"
      
  external:
    - title: "Karpathy Vibe Coding Tweet"
      url: "https://x.com/karpathy/status/1886192184808149383"
```

---

## Validierung

**Datenintegrität**:
- [ ] Alle Kapitel haben eindeutige IDs
- [ ] Alle Bilder haben alt-Texte
- [ ] Alle Timeline-Events haben Datum und Kapitel-Referenz
- [ ] Alle Personen haben Org und Relevanz
- [ ] Alle Links sind aktuell

**Vollständigkeit**:
- [ ] Jedes Kapitel hat Keywords
- [ ] Audio-Track-Zuordnungen vollständig
- [ ] Konzept-Definitionen konsistent mit Blog-Text
