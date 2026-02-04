
# Hinnoittelun yksinkertaistaminen ja kotitalousvähennys-osion lisäys

## Muutokset

### 1. Katon puhdistuksen hinnoittelu (KattopalvelutPuhdistus.tsx)

Nykyinen hintataulukko-osio (rivit 152-173) korvataan yksinkertaisemmalla tekstillä:

**Uusi sisältö:**
- Otsikko: "Hinnoittelu"
- Teksti: "Tiilikaton mekaanisen puhdistuksen ja käsittelyn hinta riippuu katon koosta ja sammaleen määrästä."
- Alkaen: **800 €**
- Kehotus: "Pyydä tarjous, niin kerromme tarkan hinnan!"

Layoutissa Benefits-osio laajennetaan koko leveydelle ja hinnoittelu näytetään kompaktina korttina sen alapuolella.

---

### 2. Uusi KotitalousVahennys-komponentti

Luodaan uusi tiedosto `src/components/KotitalousVahennys.tsx`:

**Sisältö:**
- Otsikko: "Hyödynnä kotitalousvähennys"
- Selite: Yritykseltä ostettu työ – saat vähentää 35 % työn osuudesta
- Maksimivähennys: 1 600 €/henkilö/vuosi
- Esimerkkilaskema kortissa:
  - Urakan kokonaishinta: 5 000 €
  - Työn osuus: 4 000 €
  - Vähennys (35 %): 1 400 €
  - Lopullinen hinta: 3 600 €

**Tyyli:**
- Vaaleanvihreä/teal-korostus ikonilla (esim. Euro tai Calculator)
- Animoitu motion.div
- Toimii sekä etusivulla että palvelusivuilla

---

### 3. Komponentin lisäys sivuille

| Sivu | Sijainti |
|------|----------|
| Index.tsx | Contact-osion jälkeen (footerin yläpuolella) |
| KattopalvelutPinnoitus.tsx | Ennen ServiceCTA:ta |
| KattopalvelutPuhdistus.tsx | Ennen ServiceCTA:ta |
| TalonMaalaus.tsx | Ennen ServiceCTA:ta |

---

## Muutettavat tiedostot

1. **src/pages/KattopalvelutPuhdistus.tsx** – Hinnoitteluosion uudelleenkirjoitus
2. **src/components/KotitalousVahennys.tsx** – Uusi komponentti (luodaan)
3. **src/pages/Index.tsx** – Lisätään KotitalousVahennys ennen loppua
4. **src/pages/KattopalvelutPinnoitus.tsx** – Lisätään KotitalousVahennys ennen ServiceCTA
5. **src/pages/TalonMaalaus.tsx** – Lisätään KotitalousVahennys ennen ServiceCTA
