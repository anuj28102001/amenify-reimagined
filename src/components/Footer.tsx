import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <a href="/" className="flex items-center gap-3 mb-2" aria-label="Amenify Home">
                <img 
                  src="/amenify-logo.png" 
                  alt="Amenify Logo" 
                  className="h-8 w-auto"
                />
                {/* <span className="text-2xl font-extrabold tracking-tight uppercase text-primary-foreground">Amenify</span> */}
                <span className="sr-only">Luxury Interior Design</span>
              </a>
              <p className="text-white/80">
                India's most trusted interior design company with $20M funding and 100,000+ happy homes. 
                Premium home & office interiors with AR/VR technology across 8+ major cities.
              </p>
            </div>
            
            <div className="space-y-3">
              <Badge className="bg-accent-gold text-primary font-semibold">
                🏆 Best Price Guarantee
              </Badge>
              <Badge className="bg-accent-gold text-primary font-semibold">
                🛡️ Quality Guarantee  
              </Badge>
              <Badge className="bg-accent-gold text-primary font-semibold">
                💰 Moneyback Guarantee
              </Badge>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span>+91 9873123716</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span>india@amenify.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-1" />
                <span>Emaar Digital Greens, Sector 61, Gurugram</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-gold" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent-gold">Quick Links</h4>
            <div className="space-y-3">
              <a href="#services" className="block hover:text-accent-gold transition-colors">
                Our Services
              </a>
              <a href="#process" className="block hover:text-accent-gold transition-colors">
                How It Works
              </a>
              <a href="#portfolio" className="block hover:text-accent-gold transition-colors">
                Portfolio
              </a>
              <Link to="/about" className="block hover:text-accent-gold transition-colors">
                About Us
              </Link>
              <Link to="/privacy" className="block hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-accent-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent-gold">Stay Updated</h4>
            <p className="text-white/80">
              Get the latest design trends and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline_gold" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline_gold" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline_gold" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline_gold" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2024 Amenify India Pvt Ltd. All rights reserved. | $20M Funded • 100K+ Happy Homes
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-accent-gold font-medium">NCR • Mumbai • Bangalore • Pune • Hyderabad • Chennai • Kolkata • Chandigarh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;