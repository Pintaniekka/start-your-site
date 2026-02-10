

## Tarjouslomakkeen sähköpostilähetyksen toteutus

Tällä hetkellä lomake ei lähetä mitään -- se vain näyttää "Lähetetty!" ilman, että tiedot menevät minnekään. Korjataan tämä niin, että lomakkeen tiedot lähetetään oikeana sähköpostina osoitteeseen **myynti@pintanen.fi**.

### Mitä tarvitaan

1. **Lovable Cloud -yhteys** -- tarvitaan edge functionin ajamiseen (aktivoidaan projektin asetuksista)
2. **Resend-tili** -- sähköpostin lähettämiseen
   - Luo tili osoitteessa [resend.com](https://resend.com)
   - Vahvista domain osoitteessa [resend.com/domains](https://resend.com/domains) (esim. pintanen.fi)
   - Luo API-avain osoitteessa [resend.com/api-keys](https://resend.com/api-keys)
3. **RESEND_API_KEY** -- tallennetaan Lovable-projektiin salaisuutena

### Tekniset muutokset

**1. Edge function: `supabase/functions/send-contact-email/index.ts`**
- Vastaanottaa lomakkeen tiedot (nimi, sähköposti, puhelin, palvelu, viesti)
- Validoi syötteet
- Lähettää sähköpostin Resendin kautta osoitteeseen myynti@pintanen.fi
- Palauttaa onnistumis-/virhetilan

**2. `supabase/config.toml`**
- Lisätään edge function -konfiguraatio (`verify_jwt = false`, koska lomake on julkinen)

**3. `src/integrations/supabase/client.ts`** (tai vastaava)
- Supabase-clientin alustus, jotta edge functionia voidaan kutsua

**4. `src/components/Contact.tsx`**
- Päivitetään `handleSubmit` kutsumaan edge functionia
- Lisätään virheenkäsittely ja latausanimaatio
- Syötteiden validointi ennen lähetystä
- Näytetään käyttäjälle selkeä palaute onnistumisesta tai virheestä

### Vaiheet

| Vaihe | Toimenpide |
|-------|-----------|
| 1 | Aktivoidaan Lovable Cloud |
| 2 | Pyydetään RESEND_API_KEY (käyttäjä lisää) |
| 3 | Luodaan edge function `send-contact-email` |
| 4 | Päivitetään `Contact.tsx` kutsumaan edge functionia |
| 5 | Testataan lomake |

### Huomioita

- Domain (pintanen.fi) pitää olla vahvistettu Resendissä, jotta sähköpostit menevät perille
- Edge function on julkinen (ei JWT-tarkistusta), koska kuka tahansa voi lähettää tarjouspyynnön
- Lisätään yksinkertainen rate limiting -logiikka lomakkeeseen (nappi disabloituu lähetyksen ajaksi)
