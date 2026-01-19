import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const serviceAreas = [
  'Tampere',
  'Nokia',
  'Ylöjärvi',
  'Kangasala',
  'Lempäälä',
  'Pirkkala',
  'Sastamala',
  'Valkeakoski',
];

const Features = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-primary-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold text-sm md:text-base">Palvelualueet:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            {serviceAreas.map((area, index) => (
              <span key={area} className="text-primary-foreground/80 text-sm md:text-base">
                {area}{index < serviceAreas.length - 1 && <span className="mx-2 text-accent">•</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
