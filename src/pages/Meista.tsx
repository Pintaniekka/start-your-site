import { motion } from "framer-motion";
import { Check, MapPin, Award, Users, Target } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";
import ServiceCTA from "@/components/ServiceCTA";

const Meista = () => {
  const values = [
    {
      icon: Award,
      title: "Laatu",
      description: "Emme tingi laadusta. Käytämme aina parhaita materiaaleja ja teemme työt huolellisesti.",
    },
    {
      icon: Users,
      title: "Asiakaslähtöisyys",
      description: "Kuuntelemme asiakkaitamme ja räätälöimme palvelumme heidän tarpeisiinsa.",
    },
    {
      icon: Target,
      title: "Luotettavuus",
      description: "Pidämme kiinni sovituista aikatauluista ja hinnoista. Lupaamme vain sen minkä voimme pitää.",
    },
  ];

  const facts = [
    { number: "100+", label: "Tyytyväistä asiakasta" },
    { number: "5", label: "Vuotta kokemusta" },
    { label: "Takuu töille" },
    { number: "100%", label: "Suosittelu" },
  ];

  return (
    <div>
      <ServicePageHero
        title="Mikä ihmeen Pintanen?"
        subtitle="Tutustu meihin – olemme pirkanmaalainen perheyritys, joka on erikoistunut tiilikattojen pinnoitukseen ja talojen maalaukseen"
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tarina Pintasen takana</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pintanen Oy syntyi halusta tehdä asiat kunnolla. Perustaja huomasi, että tiilikattojen pinnoitusalalla
                  oli paljon toimijoita, mutta harva keskittyi todella laadukkaaseen lopputulokseen.
                </p>
                <p>
                  Olemme kasvaneet pienestä yrityksestä Pirkanmaan luotetuimmaksi kattopalveluiden tarjoajaksi. Meille
                  jokainen projekti on yhtä tärkeä – oli kyseessä sitten pieni rivitalon katto tai suuri omakotitalon
                  julkisivumaalaus.
                </p>
                <p>
                  Uskomme, että huolellisesti tehty työ ja reilu asiakaspalvelu kantavat pitkälle. Siksi suurin osa
                  asiakkaistamme tulee suositusten kautta.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{fact.number}</div>
                  <div className="text-sm text-muted-foreground">{fact.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Arvomme</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nämä periaatteet ohjaavat kaikkea tekemistämme.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center bg-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Miksi valita Pintanen?</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                "Yrittäjät vahvasti mukana maalauksessa",
                "Käytämme vain parhaita materiaaleja",
                "Takuu kaikille töille",
                "Ilmainen ja sitomaton arviointi",
                "Reilu ja läpinäkyvä hinnoittelu",
                "Hyvä asiakaspalvelu",
                "Nopea vastaus yhteydenottoihin",
                "Siisti työmaa – siivoamme aina jälkemme",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl"
                >
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Toiminta-alue</h2>
            <p className="text-lg text-muted-foreground mb-6">Palvelemme koko Pirkanmaan alueella ja lähikunnissa:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Tampere", "Nokia", "Hämeenkyrö", "Sastamala", "Kangasala", "Forssa"].map((city) => (
                <span key={city} className="px-4 py-2 bg-card rounded-full text-foreground font-medium">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCTA
        title="Ota yhteyttä"
        subtitle="Kerromme mielellämme lisää yrityksestämme ja palveluistamme. Vastaamme kaikkiin kysymyksiin!"
      />
    </div>
  );
};

export default Meista;
