import { motion } from "framer-motion";
import { Check, Droplets, Shield, Sparkles, Clock } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";
import kattoImage from "@/assets/katto_harmaa.png";

const KattopalvelutPuhdistus = () => {
  const features = [
    {
      icon: Droplets,
      title: "Mekaaninen puhdistus",
      description: "Puhdistamme katon mekaanisesti ilman painepesua – painepesuri voi kuluttaa tiilen pintaa.",
    },
    {
      icon: Shield,
      title: "Sammaleentorjunta",
      description: "Kattoa suojaava torjunta-aine estää sammalen ja jäkälän uudelleen kasvun.",
    },
    {
      icon: Sparkles,
      title: "Katon tarkastus",
      description: "Puhdistuksen yhteydessä tarkastamme katon kunnon ja raportoimme havainnot.",
    },
    {
      icon: Clock,
      title: "Nopea työ",
      description: "Normaalin omakotitalon katon puhdistus tapahtuu yleensä yhden päivän aikana.",
    },
  ];

  const benefits = [
    "Pidentää katon käyttöikää",
    "Parantaa talon ulkonäköä",
    "Estää kosteusongelmia",
    "Ennaltaehkäisevä huolto",
    "Edullisempi kuin pinnoitus",
    "Ilmainen kuntotarkastus mukana",
  ];

  const pricing = [
    { size: "Alle 100 m²", price: "alkaen 800€" },
    { size: "100-150 m²", price: "alkaen 1000€" },
    { size: "150-200 m²", price: "alkaen 1400€" },
    { size: "Yli 200 m²", price: "Kysy tarjous" },
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
                Suosittelemme tiilikaton tarkastusta vuosittain. Sammal, jäkälä ja roskat kannattaa poistaa
                säännöllisesti, jotta katto pysyy hyvässä kunnossa mahdollisimman pitkään.
              </p>
              <p>
                <strong className="text-foreground">Emme käytä painepesuria</strong> tiilikaton puhdistuksessa, koska
                painepesuri voi kuluttaa tiilen pintaa ja lyhentää katon käyttöikää. Sen sijaan puhdistamme katon
                mekaanisesti käsityövälineillä, mikä säästää tiilen pintaa.
              </p>
              <p>
                Puhdistuksen jälkeen levitämme sammaleentorjunta-aineen, joka estää uuden kasvuston muodostumisen.
                Käsittely suojaa kattoa jopa useiksi vuosiksi.
              </p>
              <p>
                Puhdistuksen yhteydessä tarkastamme katon kunnon ja raportoimme mahdollisista korjaustarpeista.
                Rikkoutuneet tiilet vaihdetaan uusiin.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mitä puhdistus sisältää?</h2>
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Puhdistuksen hyödyt</h2>
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
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Viitteelliset hinnat</h2>
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
                <strong className="text-foreground">Sammalta tai muuta kasvustoa katolla?</strong> Jo pienikin määrä
                sammalta kannattaa poistaa ennen kuin se aiheuttaa vahinkoa koko katolla.
              </p>
              <p>
                <strong className="text-foreground">Aikaa edellisestä puhdistuksessta?</strong> Säännöllinen puhdistus
                pitää katon hyvässä kunnossa ja estää kalliimmat korjaukset tulevaisuudessa.
              </p>
              <p>
                <strong className="text-foreground">Myyntiä varten?</strong> Puhdas katto nostaa kiinteistön
                ensivaikutelmaa ja voi lisätä myyntiarvoa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default KattopalvelutPuhdistus;
