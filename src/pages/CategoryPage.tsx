import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface VideoCard {
  id: number;
  title: string;
  youtubeId: string;
  embedSrc: string;
  isVertical?: boolean;
}

interface CategoryInfo {
  title: string;
  description: string;
  videos: VideoCard[];
}

const categoryData: Record<string, CategoryInfo> = {
  "professional-workspace": {
    title: "Professional workspace",
    description: "High-impact professional workspace videos that showcase creative excellence.",
    videos: [
      {
        id: 1,
        title: "Department of Information Technology",
        youtubeId: "XbkX-EOn2aA",
        embedSrc: "https://www.youtube-nocookie.com/embed/XbkX-EOn2aA?si=y5ftcKn529PzixXH&controls=1",
      },
      {
        id: 2,
        title: "Glimpses of 2024",
        youtubeId: "hh8M335KioM",
        embedSrc: "https://www.youtube.com/embed/hh8M335KioM?si=NFAvxwG_yZuANzas",
      },
      {
        id: 3,
        title: "BEHIND THE SCENE TECH-O-TSAV 2025",
        youtubeId: "J313VNJYRbA",
        embedSrc: "https://www.youtube.com/embed/J313VNJYRbA?si=pqZsYV9ByD7MvMo7",
      },
      {
        id: 4,
        title: "Intro Tech-o-Tsav 2025",
        youtubeId: "3MS9i_LWm_E",
        embedSrc: "https://www.youtube.com/embed/3MS9i_LWm_E?si=VE45_Q5BwtZH5Wfo",
      },
    ],
  },
  "instagram-reels": {
    title: "Instagram reels",
    description: "Scroll-stopping Instagram Reels designed to go viral.",
    videos: [
      {
        id: 1,
        title: "Bike stunt",
        youtubeId: "6tct1YpQ83s",
        embedSrc: "https://www.youtube.com/embed/6tct1YpQ83s",
        isVertical: true,
      },
      {
        id: 2,
        title: "Property review",
        youtubeId: "_3byJMmefVU",
        embedSrc: "https://www.youtube.com/embed/_3byJMmefVU",
        isVertical: true,
      },
      {
        id: 3,
        title: "BTS Wedding deco",
        youtubeId: "FoBRlSA5gsw",
        embedSrc: "https://www.youtube.com/embed/FoBRlSA5gsw",
        isVertical: true,
      },
      {
        id: 4,
        title: "Why Reading Books Changes Your Life 📚",
        youtubeId: "YKW2HfI7fZo",
        embedSrc: "https://www.youtube.com/embed/YKW2HfI7fZo",
        isVertical: true,
      },
      {
        id: 5,
        title: "Intro for Social Media | Personalised",
        youtubeId: "U_Ur1XAzN3I",
        embedSrc: "https://www.youtube.com/embed/U_Ur1XAzN3I",
        isVertical: true,
      },
      {
        id: 6,
        title: "Developers Community Club (DCC) | AITR IT Dept",
        youtubeId: "G6EvM6Ylyxk",
        embedSrc: "https://www.youtube.com/embed/G6EvM6Ylyxk",
        isVertical: true,
      },
      {
        id: 7,
        title: "ACM Student Chapter AITR 🔥",
        youtubeId: "97D1YrFJeIk",
        embedSrc: "https://www.youtube.com/embed/97D1YrFJeIk",
        isVertical: true,
      },
      {
        id: 8,
        title: "Kua Pujan Ceremony 🎉",
        youtubeId: "RElUqiVfl9U",
        embedSrc: "https://www.youtube.com/embed/RElUqiVfl9U",
        isVertical: true,
      },
      {
        id: 9,
        title: "Wedding Display LED",
        youtubeId: "S3v4YD8W9x8",
        embedSrc: "https://www.youtube.com/embed/S3v4YD8W9x8",
        isVertical: true,
      },
    ],
  },
  "motion-graphics": {
    title: "Motion graphics",
    description: "Eye-catching motion graphics and animated content.",
    videos: [
      {
        id: 1,
        title: "Brand Design Motion",
        youtubeId: "xo8Ddjhm1TU",
        embedSrc: "https://www.youtube.com/embed/xo8Ddjhm1TU",
      },
    ],
  },
  "brand-design": {
    title: "Brand design",
    description: "Premium brand identity designs that make an impact.",
    videos: [],
  },
};

/* ───── Brand Design fallback cards (no videos available) ───── */
const brandDesignCards = [
  { id: 1, title: "Brand Identity System", subtitle: "Logo · Typography · Color" },
  { id: 2, title: "Packaging Design", subtitle: "Product · Retail · Premium" },
  { id: 3, title: "Social Media Story Design", subtitle: "Templates · Layouts · Branding" },
  { id: 4, title: "UI / UX Design", subtitle: "Web · App · Dashboard" },
];

/* ───── Single video card with thumbnail → embed toggle ───── */
const VideoCardItem = ({ video, index }: { video: VideoCard; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const isVertical = video.isVertical ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      <div
        className="relative rounded-xl overflow-hidden glass-card"
        style={{ aspectRatio: isVertical ? "9/16" : "16/9" }}
      >
        {playing ? (
          /* ── Embedded player (no autoplay) ── */
          <>
            <iframe
              src={video.embedSrc}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Close video"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          /* ── Thumbnail ── */
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/70 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-creative/20 transition-all duration-300">
                <Play size={22} className="text-white/80 group-hover:text-creative transition-colors ml-0.5" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Title below card */}
      <div className="mt-3 px-1">
        <p className="text-sm font-display font-semibold truncate group-hover:text-creative transition-colors duration-300">
          {video.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">Video</p>
      </div>
    </motion.div>
  );
};

/* ───── Main CategoryPage ───── */
const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;
  const isBrandDesign = slug === "brand-design";
  const isReels = slug === "instagram-reels";

  if (!category) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-extrabold text-3xl mb-4">Category Not Found</h1>
          <Link to="/" className="text-creative hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-mono uppercase tracking-widest">Back to Home</span>
            </Link>
            <p className="text-creative text-sm font-mono uppercase tracking-widest mb-4">Our Work</p>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter mb-4">
              {category.title}
            </h1>
            <p className="text-muted-foreground max-w-lg">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid or Brand Design Cards */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {isBrandDesign ? (
            /* ── Brand Design: styled image cards ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandDesignCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card rounded-xl overflow-hidden group cursor-default"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Decorative gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0
                        ? "from-creative/15 via-background to-data/5"
                        : i % 4 === 1
                          ? "from-data/15 via-background to-creative/5"
                          : i % 4 === 2
                            ? "from-creative/10 via-data/5 to-background"
                            : "from-data/10 via-creative/5 to-background"
                      }`}
                  />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    {/* Icon placeholder */}
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-creative/30 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground group-hover:text-creative transition-colors"
                      >
                        {i % 4 === 0 && (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                            <path d="M12 8v8" />
                          </>
                        )}
                        {i % 4 === 1 && (
                          <>
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M9 3v18" />
                            <path d="M3 9h18" />
                          </>
                        )}
                        {i % 4 === 2 && (
                          <>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                          </>
                        )}
                        {i % 4 === 3 && (
                          <>
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </>
                        )}
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-base mb-1 group-hover:text-creative transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                  </div>
                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-creative/30 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          ) : (
            /* ── Video cards grid ── */
            <div
              className={
                isReels
                  ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              {category.videos.map((video, i) => (
                <VideoCardItem key={video.id} video={video} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
