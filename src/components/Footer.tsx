const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-extrabold text-sm tracking-tighter">
          REACH UP<span className="text-creative">.</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Reach Up Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;