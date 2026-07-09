import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Shield, Server, Wifi, Eye, Lock, ChevronRight, Activity, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-grid-pattern">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />

        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        </div>

        {/* Pseudo-terminal top bar */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 border border-border bg-card/80 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-3 z-10 text-xs font-mono text-muted-foreground shadow-lg">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
          </div>
          <span className="w-px h-3 bg-border"></span>
          <span>SYSTEM.STATUS: OPERATIONAL</span>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Fortify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 glow-text">Digital Defenses.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Salem Secure IT provides no-nonsense IT support and cybersecurity solutions for small businesses and individuals in Quebec. We make your technology secure, simple, and reliable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2 group"
              >
                Get Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto px-8 py-4 border border-border bg-card/50 hover:bg-card text-foreground font-semibold rounded-md transition-all flex items-center justify-center gap-2"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image / Stats overlay */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-primary tracking-widest mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> OUR EXPERTISE
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold">Comprehensive Protection.</h3>
            </div>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm">
              VIEW ALL CAPABILITIES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: 'IT Support', icon: Server, desc: 'Responsive technical assistance, software config, and Microsoft 365 management.' },
              { title: 'Network Solutions', icon: Wifi, desc: 'Secure Wi-Fi installation, router config, and VLAN segmentation.' },
              { title: 'Cybersecurity', icon: Lock, desc: 'Vulnerability scanning, threat monitoring, and robust perimeter defense.' },
              { title: 'Smart & Secure Home', icon: Eye, desc: 'CCTV deployment, smart device hardening, and home network protection.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border z-0" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-border z-0 hidden md:block" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="bg-card p-4">
              <h2 className="text-3xl font-bold mb-6">Why Trust Salem Secure IT?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We believe security shouldn't be a luxury reserved for enterprise corporations. We bring robust, no-nonsense IT practices to local businesses.
              </p>
              <ul className="space-y-4">
                {[
                  'Local expertise serving Montreal & South Shore',
                  'Clear communication with zero tech-jargon',
                  'Proactive approach to prevent issues before they occur',
                  'Academic grounding matched with practical application'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 p-1 rounded">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-4 grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-mono font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Security Mindset</div>
              </div>
              <div>
                <div className="text-5xl font-mono font-bold text-primary mb-2">&lt;2h</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Avg Response Time</div>
              </div>
              <div>
                <div className="text-5xl font-mono font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Client Confidentiality</div>
              </div>
              <div>
                <div className="text-5xl font-mono font-bold text-primary mb-2"><Activity className="w-12 h-12" /></div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Proactive Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Shield className="w-16 h-16 text-primary mx-auto mb-8 drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Operations Today.</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Don't wait for a breach to think about security. Schedule a free consultation to assess your vulnerabilities.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all text-lg"
          >
            Request Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ArrowRight(props: any) {
  return <ChevronRight {...props} />;
}
