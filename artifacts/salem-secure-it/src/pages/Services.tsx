import React from 'react';
import { motion } from 'framer-motion';
import { Server, Wifi, Lock, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: "it-support",
      title: "IT Support",
      icon: Server,
      description: "Reliable technical assistance for your day-to-day operations. We handle the technology so you can focus on your business.",
      features: [
        "Windows installation & configuration",
        "Software deployment and updates",
        "Microsoft 365 support & management",
        "Email migration and troubleshooting",
        "Remote & on-site technical support",
        "Data backup solutions"
      ]
    },
    {
      id: "network",
      title: "Network Solutions",
      icon: Wifi,
      description: "Robust, fast, and resilient networking tailored to your physical space and operational requirements.",
      features: [
        "Small business network design",
        "Enterprise-grade Wi-Fi installation",
        "Router & Switch configuration",
        "Firewall deployment (OPNsense)",
        "VLAN network segmentation",
        "Network troubleshooting & optimization"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      icon: Lock,
      description: "Practical, no-nonsense security measures to protect your data, devices, and digital identity against modern threats.",
      features: [
        "Comprehensive security assessments",
        "Vulnerability scanning & remediation",
        "Multi-factor authentication (MFA) setup",
        "Phishing awareness training for staff",
        "Endpoint protection deployment",
        "Basic security monitoring (SIEM)"
      ]
    },
    {
      id: "smart-home",
      title: "Smart Home & Security",
      icon: Eye,
      description: "Bring enterprise-level security thinking to your physical premises and connected home devices.",
      features: [
        "Security camera (CCTV) installation",
        "Smart device secure setup",
        "IoT network isolation",
        "Home network perimeter protection",
        "Remote access configuration",
        "Local storage for security footage"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expertise delivered with precision.</h1>
          <p className="text-xl text-muted-foreground">
            From establishing a secure network foundation to ongoing technical support, we provide the IT infrastructure you need to operate safely.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-12 border-t border-border"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
                  >
                    VIEW PRICING <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-2/3 bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
                <h3 className="font-mono text-sm text-muted-foreground mb-8 tracking-wider">CORE CAPABILITIES</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 max-w-4xl mt-32 text-center">
        <div className="p-12 rounded-2xl bg-card border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Need a custom solution?</h2>
          <p className="text-muted-foreground mb-8 relative z-10 max-w-xl mx-auto">
            Every business environment is unique. Contact us to discuss your specific infrastructure and security requirements.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all relative z-10"
          >
            Contact Support Team
          </Link>
        </div>
      </section>
    </div>
  );
}
