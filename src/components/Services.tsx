import { motion } from "framer-motion";
import { Paintbrush, Home, ArrowRight, Check, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const services = [{
  icon: Paintbrush,
  title: "Tiilikaton pinnoitus",
  description: "Vanha tiilikatto uuteen loistoon. Puhdistamme sammaleen, suojaamme tiilen ja maalaamme pinnan kestäväksi.",
  features: ["Sammaleenpuhdistus", "Suojakäsittely", "Pinnoitus"],
  warranty: "5v takuu",
  image: "/katto_1.png"
}, {
  icon: Home,
  title: "Ulkomaalaus",
  description: "Huolelliset pohjatyöt ja laadukas maalipinta suojaavat taloasi vuosiksi eteenpäin.",
  features: ["Pohjatyöt", "Laadukkaat maalit", "Siisti työnjälki"],
  warranty: "2v takuu",
  image: "/seina.png"
}];

const Services = () => {
  return <section id="palvelut" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Palvelumme</h2>
          <p className="text-muted-foreground text-lg">Ammattitaitoinen maalari edullisesti. Yli 200 tyytyväistä asiakasta.</p>
        </motion.div>

        {/* Services Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.15
        }} className="card-elevated group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map(feature => <li key={feature} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>

              {/* Warranty Badge */}
              <div className="flex items-center justify-between">
                <span className="feature-badge">{service.warranty}</span>
                <a href="#hintalaskuri" className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                  Laske hinta
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>)}
        </div>

        {/* Roof Cleaning Banner */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-8 max-w-4xl mx-auto">
          <Link to="/kattopalvelut/puhdistus" className="block card-elevated bg-muted/50 hover:bg-muted transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground font-heading">Tarvitseeko kattosi vain puhdistuksen?</h4>
                <p className="text-muted-foreground text-sm">Mekaaninen puhdistus ja kasvuston torjuntakäsittely pidentävät kattosi ikää.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* Process Steps */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20 card-elevated bg-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-8 text-center font-heading">Tiilikaton pinnoituksen työvaiheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Pesu painepesurilla", "Rikkoutuneiden tiilien vaihto", "Kasvuston torjunta-aine", "Pohjamaalaus", "Pintamaalaus"].map((step, index) => <div key={step} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;