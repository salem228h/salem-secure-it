import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, BookOpen, Terminal, Check } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 max-w-7xl mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            ABOUT SALEM SECURE IT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Security is a mindset, not a product.</h1>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Salem Secure IT provides reliable IT support and cybersecurity services for individuals and small businesses across the Greater Montreal Area. Our mission is to make technology secure, simple, and reliable.
              </p>
              <p className="text-foreground mt-6">
                Too often, small businesses are left exposed because enterprise-grade security solutions are deemed too complex or expensive. We bridge that gap. By applying fundamental security principles and robust open-source or cost-effective technologies, we harden your infrastructure without breaking the bank.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                <Target className="text-primary w-5 h-5" /> Our Approach
              </h3>
              <ul className="space-y-3">
                {[
                  "No fear-mongering — just practical risk assessment",
                  "Transparency in pricing and implementation",
                  "Education-first mentality to empower users",
                  "Proactive defense rather than reactive fixes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Background / Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-border bg-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5">
                <Shield className="w-64 h-64" />
              </div>
              
              <h2 className="text-2xl font-bold mb-6 relative z-10">Professional Background</h2>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="font-semibold text-foreground">Cybersecurity Education</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">
                    Rigorous academic foundation in cybersecurity principles, combining theoretical knowledge with hands-on lab environments.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <Terminal className="w-5 h-5" />
                    <h3 className="font-semibold text-foreground">Practical Experience</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">
                    Extensive experience in networking, Linux server administration, and building secure lab environments.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 relative z-10">
                <h3 className="font-mono text-xs text-muted-foreground tracking-widest mb-4">TECHNOLOGY STACK & EXPERTISE</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Linux Administration", "Windows Server", "OPNsense", 
                    "PfSense", "Wazuh SIEM", "TryHackMe", 
                    "VLANs", "TCP/IP", "Active Directory"
                  ].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
