import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Professional workspace",
    slug: "professional-workspace",
    videoId: "XbkX-EOn2aA",
  },
  {
    name: "Instagram reels",
    slug: "instagram-reels",
    videoId: "6tct1YpQ83s",
  },
  {
    name: "Motion graphics",
    slug: "motion-graphics",
    videoId: "xo8Ddjhm1TU",
  },
  {
    name: "Brand design",
    slug: "brand-design",
    videoId: null, // No video — gradient card
  },
];

/** Build a YouTube autoplay URL that hides title, controls, branding */
const autoplaySrc = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1`;

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
              key={cat.slug}
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
              className="glass-card rounded-xl aspect-[4/3] relative overflow-hidden group cursor-pointer portfolio-card"
            >
              {/* ── Video preview or gradient fallback ── */}
              {cat.videoId ? (
                <div className="absolute inset-0">
                  <iframe
                    src={autoplaySrc(cat.videoId)}
                    title={`${cat.name} preview`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "177.78%",
                      height: "100%",
                      minWidth: "100%",
                      minHeight: "100%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                      border: "none",
                    }}
                  />
                </div>
              ) : (
                /* Gradient fallback for Brand Design */
                <div className="absolute inset-0 bg-gradient-to-br from-data/20 via-background to-creative/10" />
              )}

              {/* Gradient overlays */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  i % 2 === 0 ? "from-creative/10" : "from-data/10"
                } to-transparent`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

              {/* Hover glow overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  i % 2 === 0 ? "from-creative/15" : "from-data/15"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-creative/30 transition-all duration-500" />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <h3 className="font-display font-bold text-base group-hover:text-creative transition-colors duration-300 relative z-10">
                  {cat.name}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground group-hover:text-creative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
