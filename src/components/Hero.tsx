import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as [number, number, number, number];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Autoplay Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{ position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/XbkX-EOn2aA?autoplay=1&mute=1&loop=1&playlist=XbkX-EOn2aA&controls=0&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1"
            title="Department of IT"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              opacity: 0.45,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="text-creative text-sm font-mono uppercase tracking-widest mb-6"
        >
          Social Media Marketing Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease }}
          className="font-display font-extrabold tracking-tighter text-shimmer"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}
        >
          We don't post content.
          <br />
          We build systems that
          <br />
          dominate feeds.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
        >
          Reach Up Media blends VFX-grade storytelling with performance-engineered data. Your brand, amplified by the Gen-Z edge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#contact" className="gap-2">
              Get Free Audit <ArrowRight size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#portfolio">See the Work</a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;