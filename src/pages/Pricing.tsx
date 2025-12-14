import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹15,000",
    description: "Perfect for small businesses getting started online",
    features: [
      "Simple business website",
      "Clean, modern UI design",
      "Mobile responsive",
      "Up to 5 pages",
      "Contact form",
      "Basic SEO setup",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹30,000",
    description: "For businesses that want more features and polish",
    features: [
      "Advanced website design",
      "Up to 10 pages",
      "Enhanced UX & animations",
      "Blog/News section",
      "Social media integration",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Best Website Ever",
    price: "₹53,000+",
    description: "Premium custom solution for maximum impact",
    features: [
      "Fully custom design",
      "Unlimited pages",
      "High-performance build",
      "Custom features & integrations",
      "E-commerce ready",
      "Priority support",
      "Performance optimization",
      "6 months support",
      "Dedicated project manager",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Transparent Pricing</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Simple, Honest Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees, no surprise charges. Choose the plan that fits your 
              business needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-lg border transition-all duration-300 ${
                  plan.popular
                    ? "bg-secondary border-primary shadow-lg shadow-primary/10"
                    : "bg-secondary/30 border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star size={12} />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-heading font-bold text-primary mb-2">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What's included in the price?",
                  a: "All plans include design, development, responsive layout, basic SEO, and the specified support period. Hosting and domain are separate.",
                },
                {
                  q: "How long does a project take?",
                  a: "Basic websites typically take 1-2 weeks, Standard 2-3 weeks, and Premium projects 4-6 weeks depending on complexity.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes, we accept 50% upfront and 50% on completion. For larger projects, we can discuss milestone-based payments.",
                },
                {
                  q: "What if I need changes after launch?",
                  a: "Minor changes are covered during the support period. For larger updates, we offer affordable maintenance packages.",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Not Sure Which Plan Is Right?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's talk about your project. We'll recommend the best option based on 
              your specific needs and goals.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
