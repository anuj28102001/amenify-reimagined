import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              📋 Terms of Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms &{" "}
              <span className="text-white/90">Conditions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Acceptance of Terms</h2>
              </div>
              <p className="text-neutral-medium">
                By accessing and using Amenify's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Service Description</h2>
              </div>
              <p className="text-neutral-medium mb-4">
                Amenify provides interior design and home furnishing services including:
              </p>
              <ul className="text-neutral-medium space-y-2">
                <li>• Interior design consultation and planning</li>
                <li>• 3D visualization and VR walkthroughs</li>
                <li>• Manufacturing and installation of furniture</li>
                <li>• Project management and delivery</li>
                <li>• Post-installation support and warranty</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Payment Terms</h2>
              </div>
              <p className="text-neutral-medium mb-4">Payment structure for our services:</p>
              <ul className="text-neutral-medium space-y-2">
                <li>• Free consultation and design</li>
                <li>• 5% booking amount to confirm order</li>
                <li>• 5% for site measurement</li>
                <li>• 10% to finalize design</li>
                <li>• 30% to start production</li>
                <li>• 50% on delivery and installation</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Warranty & Returns</h2>
              </div>
              <p className="text-neutral-medium mb-4">
                We provide industry-leading warranty coverage:
              </p>
              <ul className="text-neutral-medium space-y-2">
                <li>• 10-year warranty on furniture structure</li>
                <li>• 5-year warranty on electrical components</li>
                <li>• 1-year warranty on accessories and fittings</li>
                <li>• 45-day delivery guarantee or full refund</li>
                <li>• Free repairs and replacements during warranty period</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Limitation of Liability</h2>
              <p className="text-neutral-medium">
                Amenify shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Modification of Terms</h2>
              <p className="text-neutral-medium">
                Amenify reserves the right to modify these terms at any time. We will notify users 
                of any material changes. Continued use of our services after such modifications 
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Governing Law</h2>
              <p className="text-neutral-medium">
                These terms shall be governed and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions. Any disputes arising under these 
                terms shall be subject to the jurisdiction of the courts in New Delhi, India.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Information</h2>
              <p className="text-neutral-medium">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 text-neutral-medium">
                <p>Email: legal@amenify.com</p>
                <p>Phone: +91 9873123716</p>
                <p>Address: Emaar Digital Greens, Sector 61, Gurugram</p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm text-neutral-medium">
                These Terms of Service were last updated on January 1, 2024. By using our services, 
                you acknowledge that you have read and understood these terms and agree to be bound by them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your interior design journey with India's most trusted company.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
