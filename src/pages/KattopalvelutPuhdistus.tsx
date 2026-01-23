import { motion } from 'framer-motion';
import { Check, Droplets, Shield, Sparkles, Clock, Wrench } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import kattoImage from '@/assets/katto_harmaa.png';
import harjatiivisteImage from '@/assets/harjatiiviste.jpg';

const KattopalvelutPuhdistus = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Mekaaninen puhdistus',
      description: 'Puhdistamme katon mekaanisesti ilman painepesua – painepesuri voi kuluttaa tiilen pintaa.',
    },
    {
      icon: Shield,
      title: 'Sammaleentorjunta',
      description: 'Kattoa suojaava torjunta-aine estää sammalen ja jäkälän uudelleen kasvun.',
    },
    {
      icon: Sparkles,
      title: 'Rikkinäisten tiilten vaihto',
      description: 'Vaihdamme aina rikkinäiset kattotiilet uusiin.',
    },
    {
      icon: Clock,
      title: 'Nopea työ',
      description: 'Normaalin omakotitalon katon puhdistus tapahtuu yleensä yhden päivän aikana.',
    },
  ];

  const benefits = [
    'Pidentää katon käyttöikää',
    'Parantaa talon ulkonäköä',
    'Estää kosteusongelmia',
    'Ennaltaehkäisevä huolto',
    'Edullisempi kuin pinnoitus',
    'Ilmainen kuntotarkastus mukana',
  ];

  const pricing = [
    { size: 'Alle 100 m²', price: 'alkaen 350€' },
    { size: '100-150 m²', price: 'alkaen 500€' },
    { size: '150-200 m²', price: 'alkaen 650€' },
    { size: 'Yli 200 m²', price: 'Kysy tarjous' },
  ];

  return (
    <div>
      <ServicePageHero
        title="Tiilikaton puhdistus"
        subtitle="Ammattimainen mekaaninen puhdistus ja sammaleentorjunta – pidentää kattosi ikää huomattavasti"
        backgroundImage={kattoImage}
      />

      {/* Seloste-osio */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Tiilikaton mekaaninen puhdistus ja käsittely
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Suosittelemme tiilikaton tarkastusta vuosittain. Sammal, jäkälä ja roskat kannattaa 
                poistaa säännöllisesti, jotta katto pysyy hyvässä kunnossa mahdollisimman pitkään.
              </p>
              <p>
                <strong className="text-foreground">Emme käytä painepesuria</strong> tiilikaton puhdistuksessa, 
                koska painepesuri voi kuluttaa tiilen pintaa ja lyhentää katon käyttöikää. Sen sijaan 
                puhdistamme katon mekaanisesti käsityövälineillä, mikä säästää tiilen pintaa.
              </p>
              <p>
                Puhdistuksen jälkeen levitämme sammaleentorjunta-aineen, joka estää uuden kasvuston 
                muodostumisen. Käsittely suojaa kattoa useiksi vuosiksi.
              </p>
              <p>
                Puhdistuksen yhteydessä tarkastamme katon kunnon ja raportoimme mahdollisista 
                korjaustarpeista. Rikkoutuneet tiilet vaihdetaan tarvittaessa uusiin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mitä puhdistus sisältää?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kattavat puhdistuspalvelut yhdellä hinnalla – ei piilokustannuksia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Pricing */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Puhdistuksen hyödyt
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Viitteelliset hinnat
              </h2>
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <motion.div
                    key={item.size}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-card rounded-xl"
                  >
                    <span className="text-foreground font-medium">{item.size}</span>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Lopullinen hinta riippuu katon kunnosta ja sammalen määrästä. Pyydä ilmainen arvio!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to clean */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milloin kannattaa puhdistuttaa katto?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Sammalta tai jäkälää katolla?</strong> Jo pienikin määrä 
                sammalta kannattaa poistaa ennen kuin se leviää koko katolle ja aiheuttaa suurempia vahinkoja.
              </p>
              <p>
                <strong className="text-foreground">5-10 vuotta edellisestä pesusta?</strong> Säännöllinen 
                puhdistus pitää katon hyvässä kunnossa ja estää kalliimmat korjaukset tulevaisuudessa.
              </p>
              <p>
                <strong className="text-foreground">Myyntiä varten?</strong> Puhdas katto nostaa kiinteistön 
                ensivaikutelmaa merkittävästi ja voi lisätä myyntiarvoa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lisätyöt */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lisätyöt
              </h2>
              <p className="text-lg text-muted-foreground">
                Tarjoamme myös seuraavia lisätöitä puhdistuksen yhteydessä
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                  Hengittävä harjatiiviste
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Harjatiiviste asennetaan harjatiilten alle estämään kasvuston, roskien ja 
                    painavan lumen pääsyn kattotiilten alla olevalle aluskatteelle. Se auttaa 
                    katon tärkeimmän elementin – aluskatteen pysymistä ehjänä ja näin katon vesitiiviinä.
                  </p>
                  <p>
                    Suosittelemme harjatiivisteen asennusta erityisesti, jos tiiviste puuttuu 
                    tai vanha tiiviste on päässyt huonoon kuntoon. Asennus on helppo tehdä 
                    pinnoitus/puhdistustyön yhteydessä.
                  </p>
                  <p className="font-medium text-foreground">
                    Kysy lisätietoja harjatiivisteen asennuksesta tarjouspyynnön yhteydessä!
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={harjatiivisteImage} 
                  alt="Harjatiiviste asennettuna" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default KattopalvelutPuhdistus;
