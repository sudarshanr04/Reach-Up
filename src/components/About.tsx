import { motion } from "framer-motion";
import { Palette, BarChart3 } from "lucide-react";

const transition = {
  duration: 0.7,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center mb-20"
        >
          <p className="text-creative text-sm font-mono uppercase tracking-widest mb-4">Who We Are</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter">
            Creativity × Technology
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Reach Up Media is a creative and data-driven social media marketing agency founded by Parth Malviya and Sudarshan Rajput. We combine storytelling, animation, and digital marketing to build powerful brand presences.
          </p>
        </motion.div>

        {/* Duo Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Parth */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
            whileHover={{ y: -8 }}
            className="glass-card rounded-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-creative/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <Palette className="text-creative mb-4" size={32} />
              <p className="text-xs font-mono uppercase tracking-widest text-creative mb-2">Creative Director</p>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-4">Parth Malviya</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                B.Sc in Animation & VFX. Specializes in creative content, video editing, motion graphics, and visual storytelling.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Video Editing", "Motion Graphics", "Reels", "Visual Design"].map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 rounded-full border border-creative/30 text-creative/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sudarshan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
            whileHover={{ y: -8 }}
            className="glass-card rounded-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-data/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <BarChart3 className="text-data mb-4" size={32} />
              <p className="text-xs font-mono uppercase tracking-widest text-data mb-2">Growth Engineer</p>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-4">Sudarshan Rajput</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                B.Tech in Information Technology. Focuses on digital marketing strategy, data analytics, campaign optimization, and growth systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Ad Strategy", "Analytics", "SEO", "Growth Systems"].map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 rounded-full border border-data/30 text-data/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
