import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Home, ArrowRight, Check } from 'lucide-react';

type CalculatorType = 'roof' | 'wall' | null;
type RoofSlope = '5-19' | '20-30' | '31+' | null;
type WallStories = '1' | '1.5' | '2' | null;
type WallPeeling = 'none' | '1-2' | '3-4' | null;

const PriceCalculator = () => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(null);
  const [squareMeters, setSquareMeters] = useState<string>('');
  const [roofSlope, setRoofSlope] = useState<RoofSlope>(null);
  const [wallStories, setWallStories] = useState<WallStories>(null);
  const [wallPeeling, setWallPeeling] = useState<WallPeeling>(null);

  const calculateRoofPrice = () => {
    if (!squareMeters || !roofSlope) return null;
    const m2 = parseFloat(squareMeters);
    
    let pricePerM2Min: number, pricePerM2Max: number;
    switch (roofSlope) {
      case '5-19':
        pricePerM2Min = 15; pricePerM2Max = 17;
        break;
      case '20-30':
        pricePerM2Min = 18; pricePerM2Max = 21;
        break;
      case '31+':
        pricePerM2Min = 22; pricePerM2Max = 25;
        break;
      default:
        return null;
    }

    const minPrice = Math.max(2850, m2 * pricePerM2Min);
    const maxPrice = Math.max(2850, m2 * pricePerM2Max);

    return { min: minPrice, max: maxPrice };
  };

  const calculateWallPrice = () => {
    if (!squareMeters || !wallStories || !wallPeeling) return null;
    const m2 = parseFloat(squareMeters);
    
    // Base price per m2 based on stories
    let basePrice: number;
    switch (wallStories) {
      case '1': basePrice = 30; break;
      case '1.5': basePrice = 45; break;
      case '2': basePrice = 55; break;
      default: return null;
    }

    // Add peeling surcharge
    let peelingMultiplier: number;
    switch (wallPeeling) {
      case 'none': peelingMultiplier = 1; break;
      case '1-2': peelingMultiplier = 1.15; break;
      case '3-4': peelingMultiplier = 1.3; break;
      default: return null;
    }

    const pricePerM2 = basePrice * peelingMultiplier;
    const totalMin = m2 * pricePerM2;
    const totalMax = m2 * pricePerM2 * 1.2;

    return { min: Math.round(totalMin), max: Math.round(totalMax) };
  };

  const roofPrice = calculateRoofPrice();
  const wallPrice = calculateWallPrice();

  const resetCalculator = () => {
    setSquareMeters('');
    setRoofSlope(null);
    setWallStories(null);
    setWallPeeling(null);
  };

  return (
    <section id="hintalaskuri" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Hintalaskuri
          </h2>
          <p className="text-muted-foreground text-lg">
            Laske arvio projektisi hinnasta muutamassa sekunnissa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Calculator Type Selection */}
          {!calculatorType && (
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setCalculatorType('roof')}
                className="card-elevated text-left group hover:border-primary border-2 border-transparent transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                  Tiilikaton pinnoitus
                </h3>
                <p className="text-muted-foreground text-sm">
                  Laske katon pinnoituksen hinta-arvio neliömetrien ja kaltevuuden perusteella.
                </p>
              </button>

              <button
                onClick={() => setCalculatorType('wall')}
                className="card-elevated text-left group hover:border-primary border-2 border-transparent transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                  Ulkomaalaus
                </h3>
                <p className="text-muted-foreground text-sm">
                  Laske seinien maalauksen hinta-arvio pinta-alan ja kerrosten perusteella.
                </p>
              </button>
            </div>
          )}

          {/* Roof Calculator */}
          <AnimatePresence mode="wait">
            {calculatorType === 'roof' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card-elevated"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-foreground font-heading">
                    Tiilikaton pinnoitus
                  </h3>
                  <button
                    onClick={() => { setCalculatorType(null); resetCalculator(); }}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    ← Takaisin
                  </button>
                </div>

                {/* Square Meters */}
                <div className="mb-8">
                  <label className="block text-foreground font-medium mb-3">
                    1. Katon koko neliömetreinä
                  </label>
                  <input
                    type="number"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(e.target.value)}
                    placeholder="Esim. 150"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Roof Slope */}
                {squareMeters && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <label className="block text-foreground font-medium mb-3">
                      2. Katon kaltevuus
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '5-19', label: '5-19°', desc: 'Loiva' },
                        { value: '20-30', label: '20-30°', desc: 'Normaali' },
                        { value: '31+', label: '31°+', desc: 'Jyrkkä' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setRoofSlope(option.value as RoofSlope)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            roofSlope === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="text-2xl mb-1">🏠</div>
                          <div className="font-bold text-foreground">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                          {roofSlope === option.value && (
                            <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Price Result */}
                {roofPrice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
                  >
                    <div className="text-sm mb-2">Arvioitu hinta</div>
                    <div className="text-4xl font-bold mb-2">
                      {roofPrice.min.toLocaleString('fi-FI')} - {roofPrice.max.toLocaleString('fi-FI')} €
                    </div>
                    <div className="text-sm opacity-80 mb-4">
                      5 vuoden takuu
                    </div>
                    <a
                      href="#yhteystiedot"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                    >
                      Pyydä tarkka tarjous
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}

            {calculatorType === 'wall' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card-elevated"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-foreground font-heading">
                    Ulkomaalaus
                  </h3>
                  <button
                    onClick={() => { setCalculatorType(null); resetCalculator(); }}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    ← Takaisin
                  </button>
                </div>

                {/* Square Meters */}
                <div className="mb-8">
                  <label className="block text-foreground font-medium mb-3">
                    1. Maalattava pinta-ala (m²)
                  </label>
                  <input
                    type="number"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(e.target.value)}
                    placeholder="Esim. 120"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Stories */}
                {squareMeters && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <label className="block text-foreground font-medium mb-3">
                      2. Talon kerrokset
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '1', label: '1 kerros' },
                        { value: '1.5', label: '1,5 kerrosta' },
                        { value: '2', label: '2 kerrosta' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setWallStories(option.value as WallStories)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            wallStories === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="text-2xl mb-1">🏡</div>
                          <div className="font-bold text-foreground">{option.label}</div>
                          {wallStories === option.value && (
                            <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Peeling */}
                {wallStories && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <label className="block text-foreground font-medium mb-3">
                      3. Maalin hilseilyn määrä
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: 'none', label: 'Ei lainkaan' },
                        { value: '1-2', label: '1-2 seinällä' },
                        { value: '3-4', label: '3-4 seinällä' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setWallPeeling(option.value as WallPeeling)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            wallPeeling === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-bold text-foreground text-sm">{option.label}</div>
                          {wallPeeling === option.value && (
                            <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Price Result */}
                {wallPrice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
                  >
                    <div className="text-sm mb-2">Arvioitu hinta</div>
                    <div className="text-4xl font-bold mb-2">
                      {wallPrice.min.toLocaleString('fi-FI')} - {wallPrice.max.toLocaleString('fi-FI')} €
                    </div>
                    <div className="text-sm opacity-80 mb-4">
                      2 vuoden takuu
                    </div>
                    <a
                      href="#yhteystiedot"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                    >
                      Pyydä tarkka tarjous
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
