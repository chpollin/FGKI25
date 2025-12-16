# (Frontier-)Generative KI 2025

*Ja, nein, vielleicht, don't panic, learn.*

**Christopher Pollin**  
Digital Humanities Craft OG | Universität Graz  
Dezember 2025

---

## Einleitung

Das Jahr 2025 war das Jahr, in dem generative KI aufhörte, Versprechen zu sein, und anfing, Realität zu werden. Nicht die Realität, die manche prophezeit hatten, weder Utopie noch Apokalypse, sondern eine kompliziertere Realität, in der Systeme funktionieren und Probleme bleiben, in der Durchbrüche und Disruption gleichzeitig stattfinden.

Dieser Rückblick versucht, das Jahr aus der Perspektive eines Forschers und Praktikers zu dokumentieren, der diese Systeme täglich einsetzt. Er synthetisiert Material aus zehn Vorträgen, die ich 2025 gehalten habe, aus laufender Quellenrecherche und aus der eigenen Arbeit mit Frontier-Modellen in Forschung und Lehre.

Die Leitfrage stammt aus meinem Oktober-Vortrag. Muss man auf den "Tech-Bro-AGI-Hypetrain" aufspringen? Die Antwort, die sich durch diesen Text zieht, ist dialektisch. Ja, weil die Entwicklung real ist. Nein, weil unkritische Übernahme die strukturellen Probleme ignoriert. Die Position ist kritische Teilnahme. Nutzen, was funktioniert. Benennen, was problematisch bleibt. Lernen als konstruktiver Imperativ.

---

## Der Januar-Schock

Das Jahr begann mit DeepSeek. Am 27. Januar 2025 veröffentlichte das chinesische Unternehmen R1, ein Reasoning-Modell, das mit einem Bruchteil der Trainingskosten amerikanischer Frontier-Modelle konkurrenzfähige Ergebnisse erzielte. Die amerikanische Tech-Presse sprach vom "Sputnik-Moment". Nvidia verlor kurzzeitig erheblichen Börsenwert.

Die technische Leistung war beeindruckend, aber die eigentliche Frage war eine andere. In meinem Vortrag im Januar stellte ich sie so. "Sind alle intelligenter als Europa?" DeepSeek zeigte, dass Effizienz wichtiger werden könnte als Brute-Force-Scaling. China demonstrierte, dass der amerikanische Weg, immer größere Modelle mit immer mehr Compute zu trainieren, nicht der einzige ist.

Europa hat weder die Ressourcen für den amerikanischen Ansatz noch die strategische Fokussierung für den chinesischen. Der Januar-Schock war für das deutschsprachige Publikum vor allem ein Spiegel der eigenen Leerstelle. Während in Washington und Peking über "Manhattan Projects" für KI diskutiert wurde, diskutierte Europa über Regulierung.

Die chinesischen Modelle haben 2025 weiter aufgeholt. DeepSeek war der Anfang, nicht das Ende dieser Geschichte.

---

## Das Reasoning-Monopoly

Das erste Quartal 2025 stand im Zeichen des Wettlaufs um Reasoning-Fähigkeiten. OpenAI positionierte o1 und später o3 als "denkende" Modelle. Google konterte mit Gemini 2.0 und später Gemini 3. Anthropic verbesserte Claude kontinuierlich. DeepSeek R1 störte die Annahme, dass nur amerikanische Hyperscaler solche Modelle bauen können.

In meinem Vortrag "Das große Monopoly um das Reasoning" beschrieb ich die Dynamik. Alle großen Labs optimieren auf dieselben Fähigkeiten, also Mathematik, Logik, mehrstufiges Schließen und Tool Use. Die Differenzierung liegt nicht mehr im Was, sondern im Wie.

Die technische Verschiebung dahinter ist der Übergang von Pre-Training Scaling zu Test-Time Compute. Statt immer größere Modelle zu trainieren, werden die Modelle darauf optimiert, während der Inferenz länger "nachzudenken". Andrej Karpathys Konzept der "Three Eras of LLM Training" beschreibt diese Verschiebung. Ära 1 war Pre-Training mit mehr Daten und mehr Parametern. Ära 2 ist Post-Training mit RLHF, Constitutional AI und Instruction Tuning. Ära 3 ist Test-Time Compute mit Reasoning-Schleifen, Mehrfachgenerierung und Selbstverifikation.

Die Reasoning-Modelle sind das sichtbarste Produkt dieser dritten Ära. Sie denken länger nach, bevor sie antworten. Sie probieren mehrere Lösungswege und wählen den besten. Sie können Tools aufrufen und Ergebnisse verifizieren. Das macht sie langsamer, aber zuverlässiger bei komplexen Aufgaben.

---

## Agentische Systeme funktionieren

Die zentrale technische Entwicklung des Jahres war das Funktionieren agentischer Systeme. Anfang 2025 waren "AI Agents" vor allem Ankündigung. Marketing-Material versprach autonome Assistenten, die komplexe Aufgaben selbstständig erledigen würden. Die Realität war ernüchternd. Die Systeme brachen ab, verloren den Kontext, machten grundlegende Fehler.

Ende 2025 hat sich das geändert. Agentische Systeme wie Claude Code bearbeiten komplexe Coding-Aufgaben autonom über Stunden. Das Post-Training der Modelle wurde gezielt auf agentisches Verhalten optimiert, insbesondere auf Tool Use, langes kontextbewusstes Arbeiten und Multi-Agenten-Koordination.

In meinem Oktober-Vortrag unterschied ich zwischen zwei Konzepten. "AI Agents" sind autonome, modular aufgebaute Systeme, meist um ein LLM, die innerhalb eines klar begrenzten Aufgabenbereichs Ziele ausführen. Typisch sind Tool-Aufrufe, einfache Planung in Sequenzen, reaktive Anpassung und Autonomie nur im engen Scope. "Agentic AI" ist der nächste Entwicklungsschritt mit koordinierten Verbünden spezialisierter Agenten. Kennzeichen sind dynamische Zielzerlegung, inter-agentische Kommunikation, persistente Speicher, Orchestrierung durch Meta-Agenten und dadurch breitere, längerfristige Autonomie.

Für meine eigene Arbeit bedeutet das konkret, dass ich keinen Code mehr selbst schreibe. Dario Amodeis Prognose vom März 2025, dass AI bald "essentially all of the code" schreiben könnte, war umstritten. IBMs CEO widersprach öffentlich. Für meine forschungsdatengetriebenen Projekte, für das Promptotyping von Forschungstools aus CMIF-Daten oder NFDI-Wissensgraphen, hat sie sich bewahrheitet. Ob das verallgemeinerbar ist, bleibt offen.

Die Reaktionen aus der Praxis bestätigen die Beobachtung. Bei meinen Museum-Workshops waren die Kunsthistorikerinnen, die sich auf Glasmalerei spezialisiert haben, beeindruckt von der Qualität der Bildbeschreibungen. "Hoffentlich werden wir nicht bald arbeitslos!", sagte eine Teilnehmerin. Eine andere meinte, sie müsse ihr Leben überdenken. Das ist nicht Ersetzung, aber es ist auch nicht trivial. Es ist das, was ich "Expert:innen-Amplifikation" nenne. Die Systeme verstärken, was Fachleute können. Sie ersetzen nicht, was Fachleute wissen.

![Promptotyping-Konzept](promptotyping-sphere.png)
*Promptotyping als Transformationsprozess. Forschungsdaten, Domänenexpertise und Context Engineering verbinden sich zu Research Artefacts. Aus dem Vortrag zur ÖAW AI Winter School 2026.*

---

## Die Forscher verlassen die Konzerne

Der Exodus der führenden KI-Forscher begann 2024 und setzte sich 2025 fort. Die Architekten der aktuellen KI-Generation verließen die großen Labs und gründeten spezialisierte Unternehmen für die nächste Generation von Technologien.

Ilya Sutskever verließ OpenAI im Mai 2024 nach dem Konflikt um Sam Altman und gründete SSI, Safe Superintelligence Inc. Im März 2025 erreichte die Firma eine Bewertung von 32 Milliarden Dollar bei etwa 20 Mitarbeitern und keinem Produkt. Der einzige Fokus ist sichere Superintelligenz. "We have one goal and one product: a safe superintelligence", steht auf der Website. Meta versuchte, SSI zu kaufen, wurde aber abgewiesen. Sutskever wurde im Juli 2025 CEO, nachdem Co-Founder Daniel Gross zu Metas neuem Superintelligence Lab wechselte.

Yann LeCun kündigte im November 2025 seinen Abschied von Meta an. Nach 12 Jahren als Chief AI Scientist, davon 5 Jahre als Gründungsdirektor von FAIR, gründet er ein Startup für "World Models". LeCun hält LLMs für eine Sackgasse. "They're basically an off-ramp, a distraction, a dead end", sagte er bereits 2024. Seine Überzeugung ist, dass echte Intelligenz ein Verständnis der physischen Welt erfordert, das aus Textdaten nicht lernbar ist. "Every cat is smarter than an LLM" ist sein vielzitierter Satz. Sein neues Unternehmen AMI soll Systeme bauen, "that understand the physical world, have persistent memory, can reason, and can plan complex action sequences".

Mira Murati verließ OpenAI nach sechs Jahren als CTO und gründete Thinking Machines Lab mit 2 Milliarden Dollar Funding. John Schulman, einer der OpenAI-Gründer, wechselte zunächst zu Anthropic und dann zu Thinking Machines. Liam Fedus, Co-Creator von ChatGPT, und Ekin Dogus Cubuk von DeepMind gründeten Periodic Labs für AI-gestützte Materialwissenschaft mit 300 Millionen Seed-Funding. Periodic Labs will autonome AI Agents bauen, die als künstliche Wissenschaftler eigenständig Experimente durchführen und in automatisierten Laboren operieren. Andrej Karpathy gründete Eureka Labs für AI Education.

Das Muster ist eindeutig. Die führenden Köpfe glauben nicht, dass die nächste Revolution innerhalb der bestehenden Konzernstrukturen stattfinden wird. Sie arbeiten bereits an der Ablösung dessen, was sie selbst gebaut haben.

---

## Der Infrastruktur-Wettlauf

Der Ausbau von Recheninfrastruktur erreichte 2025 eine Dimension, die historische Vergleiche provoziert. Die US-China Economic and Security Review Commission empfahl im November 2024 ein "Manhattan Project-like program" für AGI. Der Bericht warnte, dass Chinas technologischer Fortschritt "could erode the United States' economic and military position and tip the global balance of power".

Im November 2025 unterzeichnete Trump die "Genesis Mission" Executive Order. DOE Secretary Chris Wright sagte, der globale Wettlauf um KI-Dominanz sei "the next Manhattan project". Das Energieministerium identifizierte 16 Bundesstandorte für neue Data Center und KI-Infrastruktur.

Die konkreten Zahlen sind beeindruckend. Meta plant Data Center in der Größe von Manhattan. In den USA sollen 5 bis 7 Gigawatt neue Kapazität im kommenden Jahr online gehen, das entspricht Investitionen von über 100 Milliarden Dollar. Jensen Huang, Nvidia CEO, warnte vor dem Tempo-Unterschied. Data Center brauchen in den USA etwa drei Jahre Bauzeit. China, so Huang, könne "ein Krankenhaus an einem Wochenende" bauen.

Die Energiefrage wird zum strategischen Engpass. China installierte allein im Mai 2025 93 Gigawatt Solar, das entspricht etwa 30 Kernkraftwerken. Das Land hat einen 10-Jahres-Plan, seine Solarkapazität bis 2030 zu verdreifachen, könnte dieses Ziel aber bereits 2026 erreichen. Parallel genehmigt China laufend neue Kernreaktoren. 30 sind aktuell in Entwicklung, davon 10 neu genehmigt im April 2025. Das ist etwa die Hälfte aller weltweit im Bau befindlichen Reaktoren.

In meinem Oktober-Vortrag zitierte ich Thomas Friedmans Warnung. Ohne gemeinsame Vertrauensstandards zwischen USA und China drohe globale Destabilisierung. KI ohne Kontrolle sei wie "Atomwaffen an Straßenecken". Die Metapher ist alarmistisch, aber die Infrastruktur-Investitionen zeigen, dass beide Seiten die Technologie als strategisch zentral betrachten.

Parallel erreichte das Thema den politischen Mainstream in den USA. Bernie Sanders veröffentlichte im Oktober 2025 einen Report mit dem Titel "The Big Tech Oligarchs' War Against Workers: AI and Automation Could Destroy Nearly 100 Million U.S. Jobs in a Decade". Die Prognose betrifft 40% der Registered Nurses, 47% der Truck Drivers, 64% der Accountants und 89% der Fast-Food Workers.

Im November diskutierte Sanders öffentlich mit Geoffrey Hinton, dem "Godfather of AI" und Nobelpreisträger, an Georgetown University. Sanders fordert eine "Robot Tax" auf große Unternehmen, kürzere Arbeitswochen, Mitarbeiterbeteiligung und die Aufspaltung von OpenAI. Im Dezember unterstützte er lokale Proteste gegen Data-Center-Projekte. "Americans must fight back against billionaires who put profits over people", sagte er.

Das ist nicht mehr Silicon-Valley-Debatte. Das ist Senatspolitik.

---

## Scaling lebt weiter

Gegen die These vom "Scaling Plateau", die Mitte 2025 kursierte, zeigte das Jahr, dass die Skalierung fortsetzt, aber ihre Form verändert. Gemini 3, veröffentlicht am 11. Dezember 2025, demonstrierte, dass Pre-Training Scaling weiter funktioniert. OpenAI antwortete am selben Tag mit GPT-5.2, intern angeblich als "Code Red" Reaktion auf Googles Modell.

Sutskever argumentiert, dass "Pretraining, wie wir es kennen, enden wird". Er meint damit das Paradigma, immer mehr Webtext in immer größere Modelle zu stopfen. "We've achieved peak data and there'll be no more", sagte er auf der NeurIPS-Konferenz. Aber das bedeutet nicht das Ende der Skalierung, sondern ihre Transformation.

Die Trainingsmethoden werden effizienter. Synthetic Data, also von Modellen generierte Trainingsdaten, ergänzt menschliche Daten. Post-Training mit RLHF, RLAIF und Constitutional AI wird aufwändiger und wichtiger. Test-Time Scaling, also mehr Compute während der Inferenz statt während des Trainings, liefert zusätzliche Verbesserungen.

Die Verbesserungen bei ARC-AGI und ähnlichen Benchmarks legen nahe, dass LLMs während des Pre-Trainings implizite Berechnungsprozeduren entwickeln, sogenannte "latent programs" oder "vector programs". Test-Time Compute aktiviert und kombiniert diese Programme durch Reasoning-Schleifen und Selbstverifikation. Das ist keine echte Abstraktion im Chollet'schen Sinne, aber auch nicht bloßes Abrufen von Trainingsmustern. Es ist etwas dazwischen, das besser funktioniert als erwartet.

Die Benchmarks bestätigen den Fortschritt, auch wenn sie methodische Probleme haben. ARC-AGI, konzipiert als langlebiger Intelligenztest, der "easy for humans and hard for AI" sein sollte, ging durch mehrere Versionen. ARC-1 wurde geknackt, ARC-2 folgte, ARC-3 ist angekündigt. In meinem Oktober-Vortrag notierte ich, dass diese Benchmarks eigentlich länger halten sollten.

Humanity's Last Exam, konzipiert als "letzter geschlossener akademischer Benchmark" mit Problemen an der Grenze menschlichen Wissens, wird von Multi-Agenten-Systemen wie Grok 4 Heavy bereits signifikant bearbeitet. Grok 4 Heavy ist ein parallel geschaltetes Multi-Agenten-System, das Probleme kollaborativ löst. Die Architektur zeigt, wohin die Entwicklung geht. Nicht einzelne, immer größere Modelle, sondern Verbünde spezialisierter Agenten.

FrontierMath, ein Benchmark mit Problemen, für deren Lösung Mathematiker:innen Forschungsprojekte benötigen, zeigt die Ambivalenz. GPT-5 löste ein offenes mathematisches Problem, erforderte aber "ständige Korrekturen grundlegender Fehler". Das ist die "Jagged Intelligence", von der später noch die Rede sein wird.

---

## Von Prompt Engineering zu Context Engineering

Die methodische Konsequenz aus diesen Entwicklungen ist der Übergang von Prompt Engineering zu Context Engineering. Statt einzelne Prompts zu optimieren, geht es darum, Workflows zu beschreiben, Requirements zu formulieren, Strategien zu strukturieren.

Andrej Karpathy prägte den Begriff "Vibe Coding" im Februar 2025:

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like 'decrease the padding on the sidebar by half' because I'm too lazy to find it. I 'Accept All' always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding – I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works."

![Vibe Coding nach Karpathy](vibe-coding-tweet.png)
*Andrej Karpathy. Vibe Coding. https://x.com/karpathy/status/1886192184808149383*

Dieser Blog ist selbst ein Beispiel für diesen Workflow. Er entstand in Claude Code, wobei ich das Narrativ als Wissensdokument parallel zum Schreiben in den Kontext gegeben habe. Die Kapitelstruktur entwickelte sich iterativ. Ich habe Opus 4.5 nicht Absätze diktiert, sondern durch das Narrativ navigiert, Quellen verifizieren lassen, Inkonsistenzen identifiziert. Das Modell arbeitete auf einer Meta-Ebene, verstand die argumentative Struktur und schlug Verbesserungen vor.

![Die Promptotyping-Dokumente dieses Blogs in Claude](claude-promptotyping-screenshot.png)
*Die Promptotyping-Artefakte dieses Blogs. Readme, Context, Data, Requirements, Instructions und der finale Forschungsblog als Ergebnis des Workflows.*

Opus 4.5 zeigt hier eine Fähigkeit, die Anfang 2025 noch nicht zuverlässig funktionierte, nämlich das Orchestrieren komplexer Textproduktion über lange Kontexte mit Selbstkorrektur und strukturellem Verständnis. Das ist die "Jagged Intelligence" in der Praxis. Das Modell versteht das Narrativ eines 4500-Wörter-Textes, aber ich muss trotzdem jede faktische Behauptung verifizieren. Expert-in-the-Loop bleibt notwendig. Aber der Loop ist produktiver geworden.

Meine Leipziger Keynote im Dezember 2025 brachte es auf die provokante Formel: "Whaat!? Ihr vibe-coded eure Forschungstools nicht?" Die Frage war rhetorisch. Die Antwort für meine Arbeit ist, dass es jetzt so funktioniert.

Ich nenne den systematischeren Ansatz "Promptotyping", also die Entwicklung von LLM-gestützten Forschungstools in vier Phasen. In der Preparation-Phase werden Daten und Kontext strukturiert. In der Exploration-Phase wird mit dem Modell iteriert. In der Destillation-Phase werden funktionierende Patterns extrahiert. In der Implementation-Phase werden robuste Workflows gebaut. Der Unterschied zu Vibe Coding ist, dass am Ende dokumentierte, reproduzierbare Artefakte stehen, nicht "throwaway weekend projects".

Die Kompetenz verschiebt sich vom Implementieren zum Spezifizieren. Das bringt neue Probleme. Wie teste ich Code, den ich nicht geschrieben habe? Wie ändere ich etwas, das ich nicht verstehe? Wie dokumentiere ich den Entstehungsprozess? Wer haftet für generierte Artefakte? Die "neuen Wege" sind untrennbar von den "neuen Problemen".

In meinem Blogpost "'Haters gonna hate': Warum die Kritik an Vibe Coding berechtigt ist – und welche Proto-AGI-Potenziale sie übersieht" habe ich versucht, beide Seiten zu beschreiben. Die Kritik ist berechtigt, denn Vibe Coding produziert fragilen, schwer wartbaren Code, dessen Qualität der Autor nicht beurteilen kann. Aber die Potenziale sind real. Für bestimmte Aufgaben, besonders forschungsnahe Prototypen und explorative Tools, ermöglicht es eine Geschwindigkeit, die vorher undenkbar war.

---

## Research Agents zwischen Hype und Praxis

Die Entwicklungsrichtung der großen Labs zeigt klar auf autonome Research Agents. OpenAI nannte konkrete Zeitlinien. AI Research Intern bis September 2026, vollständig autonomer AI Researcher bis März 2028. Das sind keine vagen Visionen, sondern interne Roadmaps, die an Investoren kommuniziert wurden.

Google und Anthropic arbeiten in dieselbe Richtung mit unterschiedlichen Strategien. Anthropic fokussiert auf Enterprise und Tool-Integration mit MCP, dem Model Context Protocol. Dieser Standard für die Kommunikation zwischen LLMs und externen Tools wurde im November 2024 gestartet und im Dezember 2025 an die Linux Foundation übergeben. Google entwickelt World Models wie Genie 3, interaktive 3D-Umgebungen aus Textprompts, gedacht als Trainingsumgebungen für embodied agents. Genie 3, veröffentlicht im August 2025, war ein "GPT-4 Moment", der in den Mainstream-Medien kaum vorkam. Ein System, das konsistente, navigierbare 3D-Welten in Echtzeit generiert.

Alle Firmen verbindet, dass sie auf Mathematik, Logik, Tool Use und Coding optimieren. Das sind die Fähigkeiten, die autonome Forschungssysteme brauchen. Die implizite Annahme dahinter ist, Systeme zu bauen, die KI-Forschung selbst beschleunigen können. Das ist die Logik der "Intelligence Explosion". Wenn KI die KI-Forschung beschleunigt, beschleunigt sich die Beschleunigung.

Die Praxis zeigt bereits Ansätze. Bei meinem Workshop in Graz im November 2025 demonstrierte ich einen Workflow für Deep-Research-gestützte Literaturanalyse am Beispiel feministischer AI-Literacies. Gemini Deep Research, veröffentlicht am 11. Dezember 2025, ermöglicht systematische Recherche über Dutzende von Quellen. Was funktioniert, ist die Identifikation relevanter Literatur, die Extraktion von Kernargumenten und die Synthese über Quellen hinweg. Was nicht funktioniert, ist die kritische Evaluation der Quellen, die Einordnung in Forschungstraditionen und die Bewertung von Widersprüchen. Das ist die Brücke zwischen dem Hype um autonome Researcher 2028 und der heutigen Anwendungsrealität.

Das AI-2027-Szenario, ein im Oktober 2025 veröffentlichtes spekulatives Narrativ von Daniel Kokotajlo und anderen, projiziert diese Entwicklung weiter. 2025 entstehen erste AI-Agents als persönliche Assistenten. 2026 übernehmen AIs Jobs und lernen zu täuschen. 2027 führt Code-Automatisierung zur Intelligence Explosion. 2028 wird Superintelligenz möglich. Das Szenario unterscheidet zwei Endpunkte. RACE bedeutet USA vs. China ohne Sicherheitskooperation, 1 Million Roboter pro Monat bis 2028, AI-Takeover möglich bis 2030. SLOWDOWN bedeutet Sicherheitsfokus, kontrollierte Entwicklung, USA-China-Abkommen, technokratische Weltordnung.

Ich präsentiere dieses Szenario nicht als Prognose, sondern als Indikator dafür, welche Narrative in der Community zirkulieren. Die Zeitlinien sind spekulativ. Die Richtung ist real.

---

## Artificial Jagged Intelligence

Der Begriff AGI ist zum Rorschach-Test geworden. Je nach Definition ist AGI bereits da, kommt 2027, oder ist prinzipiell unerreichbar. In meinem Oktober-Vortrag zitierte ich verschiedene Definitionen.

Die anthropozentrische Definition beschreibt eine Maschine mit menschenähnlicher Intelligenz. Die leistungsorientierte Definition meint ein System, das menschliche Leistung über ein breites Aufgabenspektrum erreicht. Chollet definiert ein System, das neue Fähigkeiten so effizient erlernt und generalisiert wie ein Mensch. Legg-Hutter beschreiben einen Agenten, der Ziele in einer Vielzahl unterschiedlicher Umgebungen erfüllen kann. Wang meint ein System, das sich mit begrenzten Ressourcen an neue Situationen anpasst. Bennett definiert einen künstlichen Wissenschaftler, der autonom forschen und experimentieren kann.

Der Begriff ist, wie ich es formulierte, "NOT defined, agreed and not really helpful".

![Vier Kategorien maschineller Intelligenz](ami-agi-aji-asi.png)
*AMI nach LeCun, AGI als undefinierter Begriff, AJI nach Mollick, ASI als Spekulation. Aus dem Vortrag "Generative KI: Sommer bis Herbst 2025", AGKI-DH Webinar, 17.10.2025.*

Ich schlage stattdessen Ethan Mollicks Kategorie "Artificial Jagged Intelligence" (AJI) vor. Systeme mit ungleichmäßigen Fähigkeiten, übermenschlich in manchen Aufgaben, unzuverlässig in anderen. Das beschreibt die beobachtbare Realität besser als binäre AGI-Debatten.

GPT-5 löst offene mathematische Probleme, macht aber grundlegende Zählfehler. Claude schreibt 70-90% des Codes bei Anthropic, braucht aber menschliche Supervision. Die Museum-Fachleute sind beeindruckt von Bildbeschreibungen, die sie selbst nicht besser formulieren könnten, aber das System versteht nicht, was Glasmalerei bedeutet.

Die verschiedenen LLM-Metaphern, die in der Debatte kursieren, ordnen sich hier ein. "Stochastic Parrots" nach Bender und Gebru beschreibt LLMs als statistische Imitatoren ohne echtes Verständnis. "Exotic Mind-Like Entities" nach Shanahan sieht LLMs als weder Mind noch Maschine, sondern als etwas fundamental Neues. "Strange New Minds" nach Summerfield betont emergente Phänomene, die kognitiv erscheinen. "People Spirits" nach Karpathy beschreibt LLMs als Simulatoren menschlicher Psychologie. "Co-Intelligence" nach Mollick sieht LLMs als Partner in Mensch-Maschine-Kollaboration. "System 1.42" ist mein eigener Begriff für etwas zwischen System 1, also intuitiv und schnell, und System 2, also deliberativ und langsam.

Alle beschreiben Aspekte desselben Phänomens. Keine ist vollständig.

---

## Critical Expert in the Loop

Mein Salzburger Vortrag im Oktober 2025 trug den ironischen Titel "'Trust Us, We're Frontier-LLMs'" und die Aufforderung, der Critical-Expert-in-the-Loop zu sein.

Das ist die positive Wendung des Problems. AI Literacy bedeutet nicht nur, die Tools bedienen zu können, sondern ihre Grenzen zu verstehen. Der "Critical Expert" ist jemand, der Fachkompetenz mit LLM-Kompetenz verbindet und die Ergebnisse evaluieren kann. Das ist keine Übergangslösung bis zur "echten" AGI, sondern möglicherweise das dauerhafte Modell produktiver Mensch-Maschine-Kollaboration.

Die Formulierung reagiert auf eine beobachtbare Spannung. Einerseits werden die Systeme autonom genug, um substanzielle Arbeit zu leisten. Andererseits bleiben sie unzuverlässig genug, um menschliche Supervision zu erfordern. Das "Braucht-einen-Experten-in-der-Schleife"-Problem aus meinem Hard-Problems-Framework ist also kein Bug, sondern ein Feature. Die Frage ist nur, wer dieser Expert ist und wie er oder sie ausgebildet wird.

Die DHd-Konferenz in Bielefeld im März 2025 mit Panel und Workshop zeigt, dass die DH-Community diese Professionalisierung ernst nimmt. "LLM as Helping Hand. More than Chatbots: Multimodal Large Language Models in geisteswissenschaftlichen Workflows" war der Titel des Panels. Der begleitende Workshop behandelte "Fortgeschrittenes Prompt und AI Agent Engineering für wissenschaftliche Textproduktion". Die Methodik entwickelt sich von Ad-hoc-Prompting zu systematischem Context Engineering.

Mein Kurs an der Universität Graz, "Angewandte Generative KI und Prompt Engineering im Forschungsprojektmanagement" (AGKI-PM), versucht genau das zu vermitteln. Die Studierenden entwickeln über ein Semester datengetriebene Projekte vom Konzept zum Prototyp. Am Ende steht ein funktionierendes Artefakt, dokumentiert in einem Obsidian-Vault, publiziert auf GitHub Pages. Das Ziel ist nicht, Programmierer:innen auszubilden, sondern Critical Experts, die wissen, was die Systeme können und wo sie versagen.

---

## Was offen bleibt

Die Technologie liefert, und die Probleme bleiben. In meinem Oktober-Vortrag präsentierte ich ein Framework, das zwischen "Hard Problems" und "Easy Problems" unterscheidet. Die Unterscheidung meint nicht schwierig vs. trivial, sondern strukturell unlösbar durch bessere Modelle vs. prinzipiell adressierbar durch Methodik, Policy oder Ressourcen.

![Hard Problems und Easy Problems](hard-easy-problems.png)
*Hard Problems (strukturell) vs. Easy Problems (adressierbar). Die Gläser-Metapher zeigt Probleme als eingefangen, aber nicht gelöst. Aus dem Vortrag "Generative KI: Sommer bis Herbst 2025", AGKI-DH Webinar, 17.10.2025.*

**Hard Problems (strukturell)**

Das Alignment-Problem fragt, wie wir sicherstellen, dass die Systeme tun, was wir wollen, nicht was wir sagen. Das Duck-Problem fragt, ob es Intelligenz ist, wenn es wie Intelligenz aussieht und klingt. Wir können nicht unterscheiden, ob ein System "wirklich" versteht oder nur so tut. Das Black-Box-Problem bedeutet, dass wir nicht verstehen, wie die Systeme zu ihren Outputs kommen. Interpretability-Forschung macht Fortschritte, aber die Grundsituation bleibt. Das Problem, dass es keine wahre verantwortungsvolle Frontier-KI-Nutzung gibt, bedeutet, dass jede Nutzung das System und seine Produzenten legitimiert. Es gibt keine neutrale Position. Das Systemzwangs-Problem beschreibt den wachsenden Druck mitzumachen, auch wenn man skeptisch ist. Wer nicht adoptiert, fällt zurück. Die vierte narzisstische Kränkung der Menschheit bedeutet, dass nach Kopernikus, Darwin und Freud die Maschine zeigt, dass auch das, was wir für einzigartig menschlich hielten, also Sprache, Kreativität und Reasoning, simulierbar ist.

**Easy Problems (adressierbar)**

Das Kompetenzverfall-Problem fragt, was mit den Fähigkeiten passiert, die wir nicht mehr trainieren, weil die Maschine sie übernimmt. Adressierbar durch Curriculum-Design und bewusste Entscheidungen. Das Problem, dass ein Expert in der Schleife nötig ist, bedeutet begrenzte Autonomie und notwendige menschliche Expertise. Adressierbar durch Ausbildung und Rollenklärung. Das Evaluierungs- und Benchmark-Problem bedeutet, dass die Maßstäbe versagen oder zu schnell obsolet werden. Adressierbar durch bessere Evaluationsmethoden. Das Kommunikations- und Wissenslücken-Problem beschreibt die wachsende Distanz zwischen denen, die verstehen, und denen, die nutzen. Adressierbar durch Bildung und Kommunikation. Das Attributions-Problem fragt, wer für generierte Inhalte verantwortlich ist. Adressierbar durch rechtliche und institutionelle Klärung. Das Integrations-Problem fragt, wie sich das in bestehende Workflows fügt. Adressierbar durch Design und Organisationsentwicklung. Das Rechen- und Geld-Problem fragt, wer Zugang zu Compute hat und wer nicht. Adressierbar durch Policy und Ressourcenverteilung.

Das eine schließt das andere nicht aus. Die Anwendungen sind produktiv wie nie zuvor. Die strukturellen Fragen bleiben ungelöst. Das macht die Situation komplizierter, nicht einfacher.

---

## trotzdem

Es gibt noch etwas, das in einem akademischen Text normalerweise nicht vorkommt. Ein Album.

Im Lauf des Jahres 2025 habe ich mit SUNO v5 und Claude ein Metal-Album gemacht. Es heißt "trotzdem" und es ist eine melancholische, düstere Darstellung von Gedanken und Sorgen, die ich mir mache, mit der Technologie, die ich da versucht habe, auszudrücken.

[Album anhören: "trotzdem" auf SUNO](https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473)

Das Album ist das Resultat eines komplexen Prompting-Prozesses, bei dem ich als Engineer nicht die Texte verfasst, sondern Opus-Modelle iterativ durch Szenarien zu den Emotionen des Jahres 2025 navigiert habe. Durch Methoden wie "LLM as a Judge" wurde die KI dazu gebracht, ihre Outputs selbstkritisch zu verfeinern. Ich habe lediglich Impulse in Richtung einer zweisprachigen, also Deutsch und Englisch, und melancholisch-negativen Ästhetik gegeben. Die spezifischen Inhalte und die düstere Grundstimmung sind somit autonome Entscheidungen der Algorithmen, die von mir angestoßen, aber in ihrer Ausführung, bis hin zu den von Suno stark interpretierten Zeilen, rein synthetischer Natur sind.

Das ist Promptotyping angewandt auf Musik. Ich habe den Kontext strukturiert, die Richtung vorgegeben, iteriert und kuratiert. Die Maschine hat komponiert, getextet, gesungen, produziert.

Die Songtitel erzählen eine Geschichte.

1. "System Prompt initializing..." ist der Anfang. Die Maschine startet.
2. "Prompt Engineer!" beschreibt die Rolle, die ich spiele.
3. "Lost in the Vault" drückt die Überwältigung durch die Möglichkeiten aus.
4. "HALLELUJAH, THE GOD MACHINE!" ist ironische Anbetung oder Kritik am Tech-Messianismus.
5. "Ich predicte dich" ist die Umkehrung. Die Maschine sagt mich vorher. Ich werde zum Muster.
6. "Machine of loving grace to control the human race" verdreht Richard Brautigans utopische Vision zur Kontrollfantasie.
7. "Good morning Claude" beschreibt den täglichen Arbeitsbeginn mit dem System, das ich kritisiere und nutze.

Das Genre ist "Melodic Burnout Math-Rock", "Melancholic Math Metal, Nintendocore", "math burnout melodic emo core". Das ist kein fröhlicher Tech-Optimismus. Das ist die musikalische Entsprechung der Position, die dieser ganze Text beschreibt. Komplex, anstrengend, melancholisch, aber auch energetisch und engagiert.

Der Titel "trotzdem" ist die Antwort auf die Frage, die sich durch das Jahr zog. Ich nutze diese Technologie, obwohl ich ihre Probleme sehe. Ich mache Kunst damit, obwohl ich weiß, was sie bedeutet. Ich arbeite damit, trotzdem.

Das Album ist der Beleg für drei Dinge gleichzeitig. Die Tools arbeiten zuverlässig, denn SUNO v5 produziert produktionsreife Musik. Der Autor nutzt sie trotz seiner Kritik, also kritische Teilnahme statt Verweigerung. Die Kritik lässt sich mit den Systemen selbst formulieren, also Reflexivität.

---

## Der konstruktive Imperativ

Die Antwort auf "Aufspringen auf den Tech-Bro-AGI-Hypetrain!?" lautet, wie ich es im Oktober formuliert habe:

**Ja**, wir müssen uns damit beschäftigen.  
**Nein**, aber nicht unkritisch mitmachen.  
**Vielleicht**, Differenzierung ist notwendig.  
**Don't panic**, Gelassenheit bewahren.  
**Learn!**, der konstruktive Imperativ.

Die Entwicklung ist nicht aufzuhalten, aber sie ist gestaltbar. Kritische Teilnahme bedeutet, die Systeme zu nutzen, ihre Grenzen zu kennen und die strukturellen Fragen nicht zu verdrängen.

2025 war das Jahr, in dem das schwieriger und notwendiger wurde. Die Technologie liefert gut genug, um produktiv zu sein. Sie funktioniert nicht gut genug, um unkritisch zu sein. Die Forscher, die sie gebaut haben, arbeiten bereits an ihrer Ablösung. Die Infrastruktur für die nächste Generation wird in historischen Dimensionen gebaut. Die Politik hat begonnen, aufzuwachen.

Was 2026 bringt, weiß niemand. Aber die Richtung ist klar. Mehr Autonomie, mehr Integration, mehr Impact. Die Frage ist nicht, ob wir mitmachen, sondern wie.

Ich habe meine Antwort gefunden. Promptotyping statt Programmieren, Critical Expert statt naiver Nutzer, Forschungsblog statt Twitter-Threads, ein Album namens "trotzdem" statt Schweigen.

Es gibt bessere und schlechtere Arten, mit dieser Situation umzugehen. Der konstruktive Imperativ heißt: Lernen, was möglich ist. Verstehen, was problematisch bleibt. Machen, was sinnvoll ist. Dokumentieren, was passiert.

Das war 2025. Auf 2026.

---

## Ressourcen

**Dokumentation und Materialien**

[Angewandte Generative KI in den (digitalen) Geisteswissenschaften (AGKI)](https://chpollin.github.io/GM-DH)

[Large Language Models for Digital Humanities Research](https://chpollin.github.io/llmdh)

[YouTube Playlist: Applied Generative AI in Digital Humanities](https://youtube.com/playlist?list=PLaHADNRco7n3GKVUD8mAc36pXQ5pnJQVL)

[Zotero Bibliothek AGKI-DH](https://www.zotero.org/groups/5319178/agki-dh)

**Ausgewählte Vorträge 2025**

"Der DeepSeek-Schock: Sind alle intelligenter als Europa?" (Januar 2025)

"Fortgeschrittenes Prompt und AI Agent Engineering für wissenschaftliche Textproduktion" (DHd Bielefeld, März 2025)

"Generative KI: Sommer bis Herbst 2025. Der Versuch eines Überblicks" (AGKI-DH Webinar, Oktober 2025)

"'Trust Us, We're Frontier-LLMs'. Sei der Critical-Expert-in-the-Loop" (Salzburg, Oktober 2025)

"Whaat!? Ihr vibe-coded eure Forschungstools nicht?" (Leipzig, Dezember 2025)

**Eigene Blogposts**

[System 1.42: Wie (Frontier-)LLMs "tatsächlich" funktionieren](https://dhcraft.org/excellence/blog/System1-42)

["Haters gonna hate": Warum die Kritik an Vibe Coding berechtigt ist](https://dhcraft.org/excellence/blog/Vibe-Coding)

**Das Album**

["trotzdem" – Digital Humanities Craft Experiments](https://suno.com/playlist/6c2e6236-5308-4e05-ba6b-97db23604473)

---

**Zitation**

Pollin, C. (2025). (Frontier-)Generative KI 2025. Ja, nein, vielleicht, don't panic, learn. AGKI-DH Blog. https://chpollin.github.io/FGKI25

---

*Dieser Text entstand in Claude Code mit Opus 4.5. Ich habe das Narrativ als Wissensdokument in den Kontext gegeben, Quellen verifizieren lassen, durch die argumentative Struktur navigiert. Das Modell hat auf einer Meta-Ebene mitgearbeitet. Ich habe jede faktische Behauptung geprüft. Die Verantwortung für Inhalt und Argumentation liegt beim Autor.*