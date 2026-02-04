

## Ulkomaalaus-hintalaskurin päivitys

Päivitän ulkomaalaus-laskurin käyttämään uutta hinnoittelulogiikkaa päivitetyillä arvoilla.

### Muutokset edelliseen suunnitelmaan

- **Kilpailukerroin**: 0.8 → **0.9** (10% alennus alkuperäisistä hinnoista)
- **Liukusäätimen väli**: 50-400 → **50-350 m²**

### Toteutus

**1. Syötekentät**
- **Talon pohjapinta-ala**: Liukusäädin + numerokenttä (50-350 m²)
- **Kerrosten lukumäärä**: "1", "1,5" tai "2"
- **Hilseilyn määrä**: "Ei hilseilyä", "1-2 seinällä", "Yli 3 seinällä"

**2. Hinnoittelulogiikka**

Laskennan perusteet:
- Perushinta interpoloidaan neliöpisteiden välillä (100m²: ~4230€, 200m²: ~6000€, 300m²: ~7800€)
- Kerroskerroin: 1 krs = 1.0, 1.5 krs = 1.225, 2 krs = 1.475
- Hilseilykerroin: Ei hilseilyä = 1.0, 1-2 seinää = 1.15, Yli 3 seinää = 1.275
- **Kilpailukerroin 0.9** laskee lopullista hintaa 10%

**3. UI-parannukset**
- Liukusäädin pinta-alalle (50-350 m²)
- Numeroarvo näytetään liukusäätimen vieressä
- Selkeät valintapainikkeet kerroksille ja hilseilylle
- Hinta näytetään haarukkana (±10% keskiarvosta)

---

### Tekninen toteutus

| Tiedosto | Muutos |
|----------|--------|
| `src/components/PriceCalculator.tsx` | Päivitetään ulkomaalaus-laskurin logiikka ja UI |

