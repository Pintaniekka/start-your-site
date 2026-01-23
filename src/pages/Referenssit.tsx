import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceCTA from '@/components/ServiceCTA';

import kattoEnnen from '@/assets/katto_ennen.png';
import kattoJalkeen from '@/assets/katto_jalkeen.png';
import kattoPuolet from '@/assets/katto_puolet.png';
import kattoHarmaa from '@/assets/katto_harmaa.png';
import kattoRuskea from '@/assets/katto_ruskea.png';
import katto1 from '@/assets/katto_1.png';
import katto1Ennen from '@/assets/katto_1_ennen.png';
import katto1Pesty from '@/assets/katto_1_pesty.png';
import katto2Pesty from '@/assets/katto_2_pesty.png';
import katto2Valmis from '@/assets/katto_2_valmis.png';
import kattoValmisPunainen from '@/assets/katto_valmis_punainen.png';
import seina1Ennen from '@/assets/seina_1_ennen.jpeg';
import seina1Jalkeen from '@/assets/seina_1_jalkeen.jpeg';
import seina2Ennen from '@/assets/seina_2_ennen.jpeg';
import seina2Jalkeen from '@/assets/seina_2_jalkeen.jpeg';

type Category = 'all' | 'pinnoitus' | 'puhdistus' | 'maalaus';

const Referenssit = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Kaikki' },
    { key: 'pinnoitus', label: 'Tiilikaton pinnoitus' },
    { key: 'puhdistus', label: 'Katon puhdistus' },
    { key: 'maalaus', label: 'Talon maalaus' },
  ];

  const projects = [
    { image: katto1Ennen, category: 'puhdistus' as const, title: 'Tiilikatto ennen pesua' },
    { image: katto1Pesty, category: 'puhdistus' as const, title: 'Tiilikatto pesun jälkeen' },
    { image: katto1, category: 'pinnoitus' as const, title: 'Tiilikatto pinnoitettuna' },
    
    { image: kattoEnnen, category: 'puhdistus' as const, title: 'Tiilikatto ennen käsittelyä' },
    { image: katto2Pesty, category: 'puhdistus' as const, title: 'Tiilikatto pesun jälkeen' },
    { image: katto2Valmis, category: 'pinnoitus' as const, title: 'Tiilikatto pinnoitettuna' },
    
    { image: kattoValmisPunainen, category: 'pinnoitus' as const, title: 'Valmis pinnoitus' },
    { image: kattoJalkeen, category: 'pinnoitus' as const, title: 'Tiilikaton pinnoitus' },
    { image: kattoHarmaa, category: 'puhdistus' as const, title: 'Harmaa tiilikatto' },
    { image: kattoRuskea, category: 'pinnoitus' as const, title: 'Ruskea tiilikatto' },
    { image: kattoPuolet, category: 'pinnoitus' as const, title: 'Pinnoitus käynnissä' },
    
    { image: seina1Ennen, category: 'maalaus' as const, title: 'Omakotitalo ennen maalausta' },
    { image: seina1Jalkeen, category: 'maalaus' as const, title: 'Omakotitalo maalauksen jälkeen' },
    
    { image: seina2Ennen, category: 'maalaus' as const, title: 'Puutalo ennen maalausta' },
    { image: seina2Jalkeen, category: 'maalaus' as const, title: 'Puutalo maalauksen jälkeen' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      <ServicePageHero
        title="Referenssit"
        subtitle="Tutustu tekemiimme töihin – laatu puhuu puolestaan"
      />

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="section-container">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.image}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-primary-foreground font-bold">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Ei projekteja tässä kategoriassa.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Suurennettu kuva"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ServiceCTA 
        title="Haluatko nähdä lisää?"
        subtitle="Ota yhteyttä niin kerromme mielellämme lisää töistämme ja vastaamme kysymyksiisi."
      />
    </div>
  );
};

export default Referenssit;
