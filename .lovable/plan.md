

# Kuvien korvaaminen Storage-kuvilla

## Yhteenveto

Korvataan kaikki paikalliset kuvat (src/assets/) Lovable Cloud Storage -kuvilla. Galleria ja referenssisivu rakennetaan uudelleen storage-kuvien pohjalta. Bucket tehdaan julkiseksi, jotta kuvat nayttyvat sivustolla.

## Vaihe 1: Tee storage-ampari julkiseksi

SQL-migraatio joka:
- Muuttaa `images`-amparin julkiseksi (`UPDATE storage.buckets SET public = true WHERE id = 'images'`)
- Lisaa SELECT-kaytannon RLS-politiikan, jotta kuvat voidaan lukea

## Vaihe 2: Luo apufunktio storage-URL:ien generointiin

Luodaan tiedosto `src/lib/storage.ts` joka sisaltaa:

```text
getStorageUrl(path: string) -> string
```

Palauttaa julkisen URL:n muodossa:
`{SUPABASE_URL}/storage/v1/object/public/images/{path}`

## Vaihe 3: Paivita BeforeAfter-komponentti

Korvataan paikalliset kuvat `katto_ennen.png` ja `katto_jalkeen.png` storage-kuvilla:
- **Ennen**: `Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kulunut katto ennen maalauspinnoitusta.jpg`
- **Jalkeen**: `Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen katto maalauspinnoituksen jalkeen.jpg`

## Vaihe 4: Paivita Gallery-komponentti

Korvataan kaikki 5 paikallista kuvaa storage-kuvilla kayttaen Muut_referenssit-kansion kuvia:
- Maalattu katto valmis tiilen punainen.jpg
- Maalattu katto valmis harmaa.jpg
- Maalattu katto valmis ruskea.jpg
- kattoprojekti, jossa puolet katosta pesty.jpg
- Kiiltava valmis maalattu katto.jpg

## Vaihe 5: Rakenna Referenssit-sivu uudelleen

Korvataan kaikki paikalliset kuvaviittaukset. Ryhmitellyt projektit rakennetaan storage-kuvista:

**Kattoprojektit (pinnoitus):**
- Projekti 1: Punainen kulunut katto ennen -> Punainen katto pinnoituksen jalkeen
- Projekti 2: Punainen likainen katto ennen -> Punainen kiiltava katto pinnoituksen jalkeen

**Katon puhdistus:**
- Projekti: Katto ennen mekaanista puhdistusta -> Katto mekaanisen puhdistuksen jalkeen

**Talon maalaus:**
- Keltainen seina: ennen -> jalkeen
- Sininen talo: ennen -> jalkeen
- Punainen seina: ennen -> varinvaihdon jalkeen (Harmaa seina)

**Yksittaiset:**
- Maalattu katto valmis tiilen punainen, harmaa, ruskea
- katto vanha ja uusi vierekkain
- Valmis seina maalattu
- suojaus 1 ja 2

## Vaihe 6: Paivita palvelusivujen hero-kuvat

- **KattopalvelutPinnoitus**: `kiiltava_katto_2.jpeg` -> `Muut_referenssit/Kiiltava valmis maalattu katto.jpg`
- **KattopalvelutPuhdistus**: `puhdistus_ennen_jalkeen.png` -> `Paallekkain.../Punainen maalattu katto ennen ja jalkeen.jpg`
- **TalonMaalaus**: `seina_ennen_jalkeen_hero.png` -> `Paallekkain.../Sininen maalattu talo ennen ja jalkeen.jpg`
- **Meista**: `pensselikuva.png` -> sailytetaan paikallisena (ei storage-vastinetta)

## Vaihe 7: Hero-video

`Taustavideo.mp4` sailytetaan paikallisena koska sita ei ole storage-amparissa.

## Tiedostot joita muokataan

| Tiedosto | Muutos |
|---|---|
| SQL-migraatio | Bucket julkiseksi + RLS |
| `src/lib/storage.ts` | Uusi apufunktio |
| `src/components/BeforeAfter.tsx` | Storage-URL:t |
| `src/components/Gallery.tsx` | Storage-URL:t |
| `src/pages/Referenssit.tsx` | Taysin uudet kuvat storagesta |
| `src/pages/KattopalvelutPinnoitus.tsx` | Hero-kuva storagesta |
| `src/pages/KattopalvelutPuhdistus.tsx` | Hero-kuva storagesta |
| `src/pages/TalonMaalaus.tsx` | Hero-kuva storagesta |

## Huomioitavaa

- Logo (`logo.png`), pensselikuva ja video sailyvat paikallisina
- Vanhat asset-tiedostot voidaan poistaa myohemmin kun kaikki toimii
- Storage-URL:t sisaltavat valilyonteja tiedostonimissa, joten ne taytyy URL-enkoodata (encodeURIComponent)

