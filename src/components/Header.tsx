import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-dark text-primary-foreground py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9873123716</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Serving Delhi NCR</span>
            </div>
          </div>
          <div className="text-accent-gold font-medium">
            Serving since 2017
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2" aria-label="Amenify Home">
              <span className="text-2xl font-extrabold tracking-tight uppercase text-foreground">Amenify</span>
              <span className="sr-only">Luxury Interior Design</span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-accent-gold transition-colors">
                Services
              </a>
              <a href="#process" className="text-foreground hover:text-accent-gold transition-colors">
                How It Works
              </a>
              <a href="#portfolio" className="text-foreground hover:text-accent-gold transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-foreground hover:text-accent-gold transition-colors">
                About
              </a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg" className="hidden sm:flex">
                Get Free Estimate
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;