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
              className="relative overflow-hidden border-0 bg-white hover:shadow-luxury transition-all duration-500 group animate-fade-in-up cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, ${step.color.includes('blue') ? '#dbeafe' : 
                           step.color.includes('purple') ? '#f3e8ff' :
                           step.color.includes('green') ? '#dcfce7' :
                           step.color.includes('orange') ? '#fed7aa' :
                           step.color.includes('red') ? '#fecaca' :
                           '#e0e7ff'} 0%, white 30%)`
              }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-2 -left-2 z-10">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white`}>
                  {step.number}
                </div>
              </div>

              {/* Payment Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 font-semibold border border-gray-200">
                  {step.payment}
                </Badge>
              </div>

              <CardContent className="p-6 pt-8">
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${step.color}`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-charcoal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i <= index ? 'bg-warm-coral' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 z-20">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-warm-coral to-transparent"></div>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-warm-coral rounded-full"></div>
                </div>
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
          <div className="bg-gradient-nature rounded-2xl p-8 shadow-card border-2 border-sage-green text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Dream Home?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Start your journey with a free VR consultation. Experience your future home, 
              get instant pricing, and fall in love with your space before we build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-warm-orange text-white font-semibold px-6 py-2">
                ⚡ FREE VR Demo
              </Badge>
              <Badge className="bg-warm-coral text-white font-semibold px-6 py-2">
                🎯 Instant Quote
              </Badge>
              <Badge className="bg-sage-green text-white font-semibold px-6 py-2">
                ✅ Beat Any Quote
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;