import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Etusivu', href: '#hero' },
    { label: 'Palvelut', href: '#palvelut' },
    { label: 'Hintalaskuri', href: '#hintalaskuri' },
    { label: 'Referenssit', href: '#referenssit' },
    { label: 'Yhteystiedot', href: '#yhteystiedot' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Pintanen Oy" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground hover:text-primary-foreground/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+358401234567"
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
                : 'bg-accent text-accent-foreground hover:scale-105'
            }`}
          >
            <Phone className="w-4 h-4" />
            Soita meille
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+358401234567"
                className="mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4" />
                Soita meille
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
