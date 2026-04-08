import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-creative text-sm font-mono uppercase tracking-widest mb-4">Let's Talk</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter mb-6">
              Ready to Dominate Feeds?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Contact us today for social media marketing, content creation, video editing, and advertising campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:reachup.official@gmail.com" className="gap-2">
                Get Free Audit <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm"
          >
            <a href="mailto:reachup.official@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} />
              reachup.official@gmail.com
            </a>
            <a href="tel:+918839808695" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={16} />
              +91 88398 08695
            </a>
            <a href="tel:+918815885977" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={16} />
              +91 88158 85977
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
