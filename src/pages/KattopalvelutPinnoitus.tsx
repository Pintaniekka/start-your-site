import { motion } from 'framer-motion';
import { Check, Droplets, Paintbrush, Shield, Clock, BadgeCheck, Wrench } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import BeforeAfter from '@/components/BeforeAfter';
import PriceCalculator from '@/components/PriceCalculator';
import kattoImage from '@/assets/katto_1.png';
import harjatiivisteImage from '@/assets/harjatiiviste.jpg';

const KattopalvelutPinnoitus = () => {
  const processSteps = [
    {
      icon: Droplets,
      title: '1. Mekaaninen puhdistus',
      description: 'Huolellinen puhdistus ilman painepesua – säästää tiilen pintaa.',
    },
    {
      icon: Shield,
      title: '2. Tiilien tarkastus & vaihto',
      description: 'Rikkinäiset tiilet vaihdetaan uusiin, varmistetaan katon tiiviys.',
    },
    {
      icon: Paintbrush,
      title: '3. Torjunta-ainekäsittely',
      description: 'Sammaleentorjunta-aine estää uuden kasvuston muodostumisen.',
    },
    {
      icon: Clock,
      title: '4. Pohjamaalaus',
      description: 'Laadukas pohjamaalaus varmistaa pintamaalin tarttuvuuden.',
    },
    {
      icon: BadgeCheck,
      title: '5. Pintamaalaus',
      description: 'Kaksi kerrosta kestävää kattopinnoitetta antaa lopullisen suojan.',
    },
  ];

  const benefits = [
    'Jopa 15-20 vuotta lisäikää katolle',
    'Suojaa tiiliä rapautumiselta',
    'Estää sammalen ja jäkälän kasvun',
    'Parantaa kiinteistön ulkonäköä',
    '2 vuoden takuu työlle',
    'Ilmainen kuntotarkastus',
  ];

  return (
    <div>
      <ServicePageHero
        title="Tiilikaton pinnoitus"
        subtitle='"Eikö me sovittu, että se kiiltää?"'
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
              Miksi tiilikaton pinnoitus?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Tiilikaton maalauspinnoitus antaa katolle vedenpitävän suojan ja pidentää sen käyttöikää merkittävästi. 
                Pinnoitus estää kosteuden imeytymisen tiiliin, mikä vähentää pakkasvaurioita ja rapautumista.
              </p>
              <p>
                Tiilikaton todellista kuntoa ei voi selvittää tähystämällä kaukaa tai nojatuolista arvuuttelemalla. 
                Siksi teemme aina ilmaisen kuntotarkastuksen paikan päällä ennen tarjouksen antamista. 
                Katsomme katon kunnon, arvioimme työn laajuuden ja kerromme rehellisesti, onko pinnoitus järkevä vaihtoehto.
              </p>
              <p>
                Suomen olosuhteissa katot ovat kovemmalla rasituksella kuin monessa muussa maassa. 
                Lämpötilojen vaihtelu, kosteus, lumi ja jää kuluttavat kattoa jatkuvasti. 
                Säännöllinen huolto on halvempaa kuin katon täydellinen uusiminen.
              </p>
              <p className="font-medium text-foreground">
                Jos tiilikattoa ei huolla ajoissa, voi edessä olla monta kertaa kalliimpi urakka – katon täydellinen uusiminen. 
                Ota yhteyttä ja sovitaan ilmainen katselmuskäynti!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              5-vaiheinen pinnoitusprosessi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jokainen vaihe on tarkasti suunniteltu takaamaan pitkäikäinen ja kaunis lopputulos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Miksi pinnoittaa tiilikatolla?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tiilikaton pinnoitus on edullisin tapa pidentää katon käyttöikää merkittävästi 
                verrattuna täydelliseen katon uusimiseen.
              </p>
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={kattoImage} 
                alt="Pinnoitettu tiilikatolla" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ennen ja jälkeen
            </h2>
            <p className="text-lg text-muted-foreground">
              Katso itse ero – tulokset puhuvat puolestaan
            </p>
          </motion.div>
          <BeforeAfter />
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
                Tarjoamme myös seuraavia lisätöitä pinnoituksen yhteydessä
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Harjatiiviste
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Harjatiiviste asennetaan harjatiilien alle estämään lintujen, 
                    hyönteisten ja roskien pääsyn katon rakenteisiin. Se parantaa 
                    katon tuuletusta ja pidentää harjatiilien käyttöikää.
                  </p>
                  <p>
                    Suosittelemme harjatiivisteen asennusta erityisesti, jos vanhaa 
                    tiivistettä ei ole tai se on kulunut. Asennus on helppo tehdä 
                    pinnoitustyön yhteydessä.
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


      {/* Price Calculator */}
      <section id="hintalaskuri" className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Laske hinta-arvio
            </h2>
            <p className="text-lg text-muted-foreground">
              Syötä kattosi tiedot ja saat alustavan hinta-arvion
            </p>
          </motion.div>
          <PriceCalculator />
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default KattopalvelutPinnoitus;
