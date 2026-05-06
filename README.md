# Kapper Website Template

Een kant-en-klare website voor kapperszaken in Nederland die Fresha gebruiken.  
Alles wat je moet aanpassen staat in **één bestand**: `src/config.ts`.

---

## Inhoudsopgave

1. [Vereisten installeren](#stap-1-vereisten-installeren)
2. [De config invullen](#stap-2-de-config-invullen)
3. [Foto's toevoegen](#stap-3-fotos-toevoegen)
4. [Lokaal bekijken (optioneel)](#stap-4-lokaal-bekijken-optioneel)
5. [GitHub account aanmaken](#stap-5-github-account-aanmaken)
6. [GitHub Desktop installeren](#stap-6-github-desktop-installeren)
7. [Repository aanmaken op GitHub](#stap-7-repository-aanmaken-op-github)
8. [Website online zetten via GitHub Pages](#stap-8-website-online-zetten-via-github-pages)
9. [Google Reviews instellen via Elfsight](#stap-9-google-reviews-instellen-via-elfsight)
10. [Wijzigingen doorvoeren](#stap-10-wijzigingen-doorvoeren)

---

## Stap 1: Vereisten installeren

Je hebt twee programma's nodig om de website te kunnen bouwen en online te zetten.

### Node.js installeren

Node.js is de motor achter Astro (het systeem waarop deze website draait).

1. Ga naar [https://nodejs.org](https://nodejs.org)
2. Klik op de grote groene knop **"LTS"** (dit is de stabiele versie)
3. Download het installatiebestand voor jouw computer (Windows of Mac)
4. Open het bestand en volg de installatiestappen (gewoon op "Next" / "Doorgaan" klikken)
5. Na de installatie: herstart je computer

> **Controleren of het werkt:** Open de Terminal (Mac) of Opdrachtprompt (Windows), typ `node --version` en druk op Enter. Als je iets ziet als `v20.11.0` is het goed.

### Git installeren

Git is een programma om je bestanden te bewaren en naar GitHub te sturen.

**Mac:**
1. Open de Terminal (zoek op "Terminal" via Spotlight, de vergrootglasknop rechts bovenin)
2. Typ `git --version` en druk op Enter
3. Als Git nog niet geïnstalleerd is, vraagt je Mac automatisch of je het wil installeren — klik op "Installeer"

**Windows:**
1. Ga naar [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download en installeer Git (alle standaardopties zijn prima)

---

## Stap 2: De config invullen

Open het bestand `src/config.ts` in een teksteditor (bijvoorbeeld Notepad, TextEdit, of [Visual Studio Code](https://code.visualstudio.com)).

Dit bestand bevat **alles** wat jouw website uniek maakt. Vul de gegevens in door de voorbeeldtekst te vervangen door jouw eigen informatie.

### Wat je moet invullen:

| Onderdeel | Uitleg |
|---|---|
| `bedrijfsnaam` | De naam van jouw kapsalon |
| `tagline` | Een korte slogan (één zin) |
| `freshaLink` | Jouw Fresha boeklink (zie hieronder) |
| `adres`, `stad`, `postcode` | Jouw adresgegevens |
| `telefoon`, `email` | Contactgegevens |
| `openingstijden` | Vul per dag de tijden in, of zet "Gesloten" |
| `googleMapsEmbedUrl` | Jouw Google Maps embed-link (zie hieronder) |
| `socials` | Instagram, Facebook etc. — laat leeg (`""`) als je het niet hebt |
| `diensten` | Jouw diensten met naam, beschrijving en prijs |
| `overOns.tekst` | Een korte tekst over jouw zaak |
| `elfsightEmbedCode` | De widget-code voor Google Reviews (zie Stap 9) |

### Jouw Fresha boeklink vinden:

1. Log in op [fresha.com](https://www.fresha.com)
2. Ga naar jouw profiel of bedrijfspagina
3. Kopieer de URL uit de adresbalk van je browser
4. Plak deze URL bij `freshaLink` in de config

### Google Maps embed-link maken:

1. Ga naar [maps.google.com](https://maps.google.com)
2. Zoek je eigen adres op
3. Klik op het drie-puntje menu (⋮) rechts naast het adres
4. Klik op **"Delen of insluiten"**
5. Klik op het tabblad **"Een kaart insluiten"**
6. Klik op **"HTML kopiëren"**
7. Je krijgt een stukje code. Zoek daarin de URL die begint met `https://www.google.com/maps/embed?...`
8. Kopieer **alleen die URL** (zonder de aanhalingstekens) en plak die bij `googleMapsEmbedUrl` in de config

---

## Stap 3: Foto's toevoegen

Alle foto's zet je in de map `public/images/`:

| Bestand | Wat het is |
|---|---|
| `public/images/hero.jpg` | De grote achtergrondafbeelding bovenaan |
| `public/images/over-ons.jpg` | Foto bij "Over ons" |
| `public/images/galerij/foto-1.jpg` | Galerijfoto 1 |
| `public/images/galerij/foto-2.jpg` | Galerijfoto 2 |
| _(enzovoort)_ | Voeg toe zoveel je wil |

**Tips voor foto's:**
- Gebruik `.jpg` of `.webp` formaat voor snelste laadtijden
- De hero-foto werkt het best in liggende oriëntatie (landschap), minimaal 1200px breed
- Galerijfoto's werken het best in een vaste verhouding, bijv. 4:3

Als je meer of minder galerijfoto's wil, pas dan de lijst `galerij` in `src/config.ts` aan.

---

## Stap 4: Lokaal bekijken (optioneel)

Je kunt de website bekijken op je eigen computer voordat je hem online zet.

1. Open Terminal (Mac) of Opdrachtprompt (Windows)
2. Navigeer naar de projectmap:
   ```
   cd pad/naar/kapper-website
   ```
3. Installeer de benodigde bestanden (éénmalig):
   ```
   npm install
   ```
4. Start de lokale preview:
   ```
   npm run dev
   ```
5. Open je browser en ga naar `http://localhost:4321`

Stop de preview met de toetscombinatie **Ctrl + C** in de terminal.

---

## Stap 5: GitHub account aanmaken

GitHub is de plek waar jouw websitebestanden gratis opgeslagen worden én van waaruit jouw website automatisch online gezet wordt.

1. Ga naar [github.com](https://github.com)
2. Klik op **"Sign up"** (rechtsboven)
3. Kies een gebruikersnaam — dit wordt ook deel van je websiteadres, bijv. `gebruikersnaam.github.io`
4. Voer je e-mailadres en een wachtwoord in
5. Volg de stappen om je account te bevestigen

---

## Stap 6: GitHub Desktop installeren

GitHub Desktop is een programma waarmee je bestanden naar GitHub kunt sturen, zonder dat je typeopdrachten hoeft te gebruiken.

1. Ga naar [desktop.github.com](https://desktop.github.com)
2. Download GitHub Desktop voor jouw computer
3. Installeer het programma
4. Open GitHub Desktop en log in met je GitHub account

---

## Stap 7: Repository aanmaken op GitHub

Een "repository" is gewoon een map op GitHub waar al jouw websitebestanden in zitten.

### 7a. Repository aanmaken op de website:

1. Ga naar [github.com](https://github.com) en log in
2. Klik rechtsboven op het **"+"** icoon → **"New repository"**
3. Vul bij **"Repository name"** in: `kapper-website`
4. Laat de instelling op **"Public"** staan (dit is nodig voor gratis hosting)
5. Klik op **"Create repository"**

### 7b. Projectmap koppelen in GitHub Desktop:

1. Open GitHub Desktop
2. Klik op **"File"** → **"Add Local Repository"**
3. Klik op **"Choose..."** en zoek de map `kapper-website` op jouw computer
4. Als je een melding ziet dat het nog geen Git-repository is, klik dan op **"create a repository"**
5. Klik op **"Add Repository"**

### 7c. Verbinden met GitHub:

1. Klik in GitHub Desktop op **"Publish repository"** (of **"Push origin"**)
2. Zorg dat **"Keep this code private"** UIT staat
3. Klik op **"Publish repository"**

Je bestanden staan nu op GitHub!

---

## Stap 8: Website online zetten via GitHub Pages

GitHub Pages zet jouw website automatisch online, elke keer als je een wijziging opslaat.

### 8a. Stel de juiste instellingen in in `astro.config.mjs`:

Open het bestand `astro.config.mjs` en pas de twee regels aan:

```js
site: "https://JOUWGEBRUIKERSNAAM.github.io",
base: "/kapper-website",
```

Vervang `JOUWGEBRUIKERSNAAM` door jouw GitHub gebruikersnaam (precies zoals je hem hebt aangemaakt, inclusief hoofdletters).

### 8b. GitHub Pages inschakelen:

1. Ga naar jouw repository op GitHub: `github.com/JOUWGEBRUIKERSNAAM/kapper-website`
2. Klik op het tabblad **"Settings"** (instellingen, bovenaan de pagina)
3. Klik in het linkermenu op **"Pages"**
4. Onder **"Build and deployment"**, bij **"Source"**, kies: **"GitHub Actions"**
5. Klik op **"Save"**

### 8c. Wijziging uploaden om de bouw te starten:

1. Sla je wijzigingen op in `astro.config.mjs`
2. Open GitHub Desktop
3. Je ziet de gewijzigde bestanden links in beeld
4. Typ onderaan links een korte omschrijving, bijv. `Website instellingen bijgewerkt`
5. Klik op **"Commit to main"**
6. Klik op **"Push origin"**

### 8d. Wachten tot de website klaar is:

1. Ga naar jouw repository op GitHub
2. Klik op het tabblad **"Actions"**
3. Je ziet een taak lopen (geel rondje = bezig, groen vinkje = klaar, rood kruis = fout)
4. Na 2-5 minuten is je website online op:
   ```
   https://JOUWGEBRUIKERSNAAM.github.io/kapper-website
   ```

---

## Stap 9: Google Reviews instellen via Elfsight

Elfsight is een gratis dienst waarmee je jouw Google Reviews op je website kunt tonen.

### 9a. Gratis Elfsight account aanmaken:

1. Ga naar [elfsight.com](https://elfsight.com)
2. Klik op **"Sign Up Free"**
3. Maak een account aan met je e-mailadres

### 9b. Google Reviews widget aanmaken:

1. Na het inloggen, klik op **"Create Widget"**
2. Zoek en klik op **"Google Reviews"**
3. Klik op **"Continue"**
4. Verbind jouw Google-bedrijfspagina door je bedrijfsnaam of adres in te typen
5. Selecteer jouw locatie in de lijst
6. Pas het uiterlijk aan naar wens (kleur, stijl)
7. Klik op **"Add to website"**

### 9c. De embed-code kopiëren:

1. Je ziet nu een stukje code dat eruitziet als:
   ```html
   <div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" data-elfsight-app-lazy></div>
   ```
2. Kopieer deze volledige code

### 9d. Code in de config plakken:

1. Open `src/config.ts`
2. Zoek de regel met `elfsightEmbedCode`
3. Vervang de placeholder-tekst door jouw gekopieerde code:
   ```ts
   elfsightEmbedCode: `<div class="elfsight-app-JOUWCODE" data-elfsight-app-lazy></div>`,
   ```
4. Sla het bestand op
5. Upload de wijziging via GitHub Desktop (zie Stap 10)

Het gratis account van Elfsight toont een klein "Powered by Elfsight" label. Dit is prima voor de meeste gebruikers.

---

## Stap 10: Wijzigingen doorvoeren

Elke keer als je iets aanpast aan je website (tekst, foto's, prijzen):

1. Sla je bestanden op
2. Open **GitHub Desktop**
3. Je ziet de gewijzigde bestanden links in beeld
4. Schrijf een korte beschrijving onderaan links (bijv. `Prijzen bijgewerkt`)
5. Klik op **"Commit to main"**
6. Klik op **"Push origin"**
7. Wacht 2-5 minuten — je website wordt automatisch bijgewerkt

---

## Veelgestelde vragen

**Mijn website toont een foutmelding na het pushen. Wat doe ik?**  
Ga naar het tabblad "Actions" in je GitHub repository. Klik op de rode taak om te zien wat er mis is gegaan. Kopieer de foutmelding en vraag om hulp.

**Kan ik een eigen domeinnaam gebruiken (bijv. www.mijnkapsalon.nl)?**  
Ja. Koop een domeinnaam bij een provider zoals Transip, Versio of GoDaddy. Voeg daarna in GitHub Pages bij "Custom domain" jouw domeinnaam toe en stel de DNS in bij jouw provider. Dit vereist wat technische stappen — vraag eventueel om hulp.

**Hoe verander ik de accentkleur van de website?**  
Zoek in `src/config.ts` de sectie `kleuren` en verander de waarde bij `accentkleur`. Kleuren worden opgegeven als hexcodes. Op [colorpicker.me](https://colorpicker.me) kun je eenvoudig een kleurcode kiezen.

**Mijn foto's laden niet. Wat is er mis?**  
Controleer of de bestandsnamen in `src/config.ts` exact overeenkomen met de echte bestandsnamen in de `public/images/` map. Let op hoofdletters — `Foto-1.jpg` is anders dan `foto-1.jpg`.
