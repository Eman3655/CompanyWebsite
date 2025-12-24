import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Globe2, ChevronDown, Menu, X } from "lucide-react";
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
              src="https://res.cloudinary.com/dptlhu0s0/image/upload/v1766167529/Screenshot_2025-12-19_185321_2_-fotor-bg-remover-202512192057_jxqsxy.png"
              alt="Logo"
              className="h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 object-cover"
            />
            <span className="text-white font-bold tracking-tight truncate">
              {lang === "ar" ? "شركة المشروعات الهندسية" : "Engineering Projects Company"}
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
                <Globe2 className="h-5 w-5" />
                <span className="text-sm font-semibold">
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
                    className={`w-full px-4 py-2 text-sm hover:bg-white/10 transition text-left ${
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
                    className={`w-full px-4 py-2 text-sm hover:bg-white/10 transition text-left ${
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
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition"
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
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition"
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

            <div className="my-6 h-px bg-white/10" />

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10 transition"
              >
                <Globe2 className="h-5 w-5" />
                <span className="font-semibold">
                  {lang === "ar" ? "English" : "العربية"}
                </span>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10 transition"
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




