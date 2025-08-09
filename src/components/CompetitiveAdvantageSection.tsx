import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const CompetitiveAdvantageSection = () => {
  const comparison = [
    {
      company: "Amenify",
      logo: "🏆",
      funding: "$20M",
      customers: "100K+",
      warranty: "10 Years",
      delivery: "45 Days",
      arVr: true,
      factories: "5 Owned",
      cities: "8+",
      reviews: "60K+ ⭐⭐⭐⭐⭐",
      guarantee: "Beat Any Quote",
      isAmenify: true
    },
    {
      company: "Others",
      logo: "🏢",
      funding: "Higher",
      customers: "Fewer",
      warranty: "Up to 5 Years",
      delivery: "60+ Days",
      arVr: false,
      factories: "Outsourced",
      cities: "Limited",
      reviews: "Mixed Reviews",
      guarantee: "Fixed Pricing",
      isAmenify: false
    }
  ];

  const advantages = [
    {
      feature: "Customer Experience",
      amenify: "100,000+ happy homes delivered",
      others: "Limited project experience",
      advantage: true
    },
    {
      feature: "AR/VR Technology",
      amenify: "Full VR walkthroughs + AR placement",
      others: "Basic 3D renders only",
      advantage: true
    },
    {
      feature: "Quality Control",
      amenify: "5 owned factories = quality control",
      others: "Outsourced = inconsistent quality",
      advantage: true
    },
    {
      feature: "Warranty Protection",
      amenify: "10-year comprehensive warranty",
      others: "Maximum 5-year warranty",
      advantage: true
    },
    {
      feature: "Pricing Flexibility",
      amenify: "Beat any quote guarantee",
      others: "Fixed pricing, no flexibility",
      advantage: true
    },
    {
      feature: "Delivery Speed",
      amenify: "45-day guaranteed delivery",
      others: "60+ days typical timeline",
      advantage: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent-gold text-primary font-semibold mb-4">
            ⚡ Why We're Different
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            The{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Amenify
            </span>{" "}
            Advantage
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            See what sets us apart from other interior design companies. Here's why 100,000+ customers 
            chose Amenify for better technology, pricing, and service quality.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {comparison.map((company, index) => (
            <Card 
              key={index}
              className={`border-2 transition-all duration-300 cursor-pointer ${
                company.isAmenify 
                  ? 'border-accent-gold shadow-luxury scale-105' 
                  : 'border-border hover:border-accent-gold/50'
              }`}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`text-4xl mb-3 ${company.isAmenify ? 'text-accent-gold' : 'text-neutral-medium'}`}>
                    {company.logo}
                  </div>
                  <h3 className={`text-2xl font-bold ${company.isAmenify ? 'text-accent-gold' : 'text-primary-dark'}`}>
                    {company.company}
                  </h3>
                  {company.isAmenify && (
                    <Badge className="bg-accent-gold text-primary font-semibold mt-2">
                      ✅ Your Best Choice
                    </Badge>
                  )}
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">Funding:</span>
                    <span className="font-semibold">{company.funding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">Happy Customers:</span>
                    <span className="font-semibold">{company.customers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">Warranty:</span>
                    <span className="font-semibold">{company.warranty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">Delivery:</span>
                    <span className="font-semibold">{company.delivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">AR/VR Technology:</span>
                    <span className={`font-semibold ${company.arVr ? 'text-green-600' : 'text-red-600'}`}>
                      {company.arVr ? '✅ Yes' : '❌ No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-medium">Manufacturing:</span>
                    <span className="font-semibold">{company.factories}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Advantages */}
        <div className="bg-gradient-section rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-dark mb-4">
              Why 100,000+ Customers Choose Amenify
            </h3>
            <p className="text-xl text-neutral-medium">
              Detailed comparison on what matters most to homeowners
            </p>
          </div>

          <div className="grid gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 border-accent-gold/20">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-semibold text-primary-dark text-lg">
                        {advantage.feature}
                      </h4>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                        <Check className="w-5 h-5" />
                        <span>{advantage.amenify}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                        <X className="w-5 h-5" />
                        <span>{advantage.others}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary-dark rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Experience the Amenify Difference?
              </h4>
              <p className="text-xl mb-6 text-white/90">
                Join 100,000+ satisfied customers. Get free VR demo and beat any competitor's quote!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Book Free VR Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline_gold" size="xl" className="border-white text-white hover:bg-white hover:text-primary-dark">
                  Beat Any Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection;
