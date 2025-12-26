import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import { useLang } from "../hooks/useLang";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  const [openLang, setOpenLang] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpenLang(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenLang(false);
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (openMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  const baseLink =
    "px-3 py-2 text-sm font-semibold transition-colors duration-200";
  const navLinkClass = ({ isActive }) =>
    `${baseLink} ${
      isActive
        ? "text-sky-300 underline underline-offset-8 decoration-sky-300/60"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 min-w-0">
            <img
              src="https://res.cloudinary.com/dptlhu0s0/image/upload/v1766769082/176676854673862412_puueym.png"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-white font-bold tracking-tight truncate">
              {lang === "ar"
                ? "شركة المشروعات الهندسية"
                : "Engineering Projects Company"}
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              {lang === "ar" ? "الرئيسية" : "Home"}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {lang === "ar" ? "من نحن" : "About Us"}
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              {lang === "ar" ? "الخدمات" : "Services"}
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              {lang === "ar" ? "المشاريع" : "Projects"}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {lang === "ar" ? "تواصل" : "Contact"}
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block" ref={menuRef}>
              <button
                type="button"
                onClick={() => setOpenLang((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 transition"
                aria-haspopup="menu"
                aria-expanded={openLang}
              >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>                <span className="text-sm font-semibold">
                  {lang.toUpperCase()}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    openLang ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openLang && (
                <div
                  className="absolute mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-black shadow-xl"
                  style={{ insetInlineEnd: 0 }}
                  role="menu"
                >
                  <button
                    className={`w-full px-4 py-2 text-sm hover:bg:white/10 transition text-left ${
                      lang === "ar" ? "text-sky-300" : "text-white/90"
                    }`}
                    onClick={() => {
                      setLang("ar");
                      setOpenLang(false);
                    }}
                    role="menuitem"
                  >
                    العربية
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-sm hover:bg:white/10 transition text-left ${
                      lang === "en" ? "text-sky-300" : "text-white/90"
                    }`}
                    onClick={() => {
                      setLang("en");
                      setOpenLang(false);
                    }}
                    role="menuitem"
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="hidden md:inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpenMobile(true)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border:white/15 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {openMobile && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur">
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <span className="text-white font-bold truncate">
              Engineering Projects Company
            </span>
            <button
              type="button"
              onClick={() => setOpenMobile(false)}
              className="inline-flex items-center justify-center rounded-xl border border:white/15 bg-white/5 p-2 text-white hover:bg:white/10 transition"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6">
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={() => setOpenMobile(false)}
              >
                {lang === "ar" ? "الرئيسية" : "Home"}
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setOpenMobile(false)}
              >
                {lang === "ar" ? "من نحن" : "About"}
              </NavLink>

              <NavLink
                to="/services"
                className={navLinkClass}
                onClick={() => setOpenMobile(false)}
              >
                {lang === "ar" ? "الخدمات" : "Services"}
              </NavLink>

              <NavLink
                to="/projects"
                className={navLinkClass}
                onClick={() => setOpenMobile(false)}
              >
                {lang === "ar" ? "المشاريع" : "Projects"}
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setOpenMobile(false)}
              >
                {lang === "ar" ? "تواصل" : "Contact"}
              </NavLink>
            </nav>

            <div className="my-6 h-px bg:white/10" />

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setLang(lang === "ar" ? "en" : "ar");
                  setOpenMobile(false); 
                }}
                className="flex items-center gap-3 rounded-xl border border:white/15 bg:white/5 px-4 py-3 text-white/90 hover:bg:white/10 transition"
              >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>                <span className="font-semibold">
                  {lang === "ar" ? "English" : "العربية"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setOpenMobile(false);    
                }}
                className="flex items-center gap-3 rounded-xl border border:white/15 bg:white/5 px-4 py-3 text-white/90 hover:bg:white/10 transition"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="font-semibold">
                  {theme === "dark"
                    ? lang === "ar"
                      ? "الوضع الفاتح"
                      : "Light Mode"
                    : lang === "ar"
                    ? "الوضع الداكن"
                    : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
