import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Smartphone, Camera, Monitor, Users, Factory } from "lucide-react";
import technologyImage from "@/assets/ar-technology.jpg";

const TechnologySection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI-Driven Customer Profiling",
      description: "Intelligent analysis of your preferences and first set of personalized designs"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Virtual Reality Experience",
      description: "Walk through your space before construction with interactive 3D environments"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Augmented Reality Finalization", 
      description: "See exactly how your design fits in your actual space using AR technology"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "3D Camera Site Updates",
      description: "Daily progress updates captured with advanced 3D camera technology"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Amenify Operator Portal",
      description: "Real-time project tracking and milestone updates through our exclusive portal"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "In-House Team & Factory",
      description: "Complete end-to-end execution with our own manufacturing and installation teams"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="bg-accent-gold text-primary font-semibold mb-4">
            🚀 Patented Technology
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Experience Your Space{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Before Building
            </span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Revolutionary AR/VR technology combined with AI-driven design process 
            ensures you see and experience every detail before construction begins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  ✨ Live AR/VR Demo Available
                </Badge>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 animate-fade-in-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-accent-gold hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-medium">
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