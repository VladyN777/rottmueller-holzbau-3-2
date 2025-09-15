import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { copy } from "../i18n/copy";

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const isEN = location.pathname.startsWith("/en");
  const langKey = isEN ? "en" : "de";
  const t = copy[langKey].nav;

  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? (localStorage.getItem("theme") || "light") : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const pathMap = {
    "/": "/en",
    "/ueber": "/en",
    "/holzbau": "/en/carpentry",
    "/dach-solar": "/en/roof-solar",
    "/sanierung": "/en/renovation",
    "/hallen": "/en/halls",
    "/lohnabbund": "/en/contract-cutting",
    "/kontakt": "/en/contact",
  };

  const enMap = Object.fromEntries(Object.entries(pathMap).map(([de,en]) => [en, de]));

  const toggleLangHref = () => {
    const current = location.pathname;
    if (isEN) return enMap[current] || "/";
    return pathMap[current] || "/en";
  };

  const navItems = [
    { to: isEN ? "/en" : "/", label: t.home },
    { to: isEN ? "/en/carpentry" : "/holzbau", label: t.carpentry },
    { to: isEN ? "/en/roof-solar" : "/dach-solar", label: t.roof },
    { to: isEN ? "/en/renovation" : "/sanierung", label: t.reno },
    { to: isEN ? "/en/halls" : "/hallen", label: t.halls },
    { to: isEN ? "/en/contract-cutting" : "/lohnabbund", label: t.cutting },
    { to: isEN ? "/en/contact" : "/kontakt", label: t.contact, primary: true },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between gap-3">
          <Link to={isEN ? "/en" : "/"} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl border border-black/20 dark:border-white/30 grid place-items-center" aria-hidden>
              <span className="font-bold" style={{color:"#008000"}}>R</span>
            </div>
            <span className="font-semibold tracking-tight">ROTTMÜLLER</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive}) =>
                  classNames(
                    "text-sm font-medium hover:opacity-80 transition",
                    isActive ? "underline underline-offset-4" : "",
                    item.primary ? "px-3 py-1.5 rounded-xl border" : ""
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xs px-2 py-1 rounded-lg border hover:opacity-80"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link
              to={toggleLangHref()}
              className="text-xs px-2 py-1 rounded-lg border hover:opacity-80"
              aria-label="Toggle language"
            >
              {isEN ? "DE" : "EN"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}