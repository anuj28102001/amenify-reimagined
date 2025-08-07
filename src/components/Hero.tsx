import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Shield, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Smart Kitchen Interior" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-accent-gold text-primary font-semibold">
                ⚡ Patented AR/VR Technology
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Luxury{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Smart
                </span>{" "}
                Interiors
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Experience your space before building with AI-driven design, Virtual Reality previews, 
                and Augmented Reality finalization. Transform your home with USA quality in India.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent-gold" />
                <span className="text-sm font-medium">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent-gold" />
                <span className="text-sm font-medium">Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <DollarSign className="w-5 h-5 text-accent-gold" />
                <span className="text-sm font-medium">Moneyback Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline_gold" size="xl">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-scale-in">
            <Card className="bg-white/95 backdrop-blur-sm shadow-luxury border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">
                      Get Your Free Estimate
                    </h3>
                    <p className="text-neutral-medium">
                      Tell us about your project and get instant pricing
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        placeholder="First Name" 
                        className="border-2 focus:border-accent-gold"
                      />
                      <Input 
                        placeholder="Last Name" 
                        className="border-2 focus:border-accent-gold"
                      />
                    </div>
                    
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="border-2 focus:border-accent-gold"
                    />
                    
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="border-2 focus:border-accent-gold"
                    />

                    <Select>
                      <SelectTrigger className="border-2 focus:border-accent-gold">
                        <SelectValue placeholder="Select Budget Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">₹3 - 5 Lakh</SelectItem>
                        <SelectItem value="5-10">₹5 - 10 Lakh</SelectItem>
                        <SelectItem value="10-15">₹10 - 15 Lakh</SelectItem>
                        <SelectItem value="15+">₹15 Lakh+</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                    >
                      Get Free Estimate
                    </Button>
                  </form>

                  <p className="text-sm text-neutral-medium text-center">
                    No spam. Your information is 100% secure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;