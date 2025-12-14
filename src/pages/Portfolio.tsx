import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import portfolioFurkan from "@/assets/portfolio-furkan.jpg";
import portfolioIvoryy from "@/assets/portfolio-ivoryy.jpg";

const projects = [
  {
    title: "Furkan Automobiles",
    category: "Local Business",
    description: "Furkan Automobiles is a local automobile business focused on reliability and customer trust. VentureFly helped establish a clean and professional online presence that reflects their real-world credibility. The website was designed to be simple, fast, and easy for customers to understand their services and reach out directly.",
    image: portfolioFurkan,
    focus: ["Clear service presentation", "Trust-driven design", "Mobile-friendly layout"],
    link: "#",
  },
  {
    title: "Ivoryy Delhi",
    category: "Restaurant & Dining",
    description: "Ivoryy Delhi is a dining brand that values ambiance, experience, and presentation. VentureFly designed a visually engaging website that captures the restaurant's mood while keeping navigation simple for customers. The goal was to showcase the restaurant's identity and make it easy for users to explore and connect.",
    image: portfolioIvoryy,
    focus: ["Visual storytelling", "Brand-aligned layout", "Smooth user experience"],
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Real Projects, Real Results
            </h1>
            <p className="text-lg text-muted-foreground">
              See how we've helped businesses establish their online presence with 
              websites that work.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-lg overflow-hidden border border-border group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-primary font-medium mb-2">{project.category}</p>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Project Focus:</h4>
                    <ul className="space-y-2">
                      {project.focus.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-12 rounded-lg bg-card border border-border border-dashed">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                We're actively working with new clients. Check back for more case studies, 
                or get in touch to become our next success story.
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your business establish a strong online presence.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
