// src/sections/home/CoreServices.jsx
import { NavLink } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { Building2, Route, Zap, ArrowRight } from "lucide-react";
import { StaggerInGrid } from "../../components/motion/StaggerInGrid";

const services = [
  {
    id: "building-construction",
    icon: Building2,
    title: { ar: "إنشاءات المباني", en: "Building Construction" },
    desc: {
      ar: "إنشاء مبانٍ سكنية وإدارية ومؤسساتية وعامة، تشمل الأعمال الإنشائية والتشطيبات وإعادة التأهيل وحلول تسليم مفتاح.",
      en: "Construction of residential, administrative, institutional, and public buildings, including structural works, finishing, rehabilitation, and turnkey solutions.",
    },
  },
  {
    id: "roads-infrastructure",
    icon: Route,
    title: { ar: "الطرق والبنية التحتية", en: "Roads & Infrastructure Works" },
    desc: {
      ar: "تنفيذ وتأهيل الطرق، الأرصفة، أعمال الحفر والردم، ومشاريع البنية التحتية البلدية.",
      en: "Road construction, rehabilitation, pavements, sidewalks, earthworks, and municipal infrastructure projects.",
    },
  },
  {
    id: "electromechanical-works",
    icon: Zap,
    title: { ar: "الأعمال الكهروميكانيكية", en: "Electromechanical Works" },
    desc: {
      ar: "تمديدات كهربائية (أنظمة جهد منخفض)، أعمال السباكة، أنظمة التكييف HVAC، الفحص والتشغيل والصيانة.",
      en: "Electrical installations (LV systems), plumbing works, HVAC systems, testing, commissioning, and maintenance.",
    },
  },
];

export default function CoreServices({ scrollDir = "down" }) {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section id="services" className="py-12 sm:py-16" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className={`text-center ${isAr ? "sm:text-right" : "sm:text-left"}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isAr ? "خدماتنا الأساسية" : "Our Core Services"}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300/80">
            {isAr
              ? "خدمات تنفيذية متخصصة تغطي الإنشاءات والبنية التحتية والأعمال الكهروميكانيكية."
              : "Core capabilities spanning construction, infrastructure, and electromechanical works."}
          </p>
        </div>

        {/* Cards (Animated) */}
        <StaggerInGrid dir={scrollDir} className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                className="
                  group relative h-full rounded-2xl
                  border border-black/10 bg-white/70
                  dark:border-white/10 dark:bg-white/[0.03]
                  p-6 sm:p-7
                  shadow-[0_1px_0_rgba(15,23,42,0.06)]
                  dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                  transition-transform duration-300
                  hover:-translate-y-2
                "
              >
                {/* Glow border */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition duration-300
                    ring-1 ring-sky-400/60
                    shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_40px_rgba(56,189,248,0.12)]
                    dark:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_45px_rgba(56,189,248,0.18)]
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div
                    className="
                      h-12 w-12 rounded-xl grid place-items-center
                      bg-sky-500/12 border border-sky-500/20 text-sky-700
                      dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? s.title.ar : s.title.en}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300/85 line-clamp-4">
                    {isAr ? s.desc.ar : s.desc.en}
                  </p>

                  <NavLink
                    to={`/services/${s.id}`}
                    className="
                      mt-auto pt-6
                      inline-flex items-center gap-2 font-semibold transition
                      text-sky-700 hover:text-sky-600
                      dark:text-sky-300 dark:hover:text-sky-200
                    "
                  >
                    {isAr ? "اعرف المزيد" : "Learn More"}
                    <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </StaggerInGrid>

        {/* See All Services */}
        <div className="mt-10 text-center">
          <NavLink
            to="/services"
            className="
              inline-flex items-center gap-2 font-semibold transition
              text-emerald-700 hover:text-emerald-600
              dark:text-emerald-300 dark:hover:text-emerald-200
            "
          >
            {lang === "ar" ? "عرض كل الخدمات" : "See All Services"}
            <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
