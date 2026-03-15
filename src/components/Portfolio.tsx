import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  "Social Media Campaigns",
  "Instagram Reels",
  "Motion Graphics",
  "Brand Design",
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="text-creative text-sm font-mono uppercase tracking-widest mb-4">Our Work</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter">
            See the Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            High-impact digital content that helps brands stand out online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, transition: { type: "spring", bounce: 0.4 } }}
              className="glass-card rounded-xl aspect-[4/3] flex items-end p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-creative/10' : 'from-data/10'} to-transparent`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="relative flex items-center justify-between w-full">
                <h3 className="font-display font-bold text-base">{cat}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["E-Commerce", "Restaurants & Cafes", "Personal Brands", "Coaches", "Fashion", "Startups"].map((ind) => (
              <span key={ind} className="text-sm px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
