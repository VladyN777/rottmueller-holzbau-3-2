import Page from "./PageShell";
import { useLocation } from "react-router-dom";

export default function Halls() {
  const isEN = useLocation().pathname.startsWith("/en");
  const hero = "/CONTENT.de.hero.image.jpg";
  return (
    <Page
      titleDE="Hallen- & Gewerbebau"
      titleEN="Industrial Halls"
      descriptionDE="Holz- und Hybridhallen – Planung bis Montage."
      descriptionEN="Timber & hybrid halls — from design to assembly."
      heroImage={hero}
    >
      <p>{isEN ? "Industrial and commercial timber halls, optimized for speed and cost."
               : "Gewerbliche Hallen in Holzbauweise – schnell und wirtschaftlich."}</p>
    </Page>
  );
}