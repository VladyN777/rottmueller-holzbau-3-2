import Page from "./PageShell";
import { useLocation } from "react-router-dom";

export default function Carpentry() {
  const isEN = useLocation().pathname.startsWith("/en");
  const hero = "/CONTENT.de.hero.image.jpg";
  return (
    <Page
      titleDE="Holzbau & Zimmerei"
      titleEN="Timber Construction"
      descriptionDE="Tragwerke aus Holz, Elementbau, Abbund, Montage."
      descriptionEN="Timber structures, element building, cutting and assembly."
      heroImage={hero}
    >
      <ul className="grid md:grid-cols-2 gap-4">
        {(isEN ? [
          "Design & engineering (Eurocode/DIN)",
          "Prefabricated wall/roof/floor elements",
          "CNC cutting (Hundegger)",
          "On-site assembly by certified teams"
        ] : [
          "Planung & Statik (Eurocode/DIN)",
          "Vorfertigung von Wand-/Dach-/Deckenelementen",
          "CNC-Abbund (Hundegger)",
          "Montage durch zertifizierte Teams"
        ]).map((li) => <li key={li} className="list-disc ml-6">{li}</li>)}
      </ul>
    </Page>
  );
}
