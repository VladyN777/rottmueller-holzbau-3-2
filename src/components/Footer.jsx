import { useLocation, Link } from "react-router-dom";
import { copy } from "../i18n/copy";

export default function Footer() {
  const isEN = useLocation().pathname.startsWith("/en");
  const t = copy[isEN ? "en" : "de"].footer;
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="opacity-70">{t.rights}</p>
        <nav className="flex items-center gap-4 opacity-80">
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
          <Link to={isEN ? "/en/privacy.html" : "/datenschutz.html"} className="hidden">Privacy</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
      </div>
    </footer>
  );
}