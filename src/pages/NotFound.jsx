import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const isEN = useLocation().pathname.startsWith("/en");
  return (
    <main className="min-h-[60vh] pt-24 grid place-items-center text-center">
      <div>
        <h1 className="text-5xl font-bold mb-3">404</h1>
        <p className="opacity-70 mb-6">{isEN ? "Page not found" : "Seite nicht gefunden"}</p>
        <Link to={isEN ? "/en" : "/"} className="px-4 py-2 rounded-xl border">{isEN ? "Back home" : "Zur Startseite"}</Link>
      </div>
    </main>
  );
}