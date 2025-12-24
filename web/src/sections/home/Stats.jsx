import React from "react";
import { useLang } from "../../hooks/useLang";
import { Check } from "lucide-react";
import { StaggerInGrid } from "../../components/motion/StaggerInGrid";

const stats = [
  {
    key: "years",
    value: "20+",
    title: { ar: "سنوات من التميّز", en: "Years of Excellence" },
    desc: {
      ar: "تأسست عام 2005 — خبرة متواصلة في المقاولات",
      en: "Established in 2005 — continuous excellence in contracting",
    },
  },
  {
    key: "grades",
    value: "II–V",
    title: { ar: "التصنيف الرسمي للمقاول", en: "Official Contractor Grades" },
    desc: {
      ar: "مبانٍ II، طرق II، كهروميكانيك III، مياه وصرف V",
      en: "Buildings II, Roads II, Electromech III, Water & Sewerage V",
    },
  },
  {
    key: "projects",
    value: "12+",
    title: { ar: "مشاريع مُنفَّذة", en: "Projects Delivered" },
    desc: {
      ar: "منشآت صحية، طرق وأسواق (2007–2025)",
      en: "Healthcare, roads & markets (2007–2025)",
    },
  },
  {
    key: "donors",
    value: "10+",
    title: { ar: "جهات مانحة دولية", en: "International Donors & Agencies" },
    desc: {
      ar: "ICRC وUNDP وKfW وIDB/PEC وغيرها",
      en: "ICRC, UNDP, KfW, IDB/PEC and others",
    },
  },
];

function StatCard({ item, isAr }) {
  return (
    <div
      className="
        group relative rounded-2xl
        border border-black/10 bg-white/70
        shadow-[0_1px_0_rgba(15,23,42,0.06)]
        dark:border-white/10 dark:bg-white/[0.02]
        dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
        transition-all duration-300
        hover:-translate-y-2
        min-h-[300px] sm:min-h-[340px]
        p-10 sm:p-12
        backdrop-blur-[2px]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0
          group-hover:opacity-100 transition duration-300
          border-b border-l border-r
          border-sky-400/60
        "
      />

      <div
        className="
          pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0
          group-hover:opacity-100 transition duration-300
          shadow-[0_0_30px_rgba(56,189,248,0.10)]
          dark:shadow-[0_0_35px_rgba(56,189,248,0.12)]
        "
      />

   
      <div
        className="
          pointer-events-none absolute top-0 left-0 h-14 w-16
          rounded-tl-2xl opacity-0 group-hover:opacity-100
          transition duration-300 blur-[8px]
          bg-gradient-to-br from-sky-400/60 via-cyan-300/35 to-transparent
        "
      />
      <div
        className="
          pointer-events-none absolute top-0 right-0 h-14 w-16
          rounded-tr-2xl opacity-0 group-hover:opacity-100
          transition duration-300 blur-[8px]
          bg-gradient-to-bl from-emerald-400/60 via-cyan-300/35 to-transparent
        "
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div
          className="
            grid h-14 w-14 place-items-center rounded-full
            bg-gradient-to-br from-sky-500 to-emerald-400
            shadow-[0_10px_25px_rgba(0,0,0,0.20)]
            dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
          "
        >
          <Check className="h-7 w-7 text-white" />
        </div>

        <div className="mt-7 text-5xl font-extrabold tracking-tight text-sky-600 dark:text-sky-500">
          {item.value}
        </div>

        <div className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
          {isAr ? item.title.ar : item.title.en}
        </div>

        <div className="mt-3 text-sm text-slate-600 max-w-[30ch] dark:text-slate-300/80">
          {isAr ? item.desc.ar : item.desc.en}
        </div>
      </div>
    </div>
  );
}

export default function TrustedStats({ scrollDir = "down" }) {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section id="stats" className="py-12 sm:py-16" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isAr ? "موثوقون لدى روّاد الصناعة" : "Trusted by Industry Leaders"}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300/80">
            {isAr ? "سجلّنا يتحدث عنّا" : "Our track record speaks for itself"}
          </p>
        </div>

        <StaggerInGrid dir={scrollDir} className="mt-10 grid gap-6 md:grid-cols-2">
          {stats.map((s) => (
            <StatCard key={s.key} item={s} isAr={isAr} />
          ))}
        </StaggerInGrid>
      </div>
    </section>
  );
}
