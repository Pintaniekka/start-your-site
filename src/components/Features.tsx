import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Shield, Sparkles, Home, ThumbsUp } from 'lucide-react';

const features = [
  { icon: CheckCircle2, label: 'Laadukas työ' },
  { icon: Home, label: 'Kotimainen työ' },
  { icon: Clock, label: 'Nopea toimitus' },
  { icon: Shield, label: 'Takuu kaikille töille' },
  { icon: Sparkles, label: 'Suomalainen yritys' },
  { icon: ThumbsUp, label: 'Työ valmiiksi ajoissa' },
];

const Features = () => {
  return (
    <section className="py-8 bg-primary">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-primary-foreground"
            >
              <feature.icon className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
