import logo from '@/assets/logo.png';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <img src={logo} alt="Pintanen Oy" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm">
              Tiilikattojen pinnoitukset ja ulkomaalaukset ammattitaidolla. 
              Toiminta-alue: Pirkanmaa ja lähialueet (Forssa)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Palvelut</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#palvelut" className="hover:text-primary-foreground transition-colors">Tiilikaton pinnoitus</a></li>
              <li><a href="#palvelut" className="hover:text-primary-foreground transition-colors">Ulkomaalaus</a></li>
              <li><a href="#palvelut" className="hover:text-primary-foreground transition-colors">Katon puhdistus</a></li>
              <li><a href="#hintalaskuri" className="hover:text-primary-foreground transition-colors">Hintalaskuri</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Yhteystiedot</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Y-tunnus: 3525786-9</li>
              <li>info@pintanen.fi</li>
              <li>Y-tunnus: 1234567-8</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Pintanen Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;