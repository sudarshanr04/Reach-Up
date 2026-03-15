import { motion } from "framer-motion";
import { Instagram, Target, Film, Megaphone, TrendingUp, Sparkles } from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "We manage your brand's entire social media presence — content planning, scheduling, growth strategy, and audience engagement.",
    tags: ["Instagram", "Scheduling", "Growth", "Engagement"],
    span: "md:col-span-6",
    accent: "creative" as const,
  },
  {
    icon: Target,
    title: "Social Media Advertising",
    description: "High-converting ad campaigns designed to generate leads, sales, and brand awareness across Instagram and Facebook.",
    tags: ["Instagram Ads", "Facebook Ads", "Lead Gen", "Retargeting"],
    span: "md:col-span-6",
    accent: "data" as const,
  },
  {
    icon: Film,
    title: "Content Creation",
    description: "Engaging content designed to capture attention — reels, graphics, brand content, and promotional videos.",
    tags: ["Reels", "Graphics", "Brand Content", "Promos"],
    span: "md:col-span-4",
    accent: "creative" as const,
  },
  {
    icon: Sparkles,
    title: "Video Editing & Motion Graphics",
    description: "High-quality video content for modern marketing — viral reels, product ads, and motion graphic animations.",
    tags: ["VFX", "Animations", "Product Ads", "Viral Reels"],
    span: "md:col-span-4",
    accent: "data" as const,
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies tailored to your brand. We analyze, optimize, and scale your social media presence.",
    tags: ["Analytics", "Optimization", "Scaling", "ROI"],
    span: "md:col-span-4",
    accent: "creative" as const,
  },
];

const accentColors = {
  creative: {
    icon: "text-creative",
    border: "border-creative/20",
    tag: "border-creative/20 text-creative/70",
    glow: "from-creative/5",
  },
  data: {
    icon: "text-data",
    border: "border-data/20",
    tag: "border-data/20 text-data/70",
    glow: "from-data/5",
  },
};

const Services = () => {
  return (
    <section id="services" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="text-data text-sm font-mono uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter">
            Services Built to Scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => {
            const colors = accentColors[service.accent];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, transition: { type: "spring", bounce: 0.4 } }}
                whileTap={{ scale: 0.98 }}
                className={`${service.span} glass-card rounded-xl p-6 relative overflow-hidden group cursor-default animate-pulse-glow`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <Icon className={`${colors.icon} mb-4`} size={28} />
                  <h3 className="font-display font-bold text-lg tracking-tight mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${colors.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
