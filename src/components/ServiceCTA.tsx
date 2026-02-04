import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

const ServiceCTA = ({
  title = "Kiinnostuitko?",
  subtitle = "Pyydä ilmainen arvio tai soita meille – vastaamme mielellämme kaikkiin kysymyksiisi.",
}: ServiceCTAProps) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+358409640066" className="btn-hero bg-accent text-accent-foreground">
              <Phone className="w-5 h-5" />
              Soita: 040 964 0066
            </a>
            <Link to="/#yhteystiedot" className="btn-hero-outline">
              <Mail className="w-5 h-5" />
              Lähetä viesti
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
