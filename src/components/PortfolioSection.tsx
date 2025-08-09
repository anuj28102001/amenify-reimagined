import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Play, ArrowRight, MapPin, Home, Calendar } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "3BHK Tranquil Luxury",
      location: "Godrej Woods, Noida",
      type: "3BHK Full Home",
      description: "A harmonious blend of calm interiors and high-end finishes for refined family life.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      budget: "₹15-20 Lakhs",
      duration: "42 days",
      hasVR: true,
      featured: true,
      color: "warm-coral"
    },
    {
      id: 2,
      title: "Modern Office Pod",
      location: "Gurugram",
      type: "Office Interior",
      description: "Compact yet inspiring space designed to boost productivity and creativity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      budget: "₹8-12 Lakhs",
      duration: "35 days",
      hasVR: true,
      featured: false,
      color: "dusty-blue"
    },
    {
      id: 3,
      title: "2BHK Minimal Marvel",
      location: "Bangalore",
      type: "2BHK Home",
      description: "Thoughtfully crafted space that radiates simplicity and warmth for modern living.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
      budget: "₹10-14 Lakhs",
      duration: "38 days",
      hasVR: true,
      featured: false,
      color: "sage-green"
    },
    {
      id: 4,
      title: "Playschool Paradise",
      location: "Sriram Wonder Years, Gurugram",
      type: "Commercial Interior",
      description: "Joyful and secure space filled with colors, creativity, and endless imagination.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=300&fit=crop",
      budget: "₹25-30 Lakhs",
      duration: "45 days",
      hasVR: true,
      featured: true,
      color: "warm-orange"
    },
    {
      id: 5,
      title: "1BHK Urban Hideaway",
      location: "Mumbai",
      type: "1BHK Apartment",
      description: "Compact yet beautifully curated with charm and efficiency for the minimalist soul.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      budget: "₹6-9 Lakhs",
      duration: "30 days",
      hasVR: true,
      featured: false,
      color: "terracotta"
    },
    {
      id: 6,
      title: "Inspired Modular Kitchen",
      location: "Delhi NCR",
      type: "Kitchen Design",
      description: "Sleek, stylish, and designed for efficiency, perfect for those who love to cook.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      budget: "₹3-5 Lakhs",
      duration: "25 days",
      hasVR: true,
      featured: false,
      color: "accent-gold"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-warm text-white font-semibold mb-4 px-6 py-2 text-lg">
            ✨ 100,000+ Dreams Brought to Life
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Homes That{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Inspire & Delight
            </span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Every project is a new story of transformation. From cozy family nests to vibrant commercial spaces - 
            see how we've helped families across India create their perfect sanctuary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-0 bg-white hover:shadow-luxury transition-all duration-500 group cursor-pointer"
            >
              {/* {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-hero text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-lg">
                  ⭐ Featured
                </div>
              )} */}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* VR Badge */}
                {project.hasVR && (
                  <div className="absolute top-4 right-4">
                    <Badge className={`text-white font-semibold ${
                      project.color === 'warm-coral' ? 'bg-warm-coral' :
                      project.color === 'warm-orange' ? 'bg-warm-orange' :
                      project.color === 'dusty-blue' ? 'bg-dusty-blue' :
                      project.color === 'sage-green' ? 'bg-sage-green' :
                      project.color === 'terracotta' ? 'bg-terracotta' :
                      'bg-accent-gold'
                    }`}>
                      👓 VR Tour
                    </Badge>
                  </div>
                )}

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-90">{project.type}</div>
                      <div className="font-bold text-lg">{project.budget}</div>
                    </div>
                    <Button 
                      size="sm"
                      className={`rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        project.color === 'warm-coral' ? 'bg-warm-coral hover:bg-warm-coral/90' :
                        project.color === 'warm-orange' ? 'bg-warm-orange hover:bg-warm-orange/90' :
                        project.color === 'dusty-blue' ? 'bg-dusty-blue hover:bg-dusty-blue/90' :
                        project.color === 'sage-green' ? 'bg-sage-green hover:bg-sage-green/90' :
                        project.color === 'terracotta' ? 'bg-terracotta hover:bg-terracotta/90' :
                        'bg-accent-gold hover:bg-accent-gold/90'
                      }`}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary-charcoal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline_gold" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    {project.hasVR && (
                      <Button 
                        size="sm"
                        className={`${
                          project.color === 'warm-coral' ? 'bg-warm-coral hover:bg-warm-coral/90' :
                          project.color === 'warm-orange' ? 'bg-warm-orange hover:bg-warm-orange/90' :
                          project.color === 'dusty-blue' ? 'bg-dusty-blue hover:bg-dusty-blue/90' :
                          project.color === 'sage-green' ? 'bg-sage-green hover:bg-sage-green/90' :
                          project.color === 'terracotta' ? 'bg-terracotta hover:bg-terracotta/90' :
                          'bg-accent-gold hover:bg-accent-gold/90'
                        } text-white`}
                      >
                        👓 VR
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to See Your Project Here?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join 100,000+ satisfied customers who transformed their spaces with Amenify. 
              Get your free VR demo and see your dream home before we build it!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl">
                Book Free VR Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline_gold" size="xl" className="border-white text-white hover:bg-white hover:text-primary-dark">
                View All 100K+ Projects
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">100K+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">60K+</div>
                <div className="text-sm text-white/80">Five Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">45</div>
                <div className="text-sm text-white/80">Avg. Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">10</div>
                <div className="text-sm text-white/80">Year Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
