import { motion } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import { useLocation } from "react-router-dom";
import { copy } from "../i18n/copy";

const fade = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } };

export default function Page({ titleDE, titleEN, descriptionDE, descriptionEN, heroImage, children }) {
  const isEN = useLocation().pathname.startsWith("/en");
  const title = isEN ? titleEN : titleDE;
  const description = isEN ? descriptionEN : descriptionDE;
  return (
    <main className="pt-20">
      <SEOHelmet title={`${title} — Rottmüller Holzbau`} description={description} />
      <section className="relative">
        <img src={heroImage} alt="" className="w-full h-[38vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h1 {...fade} className="text-3xl md:text-5xl font-bold text-white drop-shadow">
              {title}
            </motion.h1>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <motion.div {...fade} transition={{ delay: 0.05 }} className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </motion.div>
      </section>
    </main>
  );
}