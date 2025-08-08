import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Wrench, 
  HeadphonesIcon 
} from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "10-Year Warranty",
      description: "Comprehensive warranty on all materials and workmanship with dedicated service support"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "45-Day Delivery",
      description: "Guaranteed project completion within 45 days with daily progress tracking"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Designs",
      description: "Industry-recognized design excellence with 50+ design awards and certifications"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "In-House Team",
      description: "Dedicated project managers, designers, and craftsmen - no outsourcing"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Zero-Damage Guarantee",
      description: "Complete protection of your existing home with insurance coverage during work"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and post-installation service assistance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent-gold text-primary font-semibold mb-4">
            🏆 Why Choose Amenify
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            India's Most{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            Interior Brand
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Join thousands of satisfied customers who chose Amenify for their dream home transformation. 
            Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-accent-gold hover:shadow-card transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 bg-gradient-gold rounded-full mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-medium leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">10K+</div>
              <div className="text-neutral-medium">Happy Homes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">15+</div>
              <div className="text-neutral-medium">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">500+</div>
              <div className="text-neutral-medium">Design Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-dark mb-2">4.9★</div>
              <div className="text-neutral-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;