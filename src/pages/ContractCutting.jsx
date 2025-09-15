import Page from "./PageShell";
import { useLocation } from "react-router-dom";

export default function ContractCutting() {
  const isEN = useLocation().pathname.startsWith("/en");
  const hero = "/CONTENT.de.hero.image.jpg";
  return (
    <Page
      titleDE="Lohnabbund"
      titleEN="Contract Cutting"
      descriptionDE="CNC-Abbund als Dienstleistung – präzise & terminsicher."
      descriptionEN="CNC contract cutting as a service — precise and on time."
      heroImage={hero}
    >
      <p>{isEN ? "Send us your CAD/CAM files and we’ll deliver precisely cut elements."
               : "Senden Sie uns Ihre CAD/CAM-Daten – wir liefern präzise zugeschnittene Elemente."}</p>
    </Page>
  );
}