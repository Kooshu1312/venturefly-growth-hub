import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Palette, TrendingUp, Zap, Code, Smartphone, Search, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, responsive websites that look great and convert visitors into customers. Built with modern technologies for speed and reliability.",
    features: ["Custom design", "Mobile responsive", "Fast loading", "SEO optimized"],
  },
  {
    icon: Code,
    title: "Business Website Setup",
    description: "Complete website solutions for small businesses. From domain to deployment, we handle everything so you can focus on your business.",
    features: ["Domain setup", "Hosting included", "Email setup", "SSL security"],
  },
  {
    icon: Palette,
    title: "Online Presence & Branding",
    description: "Build a cohesive brand identity across all digital touchpoints. Consistent visuals that make your business memorable.",
    features: ["Logo design", "Brand guidelines", "Social media assets", "Business cards"],
  },
  {
    icon: Search,
    title: "SEO & Search Visibility",
    description: "Get found by customers searching for your services. Organic growth strategies that bring qualified traffic.",
    features: ["Keyword research", "On-page SEO", "Local SEO", "Analytics setup"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Websites that work flawlessly on every device. Most of your customers browse on mobile—we design for them first.",
    features: ["Touch-friendly", "Fast mobile load", "Responsive images", "Mobile menus"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed matters. We optimize every aspect of your website for lightning-fast performance and better user experience.",
    features: ["Image optimization", "Code minification", "Caching setup", "CDN integration"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Everything You Need to Grow Online
            </h1>
            <p className="text-lg text-muted-foreground">
              From beautiful websites to complete digital presence—practical solutions 
              that actually help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and collaborative. Here's what working with us looks like.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Design", description: "Create wireframes and designs that match your vision." },
              { step: "03", title: "Develop", description: "Build your website with clean, fast, maintainable code." },
              { step: "04", title: "Deploy", description: "Launch your site and provide ongoing support." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-heading font-bold">{item.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your requirements and create something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
