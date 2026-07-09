import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Shield, Server, Wifi, Eye, Lock, ChevronRight, Activity, Terminal, ArrowRight as ArrowRightIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-28 pb-0 overflow-hidden bg-grid-pattern">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-mono mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                SYSTEM.STATUS: OPERATIONAL
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight"
              >
                IT Support &amp;{' '}
                <span className="text-primary">Cybersecurity</span>{' '}
                Solutions for Small Businesses
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 leading-relaxed"
              >
                We help individuals and small businesses protect their technology, networks, and data with reliable IT support and cybersecurity solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  Get Free Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-border bg-white hover:bg-muted text-foreground font-semibold rounded-md transition-all flex items-center gap-2 shadow-sm"
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground"
              >
                {['Secure', 'Reliable', 'Expert', '24/7 Support'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="font-medium">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: hero image collage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="/shield-hero.png"
                  alt="Salem Secure IT — Cybersecurity Shield"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-border rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Response Time</p>
                  <p className="font-bold text-foreground">&lt; 2 Hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
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
