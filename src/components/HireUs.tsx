import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const linkedinProfiles = [
  {
    name: "Sudarshan Rajput",
    url: "https://www.linkedin.com/in/sudarshan-rajput-21-08-05s",
  },
  {
    name: "Parth Malviya",
    url: "https://www.linkedin.com/in/parth-malviya-349932389",
  },
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
            We work with brands, startups, influencers, and agencies worldwide. Connect with us on LinkedIn.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {linkedinProfiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="linkedin-btn inline-flex items-center justify-center gap-3 w-[260px] h-[56px] rounded-xl border border-border bg-transparent text-foreground font-display font-semibold text-base hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-all duration-300"
            >
              <Linkedin size={18} />
              {profile.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUs;
