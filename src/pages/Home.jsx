import Page from "./PageShell";
import { useLocation, Link } from "react-router-dom";
import { copy } from "../i18n/copy";

export default function Home() {
  const isEN = useLocation().pathname.startsWith("/en");
  const t = copy[isEN ? "en" : "de"];
  const hero = isEN ? "/CONTENT.en.hero.image.jpg" : "/CONTENT.de.hero.image.jpg";

  return (
    <Page
      titleDE="Über Rottmüller"
      titleEN="About Rottmüller"
      descriptionDE="Premium Holzbau, Hallen, Dächer und Solar – von der Planung bis zur Montage."
      descriptionEN="Premium timber construction, halls, roofing and solar — from design to assembly."
      heroImage={hero}
    >
      <p>
        {isEN ? (
          <>We are a Bavaria-based timber construction company delivering design, prefabrication and on-site assembly for residential and industrial projects.</>
        ) : (
          <>Wir sind ein bayerisches Holzbauunternehmen für Planung, Vorfertigung und Montage – für Wohn- und Industriebauten.</>
        )}
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          { to: isEN?"/en/carpentry":"/holzbau", h: isEN?"Timber Construction":"Holzbau & Zimmerei" },
          { to: isEN?"/en/roof-solar":"/dach-solar", h: isEN?"Roofing & Solar":"Bedachungen & Solar" },
          { to: isEN?"/en/halls":"/hallen", h: isEN?"Industrial Halls":"Hallen- & Gewerbebau" },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="rounded-2xl border p-6 hover:shadow-lg transition block">
            <h3 className="font-semibold">{c.h}</h3>
            <p className="opacity-70 mt-2">{isEN ? "Learn more →" : "Mehr erfahren →"}</p>
          </Link>
        ))}
      </div>
    </Page>
  );
}