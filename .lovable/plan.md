

# Palvelumme-osion uudistus: Ennen/Jalkeen-liukusaatimet palvelukortteihin

## Yhteenveto

Korvataan nykyisten palvelukorttien ikonikuvat kompakteilla ennen/jalkeen-liukusaatimilla. Jokainen kortti saa oman interaktiivisen kuvavertailun "tuotekuvaksi". Samalla poistetaan erillinen BeforeAfter-osio etusivulta, koska sen toiminnallisuus siirtyy suoraan palvelukortteihin.

## Muutokset

### 1. Uusi komponentti: `BeforeAfterSlider`

Luodaan uudelleenkaytettava `src/components/BeforeAfterSlider.tsx`, joka kapseloi liukusaatimen logiikan (sama tekniikka kuin nykyisessa `BeforeAfter.tsx`). Props:
- `beforeImage: string` -- ennen-kuvan URL
- `afterImage: string` -- jalkeen-kuvan URL
- `aspectRatio?: string` -- oletuksena `"4/3"`

Komponentti on kompakti: pyoristetyt kulmat (`rounded-xl`), "Ennen"/"Jalkeen"-labelit, vetokahva. Ei omaa otsikkoa tai taustaosioita -- pelkka kuvavertailu.

### 2. Kuvien lataus Supabase Storageen

Ladataan kayttajan antamat 4 kuvaa Supabase Storagen `images`-ampariin ja kaytetaan `getStorageUrl()`-funktiota URL:ien luontiin. Kuvien polut:

- `Palvelukortit/Punainen_katto_ennen.jpg`
- `Palvelukortit/Punainen_katto_jalkeen.jpg`
- `Palvelukortit/Keltainen_seina_ennen.jpg`
- `Palvelukortit/Keltainen_seina_jalkeen.jpg`

### 3. Paivitetaan `Services.tsx`

- Poistetaan ikoni-elementti korttien ylaosasta
- Lisataan `BeforeAfterSlider` korttien ylaosaan ennen otsikkoa
- Palveludata saa uudet kentat `beforeImage` ja `afterImage` ikonin tilalle
- Kortin rakenne: Slider -> Otsikko -> Kuvaus -> Ominaisuuslista -> Takuu + "Laske hinta"

### 4. Poistetaan `BeforeAfter`-osio etusivulta

Koska ennen/jalkeen-vertailu siirtyy palvelukortteihin, erillinen `BeforeAfter`-komponentti poistetaan `Index.tsx`:sta. Itse `BeforeAfter.tsx`-tiedosto sailytetaan mahdollista myohempaa kayttoa varten.

## Muutettavat tiedostot

| Tiedosto | Muutos |
|---|---|
| `src/components/BeforeAfterSlider.tsx` | Uusi komponentti -- kompakti ennen/jalkeen-liukusaadin |
| `src/components/Services.tsx` | Korvataan ikonit liukusaatimilla, paivitetaan palveludata |
| `src/pages/Index.tsx` | Poistetaan `BeforeAfter`-osion kayto |

## Tekninen toteutus

### BeforeAfterSlider-komponentti

```text
Props:
  beforeImage: string
  afterImage: string
  aspectRatio?: string (default "4/3")

Rakenne:
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize">
    <img after (taustalla) />
    <div clipPath before (leikattu) />
    <div slider-kahva />
    <span "Ennen" label />
    <span "Jalkeen" label />
  </div>
```

Pienempi kahva (w-10 h-10) ja pienennot labelit kortin mittakaavaan sopiviksi.

### Services.tsx palveludata

```text
services = [
  {
    title: "Tiilikaton pinnoitus",
    beforeImage: getStorageUrl("Palvelukortit/Punainen_katto_ennen.jpg"),
    afterImage: getStorageUrl("Palvelukortit/Punainen_katto_jalkeen.jpg"),
    description: "Vanha tiilikatto uuteen loistoon...",
    features: ["Sammaleenpuhdistus", "Suojakasittely", "Pinnoitus"],
    warranty: "5v takuu"
  },
  {
    title: "Ulkomaalaus",
    beforeImage: getStorageUrl("Palvelukortit/Keltainen_seina_ennen.jpg"),
    afterImage: getStorageUrl("Palvelukortit/Keltainen_seina_jalkeen.jpg"),
    description: "Huolelliset pohjatyot ja laadukas maalipinta...",
    features: ["Pohjatyot", "Laadukkaat maalit", "Siisti tyonjälki"],
    warranty: "2v takuu"
  }
]
```

### Kortin ulkoasu

```text
+-------------------------------+
|  [  Ennen / Jalkeen slider  ] |  <-- rounded-xl, aspect-4/3
|-------------------------------|
|  Tiilikaton pinnoitus         |
|  Vanha tiilikatto uuteen...   |
|                               |
|  v Sammaleenpuhdistus         |
|  v Suojakasittely             |
|  v Pinnoitus                  |
|                               |
|  [5v takuu]    Laske hinta -> |
+-------------------------------+
```

Katon puhdistus -banneri ja tyovaiheet-osio sailyvat ennallaan korttien alapuolella.

