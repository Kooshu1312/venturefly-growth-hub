import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamKushagra from "@/assets/team-kushagra.jpg";
import teamRonak from "@/assets/team-ronak.jpg";

const teamMembers = [
  {
    name: "Kushagra Srivastava",
    role: "CEO",
    description: "Vision, strategy, and client success",
    image: teamKushagra,
  },
  {
    name: "Ronak Kumar Sah",
    role: "CTO",
    description: "Technology, architecture, and performance",
    image: teamRonak,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">About VentureFly</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Built Different. On Purpose.
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a small, focused team that believes in meaningful work over flashy promises.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    VentureFly was born from a simple observation: most businesses don't need 
                    expensive, over-engineered websites. They need something that works, looks 
                    professional, and helps them grow.
                  </p>
                  <p>
                    We work closely with our clients, understand their business goals, and build 
                    digital experiences that are practical, scalable, and growth-driven. No 
                    unnecessary complexity, no inflated prices.
                  </p>
                  <p>
                    Our approach is straightforward—listen, understand, build, and deliver. 
                    We treat every project as a partnership, not just a transaction.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">Quality</p>
                  <p className="text-sm text-muted-foreground">Over quantity, always</p>
                </div>
                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">Honest</p>
                  <p className="text-sm text-muted-foreground">Pricing & communication</p>
                </div>
                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">Growth</p>
                  <p className="text-sm text-muted-foreground">Focused solutions</p>
                </div>
                <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">Long-term</p>
                  <p className="text-sm text-muted-foreground">Partnership mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">The Team</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet the People Behind VentureFly
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A small team with big ambitions. We're hands-on, responsive, and genuinely 
              invested in your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-6 bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To help businesses establish a strong online presence through quality websites 
              and digital solutions—at prices that make sense for growing companies.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
