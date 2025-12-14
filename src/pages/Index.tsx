import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Palette, TrendingUp, Zap, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0">
              Digital Growth Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
              We Help Businesses
              <span className="block text-primary">Grow Online</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-2">
              Build a strong website and online presence that drives real growth. 
              Quality, performance, and transparent pricing—no compromises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-3">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Everything Your Business Needs Online
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From beautiful websites to complete digital presence—we build what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description: "Custom websites built for performance and conversions.",
              },
              {
                icon: Palette,
                title: "Brand Identity",
                description: "Visual identity that makes your business memorable.",
              },
              {
                icon: TrendingUp,
                title: "SEO & Growth",
                description: "Get found online and drive organic traffic.",
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Fast, responsive, and optimized for all devices.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-3">Why VentureFly</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Honest Work, Real Results
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're not here to oversell. We build practical, scalable digital experiences 
                that actually help your business grow. No buzzwords, no hidden costs—just 
                quality work at fair prices.
              </p>

              <ul className="space-y-4">
                {[
                  "Transparent, rational pricing",
                  "Performance-focused development",
                  "Long-term partnership approach",
                  "Mobile-first, SEO-ready websites",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">2+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">₹15K</p>
                <p className="text-sm text-muted-foreground">Starting Price</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project. No pressure, no hidden fees—just a straightforward 
              conversation about what you need.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
