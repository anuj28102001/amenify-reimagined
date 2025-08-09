import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Abhijnan",
      location: "Godrej Woods, Noida",
      project: "3BHK Apartment",
      rating: 5,
      review: "Great workmanship – helped transform my apartment at Godrej Woods. Special thanks to Shashank Srivastava and Sameer Kumar for ensuring that everything fell into place. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ayush",
      location: "Gurugram",
      project: "3BHK Home Interior",
      rating: 5,
      review: "Turning my 3BHK into a peaceful home was my main goal, and Amenify nailed it. If you're looking for an end-to-end solution and want a team that truly brings your vision to life, you can blindly trust AMENIFY.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "TSWY Playschool",
      location: "Gurugram", 
      project: "Commercial Interior",
      rating: 5,
      review: "The Amenify team brought our Sriram Wonder Years Preschool to life exactly as we'd imagined, prioritizing safety and security for the children. Parents are amazed by our beautiful spaces!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
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
            Real reviews from 100,000+ satisfied customers across India. From luxury homes to commercial spaces - 
            see why families and businesses trust Amenify for their interior transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-accent-gold hover:shadow-card transition-all duration-300 group animate-fade-in-up cursor-pointer"
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
              <span className="font-semibold">60,000+ Five Star Reviews</span>
            </div>
            <div>•</div>
            <div className="font-semibold">100,000+ Happy Customers</div>
            <div>•</div>
            <div className="font-semibold">8+ Major Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;