import { motion } from "framer-motion";

const stats = [
  { label: "Average Reel Reach", value: "142.8k" },
  { label: "Ad Spend Efficiency", value: "4.2x ROAS" },
  { label: "Creative Turnaround", value: "48hrs" },
];

const StatsBar = () => {
  return (
    <div className="border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <div className="font-mono-stats text-2xl md:text-3xl font-bold text-creative">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
