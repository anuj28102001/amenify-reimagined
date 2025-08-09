import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Smartphone, Camera, Monitor, Users, Factory } from "lucide-react";
import technologyImage from "@/assets/ar-technology.jpg";

const TechnologySection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI-Powered Design Intelligence",
      description: "Smart algorithm analyzes 100K+ past projects to create personalized designs in 24 hours"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Immersive VR Walkthroughs",
      description: "Experience your home in virtual reality - walk, sit, and feel the space before construction"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "AR Material Selection", 
      description: "Point your phone to see how every sofa, curtain, and tile looks in your actual room"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "360° Progress Monitoring",
      description: "3D cameras capture daily construction updates - track progress from your phone"
    },
   
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Owned Manufacturing",
      description: "Our 5 factories across India ensure quality control and faster delivery unlike competitors"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="bg-gradient-nature text-white font-semibold mb-3 px-4 py-1">
            🏡 VR Technology
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Step Inside Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dream Home
            </span>{" "}
            Today
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Walk through your living room, test your kitchen layout, and see how sunlight flows through your bedroom - all in virtual reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={technologyImage} 
                alt="AR/VR Technology in Interior Design" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-accent-gold text-primary font-semibold">
                  ✨ Book Free VR Demo | Beat Any Quote
                </Badge>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 animate-fade-in-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-white/20 hover:border-white/40 hover:shadow-card transition-all duration-300 group bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white group-hover:scale-110 transition-transform duration-300 border border-white/30">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;