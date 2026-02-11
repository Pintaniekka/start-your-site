

# Favicon-korjaus: SVG paafaviconiksi, vanhat PNG:t pois

## Ongelma

Nykyiset PNG-faviconit (`favicon.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) ovat pikseloituneita placeholder-kuvia. Ne nayttavat huonoilta selainvalilahdissa.

## Ratkaisu

1. **Kopioidaan ladattu SVG** (`user-uploads://Pintanen_favicon_maalaus.svg`) tiedostoon `public/favicon.svg`

2. **Paivitetaan `index.html`** - SVG ensisijaiseksi faviconiksi, poistetaan turhat PNG-viittaukset:

```text
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

Poistetaan rivit jotka viittaavat vanhoihin pikseloituneisiin PNG-tiedostoihin (favicon.png 16x16 ja 32x32, icon-192.png, icon-512.png). Apple Touch Icon -rivi sailytetaan rakenteellisesti, mutta koska sekin on vanha placeholder, sen voisi paivittaa myohemmin kun kaytossa on nelion muotoinen PNG.

## Muutettavat tiedostot

| Tiedosto | Muutos |
|---|---|
| `public/favicon.svg` | Uusi tiedosto (kopio ladatusta SVG:sta) |
| `index.html` | SVG-favicon ensisijaiseksi, vanhat PNG-rivit pois |

## Huomio

SVG-favicon toimii Chromessa, Firefoxissa ja Edgessa. Safari ei tue SVG-faviconia, joten siella nakyy oletuskuvake. Jos myohemmin haluat taydellisen tuen kaikille selaimille, tarvitaan nelion muotoinen PNG-versio samasta kuvasta.

