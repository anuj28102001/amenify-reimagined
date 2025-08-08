import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Home, ArrowRight, CheckCircle, Phone } from "lucide-react";

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    area: "",
    budget: "",
    location: ""
  });
  const [showResults, setShowResults] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({ min: 0, max: 0 });

  const calculatePrice = () => {
    const area = parseInt(formData.area) || 0;
    const baseRates = {
      "full-home": { min: 1800, max: 2500 },
      "kitchen": { min: 150000, max: 300000 },
      "bedroom": { min: 120000, max: 250000 },
      "living-room": { min: 100000, max: 200000 },
      "wardrobe": { min: 80000, max: 150000 },
      "renovation": { min: 1200, max: 2000 }
    };

    const locationMultiplier = {
      "mumbai": 1.3,
      "delhi": 1.2,
      "bangalore": 1.15,
      "pune": 1.1,
      "hyderabad": 1.05,
      "chennai": 1.05,
      "kolkata": 1.0,
      "other": 1.0
    };

    const rates = baseRates[formData.projectType as keyof typeof baseRates] || { min: 1500, max: 2200 };
    const multiplier = locationMultiplier[formData.location as keyof typeof locationMultiplier] || 1.0;

    let min, max;
    if (formData.projectType === "full-home" || formData.projectType === "renovation") {
      min = Math.round(rates.min * area * multiplier);
      max = Math.round(rates.max * area * multiplier);
    } else {
      min = Math.round(rates.min * multiplier);
      max = Math.round(rates.max * multiplier);
    }

    return { min, max };
  };

  const handleCalculate = () => {
    if (!formData.projectType || !formData.area || !formData.budget || !formData.location) {
      alert("Please fill in all fields to calculate the price.");
      return;
    }
    
    const price = calculatePrice();
    setCalculatedPrice(price);
    setShowResults(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-accent-gold" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark">
              Calculate Your{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Project Cost
              </span>
            </h2>
          </div>
          <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
            Get an instant estimate for your home interior project. No hidden costs, transparent pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent-gold/20 shadow-luxury">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-primary-dark flex items-center justify-center gap-3">
                <Home className="w-6 h-6 text-accent-gold" />
                Home Interior Cost Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-primary-dark font-semibold">
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-home">Full Home Interiors</SelectItem>
                      <SelectItem value="kitchen">Modular Kitchen</SelectItem>
                      <SelectItem value="bedroom">Bedroom Design</SelectItem>
                      <SelectItem value="living-room">Living Room</SelectItem>
                      <SelectItem value="wardrobe">Wardrobe & Storage</SelectItem>
                      <SelectItem value="renovation">Home Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-primary-dark font-semibold">
                    Carpet Area (sq ft)
                  </Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="e.g., 1200"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-primary-dark font-semibold">
                    Budget Range
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="10-20">₹10-20 Lakhs</SelectItem>
                      <SelectItem value="20-35">₹20-35 Lakhs</SelectItem>
                      <SelectItem value="35-50">₹35-50 Lakhs</SelectItem>
                      <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-primary-dark font-semibold">
                    Location
                  </Label>
                  <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi NCR</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button 
                  onClick={handleCalculate}
                  className="w-full text-lg py-6 bg-gradient-gold hover:opacity-90 text-primary font-semibold"
                  size="lg"
                >
                  Calculate Project Cost
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-neutral-medium mt-3">
                  Get instant estimate • Free consultation included • No obligations
                </p>
              </div>

              {showResults && (
                <Card className="mt-6 border-2 border-accent-gold bg-gradient-section animate-scale-in">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-primary-dark mb-4">
                        Your Estimated Project Cost
                      </h3>
                      <div className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
                        ₹{calculatedPrice.min.toLocaleString()} - ₹{calculatedPrice.max.toLocaleString()}
                      </div>
                      <p className="text-neutral-medium mb-6">
                        *Final pricing may vary based on material selection and design complexity
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Button className="bg-accent-gold text-primary hover:opacity-90 font-semibold">
                          <Phone className="w-4 h-4 mr-2" />
                          Book Free Consultation
                        </Button>
                        <Button variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary">
                          Download Detailed Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;