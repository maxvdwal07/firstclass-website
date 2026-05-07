// =============================================================
//  CONFIGURATIEBESTAND — vul hier al jouw gegevens in
//  Je hoeft ALLEEN dit bestand aan te passen!
// =============================================================

// Zorg dat afbeeldingspaden altijd kloppen, ook na online zetten
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (pad: string) => `${base}${pad}`;

export const config = {

  // ----------------------------------------------------------
  // ALGEMENE BEDRIJFSGEGEVENS
  // ----------------------------------------------------------
  bedrijfsnaam: "FirstClass Hair & Beauty",
  tagline: "Jouw specialist in haar & beauty",
  beschrijving: "FirstClass Hair & Beauty in Amersfoort — jouw premium kapsalon voor knippen, kleuren, extensions en beautybehandelingen. Maak eenvoudig online een afspraak.",

  // ----------------------------------------------------------
  // FRESHA WIDGET
  // TODO: Vul hier het widget-ID in zodra de klant hun Fresha-account heeft aangemaakt.
  // Stap 1: Log in op https://partners.fresha.com
  // Stap 2: Ga naar Marketing → Book-knop → Embed-code kopiëren
  // Stap 3: Haal het widget-ID uit de embed-URL en plak het hieronder.
  // ----------------------------------------------------------
  freshaWidgetId: "FRESHA_WIDGET_ID_HIER",

  // ----------------------------------------------------------
  // CONTACTGEGEVENS
  // ----------------------------------------------------------
  adres: "Van Randwijcklaan 93",
  stad: "Amersfoort",
  postcode: "3814 AE",
  telefoon: "06 85053172",
  email: "info@firstclassalon.nl",

  // ----------------------------------------------------------
  // OPENINGSTIJDEN
  // ----------------------------------------------------------
  openingstijden: [
    { dag: "Maandag",   tijd: "Gesloten" },
    { dag: "Dinsdag",   tijd: "09:30 – 18:00" },
    { dag: "Woensdag",  tijd: "09:30 – 18:00" },
    { dag: "Donderdag", tijd: "09:30 – 18:00" },
    { dag: "Vrijdag",   tijd: "09:30 – 20:00" },
    { dag: "Zaterdag",  tijd: "09:30 – 17:00" },
    { dag: "Zondag",    tijd: "Gesloten" },
  ],

  // ----------------------------------------------------------
  // GOOGLE MAPS EMBED
  // TODO: Vervang door de echte embed-URL van FirstClass (Google Maps → Delen → Insluiten)
  // ----------------------------------------------------------
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Van+Randwijcklaan+93,+3814+AE+Amersfoort&output=embed",

  // ----------------------------------------------------------
  // SOCIALE MEDIA
  // ----------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/firstclassalon/",
    facebook:  "https://www.facebook.com/FirstClassalon/",
    tiktok:    "",
    whatsapp:  "",
  },

  // ----------------------------------------------------------
  // DIENSTEN & PRIJZEN
  // ----------------------------------------------------------
  diensten: [
    {
      naam:        "Knippen",
      beschrijving: "Voor dames, heren & kinderen — professioneel geknipt door onze ervaren stylisten.",
      prijs:       "",
    },
    {
      naam:        "Balayage & Highlights",
      beschrijving: "Natuurlijke kleurovergang op maat, handgeschilderd voor een stralend resultaat.",
      prijs:       "",
    },
    {
      naam:        "Keratine behandeling",
      beschrijving: "Glad, zijdezacht haar tot 6 maanden — intensieve gladmakende treatment.",
      prijs:       "",
    },
    {
      naam:        "Hair Extensions",
      beschrijving: "Volume en lengte toevoegen met kwalitatieve extensions op maat.",
      prijs:       "",
    },
    {
      naam:        "Vlechten",
      beschrijving: "Diverse vlecht- en stijltechnieken voor elk haar- en gelegenheidstype.",
      prijs:       "",
    },
    {
      naam:        "Olaplex",
      beschrijving: "Reparatie en bescherming van beschadigd haar — versterkt de haarstructuur van binnenuit.",
      prijs:       "",
    },
    {
      naam:        "Permanent",
      beschrijving: "Duurzame krul- of stijlbehandeling voor langdurig resultaat.",
      prijs:       "",
    },
    {
      naam:        "Epileren & Waxen",
      beschrijving: "Professionele gezichts­ontharing voor een strakke, verzorgde uitstraling.",
      prijs:       "",
    },
  ],

  // ----------------------------------------------------------
  // OVER ONS
  // ----------------------------------------------------------
  overOns: {
    titel: "Over ons",
    tekst: `
      Welkom bij FirstClass Hair & Beauty — jouw premium kapsalon in het hart van Amersfoort.
      Wij zijn een team van gepassioneerde stylisten die voor elk haar­type en elke gelegenheid klaarstaan.

      Of je nu komt voor een verfijnde knipbeurt, een prachtige balayage, sterkende Olaplex-behandeling
      of luxe hair extensions — bij FirstClass Hair & Beauty ben je in uitstekende handen.

      Wij werken met premium producten en nemen de tijd voor een persoonlijk adviesgesprek,
      zodat jij de salon verlaat zoals je je altijd al wilde voelen: FirstClass.
    `,
    foto: "/images/over-ons.jpg",
    fotoAlt: "Interieur van FirstClass Hair & Beauty in Amersfoort",
  },

  // ----------------------------------------------------------
  // GALERIJ
  // Zet je foto's in de map public/images/galerij/
  // ----------------------------------------------------------
  galerij: [
    { src: "/images/galerij/foto-1.jpg", alt: "Platinum blonde balayage resultaat bij FirstClass" },
    { src: "/images/galerij/foto-2.jpg", alt: "Steil blond balayage haar bij FirstClass Amersfoort" },
    { src: "/images/galerij/foto-3.jpg", alt: "Lange bruine krullen met caramel highlights" },
    { src: "/images/galerij/foto-4.jpg", alt: "Blonde balayage styling bij FirstClass Hair & Beauty" },
  ],

  // ----------------------------------------------------------
  // GOOGLE REVIEWS
  reviews: [
    {
      naam: "Merve Uyar",
      datum: "11 maanden geleden",
      sterren: 5,
      tekst: "Ik heb mijn keratinebehandeling laten doen bij First Class en ik ben echt superblij! Mijn haar voelt heerlijk zacht en makkelijk in gebruik. Iedereen was onder de indruk van de glans. Ik kan deze salon en behandeling dan ook van harte aanbevelen!",
    },
    {
      naam: "Ibtissam Aboyaakoub",
      datum: "8 maanden geleden",
      sterren: 5,
      tekst: "Ik ben he-le-maaaal obsessed met mijn haar. Vandaag geweest voor een keratine behandeling, echt een top salon! Zeker een aanrader!!",
    },
    {
      naam: "Aleyna A",
      datum: "6 jaar geleden",
      sterren: 5,
      tekst: "Een aanrader! Super service, klantvriendelijk en een super mooi resultaat van mijn haar. Ik heb voor het eerst mijn haren laten verven en gelukkig heb ik dit bij de juiste kapper laten doen. Ben er super blij mee!",
    },
    {
      naam: "Gun Hanna",
      datum: "10 maanden geleden",
      sterren: 5,
      tekst: "Wat mij erg opvalt is dat je bij deze kapper oprecht rust voelt — een momentje voor jezelf. Geen chaos, professionaliteit staat vooraan. Ik ben met beschadigd haar gegaan en heb keratine behandeling genomen. Super blij mee. Echt aanrader én super schappelijke prijzen voor goede kwaliteit!",
    },
  ],

  // ----------------------------------------------------------
  // HERO SECTIE
  // ----------------------------------------------------------
  hero: {
    achtergrondAfbeelding: "/images/hero.jpg",
    knopTekst: "AFSPRAAK MAKEN",
  },

  // ----------------------------------------------------------
  // ELFSIGHT GOOGLE REVIEWS WIDGET
  // Stap 1: Maak een gratis account op https://elfsight.com
  // Stap 2: Maak een "Google Reviews" widget aan voor FirstClass Hair & Beauty
  // Stap 3: Kopieer de widget-code en plak die hieronder
  // ----------------------------------------------------------
  elfsightEmbedCode: `<!-- Plak hier je Elfsight widget-code -->
<div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" data-elfsight-app-lazy></div>`,

  // ----------------------------------------------------------
  // KLEURENPALET — premium goud-accent voor FirstClass
  // ----------------------------------------------------------
  kleuren: {
    achtergrond:  "#ffffff",
    tekst:        "#1a1a1a",
    accentkleur:  "#c9a96e",
    lichtgrijs:   "#f7f6f4",
    donkergrijs:  "#555555",
  },
};
