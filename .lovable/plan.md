

## GitHub Actions Workflow GitHub Pagesiin

Luon sinulle GitHub Actions -workflow-tiedoston, joka julkaisee Vite-projektin automaattisesti GitHub Pagesiin aina kun pushaat koodia main-haaraan.

### Mitä teen

1. **Luon workflow-tiedoston** `.github/workflows/deploy.yml`
   - Käynnistyy automaattisesti kun koodi pushataan main-haaraan
   - Asentaa riippuvuudet, rakentaa projektin ja julkaisee sen

2. **Päivitän vite.config.ts** lisäämällä `base: '/'` asetuksen
   - Tämä varmistaa että polut toimivat oikein custom-domainilla (pintanen.fi)

### Workflow toimii näin

1. Checkout - hakee koodin repositoriosta
2. Setup Node.js - asentaa Node.js:n
3. Install - asentaa riippuvuudet (`npm ci`)
4. Build - rakentaa tuotantoversion (`npm run build`)
5. Deploy - julkaisee `dist`-kansion GitHub Pagesiin

### Huomioitavaa

- Projekti käyttää jo custom-domainia `pintanen.fi` (CNAME-tiedosto on valmiina)
- GitHub Pages täytyy ottaa käyttöön repositorion asetuksista: Settings > Pages > Source: "GitHub Actions"
- Workflow käyttää virallista `actions/deploy-pages` -actionia

---

### Tekniset yksityiskohdat

**Uusi tiedosto:** `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Muutos:** `vite.config.ts` - lisätään `base: '/'`

