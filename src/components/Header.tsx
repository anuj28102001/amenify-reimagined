import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-hero text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9873123716</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">8+ Cities | NCR • Mumbai • Bangalore • Pune</span>
              <span className="lg:hidden">8+ Cities</span>
            </div>
          </div>
          <div className="text-white font-medium hidden xl:block">
            $20M Funded • 100K+ Happy Homes
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" aria-label="Amenify Home">
              <img 
                src="/amenify-logo.png" 
                alt="Amenify Logo" 
                className="h-6 w-auto"
              />
              
              <span className="sr-only">Luxury Interior Design</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-accent-gold transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="text-foreground hover:text-accent-gold transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-foreground hover:text-accent-gold transition-colors cursor-pointer"
              >
                Portfolio
              </button>
              <Link to="/about" className="text-foreground hover:text-accent-gold transition-colors">
                About
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="hidden sm:flex"
                onClick={() => scrollToSection('typeform-calculator')}  
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left text-foreground hover:text-accent-gold transition-colors py-2 border-b border-border/50"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="block w-full text-left text-foreground hover:text-accent-gold transition-colors py-2 border-b border-border/50"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="block w-full text-left text-foreground hover:text-accent-gold transition-colors py-2 border-b border-border/50"
              >
                Portfolio
              </button>
              <Link 
                to="/about" 
                className="block w-full text-left text-foreground hover:text-accent-gold transition-colors py-2 border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full mt-4"
                onClick={() => {
                  scrollToSection('typeform-calculator');
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;