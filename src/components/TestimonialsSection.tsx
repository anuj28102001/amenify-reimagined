import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      project: "3BHK Full Home",
      rating: 5,
      review: "Amenify transformed our home beyond our expectations. The AR technology helped us visualize everything perfectly before construction. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      project: "Modular Kitchen",
      rating: 5,
      review: "The AI-driven design process was incredible. They understood our needs perfectly and delivered a kitchen that's both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      location: "Bangalore", 
      project: "Home Renovation",
      rating: 5,
      review: "The 3D progress updates kept us informed throughout. The in-house team delivered exceptional quality within the promised timeline.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent-gold text-primary font-semibold mb-4">
            ⭐ Customer Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            What Our{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Over 10,000+ satisfied customers have transformed their homes with Amenify's innovative approach to interior design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-accent-gold hover:shadow-card transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent-gold/30 absolute -top-2 -left-2" />
                  <p className="text-neutral-medium leading-relaxed pl-6">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-medium">{testimonial.location} • {testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-sm text-neutral-medium">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-accent-gold text-accent-gold" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div>•</div>
            <div className="font-semibold">10,000+ Happy Customers</div>
            <div>•</div>
            <div className="font-semibold">15+ Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;