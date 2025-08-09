
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
  materialQuality: string;
  timeline: string;
  requirements: string[];
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
    materialQuality: "",
    timeline: "",
    requirements: [],
    contact: {
      name: "",
      phone: "",
      email: ""
    }
  });

  const [showResults, setShowResults] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({ 
    min: 0, 
    max: 0, 
    breakdown: {
      design: 0,
      materials: 0,
      labor: 0,
      accessories: 0
    },
    timeline: "",
    savings: 0
  });

  const projectTypes = [
    { 
      id: "full-home", 
      title: "Full Home Interior", 
      desc: "Complete home transformation",
      icon: "🏠",
      popular: true,
      baseRate: { min: 1400, max: 2800 },
      timeline: "45-90 days"
    },
    { 
      id: "kitchen", 
      title: "Modular Kitchen", 
      desc: "Modern kitchen with appliances",
      icon: "🍳",
      popular: false,
      baseRate: { min: 180000, max: 450000 },
      timeline: "15-25 days"
    },
    { 
      id: "bedroom", 
      title: "Master Bedroom", 
      desc: "Complete bedroom with wardrobe",
      icon: "🛏️",
      popular: false,
      baseRate: { min: 150000, max: 350000 },
      timeline: "20-30 days"
    },
    { 
      id: "living-room", 
      title: "Living Room", 
      desc: "TV unit, seating & decor",
      icon: "🛋️",
      popular: false,
      baseRate: { min: 120000, max: 280000 },
      timeline: "15-25 days"
    },
    { 
      id: "office", 
      title: "Home Office", 
      desc: "Study room with storage",
      icon: "💼",
      popular: false,
      baseRate: { min: 80000, max: 180000 },
      timeline: "10-20 days"
    },
    { 
      id: "bathroom", 
      title: "Bathroom Renovation", 
      desc: "Complete bathroom makeover",
      icon: "🚿",
      popular: false,
      baseRate: { min: 100000, max: 250000 },
      timeline: "15-25 days"
    }
  ];

  const budgetRanges = [
    { 
      id: "2-4", 
      title: "₹2 - 4 Lakhs", 
      desc: "Essential designs & quality materials",
      popular: false,
      multiplier: 0.6
    },
    { 
      id: "4-8", 
      title: "₹4 - 8 Lakhs", 
      desc: "Most popular - Great value for money",
      popular: true,
      multiplier: 0.85
    },
    { 
      id: "8-15", 
      title: "₹8 - 15 Lakhs", 
      desc: "Premium materials & finishes",
      popular: false,
      multiplier: 1.2
    },
    { 
      id: "15-25", 
      title: "₹15 - 25 Lakhs", 
      desc: "Luxury designs with imported materials",
      popular: false,
      multiplier: 1.7
    },
    { 
      id: "25+", 
      title: "₹25+ Lakhs", 
      desc: "Ultra-luxury bespoke interiors",
      popular: false,
      multiplier: 2.2
    }
  ];

  const interiorStyles = [
    { 
      id: "modern", 
      title: "Modern Minimalist", 
      desc: "Clean lines, neutral colors, functional design",
      icon: "🏢",
      popular: true,
      costMultiplier: 1.0
    },
    { 
      id: "traditional", 
      title: "Classic Traditional", 
      desc: "Rich woods, ornate details, timeless elegance",
      icon: "🏛️",
      popular: false,
      costMultiplier: 1.3
    },
    { 
      id: "contemporary", 
      title: "Contemporary Chic", 
      desc: "Latest trends, bold colors, innovative materials",
      icon: "✨",
      popular: true,
      costMultiplier: 1.1
    },
    { 
      id: "industrial", 
      title: "Industrial Loft", 
      desc: "Exposed brick, metal accents, urban aesthetics",
      icon: "🏭",
      popular: false,
      costMultiplier: 0.9
    },
    { 
      id: "scandinavian", 
      title: "Scandinavian Hygge", 
      desc: "Light woods, cozy textures, minimal clutter",
      icon: "🌲",
      popular: true,
      costMultiplier: 1.05
    },
    { 
      id: "luxury", 
      title: "Luxury Premium", 
      desc: "High-end materials, custom designs, opulent finishes",
      icon: "💎",
      popular: false,
      costMultiplier: 1.8
    }
  ];

  const locations = [
    { name: "Delhi NCR", costMultiplier: 1.15, popular: true },
    { name: "Mumbai", costMultiplier: 1.25, popular: true },
    { name: "Bangalore", costMultiplier: 1.1, popular: true },
    { name: "Pune", costMultiplier: 1.05, popular: true },
    { name: "Hyderabad", costMultiplier: 1.0, popular: true },
    { name: "Chennai", costMultiplier: 1.0, popular: true },
    { name: "Kolkata", costMultiplier: 0.95, popular: false },
    { name: "Chandigarh", costMultiplier: 1.0, popular: false },
    { name: "Ahmedabad", costMultiplier: 0.9, popular: false },
    { name: "Jaipur", costMultiplier: 0.85, popular: false },
    { name: "Lucknow", costMultiplier: 0.8, popular: false },
    { name: "Indore", costMultiplier: 0.8, popular: false }
  ];

  const materialQualities = [
    {
      id: "essential",
      title: "Essential Quality",
      desc: "Good quality materials with 5-year warranty",
      icon: "⭐",
      multiplier: 0.8,
      warranty: "5 years"
    },
    {
      id: "premium",
      title: "Premium Quality",
      desc: "High-grade materials with 7-year warranty",
      icon: "⭐⭐",
      multiplier: 1.0,
      warranty: "7 years",
      popular: true
    },
    {
      id: "luxury",
      title: "Luxury Quality",
      desc: "Top-tier materials with 10-year warranty",
      icon: "⭐⭐⭐",
      multiplier: 1.4,
      warranty: "10 years"
    }
  ];

  const timelineOptions = [
    { id: "express", title: "Express Delivery", desc: "Rush delivery in 30-45 days", multiplier: 1.2, icon: "⚡" },
    { id: "standard", title: "Standard Timeline", desc: "Normal delivery in 45-60 days", multiplier: 1.0, icon: "📅", popular: true },
    { id: "flexible", title: "Flexible Timeline", desc: "Extended timeline for 5% discount", multiplier: 0.95, icon: "🕒" }
  ];

  const nextStep = () => {
    if (formData.step < 8) {
      setFormData({ ...formData, step: formData.step + 1 });
    }
  };

  const prevStep = () => {
    if (formData.step > 1) {
      setFormData({ ...formData, step: formData.step - 1 });
    }
  };

  const calculatePrice = () => {
    const area = parseInt(formData.area) || 1000; // Default area if not provided
    
    // Debug logging
    console.log('Form Data:', formData);
    
    const projectType = projectTypes.find(p => p.id === formData.projectType);
    const budgetRange = budgetRanges.find(b => b.id === formData.budgetRange);
    const location = locations.find(l => l.name.toLowerCase() === (formData.location || '').toLowerCase());
    const style = interiorStyles.find(s => s.id === formData.interiorStyle);
    const material = materialQualities.find(m => m.id === formData.materialQuality);
    const timeline = timelineOptions.find(t => t.id === formData.timeline);

    console.log('Found items:', { projectType, budgetRange, location, style, material, timeline });

    // Use defaults if not found
    const safeProjectType = projectType || projectTypes[0]; // Default to first project type
    const safeBudgetRange = budgetRange || budgetRanges[1]; // Default to popular option
    const safeLocation = location || locations[4]; // Default to Hyderabad (1.0 multiplier)

    let baseMin = safeProjectType.baseRate.min;
    let baseMax = safeProjectType.baseRate.max;

    // Apply area multiplier for full-home projects
    if (formData.projectType === "full-home") {
      baseMin *= area;
      baseMax *= area;
    }

    // Apply all multipliers
    const allMultipliers = [
      safeBudgetRange.multiplier,
      safeLocation.costMultiplier,
      style?.costMultiplier || 1.0,
      material?.multiplier || 1.0,
      timeline?.multiplier || 1.0
    ];

    const finalMultiplier = allMultipliers.reduce((acc, mult) => acc * mult, 1);
    
    console.log('Calculation details:', {
      baseMin, baseMax, area, allMultipliers, finalMultiplier
    });
    
    const min = Math.max(Math.round(baseMin * finalMultiplier), 50000); // Minimum 50k
    const max = Math.max(Math.round(baseMax * finalMultiplier), min + 50000); // Ensure max > min
    
    console.log('Final prices:', { min, max });

    // Calculate breakdown
    const designCost = Math.round((min + max) * 0.15 / 2); // 15% for design
    const materialsCost = Math.round((min + max) * 0.55 / 2); // 55% for materials
    const laborCost = Math.round((min + max) * 0.25 / 2); // 25% for labor
    const accessoriesCost = Math.round((min + max) * 0.05 / 2); // 5% for accessories

    // Calculate potential savings
    const marketRate = Math.round((min + max) / 2 * 1.25); // 25% higher than Amenify
    const savings = marketRate - Math.round((min + max) / 2);

    return {
      min,
      max,
      breakdown: {
        design: designCost,
        materials: materialsCost,
        labor: laborCost,
        accessories: accessoriesCost
      },
      timeline: safeProjectType.timeline,
      savings
    };
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
          <div className="space-y-6" id="typeform-calculator">
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
                  className={`relative p-6 border-2 rounded-lg text-left hover:border-primary transition-all hover:shadow-lg ${
                    formData.projectType === type.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-2 -right-2 bg-accent-gold text-white px-3 py-1 text-xs font-bold rounded-full">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{type.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{type.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{type.desc}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>₹{type.baseRate.min.toLocaleString()} - ₹{type.baseRate.max.toLocaleString()}</span>
                        <span>{type.timeline}</span>
                      </div>
                    </div>
                  </div>
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
              <p className="text-muted-foreground">This helps us recommend the best options for your needs</p>
            </div>
            <div className="grid gap-4">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => {
                    setFormData({ ...formData, budgetRange: budget.id });
                    nextStep();
                  }}
                  className={`relative p-6 border-2 rounded-lg text-left hover:border-primary transition-all hover:shadow-lg ${
                    formData.budgetRange === budget.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  {budget.popular && (
                    <div className="absolute -top-2 -right-2 bg-accent-gold text-white px-3 py-1 text-xs font-bold rounded-full">
                      ⭐ Most Popular
                    </div>
                  )}
                  <h3 className="font-semibold text-xl mb-2">{budget.title}</h3>
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
              <h2 className="text-3xl font-bold mb-4">Which interior style speaks to you?</h2>
              <p className="text-muted-foreground">Choose the style that matches your personality</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {interiorStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => {
                    setFormData({ ...formData, interiorStyle: style.id });
                    nextStep();
                  }}
                  className={`relative p-6 border-2 rounded-lg text-left hover:border-primary transition-all hover:shadow-lg ${
                    formData.interiorStyle === style.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  {style.popular && (
                    <div className="absolute -top-2 -right-2 bg-accent-gold text-white px-2 py-1 text-xs font-bold rounded-full">
                      ✨ Popular
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{style.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{style.title}</h3>
                      <p className="text-muted-foreground text-sm">{style.desc}</p>
                    </div>
                  </div>
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
            <div className="max-w-md mx-auto space-y-6">
              <div className="relative">
                <Input
                  type="number"
                  placeholder="e.g., 1200"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="text-center text-2xl p-6 border-2"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  sq ft
                </span>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-2">Select your city</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-4 border-2 rounded-lg bg-background"
                >
                  <option value="">Choose your location</option>
                  {locations.map((location) => (
                    <option key={location.name} value={location.name.toLowerCase()}>
                      {location.name} {location.popular ? '(Popular)' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button 
                onClick={nextStep} 
                disabled={!formData.area || !formData.location}
                className="w-full py-4 text-lg"
                variant="hero"
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
              <h2 className="text-3xl font-bold mb-4">Choose your material quality</h2>
              <p className="text-muted-foreground">Higher quality materials last longer and look better</p>
            </div>
            <div className="grid gap-4">
              {materialQualities.map((material) => (
                <button
                  key={material.id}
                  onClick={() => {
                    setFormData({ ...formData, materialQuality: material.id });
                    nextStep();
                  }}
                  className={`relative p-6 border-2 rounded-lg text-left hover:border-primary transition-all hover:shadow-lg ${
                    formData.materialQuality === material.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  {material.popular && (
                    <div className="absolute -top-2 -right-2 bg-accent-gold text-white px-3 py-1 text-xs font-bold rounded-full">
                      ⭐ Recommended
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{material.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{material.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{material.desc}</p>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {material.warranty} warranty
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Select your preferred timeline</h2>
              <p className="text-muted-foreground">Choose based on your move-in requirements</p>
            </div>
            <div className="grid gap-4">
              {timelineOptions.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => {
                    setFormData({ ...formData, timeline: timeline.id });
                    nextStep();
                  }}
                  className={`relative p-6 border-2 rounded-lg text-left hover:border-primary transition-all hover:shadow-lg ${
                    formData.timeline === timeline.id ? 'border-primary bg-accent' : 'border-border'
                  }`}
                >
                  {timeline.popular && (
                    <div className="absolute -top-2 -right-2 bg-accent-gold text-white px-3 py-1 text-xs font-bold rounded-full">
                      ⭐ Most Chosen
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{timeline.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{timeline.title}</h3>
                      <p className="text-muted-foreground text-sm">{timeline.desc}</p>
                      {timeline.multiplier < 1 && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-2 inline-block">
                          Save 5%
                        </span>
                      )}
                      {timeline.multiplier > 1 && (
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full mt-2 inline-block">
                          +20% rush charges
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Almost done! Let's get your details</h2>
              <p className="text-muted-foreground">We'll send you a detailed quote and 3D design</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <Input
                placeholder="Your Full Name"
                value={formData.contact.name}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, name: e.target.value }
                })}
                className="p-4 border-2"
              />
              <Input
                type="tel"
                placeholder="Phone Number (+91)"
                value={formData.contact.phone}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, phone: e.target.value }
                })}
                className="p-4 border-2"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.contact.email}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  contact: { ...formData.contact, email: e.target.value }
                })}
                className="p-4 border-2"
              />
              
              <div className="bg-accent p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">What will you get:</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Detailed cost breakdown</li>
                  <li>✓ 3D design visualization</li>
                  <li>✓ Free home consultation</li>
                  <li>✓ Material samples</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleFinish}
                disabled={!formData.contact.name || !formData.contact.phone}
                className="w-full py-4 text-lg"
                variant="hero"
              >
                Get My Detailed Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResults) {
    const projectType = projectTypes.find(p => p.id === formData.projectType);
    const style = interiorStyles.find(s => s.id === formData.interiorStyle);
    const location = locations.find(l => l.name.toLowerCase() === formData.location);
    const material = materialQualities.find(m => m.id === formData.materialQuality);

    return (
      <section className="py-20 bg-gradient-section">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <CheckCircle className="w-20 h-20 text-accent-gold mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Your Personalized Quote is Ready!</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on {projectType?.title} • {formData.area} sq ft • {style?.title} • {location?.name}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Quote Card */}
            <Card className="border-2 border-accent-gold shadow-luxury">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                    ₹{calculatedPrice.min.toLocaleString()} - ₹{calculatedPrice.max.toLocaleString()}
                  </div>
                  <p className="text-lg text-muted-foreground">Total Project Cost</p>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg mb-4">Cost Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-accent rounded">
                      <span>Design & Planning</span>
                      <span className="font-semibold">₹{calculatedPrice.breakdown.design.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent rounded">
                      <span>Materials & Furniture</span>
                      <span className="font-semibold">₹{calculatedPrice.breakdown.materials.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent rounded">
                      <span>Installation & Labor</span>
                      <span className="font-semibold">₹{calculatedPrice.breakdown.labor.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent rounded">
                      <span>Accessories & Decor</span>
                      <span className="font-semibold">₹{calculatedPrice.breakdown.accessories.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                {calculatedPrice.savings > 0 && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <span className="text-green-800 font-semibold text-lg">
                        You Save ₹{calculatedPrice.savings.toLocaleString()} vs Market Rate!
                      </span>
                      <p className="text-green-600 text-sm mt-1">Amenify offers 20-25% better value than competitors</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full" variant="hero">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Home Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-2">
                    <Download className="w-5 h-5 mr-2" />
                    Download Detailed PDF Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Type:</span>
                      <span className="font-medium">{projectType?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Area:</span>
                      <span className="font-medium">{formData.area} sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Style:</span>
                      <span className="font-medium">{style?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{location?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material Quality:</span>
                      <span className="font-medium">{material?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{calculatedPrice.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty:</span>
                      <span className="font-medium">{material?.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Free 3D design & visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Complete project management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Quality materials from trusted brands
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Professional installation team
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {material?.warranty} comprehensive warranty
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      45-day delivery guarantee
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-accent p-6 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  *Final pricing may vary by ±10% based on material selection, design complexity, and site conditions. 
                  This estimate includes all charges - no hidden costs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="typeform-calculator" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {formData.step} of 7</span>
            <span>{Math.round((formData.step / 7) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-accent rounded-full h-3">
            <div 
              className="bg-gradient-hero h-3 rounded-full transition-all duration-700 relative"
              style={{ width: `${(formData.step / 7) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-4 h-4 bg-accent-gold rounded-full border-2 border-white shadow-lg"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Project Type</span>
            <span>Budget</span>
            <span>Style</span>
            <span>Area & Location</span>
            <span>Quality</span>
            <span>Timeline</span>
            <span>Contact</span>
          </div>
        </div>

        <Card className="border-2 border-border">
          <CardContent className="p-8">
            {renderStep()}

            {/* Navigation */}
            {formData.step > 1 && formData.step < 7 && (
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous Step
                </Button>
                <div className="text-sm text-muted-foreground self-center">
                  Step {formData.step} of 7
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
