import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import {
  ArrowUp, Phone, Mail, MapPin,
  Linkedin, Facebook, Twitter, Instagram,
} from "lucide-react";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export default function SiteFooter() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const t = {
    tagline: { ar: "شركة المشروعات الهندسية", en: "Engineering Projects Company" },
    cols: {
      services: { ar: "الخدمات", en: "Services" },
      company:  { ar: "الشركة",   en: "Company" },
      touch:    { ar: "تواصل معنا", en: "Get in Touch" },
    },
    links: {
      buildings: {
        ar: "إنشاء المباني (درجة II)",
        en: "Building Construction (Grade II)",
        to: "/services#buildings",
      },
      roads: {
        ar: "الطرق والبنية التحتية (درجة II)",
        en: "Roads & Infrastructure (Grade II)",
        to: "/services#roads",
      },
      mep: {
        ar: "الأعمال الكهروميكانيكية (درجة III)",
        en: "Electromechanical Works (Grade III)",
        to: "/services#mep",
      },
      water: {
        ar: "أعمال المياه والصرف الصحي (درجة V)",
        en: "Water & Sewerage Works (Grade V)",
        to: "/services#water",
      },
      supply: {
        ar: "التجارة العامة والتوريد",
        en: "General Trading & Supply",
        to: "/services#supply",
      },

      about:     { ar: "من نحن",           en: "About Us",          to: "/about" },
      portfolio: { ar: "معرض المشاريع",    en: "Projects Portfolio", to: "/projects" },
      services:      { ar: "خدماتنا",   en: "Services",    to: "/services" },
      contact:   { ar: "اتصل بنا",         en: "Contact",            to: "/contact" },
    },
    meta: {
      phone:    { ar: "هاتف",   en: "Phone" },
      email:    { ar: "البريد", en: "Email" },
      location: { ar: "الموقع", en: "Location" },
    },
    bottom: {
      rights:  { ar: "جميع الحقوق محفوظة.", en: "All rights reserved." },
      privacy: { ar: "سياسة الخصوصية",      en: "Privacy Policy",    to: "/privacy" },
      terms:   { ar: "شروط الخدمة",         en: "Terms of Service",  to: "/terms" },
      cookies: { ar: "سياسة الكوكيز",        en: "Cookie Policy",     to: "/cookies" },
    },
  };

  const contact = {
    telfax: "+970 8 2072330",
    mobile: "+970 599 401196",
    email: "enganasrekeb@gmail.com",
    address: isAr ? "خانيونس – فلسطين" : "Khan Younis – Palestine",
  };

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="
        relative overflow-hidden
        border-t border-white/10 dark:border-white/10
        bg-slate-950 text-white
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <div className="text-2xl font-extrabold tracking-widest text-sky-400">
                {isAr ? t.tagline.ar : t.tagline.en}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl
                             border border-white/10 bg-white/[0.03]
                             hover:bg-white/[0.06] hover:border-white/20 transition"
                >
                  <Icon className="h-5 w-5 text-white/80 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-white">
                {isAr ? t.cols.services.ar : t.cols.services.en}
              </h4>
              <span className="h-1 w-10 rounded-full bg-sky-500/80" />
            </div>

            <nav className="grid gap-3 text-sm">
              {[
                t.links.buildings,
                t.links.roads,
                t.links.mep,
                t.links.water,
                t.links.supply,
              ].map((l) => (
                <NavLink key={l.to} to={l.to} className="text-white/70 hover:text-white transition">
                  {isAr ? l.ar : l.en}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-white">
                {isAr ? t.cols.company.ar : t.cols.company.en}
              </h4>
              <span className="h-1 w-10 rounded-full bg-sky-500/80" />
            </div>

            <nav className="grid gap-3 text-sm">
              {[t.links.about, t.links.portfolio, t.links.services, t.links.contact].map((l) => (
                <NavLink key={l.to} to={l.to} className="text-white/70 hover:text-white transition">
                  {isAr ? l.ar : l.en}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="inline-flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-white">
                {isAr ? t.cols.touch.ar : t.cols.touch.en}
              </h4>
              <span className="h-1 w-10 rounded-full bg-sky-500/80" />
            </div>

            <div className="grid gap-5">
              <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-sky-500/20 border border-sky-400/20 text-sky-200">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="text-xs font-semibold tracking-wider text-white/60">
                    {isAr ? "هاتف/فاكس" : "Tel / Fax"}
                  </div>
                  <a className="mt-1 block font-semibold text-white/90 hover:text-white break-words">
                    {contact.telfax}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-sky-500/20 border border-sky-400/20 text-sky-200">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="text-xs font-semibold tracking-wider text-white/60">
                    {isAr ? "جوال" : "Mobile"}
                  </div>
                  <a className="mt-1 block font-semibold text-white/90 hover:text-white break-words">
                    {contact.mobile}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-sky-500/20 border border-sky-400/20 text-sky-200">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="text-xs font-semibold tracking-wider text-white/60">
                    {isAr ? t.meta.email.ar : t.meta.email.en}
                  </div>
                  <a className="mt-1 block font-semibold text-white/90 hover:text-white break-words">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-sky-500/20 border border-sky-400/20 text-sky-200">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="text-xs font-semibold tracking-wider text-white/60">
                    {isAr ? t.meta.location.ar : t.meta.location.en}
                  </div>
                  <div className="mt-1 font-semibold text-white/90 leading-6 break-words">
                    {contact.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} {isAr ? t.tagline.ar : t.tagline.en}. {isAr ? t.bottom.rights.ar : t.bottom.rights.en}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <NavLink  className="text-white/70 hover:text-white transition">
                {isAr ? t.bottom.privacy.ar : t.bottom.privacy.en}
              </NavLink>
              <NavLink  className="text-white/70 hover:text-white transition">
                {isAr ? t.bottom.terms.ar : t.bottom.terms.en}
              </NavLink>
              <NavLink  className="text-white/70 hover:text-white transition">
                {isAr ? t.bottom.cookies.ar : t.bottom.cookies.en}
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollTop}
        className={cx(
          "fixed bottom-6 z-40 rounded-2xl p-4",
          isAr ? "left-6" : "right-6",
          "bg-sky-600/90 hover:bg-sky-600 text-white shadow-lg transition",
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        )}
        aria-label={isAr ? "العودة للأعلى" : "Back to top"}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}
