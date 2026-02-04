
# Meistä-sivun sisällön uudelleenjärjestely

## Tavoite
Yksinkertaistetaan sivun rakenne ja laitetaan käyttäjän antama teksti sivun alkuun selkeässä, suoraviivaisessa muodossa.

## Muutokset

### 1. Sivun rakenne (ylhäältä alas)

**Hero-osio** - pysyy ennallaan

**Tekstisisältö (uusi järjestys, yksinkertaisempi)**:
1. "Mikä ihmeen Pintanen?" - otsikko + kaksi kappaletta tekstiä
2. "Kaksi veljestä, kaksi erikoisalaa" - otsikko + johdanto + Eerik ja Eemil teksteinä (ei kortteja)
3. "Miksi valita meidät?" - otsikko + kaksi kappaletta
4. "Leikkimökeistä taloyhtiöihin" - otsikko + teksti + lista + lopputeksti

**Muut osiot** (sivun loppuun):
- Fakta-numerot (100+, 5, 2-5, 100%)
- Arvot
- Miksi valita Pintanen -lista
- Toiminta-alue
- CTA

### 2. Tekstisisällön esitys

Käytetään yksinkertaista tekstimuotoa ilman kortteja pääsisällölle:
- Selkeät otsikot
- Leipäteksti kappaleina
- Eerik ja Eemil listataan bullet-pointeina, ei korteissa

### 3. Takuutekstin tarkistus

Varmistetaan että facts-taulukossa on `{ number: "2-5", label: "Vuotta takuuta" }` - iso V (on jo oikein nykyisessä koodissa).

## Muutettava tiedosto

`src/pages/Meista.tsx` - sisällön uudelleenjärjestely yksinkertaisempaan muotoon
