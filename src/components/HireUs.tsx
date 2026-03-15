import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const platforms = [
  { name: "Upwork", url: "#" },
  { name: "Fiverr", url: "#" },
  { name: "Direct", url: "#contact" },
];

const HireUs = () => {
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <p className="text-data text-sm font-mono uppercase tracking-widest mb-4">Hire Us</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter">
            Start Growth Today
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            We work with brands, startups, influencers, and agencies worldwide. Available on multiple platforms.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Button variant="hero-outline" size="lg" asChild>
                <a href={p.url} className="gap-2">
                  {p.name}
                  <ExternalLink size={14} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUs;
