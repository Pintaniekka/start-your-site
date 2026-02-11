
# Korjaussuunnitelma: Referenssit-kuvat, hero-kuvat, favicon, navigaatio ja mobiili-blur

## 1. Referenssit-sivun rikkinaiset kuvat

Ongelma: Osa kuvien tiedostonimista koodissa ei vastaa Storagessa olevia nimia. Tama aiheuttaa 404-virheita, jotka selain blokkaa (ERR_BLOCKED_BY_ORB).

Korjattavat tiedostonimet `Referenssit.tsx`:ssa:

| Koodissa nyt | Storagessa oikeasti |
|---|---|
| `Samaan_.../Katto ennen mekaanista puhdistusta.jpg` | `Muut_referenssit/Katto ennen mekaanista puhdistusta.jpg` |
| `Samaan_.../Katto mekaanisen puhdistuksen jalkeen.jpg` | `Muut_referenssit/Katto mekaanisen puhdistuksen jalkeen.jpg` |
| `Samaan_.../Punainen kiiltava katto maalauspinnoituksen jalkeen.jpg` | `Samaan_.../Punainen kiiltava katto maalaukspinnoituksen jalkeen.jpg` |
| `Samaan_.../Sininen talo maalauksen jalkeen.jpg` | `Samaan_.../sininen talo maalauksen jalkeen.jpg` (pieni s) |
| `Samaan_.../Punainen seina ennen varinvaihtoa.jpg` | `Samaan_.../Punainen seina ennen maalausta varinvaihdos.jpg` |
| `Samaan_.../Harmaa seina varinvaihdon jalkeen.jpg` | `Samaan_.../Harmaa seina varinvaihdon jalkeen.jpg` (OK) |

Korjaus: Paivitetaan polut vastaamaan Storagessa olevia oikeita nimia.

## 2. Hero-kuvien paivitys

Sivukohtaiset hero-kuvat paivitetaan Storagen kuvilla:

| Sivu | Nykyinen kuva | Uusi kuva (Storagesta) |
|---|---|---|
| Meista (Tutustu Pintaseen) | `@/assets/pensselikuva.png` (lokaali) | `pensselikuva.jpg` (Storage juuressa) |
| Tiilikaton puhdistus | `Paallekkain_.../Punainen maalattu katto ennen ja jalkeen.jpg` | `Muut_referenssit/Katto mekaanisen puhdistuksen jalkeen.jpg` |
| Talon maalaus | `Paallekkain_.../Sininen maalattu talo ennen ja jalkeen.jpg` | `Samaan_.../Harmaa seina varinvaihdon jalkeen.jpg` |
| Referenssit | Ei hero-kuvaa (vain gradient) | `Muut_referenssit/kattoprojekti, jossa puolet katosta pesty.jpg` |

Muutettavat tiedostot:
- `src/pages/Meista.tsx` -- vaihdetaan import getStorageUrl-kutsuun
- `src/pages/KattopalvelutPuhdistus.tsx` -- vaihdetaan hero-kuvan polku
- `src/pages/TalonMaalaus.tsx` -- vaihdetaan hero-kuvan polku
- `src/pages/Referenssit.tsx` -- lisataan backgroundImage-prop ServicePageHeroon

## 3. Favicon-paivitys

Storagessa on `Uusi favicon.svg` ja `Uusi favicon.png`. Suunnitelma:
- Ladataan molemmat tiedostot ja kopioidaan `public/`-kansioon nimilla `favicon.svg` ja `favicon.png`
- Paivitetaan `index.html` kayttamaan uutta SVG-faviconia ja PNG-varavaihtoehtona
- Kaytetaan isoa kokoa (laidasta laitaan)

## 4. Navigaation yhtenaisyys

Nykyinen tilanne: Header-komponentti on jo jaettu `Layout.tsx`n kautta kaikille sivuille. Navigaatio nakyy samanlaisena joka sivulla. Mahdollinen ongelma on, etta taustavari vaihtuu vain etusivulla (isHomePage-ehto). Korjaus: Poistetaan transparentti tausta kokonaan -- navigaatio on aina `bg-primary/95 backdrop-blur-md`.

Muutettava tiedosto: `src/components/Header.tsx`

## 5. Mobiili-haivytys -> blur

Nykyisessa CSS:ssa ei ole eksplisiittista valkoista haivytysta. Todennakoisesti ongelma tulee hero-osion gradient-overlaysta tai scroll-indikaattorista. Tarkistetaan Hero-komponentti ja lisataan `backdrop-filter: blur()` valkoisen gradientin tilalle, tai muokataan hero-gradient CSS-muuttujaa mobiilissa.

Koska hero-gradient on jo maaritelty `index.css`:ssa eika kayta valkoista, ongelma saattaa liittya ServicePageHero-komponenttien gradient-overlayhin tai body-taustan nakymiseen. Lisaan mobiililla blurrin hero-osioiden alaosaan valkoisen haivytyksen tilalle.

## Muutettavat tiedostot yhteenveto

| Tiedosto | Muutos |
|---|---|
| `src/pages/Referenssit.tsx` | Korjataan kuvapolut + lisataan hero-kuva |
| `src/pages/Meista.tsx` | Vaihdetaan hero-kuva Storageen |
| `src/pages/KattopalvelutPuhdistus.tsx` | Vaihdetaan hero-kuva |
| `src/pages/TalonMaalaus.tsx` | Vaihdetaan hero-kuva |
| `src/components/Header.tsx` | Poistetaan transparentti tila, aina kiintea tausta |
| `index.html` | Paivitetaan favicon-viittaukset |
| `public/favicon.svg` | Uusi favicon (Storagesta) |
| `public/favicon.png` | Uusi favicon PNG (Storagesta) |
| `src/components/Hero.tsx` tai `src/index.css` | Mobiili-blur-korjaus |
