
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury kitchen interior design by Amenify"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-foreground space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Amenify Logo/Brand */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/lovable-uploads/dec9d5ec-adcb-469d-be63-0c820060f6ec.png"
                  alt="Amenify logo - luxury interior designers"
                  className="h-12 w-12 rounded-full"
                  loading="eager"
                  decoding="async"
                />
                <span className="text-3xl font-bold tracking-wide text-foreground">AMENIFY</span>
              </div>
              
              <Badge className="bg-primary text-primary-foreground font-semibold">
                ⭐ Premium Interior Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your{" "}
                <span className="relative">
                  <span className="bg-primary text-primary-foreground px-2">Space</span>
                </span>{" "}
                Into Reality
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience luxury interior design with our expert team. From concept to completion, 
                we create spaces that reflect your personality and lifestyle.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-accent rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium">Award Winning Design</span>
              </div>
              <div className="flex items-center gap-2 bg-accent rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 bg-accent rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium">5 Star Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="animate-scale-in">
            <Card className="bg-card shadow-luxury border-2 border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Get Your Free Design Consultation
                    </h3>
                    <p className="text-muted-foreground">
                      Tell us about your dream space
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
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

                  <p className="text-sm text-muted-foreground text-center">
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
