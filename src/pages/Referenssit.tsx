import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
import seina3Ennen from '@/assets/seina_3_ennen.jpeg';
import seina3Jalkeen from '@/assets/seina_3_jalkeen.jpeg';

type Category = 'all' | 'pinnoitus' | 'puhdistus' | 'maalaus';

interface ProjectImage {
  src: string;
  label: string;
}

interface GroupedProject {
  type: 'group';
  thumbnail: string;
  title: string;
  category: Category;
  images: ProjectImage[];
}

interface SingleProject {
  type: 'single';
  image: string;
  title: string;
  category: Category;
}

type Project = GroupedProject | SingleProject;

const Referenssit = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<GroupedProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Kaikki' },
    { key: 'pinnoitus', label: 'Tiilikaton pinnoitus' },
    { key: 'puhdistus', label: 'Katon puhdistus' },
    { key: 'maalaus', label: 'Talon maalaus' },
  ];

  const projects: Project[] = [
    // Katto 1 - ryhmä (ennen, pesty, valmis)
    {
      type: 'group',
      thumbnail: katto1Ennen,
      title: 'Tiilikattoprojekti 1',
      category: 'pinnoitus',
      images: [
        { src: katto1Ennen, label: 'Ennen' },
        { src: katto1Pesty, label: 'Pesun jälkeen' },
        { src: katto1, label: 'Pinnoitettuna' },
      ],
    },
    // Katto 2 - ryhmä (ennen, pesty, valmis)
    {
      type: 'group',
      thumbnail: kattoEnnen,
      title: 'Tiilikattoprojekti 2',
      category: 'pinnoitus',
      images: [
        { src: kattoEnnen, label: 'Ennen' },
        { src: katto2Pesty, label: 'Pesun jälkeen' },
        { src: katto2Valmis, label: 'Pinnoitettuna' },
      ],
    },
    // Seinä 1 - ryhmä (ennen, jälkeen)
    {
      type: 'group',
      thumbnail: seina1Ennen,
      title: 'Omakotitalon maalaus',
      category: 'maalaus',
      images: [
        { src: seina1Ennen, label: 'Ennen' },
        { src: seina1Jalkeen, label: 'Jälkeen' },
      ],
    },
    // Seinä 2 - ryhmä (ennen, jälkeen)
    {
      type: 'group',
      thumbnail: seina2Ennen,
      title: 'Puutalon maalaus',
      category: 'maalaus',
      images: [
        { src: seina2Ennen, label: 'Ennen' },
        { src: seina2Jalkeen, label: 'Jälkeen' },
      ],
    },
    // Seinä 3 - ryhmä (ennen, jälkeen)
    {
      type: 'group',
      thumbnail: seina3Ennen,
      title: 'Keltaisen talon maalaus',
      category: 'maalaus',
      images: [
        { src: seina3Ennen, label: 'Ennen' },
        { src: seina3Jalkeen, label: 'Jälkeen' },
      ],
    },
    // Yksittäiset referenssikuvat
    { type: 'single', image: kattoValmisPunainen, category: 'pinnoitus', title: 'Valmis pinnoitus' },
    { type: 'single', image: kattoJalkeen, category: 'pinnoitus', title: 'Tiilikaton pinnoitus' },
    { type: 'single', image: kattoHarmaa, category: 'puhdistus', title: 'Harmaa tiilikatto' },
    { type: 'single', image: kattoRuskea, category: 'pinnoitus', title: 'Ruskea tiilikatto' },
    { type: 'single', image: kattoPuolet, category: 'pinnoitus', title: 'Pinnoitus käynnissä' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openGroupLightbox = (project: GroupedProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const openSingleLightbox = (image: string, title: string) => {
    setSelectedProject({
      type: 'group',
      thumbnail: image,
      title,
      category: 'all',
      images: [{ src: image, label: '' }],
    });
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

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
                  key={`${project.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => 
                    project.type === 'group' 
                      ? openGroupLightbox(project) 
                      : openSingleLightbox(project.image, project.title)
                  }
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <img 
                      src={project.type === 'group' ? project.thumbnail : project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Group indicator */}
                    {project.type === 'group' && project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {project.images.length} kuvaa
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-primary-foreground font-bold">{project.title}</h3>
                      {project.type === 'group' && project.images.length > 1 && (
                        <p className="text-white/80 text-sm mt-1">
                          {project.images.map(img => img.label).join(' → ')}
                        </p>
                      )}
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
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  className={`absolute left-4 p-3 rounded-full bg-black/50 text-white transition-all z-10 ${
                    currentImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'
                  }`}
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className={`absolute right-4 p-3 rounded-full bg-black/50 text-white transition-all z-10 ${
                    currentImageIndex === selectedProject.images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'
                  }`}
                  onClick={nextImage}
                  disabled={currentImageIndex === selectedProject.images.length - 1}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="flex flex-col items-center max-w-5xl w-full">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={selectedProject.images[currentImageIndex].src}
                alt={selectedProject.images[currentImageIndex].label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image label and counter */}
              {selectedProject.images.length > 1 && (
                <div className="mt-4 text-center">
                  <p className="text-white text-lg font-medium">
                    {selectedProject.images[currentImageIndex].label}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </p>
                </div>
              )}

              {/* Thumbnail strip */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`relative w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-primary' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img.src} 
                        alt={img.label}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
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
