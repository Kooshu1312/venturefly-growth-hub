import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "Business Websites", path: "/services" },
    { name: "Online Presence", path: "/services" },
    { name: "Branding", path: "/services" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-foreground">
                Venture<span className="text-primary">Fly</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We help businesses build strong websites and online presence so they can grow and prosper.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@venturefly.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                hello@venturefly.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                +91 99999 99999
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                New Delhi, India
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Pricing</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Basic - ₹15,000
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Standard - ₹30,000
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Premium - ₹53,000+
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VentureFly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
