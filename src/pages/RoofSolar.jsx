import Page from "./PageShell";
import { useLocation } from "react-router-dom";

export default function RoofSolar() {
  const isEN = useLocation().pathname.startsWith("/en");
  const hero = "/CONTENT.de.hero.image.jpg";
  return (
    <Page
      titleDE="Bedachungen & Solarenergie"
      titleEN="Roofing & Solar Energy"
      descriptionDE="Dächer, Dachsanierungen und Photovoltaiklösungen."
      descriptionEN="Roofing, roof renovation and photovoltaic solutions."
      heroImage={hero}
    >
      <p>{isEN ? "Complete roofing and PV integration for new builds and retrofits."
               : "Komplette Dacheindeckung und PV-Integration für Neubau und Sanierung."}</p>
    </Page>
  );
}