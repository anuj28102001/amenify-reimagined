import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnologySection from "@/components/TechnologySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PriceCalculator from "@/components/PriceCalculator";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechnologySection />
      <ServicesSection />
      <PriceCalculator />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
