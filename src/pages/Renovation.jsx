import Page from "./PageShell";
import { useLocation } from "react-router-dom";

export default function Renovation() {
  const isEN = useLocation().pathname.startsWith("/en");
  const hero = "/CONTENT.de.hero.image.jpg";
  return (
    <Page
      titleDE="Sanierung & Ökologie"
      titleEN="Renovation & Ecology"
      descriptionDE="Ökologische Sanierungen, Dämmung, Energieeffizienz."
      descriptionEN="Ecological retrofits, insulation, energy efficiency."
      heroImage={hero}
    >
      <p>{isEN ? "We modernize buildings sustainably and efficiently." : "Wir modernisieren Gebäude nachhaltig und effizient."}</p>
    </Page>
  );
}