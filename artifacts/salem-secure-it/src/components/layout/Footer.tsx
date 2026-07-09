import React from 'react';
import { Link } from 'wouter';
import { Shield, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl tracking-wide text-foreground">
                SALEM <span className="text-primary font-mono font-normal">SECURE IT</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing reliable IT support and cybersecurity solutions to small businesses and individuals across the Greater Montreal Area.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 font-mono text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Pricing', path: '/pricing' }
              ].map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 font-mono text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'IT Support', path: '/services#it-support' },
                { name: 'Network Solutions', path: '/services#network' },
                { name: 'Cybersecurity', path: '/services#cybersecurity' },
                { name: 'Smart Home', path: '/services#smart-home' }
              ].map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6 font-mono text-sm tracking-wider uppercase">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>140 Avenue de Navarre<br/>Saint-Lambert, Quebec, Canada</span>
                </a>
              </li>
              <li>
                <a href="mailto:salemhassani228@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>salemhassani228@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+14388693389" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>(438) 869-3389</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Salem Secure IT. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
            <span>STATUS: <span className="text-primary glow-text">SECURE</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
