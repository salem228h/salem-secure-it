import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Home as HomeIcon, Briefcase } from 'lucide-react';
import { Link } from 'wouter';

export default function Pricing() {
  const plans = [
    {
      title: "Home IT Support",
      icon: HomeIcon,
      target: "For Individuals & Families",
      price: "$85",
      period: "per visit / hour",
      description: "Reliable on-demand technical support for home networks, computers, and smart devices.",
      features: [
        "Virus & malware removal",
        "Wi-Fi troubleshooting & setup",
        "Printer & device configuration",
        "Data recovery basics",
        "Smart home device setup",
        "Remote support available"
      ]
    },
    {
      title: "Small Business Support",
      icon: Briefcase,
      target: "For Offices up to 15 users",
      price: "$350",
      period: "per month",
      popular: true,
      description: "Proactive IT management to keep your business running smoothly without hiring internal IT.",
      features: [
        "Network monitoring & maintenance",
        "Microsoft 365 / Google Workspace mgmt",
        "Remote & priority on-site support",
        "Automated data backups",
        "Basic endpoint antivirus",
        "Vendor management (ISP, software)"
      ]
    },
    {
      title: "Cybersecurity Package",
      icon: Shield,
      target: "For Compliance & Defense",
      price: "Custom",
      period: "quote",
      description: "Advanced security hardening and monitoring for businesses handling sensitive data.",
      features: [
        "Full network security assessment",
        "Firewall deployment & management",
        "Endpoint Detection & Response (EDR)",
        "MFA implementation across services",
        "Employee security awareness training",
        "Incident response planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <section className="container mx-auto px-6 max-w-7xl mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            PRICING PLANS
            <span className="w-8 h-px bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Straightforward security pricing.</h1>
          <p className="text-xl text-muted-foreground">
            No hidden fees, no unnecessary upselling. Just honest pricing for professional technical expertise.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 flex flex-col h-full ${
                plan.popular ? 'border-primary shadow-[0_0_30px_rgba(0,255,136,0.1)]' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="mb-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-background border border-border flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6">{plan.target}</p>
                
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/contact"
                className={`w-full py-3 rounded-md text-center font-bold transition-all mt-auto ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-background border border-border hover:border-primary/50 text-foreground'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-3xl mt-24">
        <div className="text-center p-8 border-t border-border">
          <h3 className="text-lg font-bold mb-2">Need something else?</h3>
          <p className="text-muted-foreground mb-4">
            We provide custom quotes for network installations, hardware procurement, and large-scale deployments.
          </p>
          <Link href="/contact" className="text-primary hover:underline font-mono text-sm">
            REQUEST A CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
