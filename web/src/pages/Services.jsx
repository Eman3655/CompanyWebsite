import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "../hooks/useLang";
import { SERVICES } from "../data/servicesData";
import { Reveal } from "../components/motion/Reveal";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function ServiceCard({ s, isAr, lang, onOpen }) {
  const Icon = s.icon;

  return (
    <Reveal>
      <article
        className="
          group relative h-full rounded-2xl
          border border-black/10 bg-white/70
          dark:border-white/10 dark:bg-white/[0.03]
          p-6 sm:p-7
          shadow-[0_1px_0_rgba(15,23,42,0.06)]
          dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
          transition duration-300
          hover:-translate-y-2
        "
      >
        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl opacity-0
            group-hover:opacity-100 transition duration-300
            ring-1 ring-sky-400/60
            shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_40px_rgba(56,189,248,0.10)]
            dark:shadow-[0_0_0_1px_rgba(56,189,248,0.32),0_0_45px_rgba(56,189,248,0.16)]
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

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
            {isAr ? s.subtitle.ar : s.subtitle.en}
          </p>

          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300/85">
            {isAr ? s.desc.ar : s.desc.en}
          </p>

          <button
            type="button"
            onClick={onOpen}
            className="
              mt-auto pt-6
              inline-flex items-center gap-2 font-semibold transition
              text-sky-700 hover:text-sky-600
              dark:text-sky-300 dark:hover:text-sky-200
            "
          >
            {isAr ? "اعرف المزيد" : "Learn More"}
            <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className={cx(
              "flex flex-col gap-4",
              isAr ? "sm:text-right" : "sm:text-left"
            )}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {isAr ? "الخدمات" : "Services"}
            </h1>
            <p className="max-w-3xl text-slate-600 dark:text-slate-300/80">
              {isAr
                ? "اختر خدمة لعرض تفاصيلها بالكامل (النطاق، التصنيف، وأمثلة من الخبرات ذات الصلة)."
                : "Pick a service to view full details (scope, classification, and related experience)."}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              s={s}
              isAr={isAr}
              lang={lang}
              onOpen={() => navigate(`/services/${s.id}`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
