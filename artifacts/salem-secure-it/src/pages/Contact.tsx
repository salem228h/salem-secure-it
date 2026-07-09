import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "EmailJS Not Configured",
        description: "Please add your EmailJS credentials to the environment variables.",
        variant: "destructive",
      });
      return;
    }

    // Collect form values
    const data = new FormData(formRef.current);
    const fromName = data.get('from_name') as string;
    const replyTo  = data.get('reply_to')  as string;
    const phone    = data.get('phone')     as string;
    const company  = data.get('company')   as string;
    const service  = data.get('service')   as string;
    const msg      = data.get('message')   as string;

    // Build a full message body so any template variable displays all info
    const fullMessage = `Name: ${fromName}\nEmail: ${replyTo}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\nService: ${service}\n\nMessage:\n${msg}`;

    const templateParams = {
      to_email:     'salemhassani228@gmail.com',
      to_name:      'Salem',
      from_name:    fromName,
      reply_to:     replyTo,
      phone,
      company,
      service,
      // cover every common EmailJS default variable name
      message:      fullMessage,
      request:      fullMessage,
      message_html: fullMessage,
      user_name:    fromName,
      user_email:   replyTo,
      user_message: fullMessage,
    };

    setIsSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      toast({
        title: "Message Sent Successfully! ✅",
        description: "We've received your request. We'll be in touch within 24 hours.",
      });
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please email us directly at salemhassani228@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <section className="container mx-auto px-6 max-w-7xl mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 text-primary font-mono text-sm tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            INITIATE CONTACT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's secure your network.</h1>
          <p className="text-xl text-muted-foreground">
            Reach out for technical support, cybersecurity assessments, or infrastructure consulting.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6 pb-4 border-b border-border">
              <Terminal className="w-4 h-4" /> SECURE_COMMS_LINK_ESTABLISHED
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    name="from_name"
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company <span className="text-muted-foreground font-normal">(Optional)</span></label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    name="reply_to"
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground"
                    placeholder="(514) 555-0123"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">Service Required</label>
                <select 
                  id="service"
                  name="service"
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground appearance-none"
                  required
                >
                  <option value="" disabled selected>Select an option...</option>
                  <option value="it-support">IT Support</option>
                  <option value="network">Network Setup / Issue</option>
                  <option value="cybersecurity">Cybersecurity Assessment</option>
                  <option value="smart-home">Smart Home Setup</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Describe your issue or project requirements..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>Send Transmission <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:pl-8 pt-8 lg:pt-0"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Service Area</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Greater Montreal Area</h3>
                  <p className="text-muted-foreground mt-1">
                    Providing on-site support to Montreal, Brossard, Longueuil, and surrounding South Shore areas. Remote support available everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-6">Direct Channels</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Email Support</p>
                    <a href="mailto:salemhassani228@gmail.com" className="font-semibold hover:text-primary transition-colors">salemhassani228@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+14388693389" className="font-semibold hover:text-primary transition-colors">(438) 869-3389</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                    <p className="font-semibold">140 Avenue de Navarre<br/>Saint-Lambert, Quebec</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold mb-2">Emergency Response</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you are currently experiencing a cyber incident or severe network outage, please indicate "URGENT" in the subject of your message.
              </p>
              <div className="text-xs font-mono text-primary flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                MONITORING SYSTEMS ACTIVE
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
