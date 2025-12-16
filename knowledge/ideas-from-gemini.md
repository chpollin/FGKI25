# Optimierungsvorschläge: UI-Design & UX

## 1. Navigation & Header-Struktur
**Ziel:** Transformation von "Webseite" zu "Arbeitsumgebung/IDE".

* **Pfad-Metapher statt Tabs:** Ersetzen der klassischen Navigation (`Reasoning`, `Exodus`...) durch eine Breadcrumb-Logik im Terminal-Stil.
    * *Neu:* `~/research/2025/03-agents.md`
    * *Effekt:* Unterstreicht den Datei-Charakter des Blogs.
* **Active State:** Der aktive Pfad sollte weiß hervorgehoben sein, inaktive Pfade ausgegraut (Zinc-500).

## 2. Typografie-System
**Ziel:** Visuelle Trennung von Inhalt (Narrativ) und Struktur (Daten).

* **Schriftmischung:** Konsequente Nutzung von zwei Schriftarten.
    * **Monospace (JetBrains Mono/Geist Mono):** Ausschließlich für Metadaten, Tags (`[CLAUDE CODE]`), Navigation, Kapitelnummern (`03`) und Fußnoten.
    * **Sans-Serif (Inter/Geist Sans):** Ausschließlich für Überschriften und den Fließtext zur Wahrung der Lesbarkeit.

## 3. Komponenten-Design
**Ziel:** Integration von Medien als "Artefakte" statt als Fremdkörper.

* **Audio-Player (Suno):** Entfernen des Standard-Buttons ("Auf SUNO anhören").
    * *Ersatz:* Einbetten eines Players im "Console-Log"-Stil.
    * *Visual:* `> playing: trotzdem_v5.mp3 [02:14]` mit einer simplen Progress-Bar im ASCII- oder Minimal-Look.
* **Tags & Metadaten:** Die Tags unter der Headline kleiner gestalten und strikt in Monospace setzen, um wie Variablen in einem Frontmatter-Block zu wirken.

## 4. Atmosphäre & Feinschliff
**Ziel:** Erhöhung der Immersion ("Tech-Vibe").

* **Cursor-Effekt:** Hinzufügen eines blinkenden Block-Cursors am Ende der Header-Zeile (z.B. hinter `03-agents.md █`).
* **Glow-Effekte:** Nutzung der Akzentfarbe (Cyan) für subtile Schein-Effekte (`box-shadow`) bei aktiven Containern oder Selektionen, um Tiefe zu erzeugen.