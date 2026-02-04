import { motion } from 'framer-motion';
import { Check, Paintbrush, Shield, Clock, BadgeCheck, Home, Sun } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';
import KotitalousVahennys from '@/components/KotitalousVahennys';
import heroImage from '@/assets/seina_ennen_jalkeen.png';

const TalonMaalaus = () => {
  const processSteps = [
    {
      icon: Home,
      title: 'Kunnon arviointi',
      description: 'Arvioimme talon pintojen kunnon ja tarvittavat esityöt.',
    },
    {
      icon: Shield,
      title: 'Pohjatyöt',
      description: 'Perusteellinen pesu, hionta ja tarvittavat paikkaukset.',
    },
    {
      icon: Paintbrush,
      title: 'Pohjamaalaus',
      description: 'Laadukas pohjamaalaus varmistaa pintamaalin tarttuvuuden.',
    },
    {
      icon: Sun,
      title: 'Pintamaalaus',
      description: 'Kaksi kerrosta kestävää ulkomaalia suojaamaan pintoja.',
    },
    {
      icon: BadgeCheck,
      title: 'Tarkastus',
      description: 'Huolellinen lopputarkastus ja dokumentointi.',
    },
  ];

  const benefits = [
    '2 vuoden takuu työlle',
    'Ammattimaiset pohjatöt',
    'Laadukaat Teknos-maalit',
    'Siisti ja huolellinen jälki',
    'Ilmainen arviointi',
    'Toiminta-alue: Pirkanmaa',
  ];

  const services = [
    { name: 'Puutalon ulkomaalaus', description: 'Lautaverhoilut, hirsi- ja paneelipinnat' },
    { name: 'Rappauksen maalaus', description: 'Kivitalot ja rapatut pinnat' },
    { name: 'Ikkunat ja ovet', description: 'Puuikkunoiden ja ovien kunnostus' },
    { name: 'Kuistit ja terassit', description: 'Terassien ja kuistien maalaus' },
  ];

  return (
    <div>
      <ServicePageHero
        title="Talon maalaus"
        subtitle="Ammattitaitoinen ulkomaalaus laadukkailla materiaaleilla – 2 vuoden takuu"
        backgroundImage={heroImage}
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Maalauspalvelumme
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tarjoamme kattavat ulkomaalauspavelit kaikenlaisiin taloihin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated"
              >
                <h3 className="font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Työprosessimme
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Huolellinen työ takaa kestävän lopputuloksen.
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
                className="card-elevated text-center bg-card"
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
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Miksi valita Pintanen?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Olemme erikoistuneet ulkomaalaukseen ja tiedämme, mitä laadukas työ vaatii. 
                Huolellisesti tehdyt pohjatöt ovat avain pitkäikäiseen lopputulokseen.
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
              className="bg-primary/5 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pyydä ilmainen arvio
              </h3>
              <p className="text-muted-foreground mb-6">
                Tulemme mielellämme arvioimaan maalaustyön laajuuden ja antamaan tarjouksen. 
                Arvio on aina maksuton eikä sido mihinkään.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Arvio 1-3 arkipäivän sisällä</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sitomaton tarjous</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <KotitalousVahennys />

      <ServiceCTA />
    </div>
  );
};

export default TalonMaalaus;
