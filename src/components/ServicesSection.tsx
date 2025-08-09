import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, ChefHat, Bed, Sofa, Bath, Building } from "lucide-react";
import bedroomImage from "@/assets/bedroom-design.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Full Home Interiors",
      description: "Turn your house into a dream home where every corner tells your story",
      features: ["VR Walkthrough", "Premium Materials", "45-Day Install", "10-Year Warranty"],
      popular: true,
      color: "warm-coral"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Modular Kitchen",
      description: "Create the heart of your home where family memories are made",
      features: ["Smart Storage", "Premium Appliances", "Island Design", "Easy Maintenance"],
      color: "warm-orange"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Bedroom Design",
      description: "Your personal sanctuary for rest, relaxation, and rejuvenation",
      features: ["Walk-in Closets", "Mood Lighting", "Storage Solutions", "Custom Furniture"],
      color: "dusty-blue"
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Living Room",
      description: "Spaces that bring families together and create lasting memories",
      features: ["Entertainment Centers", "Comfortable Seating", "Perfect Lighting", "Art Display"],
      color: "sage-green"
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Bathroom Design",
      description: "Transform your daily routine into a spa-like experience",
      features: ["Premium Fixtures", "Smart Features", "Ample Storage", "Ambient Lighting"],
      color: "terracotta"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Office Interiors",
      description: "Productive workspaces that inspire creativity and success",
      features: ["Ergonomic Design", "Collaboration Zones", "Smart Storage", "Tech Integration"],
      color: "accent-gold"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 sm:mb-6">
            Spaces That{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Tell Your Story
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-medium max-w-3xl mx-auto px-4">
            Every room should reflect who you are and how you live. From cozy family kitchens to 
            productive home offices - we create spaces that feel uniquely yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-card transition-all duration-300 group border border-gray-100 bg-white cursor-pointer ${
                service.popular ? 'ring-2 ring-warm-coral/30 shadow-lg' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-2 -right-2 bg-gradient-hero text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg z-10 animate-pulse">
                  ⭐ Most Popular
                </div>
              )}
              
              <CardContent className="p-6 relative">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl shadow-lg text-white transform group-hover:scale-110 transition-transform duration-300 ${
                      service.color === 'warm-coral' ? 'bg-warm-coral' :
                      service.color === 'warm-orange' ? 'bg-warm-orange' :
                      service.color === 'dusty-blue' ? 'bg-dusty-blue' :
                      service.color === 'sage-green' ? 'bg-sage-green' :
                      service.color === 'terracotta' ? 'bg-terracotta' :
                      'bg-accent-gold'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-1">
                        {service.title}
                      </h3>
                      <div className={`w-12 h-1 rounded-full ${
                        service.color === 'warm-coral' ? 'bg-warm-coral' :
                        service.color === 'warm-orange' ? 'bg-warm-orange' :
                        service.color === 'dusty-blue' ? 'bg-dusty-blue' :
                        service.color === 'sage-green' ? 'bg-sage-green' :
                        service.color === 'terracotta' ? 'bg-terracotta' :
                        'bg-accent-gold'
                      }`}></div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-medium leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'warm-coral' ? 'bg-warm-coral' :
                          service.color === 'warm-orange' ? 'bg-warm-orange' :
                          service.color === 'dusty-blue' ? 'bg-dusty-blue' :
                          service.color === 'sage-green' ? 'bg-sage-green' :
                          service.color === 'terracotta' ? 'bg-terracotta' :
                          'bg-accent-gold'
                        }`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="hero" 
                    className="w-full transform group-hover:scale-105 transition-all duration-300"
                    style={{
                      background: service.color === 'warm-coral' ? 'hsl(var(--warm-coral))' :
                                 service.color === 'warm-orange' ? 'hsl(var(--warm-orange))' :
                                 service.color === 'dusty-blue' ? 'hsl(var(--dusty-blue))' :
                                 service.color === 'sage-green' ? 'hsl(var(--sage-green))' :
                                 service.color === 'terracotta' ? 'hsl(var(--terracotta))' :
                                 'hsl(var(--accent-gold))'
                    }}
                  >
                    Explore This Service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="bg-gradient-nature rounded-3xl p-8 md:p-12 text-white animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Ready to Fall in Love with Your Home?
              </h3>
              <p className="text-xl text-white/90">
                Book your free VR consultation and walk through your future home today. 
                Experience the magic of seeing your dreams come to life before construction begins.
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