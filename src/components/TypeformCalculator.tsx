
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Download } from "lucide-react";

interface FormData {
  step: number;
  projectType: string;
  budgetRange: string;
  interiorStyle: string;
  area: string;
  location: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

const TypeformCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    step: 1,
    projectType: "",
    budgetRange: "",
    interiorStyle: "",
    area: "",
    location: "",
    contact: {
      name: "",
      phone: "",
      email: ""
    }
  });

  const [showResults, setShowResults] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({ min: 0, max: 0 });

  const projectTypes = [
    { id: "full-home", title: "Full Home Interior", desc: "Complete home transformation" },
    { id: "kitchen", title: "Modular Kitchen", desc: "Modern kitchen design" },
    { id: "bedroom", title: "Master Bedroom", desc: "Luxury bedroom setup" },
    { id: "living-room", title: "Living Room", desc: "Stylish living space" },
    { id: "office", title: "Home Office", desc: "Productive workspace" }
  ];

  const budgetRanges = [
    { id: "5-10", title: "₹5 - 10 Lakhs", desc: "Budget-friendly options" },
    { id: "10-20", title: "₹10 - 20 Lakhs", desc: "Mid-range solutions" },
    { id: "20-35", title: "₹20 - 35 Lakhs", desc: "Premium interiors" },
    { id: "35-50", title: "₹35 - 50 Lakhs", desc: "Luxury designs" },
    { id: "50+", title: "₹50+ Lakhs", desc: "Ultra-luxury experience" }
  ];

  const interiorStyles = [
    { id: "modern", title: "Modern", desc: "Clean lines & minimalist" },
    { id: "traditional", title: "Traditional", desc: "Classic & timeless" },
    { id: "contemporary", title: "Contemporary", desc: "Latest trends" },
    { id: "industrial", title: "Industrial", desc: "Raw & edgy look" },
    { id: "scandinavian", title: "Scandinavian", desc: "Nordic simplicity" }
  ];

  const locations = [
    "Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Other"
  ];

  const nextStep = () => {
    if (formData.step < 6) {
      setFormData({ ...formData, step: formData.step + 1 });
    }
  };

  const prevStep = () => {
    if (formData.step > 1) {
      setFormData({ ...formData, step: formData.step - 1 });
    }
  };

  const calculatePrice = () => {
    const area = parseInt(formData.area) || 0;
    const baseRates = {
      "full-home": { min: 1800, max: 2500 },
      "kitchen": { min: 150000, max: 300000 },
      "bedroom": { min: 120000, max: 250000 },
      "living-room": { min: 100000, max: 200000 },
      "office": { min: 80000, max: 150000 }
    };

    const budgetMultiplier = {
      "5-10": 0.8,
      "10-20": 1.0,
      "20-35": 1.3,
      "35-50": 1.6,
      "50+": 2.0
    };

    const rates = baseRates[formData.projectType as keyof typeof baseRates] || { min: 1500, max: 2200 };
    const multiplier = budgetMultiplier[formData.budgetRange as keyof typeof budgetMultiplier] || 1.0;

    let min, max;
    if (formData.projectType === "full-home") {
      min = Math.round(rates.min * area * multiplier);
      max = Math.round(rates.max * area * multiplier);
    } else {
      min = Math.round(rates.min * multiplier);
      max = Math.round(rates.max * multiplier);
    }

    return { min, max };
  };

  const handleFinish = () => {
    const price = calculatePrice();
    setCalculatedPrice(price);
    setShowResults(true);
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What type of project do you have in mind?</h2>
              <p className="text-muted-foreground">Choose the space you want to transform</p>
            </div>
            <div className="grid gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setFormData({ ...formData, projectType: type.id });
                    nextStep();
                  }}
                  className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-colors ${
                    formData.projectType === type.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{type.title}</h3>
                  <p className="text-muted-foreground">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What's your budget range?</h2>
              <p className="text-muted-foreground">This helps us recommend the best options</p>
            </div>
            <div className="grid gap-4">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => {
                    setFormData({ ...formData, budgetRange: budget.id });
                    nextStep();
                  }}
                  className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-colors ${
                    formData.budgetRange === budget.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{budget.title}</h3>
                  <p className="text-muted-foreground">{budget.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Which interior style do you prefer?</h2>
              <p className="text-muted-foreground">Select the style that resonates with you</p>
            </div>
            <div className="grid gap-4">
              {interiorStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => {
                    setFormData({ ...formData, interiorStyle: style.id });
                    nextStep();
                  }}
                  className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-colors ${
                    formData.interiorStyle === style.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{style.title}</h3>
                  <p className="text-muted-foreground">{style.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What's the area of your space?</h2>
              <p className="text-muted-foreground">Enter the carpet area in square feet</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <Input
                type="number"
                placeholder="e.g., 1200"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="text-center text-xl p-6"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-2">Location</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select your city</option>
                  {locations.map((location) => (
                    <option key={location} value={location.toLowerCase()}>{location}</option>
                  ))}
                </select>
              </div>
              <Button 
                onClick={nextStep} 
                disabled={!formData.area || !formData.location}
                className="w-full"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Almost done! Let's get your details</h2>
              <p className="text-muted-foreground">We'll send you a detailed quote</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.contact.name}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, name: e.target.value }
                })}
                className="p-4"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.contact.phone}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, phone: e.target.value }
                })}
                className="p-4"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.contact.email}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, email: e.target.value }
                })}
                className="p-4"
              />
              <Button 
                onClick={handleFinish}
                disabled={!formData.contact.name || !formData.contact.phone}
                className="w-full"
              >
                Get My Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResults) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">Your Estimated Project Cost</h2>
                <div className="text-5xl font-bold text-primary mb-6">
                  ₹{calculatedPrice.min.toLocaleString()} - ₹{calculatedPrice.max.toLocaleString()}
                </div>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Based on your selections: {projectTypes.find(p => p.id === formData.projectType)?.title}, 
                  {formData.area} sq ft, {interiorStyles.find(s => s.id === formData.interiorStyle)?.title} style
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Download className="w-5 h-5 mr-2" />
                    Download Detailed Quote
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    *Final pricing may vary based on material selection, design complexity, and site conditions. 
                    This estimate includes design consultation, 3D visualization, and project management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {formData.step} of 5</span>
            <span>{Math.round((formData.step / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-accent rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(formData.step / 5) * 100}%` }}
            />
          </div>
        </div>

        <Card className="border-2 border-border">
          <CardContent className="p-8">
            {renderStep()}

            {/* Navigation */}
            {formData.step > 1 && formData.step < 5 && (
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <div className="text-sm text-muted-foreground">
                  Press Enter or click to continue
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TypeformCalculator;
