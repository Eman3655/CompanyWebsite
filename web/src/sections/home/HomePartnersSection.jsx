// src/sections/HomePartnersSection.jsx
import React from "react";
import { useLang } from "../../hooks/useLang";
import { Reveal } from "../../components/motion/Reveal";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

const donors = [
  { key: "icrc",       name: "ICRC",                      logo: "/logos/icrc.svg" },
  { key: "undp",       name: "UNDP",                      logo: "/logos/undp.svg" },
  { key: "kfw",        name: "KfW",                       logo: "/logos/kfw.svg" },
  { key: "islamic",    name: "Islamic Relief",            logo: "/logos/islamic-relief.svg" },
  { key: "emergency",  name: "EMERGENCY",                 logo: "/logos/emergency-medical-technician.png" },
  { key: "interburns", name: "INTERBURNS",                logo: "/logos/mvwrzj1m.png" },
];

const clients = [
  { key: "moh",       name: "Ministry of Health",          logo: "/logos/images.jpg" },
  { key: "mpw",       name: "Ministry of Public Works",    logo: "/logos/Palestine_0.jpg" },
  { key: "ucas",      name: "UCAS",                        logo: "/logos/ucas-logo.png" },
  { key: "kyn-mun",   name: "Khan Younis Municipality",    logo: "/logos/images.png" },
  { key: "khuzaa-mun",name: "Khuza'a Municipality",        logo: "/logos/images (1).png" },
];

function LogoCard({ item }) {
  return (
    <div
      className="
        group relative rounded-2xl

        /* Light mode */
        border border-slate-200/70 
        bg-white/95 
        shadow-[0_14px_40px_rgba(15,23,42,0.06)]

        /* Dark mode - زجاج غامق ناعم */
        dark:border-white/10 
        dark:bg-white/[0.02]
        dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]

        flex items-center justify-center
        px-4 py-3 sm:px-5 sm:py-4
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      <div
        className="
          pointer-events-none absolute -inset-0.5 rounded-2xl
          opacity-0 group-hover:opacity-100 transition duration-300
          ring-1 ring-sky-400/60
          shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_0_32px_rgba(56,189,248,0.15)]
          dark:shadow-[0_0_0_1px_rgba(56,189,248,0.28),0_0_36px_rgba(56,189,248,0.16)]
        "
      />

      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <img
          src={item.logo}
          alt={item.name}
          className="h-9 sm:h-10 object-contain"
          loading="lazy"
        />
        <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-300 text-center">
          {item.name}
        </span>
      </div>
    </div>
  );
}

export default function HomePartnersSection() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const heading = isAr ? "جهات عملنا معها" : "Organisations We Worked With";
  const subHeading = isAr
    ? "شركاء دوليون وجهات حكومية ومحلية نفّذت معهم الشركة مشاريع في الإنشاءات والبنية التحتية والمنشآت الصحية."
    : "International donors and local public clients that the company has delivered construction, infrastructure, and healthcare projects with.";

  const donorsTitle = isAr
    ? "جهات مانحة ومنظمات دولية"
    : "Donors & International Agencies";
  const clientsTitle = isAr
    ? "جهات حكومية ومؤسسات محلية"
    : "Public & Local Clients";

  return (
    <section
      className="
        py-16 
        bg-slate-50 
        dark:bg-slate-950
      "
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {heading}
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-slate-600 dark:text-slate-300/80">
              {subHeading}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8">
            <div
              className={cx(
                "mb-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-300",
                isAr ? "text-right" : "text-left"
              )}
            >
              {donorsTitle}
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {donors.map((d) => (
                <LogoCard key={d.key} item={d} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <div
              className={cx(
                "mb-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-300",
                isAr ? "text-right" : "text-left"
              )}
            >
              {clientsTitle}
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((c) => (
                <LogoCard key={c.key} item={c} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}