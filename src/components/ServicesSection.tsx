import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, ChefHat, Bed, Sofa, Bath, Building } from "lucide-react";
import bedroomImage from "@/assets/bedroom-design.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Full Home Interiors",
      description: "Complete end-to-end interior design for your entire home",
      features: ["3D Design", "Material Selection", "Installation", "Warranty"],
      popular: true
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Modular Kitchen",
      description: "Smart, functional kitchens with premium finishes",
      features: ["Custom Cabinets", "Smart Storage", "Premium Appliances", "Island Design"]
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Bedroom Design",
      description: "Luxury bedrooms with custom wardrobes and furniture",
      features: ["Walk-in Closets", "Custom Furniture", "Lighting Design", "Storage Solutions"]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Living Room",
      description: "Elegant living spaces that reflect your lifestyle",
      features: ["Custom Furniture", "Entertainment Units", "Lighting", "Decor"]
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Bathroom Design",
      description: "Spa-like bathrooms with modern fixtures",
      features: ["Premium Fixtures", "Smart Features", "Storage", "Lighting"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Office Interiors",
      description: "Professional office spaces that inspire productivity",
      features: ["Ergonomic Design", "Meeting Rooms", "Storage", "Tech Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Our{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your interior design project 
            with precision, quality, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-2 hover:border-accent-gold hover:shadow-card transition-all duration-300 group ${
                service.popular ? 'border-accent-gold shadow-card' : 'border-border'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-accent-gold text-primary px-3 py-1 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg w-fit ${
                    service.popular ? 'bg-gradient-gold text-primary' : 'bg-accent-gold text-primary'
                  }`}>
                    {service.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-medium mb-4">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                        <span className="text-neutral-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline_gold" 
                    className="w-full group-hover:bg-accent-gold group-hover:text-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Space?
              </h3>
              <p className="text-xl text-white/90">
                Get a personalized consultation with our design experts and see your space 
                come to life with our AR/VR technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Schedule Consultation
                </Button>
                <Button variant="outline_gold" size="xl">
                  View Our Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={bedroomImage} 
                alt="Luxury Bedroom Design" 
                className="w-full h-80 object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;