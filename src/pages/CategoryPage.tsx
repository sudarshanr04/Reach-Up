import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface VideoCard {
  id: number;
  title: string;
  vimeoId: string;
  youtubeUrl: string;
}

const categoryData: Record<string, { title: string; description: string; videos: VideoCard[] }> = {
  "social-media-campaigns": {
    title: "Social Media Campaigns",
    description: "High-impact social media campaigns that drive engagement and growth.",
    videos: [
      { id: 1, title: "Campaign Reel 1", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 2, title: "Campaign Reel 2", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 3, title: "Campaign Reel 3", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 4, title: "Campaign Reel 4", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 5, title: "Campaign Reel 5", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 6, title: "Campaign Reel 6", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
    ],
  },
  "instagram-reels": {
    title: "Instagram Reels",
    description: "Scroll-stopping Instagram Reels designed to go viral.",
    videos: [
      { id: 1, title: "Reel 1", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 2, title: "Reel 2", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 3, title: "Reel 3", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 4, title: "Reel 4", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 5, title: "Reel 5", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 6, title: "Reel 6", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
    ],
  },
  "motion-graphics": {
    title: "Motion Graphics",
    description: "Eye-catching motion graphics and animated content.",
    videos: [
      { id: 1, title: "Motion 1", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 2, title: "Motion 2", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 3, title: "Motion 3", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 4, title: "Motion 4", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 5, title: "Motion 5", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 6, title: "Motion 6", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
    ],
  },
  "brand-design": {
    title: "Brand Design",
    description: "Premium brand identity designs that make an impact.",
    videos: [
      { id: 1, title: "Brand 1", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 2, title: "Brand 2", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 3, title: "Brand 3", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 4, title: "Brand 4", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 5, title: "Brand 5", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
      { id: 6, title: "Brand 6", vimeoId: "placeholder", youtubeUrl: "https://youtube.com" },
    ],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

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

      {/* Video Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {category.videos.map((video, i) => (
              <motion.a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "9/16" }}
              >
                {/* Placeholder background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-creative/20 via-background to-data/10' : 'from-data/20 via-background to-creative/10'}`} />
                
                {/* Vimeo embed placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 group-hover:bg-creative/20 transition-all duration-300">
                    <Play size={20} className="text-muted-foreground group-hover:text-creative transition-colors ml-0.5" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-xs font-display font-semibold truncate">{video.title}</p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-creative/30 transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
