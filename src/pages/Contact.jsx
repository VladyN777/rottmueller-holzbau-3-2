import Page from "./PageShell";
import { useLocation } from "react-router-dom";
import { copy } from "../i18n/copy";

export default function Contact() {
  const isEN = useLocation().pathname.startsWith("/en");
  const t = copy[isEN ? "en" : "de"].contact;
  const hero = "/CONTENT.de.hero.image.jpg";

  return (
    <Page
      titleDE="Kontakt"
      titleEN="Contact"
      descriptionDE="Projektanfrage und Beratung."
      descriptionEN="Project inquiry and consulting."
      heroImage={hero}
    >
      <p className="opacity-80">{t.subtitle}</p>
      <form className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl" method="POST" action="mailto:info@example.com">
        <input required name="name" placeholder={t.name} className="rounded-xl border px-4 py-3 bg-transparent" />
        <input required type="email" name="email" placeholder={t.email} className="rounded-xl border px-4 py-3 bg-transparent" />
        <input name="phone" placeholder={t.phone} className="rounded-xl border px-4 py-3 bg-transparent md:col-span-2" />
        <textarea required name="message" placeholder={t.message} rows="6" className="rounded-xl border px-4 py-3 bg-transparent md:col-span-2" />
        <button className="md:col-span-2 px-5 py-3 rounded-xl border hover:shadow-lg transition font-medium">{t.send}</button>
      </form>
      <p className="text-xs mt-3 opacity-60">Replace <code>mailto:info@example.com</code> in <code>src/pages/Contact.jsx</code> with your real email or a form endpoint.</p>
    </Page>
  );
}