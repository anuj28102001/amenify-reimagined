import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Ruler, Palette, Cog, Hammer, Key } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Design Consultation",
      description: "Share your ideas and floor plan to receive personalized 3D designs and instant quote",
      payment: "Free Consultation",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      icon: <Key className="w-8 h-8" />,
      title: "Book Your Order",
      description: "Pay 5% of quote value or ₹25,000 (whichever is higher) to confirm your order",
      payment: "5% or ₹25,000",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: <Ruler className="w-8 h-8" />,
      title: "Site Measurement", 
      description: "Pay next 5% of quote value to kick off precise site measurement",
      payment: "5% of Quote",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      icon: <Palette className="w-8 h-8" />,
      title: "Finalize Your Design",
      description: "Select materials, finishes and colors. Pay 10% to lock designs and initiate quality checks",
      payment: "10% of Quote",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      icon: <Cog className="w-8 h-8" />,
      title: "Start Production",
      description: "Pay 30% of woodwork quote to initiate production & full balance for home decor services",
      payment: "30% of Quote",
      color: "from-red-500 to-red-600"
    },
    {
      number: "06",
      icon: <Hammer className="w-8 h-8" />,
      title: "Installation & Handover",
      description: "Pay remaining 50% of quote value for smooth installation and move-in",
      payment: "50% of Quote",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="bg-accent-gold text-primary font-semibold mb-4">
            🎯 Simple Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            From Design to{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Move-In
            </span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Our streamlined 6-step process ensures transparency, quality, and on-time delivery 
            for every project, no matter the size or complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative border-2 border-border hover:border-accent-gold hover:shadow-card transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold`}>
                      {step.number}
                    </div>
                    <Badge variant="outline" className="border-accent-gold text-accent-gold">
                      {step.payment}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-accent-gold rounded-lg w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Connection Line (for larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-gold transform -translate-y-1/2 opacity-50"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <div className="w-0.5 h-8 bg-accent-gold opacity-50 mb-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-card border-2 border-accent-gold">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-medium mb-6 max-w-2xl mx-auto">
              Begin with a free consultation and get your personalized 3D designs 
              with instant pricing. No hidden costs, complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-accent-gold text-primary font-semibold px-6 py-2">
                ⚡ FREE Design Consultation
              </Badge>
              <Badge className="bg-primary-dark text-white font-semibold px-6 py-2">
                🎯 Instant Quote
              </Badge>
              <Badge className="bg-green-500 text-white font-semibold px-6 py-2">
                ✅ No Hidden Costs
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;