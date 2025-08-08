import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Home, ArrowRight } from "lucide-react";

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    area: "",
    budget: "",
    location: ""
  });

  const handleCalculate = () => {
    // Price calculation logic would go here
    console.log("Calculating price for:", formData);
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;