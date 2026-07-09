import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Server, Lock, Activity } from 'lucide-react';
import { Link } from 'wouter';

export default function Projects() {
  const projects = [
    {
      title: "OPNsense Firewall Implementation",
      icon: Shield,
      tech: ["OPNsense", "Networking", "Routing"],
      description: "Deployed an enterprise-grade open-source firewall solution to secure a small office network.",
      benefit: "Provided intrusion detection, detailed traffic monitoring, and robust perimeter defense without licensing fees."
    },
    {
      title: "VLAN Network Segmentation",
      icon: Network,
      tech: ["Switching", "802.1Q", "Subnetting"],
      description: "Architected a segmented network separating guest Wi-Fi, employee devices, and IoT hardware.",
      benefit: "Contained potential breaches by ensuring compromised smart devices cannot access critical business data."
    },
    {
      title: "Wazuh SIEM Deployment",
      icon: Activity,
      tech: ["Wazuh", "Linux", "Log Analysis"],
      description: "Installed and configured a Security Information and Event Management system for endpoint monitoring.",
      benefit: "Enabled real-time threat detection, file integrity monitoring, and centralized security logging."
    },
    {
      title: "Linux Server Hardening",
      icon: Server,
      tech: ["Ubuntu/Debian", "SSH", "UFW"],
      description: "Secured internet-facing Linux servers following CIS benchmarks and best practices.",
      benefit: "Mitigated unauthorized access through key-based authentication, firewall rules, and fail2ban implementation."
    },
    {
      title: "Security Lab Infrastructure",
      icon: Terminal,
      tech: ["Virtualization", "Proxmox", "Active Directory"],
      description: "Built isolated virtualized lab environments to simulate enterprise networks and attack scenarios.",
      benefit: "Continuous testing of malware behavior and security tools in a safe, controlled environment."
    },
    {
      title: "Phishing Assessment Protocol",
      icon: Lock,
      tech: ["OSINT", "Social Engineering", "Training"],
      description: "Developed comprehensive training material and simulated phishing campaigns for staff.",
      benefit: "Drastically reduced the success rate of social engineering attacks against the human element of the network."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <section className="container mx-auto px-6 max-w-7xl mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            PORTFOLIO & LABS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Proven implementations.</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of security architectures, network deployments, and lab projects that demonstrate our technical capabilities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex gap-2">
                  {project.tech.slice(0, 2).map(t => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-background px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="bg-background/50 rounded-lg p-4 mt-auto border border-border/50">
                <p className="text-xs font-mono text-primary mb-1">SECURITY BENEFIT:</p>
                <p className="text-sm text-foreground/90 leading-snug">{project.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl mt-24">
        <div className="border border-border bg-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Want these implemented for your business?</h2>
            <p className="text-muted-foreground">We adapt enterprise techniques to fit small business budgets.</p>
          </div>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Discuss a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
