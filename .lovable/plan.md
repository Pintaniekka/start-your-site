
# Ulkoasun päivitys: Kirkkaampi Teal + Otsikkokorostus

## Muutokset

### 1. Aksenttiväri: Kirkkaampi Teal
Päivitetään aksenttiväri nykyisestä `hsl(200 50% 50%)` kirkkaampaaan versioon `hsl(175 70% 45%)` - tämä on eloisa teal, joka erottuu hyvin tummaa taustaa vasten.

**Tiedosto:** `src/index.css`
- Light mode: `--accent: 175 70% 45%`
- Dark mode: `--accent: 175 75% 50%`

### 2. Otsikon korostus (Vaihtoehto A)
Muutetaan hero-otsikko niin, että vain avainsanat "katoille" ja "seinille" ovat aksenttivärillä erikseen.

**Tiedosto:** `src/components/Hero.tsx`

Nykyinen:
```
Uutta ilmettä kotisi <span className="text-accent">katoille ja seinille</span>
```

Uusi:
```
Uutta ilmettä kotisi <span className="text-accent">katoille</span> ja <span className="text-accent">seinille</span>
```

## Vaikutusalue
- Kaikki `text-accent` ja `bg-accent` -elementit sivustolla
- Hero-otsikko
- CTA-napit
- Ikonit (MapPin, Award, Shield, Clock)
- Palvelukortit ja badget

## Toteutusjärjestys
1. Päivitä CSS-muuttujat (`src/index.css`)
2. Muokkaa hero-otsikko (`src/components/Hero.tsx`)
