import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="yhteystiedot" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Ota yhteyttä
          </h2>
          <p className="text-muted-foreground text-lg">
            Pyydä ilmainen arviokäynti tai tarjouspyyntö. Vastaamme vuorokauden sisään!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
                Pintanen Oy
              </h3>
              <p className="text-muted-foreground mb-8">
                Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla. 
                Toiminta-alue: Pirkanmaa ja ympäröivät kunnat.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+358401234567"
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Puhelin</div>
                  <div className="font-semibold text-foreground">040 123 4567</div>
                </div>
              </a>

              <a
                href="mailto:info@pintanen.fi"
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Sähköposti</div>
                  <div className="font-semibold text-foreground">info@pintanen.fi</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Toiminta-alue</div>
                  <div className="font-semibold text-foreground">Pirkanmaa ja ympäristö</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-elevated">
              <h3 className="text-xl font-bold text-foreground mb-6 font-heading">
                Pyydä tarjous
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Matti Meikäläinen"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="matti@esimerkki.fi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Puhelin
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="040 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Palvelu
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Valitse palvelu</option>
                    <option value="tiilikatto">Tiilikaton pinnoitus</option>
                    <option value="ulkomaalaus">Ulkomaalaus</option>
                    <option value="puhdistus">Katon puhdistus</option>
                    <option value="muu">Muu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Viesti
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Kerro projektistasi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-primary text-primary-foreground hover:bg-primary-dark'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Lähetetty!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Lähetä tarjouspyyntö
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
