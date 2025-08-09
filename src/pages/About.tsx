import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Building, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "100,000+", icon: <Users className="w-8 h-8" /> },
    { label: "Cities Served", value: "8+", icon: <Building className="w-8 h-8" /> },
    { label: "Years Experience", value: "7+", icon: <Award className="w-8 h-8" /> },
    { label: "Projects Completed", value: "50,000+", icon: <Target className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Badge className="bg-white/20 text-white font-semibold mb-6 px-6 py-2">
              🏡 About Amenify
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transforming Dreams Into{" "}
              <span className="text-white/90">Beautiful Homes</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Since 2017, we've been India's most trusted interior design company, 
              creating stunning spaces that reflect your personality and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent-gold transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-gradient-gold rounded-full mb-4 text-white">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-primary-dark mb-2">{stat.value}</h3>
                  <p className="text-neutral-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent-gold text-primary font-semibold mb-4">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Building India's Most Trusted Interior Design Company
              </h2>
              <div className="space-y-4 text-neutral-medium">
                <p>
                  Founded in 2017, Amenify started with a simple vision: to make beautiful, 
                  functional interior design accessible to every Indian family. What began as 
                  a small team of passionate designers has grown into India's largest interior 
                  design platform.
                </p>
                <p>
                  With $20M in funding and 100,000+ happy customers across 8+ cities, we've 
                  revolutionized the interior design industry with our technology-first approach, 
                  transparent pricing, and commitment to quality.
                </p>
                <p>
                  Today, we operate 5 manufacturing facilities, employ over 1,000 people, 
                  and continue to set new standards for excellence in interior design.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Modern interior design by Amenify"
                className="w-full h-96 object-cover rounded-lg shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-6">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 hover:border-accent-gold transition-colors">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gradient-gold rounded-full mb-6 text-white">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h3>
                <p className="text-neutral-medium">
                  To democratize beautiful interior design by making it accessible, 
                  affordable, and hassle-free for every Indian household through 
                  technology and innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent-gold transition-colors">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-gradient-gold rounded-full mb-6 text-white">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Vision</h3>
                <p className="text-neutral-medium">
                  To become the world's most trusted interior design platform, 
                  transforming millions of homes and creating spaces that inspire 
                  and delight families globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 100,000+ happy families who trusted Amenify with their dream homes.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
