
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury kitchen interior design by Amenify"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          decoding="async"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 "></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-foreground space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              {/* Amenify Logo/Brand */}
              {/* <div className="flex items-center gap-3 mb-6">
                <img
                  src="/lovable-uploads/dec9d5ec-adcb-469d-be63-0c820060f6ec.png"
                  alt="Amenify logo - luxury interior designers"
                  className="h-12 w-12 rounded-full"
                  loading="eager"
                  decoding="async"
                />
                <span className="text-3xl font-bold tracking-wide text-foreground">AMENIFY</span>
              </div> */}
              
              <Badge className="bg-gradient-gold text-white font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2">
                ✨ Creating Beautiful Homes Since 2017 | 100,000+ Families
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{lineHeight: '1.2'}}>
                Your Dream Home{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Awaits
                </span>{" "}
                <span className="relative">
                  <span className="bg-warm-coral text-white px-2 sm:px-3 rounded-lg mt-1">You</span>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your space into a sanctuary of comfort and style. Experience luxury living 
                with our award-winning designs, AR/VR visualization, and India's best warranty.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-warm-cream border border-warm-coral/20 rounded-full px-3 sm:px-4 py-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-warm-coral" />
                <span className="text-xs sm:text-sm font-medium text-primary-dark">60K+ ⭐ Five Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-sage-green/10 border border-sage-green/30 rounded-full px-3 sm:px-4 py-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-sage-green" />
                <span className="text-xs sm:text-sm font-medium text-primary-dark">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-dusty-blue/10 border border-dusty-blue/30 rounded-full px-3 sm:px-4 py-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-dusty-blue" />
                <span className="text-xs sm:text-sm font-medium text-primary-dark">45-Day Move-in</span>
              </div>
            </div>

          
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-scale-in order-first lg:order-last">
            <Card className="bg-card shadow-luxury border-2 border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Get Your Free Design Consultation
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Tell us about your dream space
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input 
                        placeholder="First Name" 
                        className="border-2 focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      <Input 
                        placeholder="Last Name" 
                        className="border-2 focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="border-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="border-2 focus-visible:ring-2 focus-visible:ring-ring"
                    />

                    <Select>
                      <SelectTrigger className="border-2 focus-visible:ring-2 focus-visible:ring-ring">
                        <SelectValue placeholder="Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-home">Full Home Interior</SelectItem>
                        <SelectItem value="kitchen">Kitchen Design</SelectItem>
                        <SelectItem value="bedroom">Bedroom Design</SelectItem>
                        <SelectItem value="living">Living Room</SelectItem>
                        <SelectItem value="office">Home Office</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                    >
                      Get Free Consultation
                    </Button>
                  </form>

                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    No spam. Your information is 100% secure with Amenify.
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
