import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useLang } from "../hooks/useLang";
import { Reveal } from "../components/motion/Reveal";


const allProjects = [
  {
    id: "egh-infection-control-2021",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "مبنى مكافحة العدوى – مستشفى غزة الأوروبي",
      en: "Infection Control Building – European Gaza Hospital",
    },
    desc: {
      ar: "تنفيذ مبنى/توسعة لمكافحة العدوى ضمن مرافق مستشفى غزة الأوروبي.",
      en: "Delivery of an infection control building within European Gaza Hospital facilities.",
    },
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "mawasi-phc-clinic-2024",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "عيادة رعاية صحية أولية – مواصي خان يونس",
      en: "Primary Healthcare Clinic – Mawasi Khan Younis",
    },
    desc: {
      ar: "تنفيذ/إنشاء عيادة رعاية صحية أولية لخدمة منطقة المواصي – خان يونس.",
      en: "Delivery of a primary healthcare clinic serving Mawasi Khan Younis.",
    },
    location: { ar: "خان يونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2024",
    image:
      "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766252092/%D9%86%D8%A7%D8%B7%D8%AD%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%AD%D8%A7%D8%A8_wywbyx.png",
  },
  {
    id: "yassin-nasser-burns-2025",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "تأهيل قسم الحروق – مستشفى ياسين ناصر",
      en: "Burns Department Rehabilitation – Yassin Nasser Hospital",
    },
    desc: {
      ar: "أعمال تأهيل لقسم الحروق ضمن مستشفى ياسين ناصر بما يتوافق مع متطلبات العمل الطبي.",
      en: "Rehabilitation works for the Burns Department within Yassin Nasser Hospital.",
    },
    location: { ar: "خان يونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2025",
    image:
      "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679900/photo_5938552633830345663_y_qnnvfi.jpg",
  },
  {
    id: "salah-al-din-road-rafah-2012",
    serviceKey: "roads",
    category: { ar: "طرق وبنية تحتية", en: "Roads & Infrastructure" },
    title: {
      ar: "تأهيل شارع صلاح الدين – رفح",
      en: "Rehabilitation of Salah Al-Din Road – Rafah",
    },
    desc: {
      ar: "أعمال تأهيل شارع رئيسي تشمل تحسين البنية والخدمات المرتبطة بالطريق ضمن رفح.",
      en: "Rehabilitation works for a major road corridor and related infrastructure in Rafah.",
    },
    location: { ar: "رفح – فلسطين", en: "Rafah, Palestine" },
    year: "2012",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=70",
  },

  {
    id: "concrete-roof-workshop-cafeteria-2007",
    serviceKey: "buildings",
    category: { ar: "مبانٍ وإنشاءات", en: "Building Construction" },
    title: {
      ar: "إنشاء سقف خرسانة – ورشة وكافتيريا",
      en: "Construction of Concrete Roof – Workshop & Cafeteria",
    },
    desc: {
      ar: "أعمال إنشاء/تنفيذ لسقف خرسانة لورشة وكافتيريا ضمن مشروع إنشائي متكامل.",
      en: "Construction works for a concrete roof serving a workshop and cafeteria facility.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2007",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "khan-younis-central-market-2011",
    serviceKey: "buildings",
    category: { ar: "مبانٍ وإنشاءات", en: "Building Construction" },
    title: {
      ar: "تأهيل سوق خان يونس المركزي",
      en: "Rehabilitation of Khan Younis Central Market",
    },
    desc: {
      ar: "أعمال إعادة تأهيل وتطوير لمرافق السوق المركزي بما يشمل تحسينات إنشائية وخدمية.",
      en: "Rehabilitation and upgrades of the central market facilities including structural and service improvements.",
    },
    location: { ar: "خان يونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2011",
    image:
      "https://images.unsplash.com/photo-1520962917960-0f7f8a7f9e5b?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "al-madaris-street-khuzaa-2011",
    serviceKey: "roads",
    category: { ar: "طرق وبنية تحتية", en: "Roads & Infrastructure" },
    title: {
      ar: "تطوير شارع المدارس – خزاعة",
      en: "Development of Al-Madaris Street – Khuza’a",
    },
    desc: {
      ar: "أعمال تطوير شارع تشمل طبقات رصف وتحسينات للبنية التحتية والخدمات المرتبطة.",
      en: "Street development works including pavements and supporting municipal infrastructure improvements.",
    },
    location: { ar: "خزاعة – فلسطين", en: "Khuza’a, Palestine" },
    year: "2011",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "auto-electronics-workshop-2012",
    serviceKey: "workshops",
    category: { ar: "ورش وأعمال صناعية", en: "Workshops & Industrial" },
    title: {
      ar: "تأهيل ورشة إلكترونيات سيارات",
      en: "Rehabilitation of Automotive Electronics Workshop",
    },
    desc: {
      ar: "أعمال تأهيل وتجهيز لورشة فنية تشمل تحسينات معمارية وخدمية لتشغيل آمن وفعّال.",
      en: "Rehabilitation and fit-out of a technical workshop with architectural and service upgrades for safe operation.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2012",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "eye-hospital-2013",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "تأهيل مستشفى العيون",
      en: "Rehabilitation of Eye Hospital",
    },
    desc: {
      ar: "أعمال تأهيل لمرفق صحي تخصصي تشمل تحسينات وظيفية وفق متطلبات الاستخدام الطبي.",
      en: "Rehabilitation works for a specialized healthcare facility aligned with operational medical requirements.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2013",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "al-durra-hospital-2014",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "تأهيل مستشفى الدرة",
      en: "Rehabilitation of Al-Durra Hospital",
    },
    desc: {
      ar: "تنفيذ أعمال تأهيل وتطوير لمرفق المستشفى بما يعزز كفاءة التشغيل والخدمات.",
      en: "Hospital rehabilitation and upgrade works to enhance operational efficiency and service delivery.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2014",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "al-sourani-clinic-2017",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "إنشاء وتأهيل عيادة السوراني",
      en: "Construction & Rehabilitation – Al-Sourani Clinic",
    },
    desc: {
      ar: "إنشاء/تأهيل عيادة صحية تشمل أعمال تطوير داخلية وخدمية لدعم التشغيل الطبي.",
      en: "Clinic construction and rehabilitation works including internal upgrades and services supporting healthcare operations.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2017",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "al-aqsa-emergency-dept-2019",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "تأهيل قسم الطوارئ – مستشفى الأقصى",
      en: "Emergency Department Rehabilitation – Al-Aqsa Hospital",
    },
    desc: {
      ar: "أعمال تأهيل لقسم الطوارئ تشمل تحسينات وظيفية ومعيارية لتلبية احتياجات الخدمة.",
      en: "Emergency department rehabilitation with functional and standards-aligned upgrades to meet service demands.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2019",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=2000&q=70",
  },
];
function cx(...a) {
  return a.filter(Boolean).join(" ");
}

const filterTabs = [
  { key: "all", label: { ar: "الكل", en: "All" } },
  { key: "healthcare", label: { ar: "منشآت صحية", en: "Healthcare" } },
  { key: "roads", label: { ar: "طرق وبنية", en: "Roads" } },
  { key: "buildings", label: { ar: "مبانٍ", en: "Buildings" } },
  { key: "workshops", label: { ar: "ورش", en: "Workshops" } },
];

function ProjectCard({ p, lang, isAr, onOpen }) {
  return (
    <Reveal>
      <article
        className={cx(
          "group relative rounded-2xl overflow-visible",
          "border border-black/10 bg-white/70",
          "dark:border-white/10 dark:bg-slate-950/60",
          "backdrop-blur-[2px]",
          "transition-transform duration-300 hover:-translate-y-2"
        )}
      >
        <div
          className={cx(
            "pointer-events-none absolute -inset-0.5 rounded-2xl",
            "opacity-0 group-hover:opacity-100 transition duration-300 z-30",
            "ring-1 ring-sky-400/60",
            "shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_40px_rgba(56,189,248,0.12)]",
            "dark:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_45px_rgba(56,189,248,0.18)]"
          )}
        />

        <div className="relative z-10 overflow-hidden rounded-2xl">
          <div className="relative h-48 sm:h-52">
            <img
              src={p.image}
              alt={p.title[lang]}
              className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/10 to-transparent dark:from-slate-950/95 dark:via-slate-950/25" />

            <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"}`}>
              <span
                className={cx(
                  "inline-flex rounded-full px-3 py-1 text-xs font-medium",
                  "bg-white/70 text-slate-800 ring-1 ring-black/10",
                  "dark:bg-white/10 dark:text-white/80 dark:ring-white/15"
                )}
              >
                {p.category[lang]}
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex min-h-[200px] sm:min-h-[210px] flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white line-clamp-2">
                {p.title[lang]}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70 line-clamp-3">
                {p.desc[lang]}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {p.location[lang]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {p.year}
                </span>
              </div>

              <div className="mt-auto pt-5 flex items-center justify-between">
                <button
                  onClick={onOpen}
                  className={cx(
                    "inline-flex items-center gap-2 text-sm font-medium transition",
                    "text-sky-700 hover:text-sky-600",
                    "dark:text-sky-300 dark:hover:text-sky-200"
                  )}
                >
                  {isAr ? "اعرف المزيد" : "Learn More"}
                  <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </button>

                <span
                  className={cx(
                    "h-px flex-1 hidden sm:block",
                    "bg-black/10 dark:bg-white/10",
                    isAr ? "mr-4" : "ml-4"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const isAr = lang === "ar";

  const [tab, setTab] = useState("all");

  const list = useMemo(() => {
    if (tab === "all") return allProjects;
    return allProjects.filter((p) => p.serviceKey === tab);
  }, [tab]);

  return (
    <section className="relative py-12 sm:py-16" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div
            className={cx(
              "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
              isAr ? "sm:text-right" : "sm:text-left"
            )}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {isAr ? "المشاريع" : "Projects"}
              </h1>
              <p className="mt-2 text-sm max-w-2xl text-slate-600 dark:text-white/70">
                {isAr
                  ? "تصفّح مجموعة من المشاريع المنفذة في المنشآت الصحية والطرق والبنية التحتية والمباني."
                  : "Browse delivered projects across healthcare, roads & infrastructure, and building works."}
              </p>
            </div>

            <NavLink
              to="/contact"
              className={cx(
                "inline-flex w-fit items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition",
                "border-black/10 bg-black/[0.02] text-slate-800 hover:bg-black/[0.04]",
                "dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
              )}
            >
              {isAr ? "تواصل معنا" : "Get in Touch"}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </NavLink>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {filterTabs.map((t) => {
              const active = tab === t.key;

              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={cx(
                    "px-4 py-2 rounded-full text-sm font-semibold border transition",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
                    active
                      ? cx(
                          "bg-sky-600 text-white border-sky-500/80",
                          "shadow-[0_10px_30px_rgba(2,132,199,0.25)]",
                          "dark:bg-sky-500/25 dark:text-sky-100 dark:border-sky-400/60",
                          "dark:shadow-[0_10px_30px_rgba(56,189,248,0.22)]"
                        )
                      : cx(
                          "border-black/10 bg-white/70 text-slate-700 hover:bg-black/[0.03]",
                          "dark:border-white/20 dark:bg-white/10 dark:text-white/85 dark:hover:bg-white/15"
                        )
                  )}
                >
                  {t.label[lang]}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-7 grid gap-5 sm:gap-6 md:grid-cols-2">
          {list.map((p) => (
            <ProjectCard
              key={p.id}
              p={p}
              lang={lang}
              isAr={isAr}
              onOpen={() => navigate(`/projects/${p.id}`)}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cx(
                "inline-flex items-center gap-2 font-semibold transition",
                "text-emerald-700 hover:text-emerald-600",
                "dark:text-emerald-300 dark:hover:text-emerald-200"
              )}
            >
              {isAr ? "العودة للأعلى" : "Back to top"}
              <ArrowRight className={cx("h-4 w-4 -rotate-90", isAr && "rotate-90")} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
