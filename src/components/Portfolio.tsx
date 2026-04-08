import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Social Media Campaigns", slug: "social-media-campaigns" },
  { name: "Instagram Reels", slug: "instagram-reels" },
  { name: "Motion Graphics", slug: "motion-graphics" },
  { name: "Brand Design", slug: "brand-design" },
];

const Portfolio = () => {
  const navigate = useNavigate();

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
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", bounce: 0.4 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/work/${cat.slug}`)}
              className="glass-card rounded-xl aspect-[4/3] flex items-end p-6 relative overflow-hidden group cursor-pointer portfolio-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-creative/10' : 'from-data/10'} to-transparent`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              {/* Hover glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-creative/15' : 'from-data/15'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-creative/30 transition-all duration-500" />
              <div className="relative flex items-center justify-between w-full">
                <h3 className="font-display font-bold text-base group-hover:text-creative transition-colors duration-300">{cat.name}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-creative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
