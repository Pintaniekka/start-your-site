
## Meistä-sivun ja navigaation päivitys

### Muutokset

**1. Lisätään uusi kansikuva (pensselikuva.png)**
- Kopioidaan ladattu kuva `src/assets/pensselikuva.png` -kansioon
- Käytetään kuvaa ServicePageHero-komponentin taustakuvana Meistä-sivulla

**2. Navigaatiolinkin muutos (Header.tsx)**
- Rivi 48: `'Mikä ihmeen Pintanen?'` → `'Tutustu Pintaseen'`
- Linkki vie edelleen `/meista`-sivulle

**3. Meistä-sivun pääotsikon muutos (Meista.tsx)**
- ServicePageHero title: `'Mikä ihmeen Pintanen?'` → `'Tutustu Pintaseen'`
- Lisätään `backgroundImage` prop käyttämään uutta pensselikuvaa
- Tekstiosion otsikko (h2) "Mikä ihmeen Pintanen?" säilyy ennallaan

**4. Footerin linkkien korjaus (Footer.tsx)**
- Muutetaan nykyiset ankkurilinkit (`#palvelut`, `#hintalaskuri`) oikeiksi React Router -linkeiksi
- Palvelut-osion linkit:
  - Tiilikaton pinnoitus → `/kattopalvelut/pinnoitus`
  - Ulkomaalaus → `/talon-maalaus`
  - Katon puhdistus → `/kattopalvelut/puhdistus`
  - Hintalaskuri → `/#hintalaskuri` (etusivun ankkuri)

---

### Tekniset yksityiskohdat

**Uusi tiedosto:** `src/assets/pensselikuva.png` (kopioidaan ladatusta kuvasta)

**Header.tsx muutos (rivi 48):**
```tsx
label: 'Tutustu Pintaseen',
```

**Meista.tsx muutokset:**
- Import lisäys: `import pensselikuva from '@/assets/pensselikuva.png';`
- ServicePageHero props:
```tsx
<ServicePageHero
  title="Tutustu Pintaseen"
  subtitle="Tutustu meihin – olemme pirkanmaalainen perheyritys..."
  backgroundImage={pensselikuva}
/>
```

**Footer.tsx muutokset:**
- Import lisäys: `import { Link } from 'react-router-dom';`
- Palvelut-linkkien muutos käyttämään `<Link to="...">` -komponenttia oikeiden reittien kanssa
