# Procesverslag

**Auteur:** Ufuk Argun

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)

## Bronnenlijst

1. [Youtube Tutorial: Learn CSS Animation In 15 Minutes](https://www.youtube.com/watch?v=YszONjKpgg4)
2. [Text Mirroren](https://www.w3docs.com/snippets/css/how-to-flip-text-with-css.html)
3. [Instant transition](https://stackoverflow.com/questions/45896706/css-transition-is-instant-and-not-fading-into-the-transition)
4. [Zoomen (niet gelukt)](https://stackoverflow.com/questions/61698727/zoom-into-object-until-it-passes-css-html)
5. [Shapes](https://sharkcoder.com/visual/shapes)
6. [Dark color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
7. [Pseudo elementen manipuleren](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
8. [Positioning](https://stackoverflow.com/questions/7720730/how-to-align-absolutely-positioned-element-to-center)

## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>

### Je storyboard:

  <img src="readme-images/Opdracht1schets.jpeg" width="375px" alt="storyboard voor opdracht 1">

### Je ambitie:

Aan deze technieken/punten wil ik werken:

- Werken met pseudo elementen
- Ease in/outs beter leren gebruiken
- Manipuleren van losse letters
- Leren animeren :)

</details>

## Opdracht 1 tussentijdse feedback

[Link naar het miro board](https://miro.com/app/board/uXjVPw4ZF3E=/)

Feedback van Nicole (klasgenoot)

<img src="readme-images/Feedback-1.png" width="375px" alt="Feedback omtrent concept">

Mijn concept is goedgekeurd voor, omdat het past bij het merk. FedEx is het woordmerk dat ik heb gekozen om te gaan animeren.

<img src="readme-images/Feedback-2.png" width="375px" alt="Feedback omtrent diverse schermen">

Mijn logo neemt eigenlijk volle breedte van het scherm in, hierdoor kan het eigenlijk gebruikt worden voor bijna alle formaten, omdat de animatie van het scherm afrolt. Er zou wel nog een knoop ontstaan in het timen van hoelang de animatie buiten het scherm blijft.

<img src="readme-images/Feedback-3.png" width="375px" alt="Feedback omtrent techniek">

De techniek valt prima behalen. Ik moet goed gebruik maken van pseudo elementen zoals "::before of ::after".
Deze moet ik goed tussen het pijltje van FedEx stoppen zodat de outro animatie goed verloopt.
Verder moet er voor techniek goed gekeken worden naar de fonts die het FedEx pijltje kunnen weergeven.
Momenteel mix ik 2 fonts door elkaar waardoor het redelijk goed lijkt.

Dit is momenteel het probleem:

<img src="readme-images/Probleem-1.png" width="375px" alt="Probleem van de font">

Ik kan het gewilde resultaat behalen door de letters in de span zelf te manipuleren en het researchen van een passende karakteristieke font.
De problemen zijn aangegeven met een rode cirkel/rechthoek zodat het duidelijk is waar we over praten.
De letter "d" die uitsteekt valt gefixt te worden door een pseudo element goed te plaatsen met "position: absolute;"

</details>

## Opdracht 1 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>

### Je uitkomst - karakteristiek screenshot(s):

  <img src="readme-images/resultaatopdracht1.gif" width="600px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

#### Maken van animaties en deze toepassen
Het maken en toepassen van meerdere animaties, met delays, achter elkaar.
Een animatie maken lijkt veel makkelijker dan dat het voor mijn gevoel was.
Ik heb ontzettend veel handmatig de spans moeten positioneren doordat ik position absolute gebruik en divs niet zijn toegestaan.
Hier onder ziet u bijvoorbeeld 3 verschillende animaties.

  <img src="readme-images/animatiecode.png" width="375px" alt="animatie codes">

#### Manipuleren van pseudo elementen
Dit is een voorbeeld van hoe ik mijn pseudo elementen manipuleerde.

  <img src="readme-images/pseudoelement1.png" width="375px" alt="pseudo element">

De logica hier achter is eigenlijk vrij simpel, we maken een ::Before, die we de grootte geven tussen de twee letters E en x.
de E en x laten we weg vagen door de kleur van de achtergrond toe te passen (zowel voor dark modus als light)
Hierdoor lijkt het alsof er een pijl ontstaat tussen de letters.
zoals je onderin kunt zien wordt het element ook geanimeerd.
Resultaat:

  <img src="readme-images/arrow.png" width="375px" alt="resultaat arrow">

De tweede Pseudo element die ik gebruikte was weer een ::before,
maar dit keer manipuleerden we text er bij.
Zoals je kan zien in de afbeelding hier onder maken we de tekst "vroom" en roteren we de tekst een stukje.
Ook worden de font-instellingen veranderd.

  <img src="readme-images/pseudoelement2.png" width="375px" alt="pseudo element 2">

Dit is het resultaat er van:

  <img src="readme-images/vroom.png" width="375px" alt="resultaat vroom">

#### Dark theme

Tijdens de les legde Sanne uit hoe we voor de web-browser thema aparte styling konden aangeven.
Dit heb ik toegepast op elementen zoals de achtergrond en de pseudo elementen.
Ik heb dit kunnen realiseren door op deze wijze te werken:

  <img src="readme-images/color-scheme.png" width="375px" alt="color scheme dark">

Door deze feature te implementeren in onze css hebben we nu onze eigen "themas", dit is bijvoorbeeld de dark modus:

  <img src="readme-images/darkmode.png" width="375px" alt="color scheme dark resultaat">

en dit de light modus:

  <img src="readme-images/lightmode.png" width="375px" alt="color scheme light resultaat">



### Dit was lastig/Is niet gelukt:


Het behouden van de juiste posities van de letters na het toepassen van een animatie.
Ik heb geprobeerd te expirimenteren met forwards, backwards, both en none maar ik verloor uiteindelijk te veel haren en tijd dat ik het achter me heb gelaten.

  <img src="readme-images/Fed.png" width="375px" alt="voorbeeld letter spacing">

Hier zit de F van Fed bijvoorbeeld te dichtbij de e nadat er skewing wordt aangeroepen in de animatie, nu zou je denken dat ik simpelweg none; zou kunnen gebruiken, maar de animatie blijft buiten beeld voor enkele secondes.

Dit was het idee:

  <img src="readme-images/pijltjezoom.png" width="375px" alt="inzoomen van pijl">

Maar echter kwam ik er achter dat het vrij complex is doordat ik per span een position absolute gebruik en geen divs kon gebruiken.
nu is de x van Ex een andere hoogte dan de rest, omdat het pijltje moet vormen en ik een representatieve font moest vinden hiervoor.
doordat de x een andere grootte is ontstaan er veel problemen, ook met het afschieten op beeld, deze gaat wat slomer omdat de letter kleiner is.
Ik heb geprobeerd scale te gebruiken maar geen success ;(

Ook werd het complex voor het pijltje, omdat deze richting het midden van het beeld moest, maar er te veel moeite was en handmatig werk om het ook nog responsief te houden.

Ik heb uiteindelijk een andere outro gekozen, namelijk dat het pijltje even opvalt en dan uitvaagt.


</details>

## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>

### Je ontwerp:

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="ontwerp opdracht 2">

### Je ambitie:

Aan deze technieken/punten wil ik werken:

- punt 1
- punt 2
- nog een punt
- ...
</details>

## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>

Neem minimaal 5 bevindingen op:

### Bevinding 1:

Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 2:

Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

#### oplossing:

Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).

### Bevinding 3:

...

</details>

## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

### Je uitkomst - karakteristiek screenshot(s):

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="uitkomst opdracht 2">

### Dit ging goed/Heb ik geleerd:

Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="top">

### Dit was lastig/Is niet gelukt:

Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>
