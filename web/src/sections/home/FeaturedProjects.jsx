// src/sections/home/FeaturedProjects.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useLang } from "../../hooks/useLang";
import { StaggerInGrid } from "../../components/motion/StaggerInGrid";

const featured = [
  {
    id: "egh-infection-control-2021",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "مبنى مكافحة العدوى – مستشفى غزة الأوروبي",
      en: "Infection Control Building – European Gaza Hospital",
    },
    desc: {
      ar: "تنفيذ مبنى/توسعة لمكافحة العدوى ضمن مرافق مستشفى غزة الأوروبي.",
      en: "Delivery of an infection control building within European Gaza Hospital facilities.",
    },
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "mawasi-phc-clinic-2024",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "عيادة رعاية صحية أولية – مواصي خانيونس",
      en: "Primary Healthcare Clinic – Mawasi Khan Younis",
    },
    desc: {
      ar: "تنفيذ/إنشاء عيادة رعاية صحية أولية لخدمة منطقة المواصي – خانيونس.",
      en: "Delivery of a primary healthcare clinic serving Mawasi Khan Younis.",
    },
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2024",
    image:
      "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766252092/%D9%86%D8%A7%D8%B7%D8%AD%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%AD%D8%A7%D8%A8_wywbyx.png",
  },
  {
    id: "yassin-nasser-burns-2025",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: {
      ar: "تأهيل قسم الحروق – مستشفى ياسين ناصر",
      en: "Burns Department Rehabilitation – Yassin Nasser Hospital",
    },
    desc: {
      ar: "أعمال تأهيل لقسم الحروق ضمن مستشفى ياسين ناصر بما يتوافق مع متطلبات العمل الطبي.",
      en: "Rehabilitation works for the Burns Department within Yassin Nasser Hospital.",
    },
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2000&q=70",
  },
  {
    id: "salah-al-din-road-rafah-2012",
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
];

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export default function FeaturedProjects({ scrollDir = "down" }) {
  const navigate = useNavigate();
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cx(
            "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
            isAr ? "sm:text-right" : "sm:text-left"
          )}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              {isAr ? "مشاريع مختارة" : "Featured Projects"}
            </h2>
            <p className="mt-2 text-sm max-w-2xl text-slate-600 dark:text-white/70">
              {isAr
                ? "نماذج من مشاريعنا المنفذة في المنشآت الصحية وأعمال الطرق والبنية التحتية."
                : "A selection of real projects delivered across healthcare facilities and roads & infrastructure."}
            </p>
          </div>
        </div>

        <StaggerInGrid
          dir={scrollDir}
          className="mt-7 grid gap-5 sm:gap-6 md:grid-cols-2"
        >
          {featured.map((p) => (
            <article
              key={p.id}
              className="
                group relative rounded-2xl
                border border-black/10 bg-white/70
                dark:border-white/10 dark:bg-slate-950/60
                backdrop-blur-[2px]
                transition-transform duration-300
                hover:-translate-y-2
                overflow-visible
              "
            >
              <div
                className="
                  pointer-events-none absolute -inset-0.5 rounded-2xl
                  opacity-0 group-hover:opacity-100 transition duration-300
                  ring-1 ring-sky-400/60
                  shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_40px_rgba(56,189,248,0.12)]
                  dark:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_45px_rgba(56,189,248,0.18)]
                  z-30
                "
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
                      className="
                        inline-flex rounded-full px-3 py-1 text-xs font-medium
                        bg-white/70 text-slate-800 ring-1 ring-black/10
                        dark:bg-white/10 dark:text-white/80 dark:ring-white/15
                      "
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
                        onClick={() => navigate(`/projects/${p.id}`)}
                        className="
                          inline-flex items-center gap-2 text-sm font-medium
                          text-sky-700 hover:text-sky-600
                          dark:text-sky-300 dark:hover:text-sky-200
                          transition
                        "
                      >
                        {isAr ? "اعرف المزيد" : "Learn More"}
                        <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                      </button>

                      <span
                        className={cx(
                          "h-px flex-1 bg-black/10 dark:bg-white/10 hidden sm:block",
                          isAr ? "mr-4" : "ml-4"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </StaggerInGrid>

        <div className="mt-10 text-center">
          <NavLink
            to="/projects"
            className="
              inline-flex items-center gap-2 font-semibold transition
              text-emerald-700 hover:text-emerald-600
              dark:text-emerald-300 dark:hover:text-emerald-200
            "
          >
            {lang === "ar" ? "عرض كل المشاريع" : "See All Projects"}
            <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
