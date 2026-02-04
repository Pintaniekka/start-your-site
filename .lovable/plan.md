

## GitHub Actions Workflow -päivitys

Päivitän `.github/workflows/deploy.yml` -tiedoston korjaamaan build-virheet.

### Muutokset

1. **Node.js versio 20 → 18**
   - Rivi 27: `node-version: '20'` → `node-version: '18'`

2. **npm ci → npm install**
   - Rivi 31: `npm ci` → `npm install`
   - `npm install` on joustavampi ja ei vaadi täydellistä `package-lock.json` -yhteensopivuutta

### Miksi nämä muutokset auttavat

- **npm ci** vaatii tarkan `package-lock.json` -tiedoston ja epäonnistuu jos lukitustiedosto ei vastaa `package.json`:ia
- **npm install** on sallivampi ja päivittää lukitustiedoston tarvittaessa
- Node.js 18 on vakaampi vaihtoehto joillekin riippuvuuksille

