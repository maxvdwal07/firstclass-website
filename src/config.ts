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
  bedrijfsnaam: "Larsa Haarsalon & Beauty",
  tagline: "Krijg De Nieuwe Look",
  beschrijving: "Larsa Haarsalon & Beauty in Bilthoven — een rustig en ontspannen toevluchtsoord voor dames en heren. Ervaar prestige kappersvaardigheden en uitzonderlijke klantenservice.",

  // ----------------------------------------------------------
  // BOEKLINK
  // ----------------------------------------------------------
  freshaLink: "https://larsahaarsalon.setmore.com",

  // ----------------------------------------------------------
  // CONTACTGEGEVENS
  // ----------------------------------------------------------
  adres: "Bilderdijklaan 108",
  stad: "Bilthoven",
  postcode: "3723 DE",
  telefoon: "030 269 0145",
  email: "larsahaarsalon@hotmail.com",

  // ----------------------------------------------------------
  // OPENINGSTIJDEN
  // ----------------------------------------------------------
  openingstijden: [
    { dag: "Maandag",   tijd: "Gesloten" },
    { dag: "Dinsdag",   tijd: "09:00 – 18:00" },
    { dag: "Woensdag",  tijd: "09:00 – 18:00" },
    { dag: "Donderdag", tijd: "09:00 – 17:30" },
    { dag: "Vrijdag",   tijd: "09:00 – 18:00" },
    { dag: "Zaterdag",  tijd: "09:00 – 17:30" },
    { dag: "Zondag",    tijd: "Gesloten" },
  ],

  // ----------------------------------------------------------
  // GOOGLE MAPS EMBED
  // Ga naar maps.google.com → zoek "Larsa Haarsalon Bilthoven" →
  // Delen → Een kaart insluiten → kopieer de src="..." URL
  // ----------------------------------------------------------
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?cid=9963228248701041835&output=embed",

  // ----------------------------------------------------------
  // SOCIALE MEDIA
  // ----------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/larsahairandbeauty/",
    facebook:  "https://www.facebook.com/kawther.jaber.731",
    tiktok:    "",
    whatsapp:  "",
  },

  // ----------------------------------------------------------
  // DIENSTEN & PRIJZEN
  // ----------------------------------------------------------
  diensten: [
    {
      naam:        "Knippen dames",
      beschrijving: "Wassen, knippen en föhnen door onze ervaren stylisten. Prijs afhankelijk van lengte en stylist.",
      prijs:       "v.a. € 33,50",
    },
    {
      naam:        "Knippen heren",
      beschrijving: "Stijlvolle knipbeurt inclusief wassen en stylen, afgestemd op jouw wensen.",
      prijs:       "v.a. € 27,50",
    },
    {
      naam:        "Knippen kinderen",
      beschrijving: "Vrolijke knipbeurt voor jongens en meisjes tot 10 jaar.",
      prijs:       "v.a. € 18,50",
    },
    {
      naam:        "Highlights & Balayage",
      beschrijving: "Van klassieke highlights tot handgeschilderde balayage voor een natuurlijk, stralend resultaat.",
      prijs:       "v.a. € 47",
    },
    {
      naam:        "Keratine behandeling",
      beschrijving: "Intensieve gladmakende behandeling voor glanzend en gemakkelijk te stylen haar.",
      prijs:       "v.a. € 170",
    },
    {
      naam:        "Olaplex behandeling",
      beschrijving: "Herstellende behandeling die de haarstructuur van binnenuit versterkt en beschermt.",
      prijs:       "v.a. € 12",
    },
    {
      naam:        "Wenkbrauwen & wimpers",
      beschrijving: "Wenkbrauwthreading, -verven, lash lifting en meer voor een strakke, verzorgde uitstraling.",
      prijs:       "v.a. € 12",
    },
    {
      naam:        "Bruidsstyling",
      beschrijving: "Compleet bruidsarrangement inclusief haar en make-up — voor de mooiste dag van je leven.",
      prijs:       "v.a. € 250",
    },
  ],

  // ----------------------------------------------------------
  // OVER ONS
  // ----------------------------------------------------------
  overOns: {
    titel: "Over ons",
    tekst: `
      Welkom bij Larsa Haarsalon & Beauty — een rustig en ontspannen toevluchtsoord in het hart van Bilthoven.
      Wij zijn een team van haarontwerpers met een passie voor vakmanschap en een oog voor detail.

      Kawther, onze hoofdstyliste met meer dan 12 jaar ervaring in knippen, kleuren en stylen, staat samen met haar team voor je klaar.
      Of je nu komt voor een verfrissende knipbeurt, een prachtige balayage of een complete beautybehandeling — bij Larsa ben je in uitstekende handen.

      Wij werken uitsluitend met premium merken zoals Keune, Alter Ego en Olaplex voor het beste resultaat.
      Ons salon beschikt over een aparte damesruimte, gratis parkeren en is bereikbaar in het Nederlands, Engels en Arabisch.
    `,
    foto: "/images/over-ons.jpg",
    fotoAlt: "Interieur van Larsa Haarsalon & Beauty in Bilthoven",
  },

  // ----------------------------------------------------------
  // GALERIJ
  // Zet je foto's in de map public/images/galerij/
  // ----------------------------------------------------------
  galerij: [
    { src: "/images/galerij/foto-1.jpg", alt: "Styling en verzorging bij Larsa" },
    { src: "/images/galerij/foto-2.jpg", alt: "Knipbeurt resultaat" },
    { src: "/images/galerij/foto-3.jpg", alt: "Consultatie bij Larsa Haarsalon" },
    { src: "/images/galerij/foto-4.jpg", alt: "Kleur en balayage resultaat" },
    { src: "/images/galerij/foto-5.jpg", alt: "Interieur Larsa Haarsalon Bilthoven" },
    { src: "/images/galerij/foto-6.jpg", alt: "Professionele haarverzorging" },
  ],

  // ----------------------------------------------------------
  // GOOGLE REVIEWS
  // Voeg hier reviews toe of verwijder ze naar wens
  // ----------------------------------------------------------
  reviews: [
    {
      naam: "Vanja Opsteeg-Wentink",
      datum: "december 2025",
      sterren: 5,
      tekst: "Vanuit Brabant hier gekomen en zó tevreden dat ik een vast klant zal worden! Fijne sfeer, lieve mensen en vakwerk!",
    },
    {
      naam: "Jamilla Belkadi",
      datum: "mei 2023",
      sterren: 5,
      tekst: "Hele fijne en lieve kapster. Doet mijn haar altijd heel mooi — knippen, verven/balayage en soms feestkapsels. Ik raad Kawtar zeker aan iedereen aan!",
    },
    {
      naam: "Aadi Koel",
      datum: "augustus 2023",
      sterren: 5,
      tekst: "Ik kom al jaren bij deze kapster voor verven, knippen en föhnen. Ik ga altijd super tevreden de deur uit. Echt een aanrader!",
    },
    {
      naam: "Khadija Elkondrouch",
      datum: "november 2023",
      sterren: 5,
      tekst: "Ik ben al jaren klant bij Kaoutar, altijd erg tevreden. Erg sociaal en altijd gezellig — kom eens langs, het is zeker aan te raden!",
    },
    {
      naam: "Dorine Copijn-Verlaak",
      datum: "maart 2024",
      sterren: 5,
      tekst: "Ben erg tevreden! Mooi geknipt, vriendelijke mensen. Ik kom zeker terug!",
    },
    {
      naam: "Onno van der Meer",
      datum: "oktober 2023",
      sterren: 5,
      tekst: "Prijs-kwaliteitverhouding prima. Fijne sfeer in de salon en altijd vriendelijk geholpen.",
    },
  ],

  // ----------------------------------------------------------
  // HERO SECTIE
  // ----------------------------------------------------------
  hero: {
    achtergrondAfbeelding: "/images/hero.jpg",
    knopTekst: "BOEK NU",
  },

  // ----------------------------------------------------------
  // ELFSIGHT GOOGLE REVIEWS WIDGET
  // Stap 1: Maak een gratis account op https://elfsight.com
  // Stap 2: Maak een "Google Reviews" widget aan
  // Stap 3: Kopieer de widget-code en plak die hieronder
  // ----------------------------------------------------------
  elfsightEmbedCode: `<!-- Plak hier je Elfsight widget-code -->
<div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" data-elfsight-app-lazy></div>`,

  // ----------------------------------------------------------
  // KLEURENPALET
  // ----------------------------------------------------------
  kleuren: {
    achtergrond:  "#ffffff",
    tekst:        "#111111",
    accentkleur:  "#111111",
    lichtgrijs:   "#f7f6f4",
    donkergrijs:  "#555555",
  },
};
