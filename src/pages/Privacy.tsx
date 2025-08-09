import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
              🔒 Privacy Policy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Privacy is Our{" "}
              <span className="text-white/90">Priority</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn how Amenify protects and handles your personal information.
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
                <Shield className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Information We Collect</h2>
              </div>
              <p className="text-neutral-medium">
                We collect information you provide directly to us, such as when you create an account, 
                request a consultation, or contact us. This may include your name, email address, 
                phone number, address, and design preferences.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">How We Use Your Information</h2>
              </div>
              <p className="text-neutral-medium mb-4">We use the information we collect to:</p>
              <ul className="text-neutral-medium space-y-2">
                <li>• Provide interior design services and consultations</li>
                <li>• Communicate with you about your projects</li>
                <li>• Send you updates about our services</li>
                <li>• Improve our services and customer experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Information Sharing</h2>
              </div>
              <p className="text-neutral-medium">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with trusted partners who assist us in providing services to you.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent-gold" />
                <h2 className="text-2xl font-bold text-primary-dark m-0">Data Security</h2>
              </div>
              <p className="text-neutral-medium">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Your Rights</h2>
              <p className="text-neutral-medium mb-4">You have the right to:</p>
              <ul className="text-neutral-medium space-y-2">
                <li>• Access the personal information we hold about you</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Data portability where applicable</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
              <p className="text-neutral-medium">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 text-neutral-medium">
                <p>Email: privacy@amenify.com</p>
                <p>Phone: +91 9873123716</p>
                <p>Address: Emaar Digital Greens, Sector 61, Gurugram</p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm text-neutral-medium">
                This Privacy Policy was last updated on January 1, 2024. We reserve the right to 
                update this policy at any time. We will notify you of any changes by posting the 
                new Privacy Policy on this page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your information is safe with us. Start your interior design journey today.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
