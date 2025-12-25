// src/pages/ServicesDetails.jsx
import React from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import { SERVICES, PROJECTS } from "../data/servicesData";
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Reveal } from "../components/motion/Reveal";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function MotionCard({ children, className = "" }) {
  return (
    <Reveal>
      <div
        className={cx(
          `
          group relative rounded-3xl
          border border-black/10 bg-white
          dark:border-white/10 dark:bg-slate-950/60
          shadow-[0_18px_70px_rgba(2,6,23,0.08)]
          dark:shadow-[0_28px_90px_rgba(0,0,0,0.55)]
          transition-transform duration-300
          hover:-translate-y-2
        `,
          className
        )}
      >
        <div
          className="
            pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0
            group-hover:opacity-100 transition duration-300
            ring-1 ring-sky-400/55
            shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_50px_rgba(56,189,248,0.12)]
            dark:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_0_60px_rgba(56,189,248,0.18)]
          "
        />
        <div className="relative z-10 p-6 sm:p-8">{children}</div>
      </div>
    </Reveal>
  );
}

const SERVICE_COVERS = {
  "building-construction":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=70",
  "roads-infrastructure":
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=70",
  "electromechanical-works":
    "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766675334/pexels-tima-miroshnichenko-5845969_yamqqc.jpg",
  "water-sewerage":
    "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?auto=format&fit=crop&w=2000&q=70",
  "general-trading":
    "https://images.unsplash.com/photo-1586521995568-39eec03b89ab?auto=format&fit=crop&w=2000&q=70",
};

function getServiceCover(service) {
  if (!service) return null;
  return service.cover || SERVICE_COVERS[service.id] || SERVICE_COVERS["building-construction"];
}

export default function ServiceDetails() {
  const { id } = useParams();
  const { lang } = useLang();
  const isAr = lang === "ar";
  const nav = useNavigate();

  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <MotionCard>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {isAr ? "الخدمة غير موجودة" : "Service not found"}
            </div>

            <button
              onClick={() => nav("/services")}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-sky-600 dark:text-sky-300"
            >
              {isAr ? "العودة للخدمات" : "Back to services"}
              <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
            </button>
          </MotionCard>
        </div>
      </main>
    );
  }

  const Icon = service.icon;
  const cover = getServiceCover(service);

  const relatedAll = PROJECTS
    .filter((p) => p.serviceId === id)
    .sort((a, b) => Number(b.year) - Number(a.year));

  const related = relatedAll.slice(0, 4); 

  const t = {
    badge: isAr ? "تفاصيل الخدمة" : "Service Details",
    overview: isAr ? "نبذة عن الخدمة" : "Service Overview",
    bullets: isAr ? "ملامح الخدمة" : "Service Highlights",
    scope: isAr ? "نطاق العمل" : "Scope of Work",
    process: isAr ? "منهج التنفيذ" : "Delivery Approach",
    related: isAr ? "مشاريع مرتبطة" : "Relevant Experience",
    back: isAr ? "العودة للخدمات" : "Back to Services",
    contact: isAr ? "تواصل معنا" : "Contact Us",
    seeAllProjects: isAr ? "عرض كل المشاريع" : "View all projects",
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="w-full">
      <header className="relative overflow-hidden">
        <div className="relative h-[52svh] min-h-[320px] bg-slate-950">
          {cover && (
            <img
              src={cover}
              alt={service.title[lang]}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-emerald-500/15" />

          <div className="relative z-10 h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <div className="flex items-start gap-4">
                  <div
                    className="
                      h-16 w-16 rounded-3xl grid place-items-center
                      bg-white/12 border border-white/20 text-white
                    "
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm text-white/80">{t.badge}</div>

                    <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                      {service.title[lang]}
                    </h1>

                    <p className="mt-3 max-w-3xl text-white/85">
                      {service.subtitle[lang]}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <MotionCard>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.overview}
                </h2>
                <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                  {service.desc[lang]}
                </p>
              </MotionCard>

              <MotionCard>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.bullets}
                </h2>
                <div className="mt-4 grid gap-2">
                  {(isAr ? service.bullets.ar : service.bullets.en).map(
                    (b, i) => (
                      <div
                        key={i}
                        className="flex gap-2 items-start text-slate-800 dark:text-white/85"
                      >
                        <CheckCircle2 className="text-emerald-500 h-5 w-5 mt-0.5" />
                        <span className="leading-7">{b}</span>
                      </div>
                    )
                  )}
                </div>
              </MotionCard>

              <MotionCard>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.scope}
                </h2>
                <div className="mt-4 grid gap-3">
                  {(isAr ? service.scope.ar : service.scope.en).map((s, i) => (
                    <div
                      key={i}
                      className="
                        rounded-2xl border border-black/10 p-4
                        bg-black/[0.02] dark:bg-white/[0.04]
                        text-slate-800 dark:text-white/85
                      "
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </MotionCard>

              <MotionCard>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.process}
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="flex gap-3 items-start text-slate-800 dark:text-white/85">
                    <ClipboardCheck className="h-6 w-6 text-sky-600 dark:text-sky-300 mt-0.5" />
                    <span>
                      {isAr
                        ? "تحديد المتطلبات وخطة التنفيذ"
                        : "Requirements & delivery planning"}
                    </span>
                  </div>
                  <div className="flex gap-3 items-start text-slate-800 dark:text-white/85">
                    <ShieldCheck className="h-6 w-6 text-sky-600 dark:text-sky-300 mt-0.5" />
                    <span>
                      {isAr ? "الجودة والسلامة" : "Quality & HSE controls"}
                    </span>
                  </div>
                  <div className="flex gap-3 items-start text-slate-800 dark:text-white/85">
                    <Timer className="h-6 w-6 text-sky-600 dark:text-sky-300 mt-0.5" />
                    <span>
                      {isAr ? "تسليم مرحلي" : "Phased delivery & handover"}
                    </span>
                  </div>
                </div>
              </MotionCard>

              <MotionCard>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.related}
                </h2>

                {related.length === 0 ? (
                  <p className="mt-3 text-slate-600 dark:text-white/70">
                    {isAr ? "لا توجد مشاريع مرتبطة." : "No related projects."}
                  </p>
                ) : (
                  <>
                    <div className="mt-4 grid gap-4">
                      {related.map((p) => (
                        <div
                          key={p.id}
                          className="
                            group rounded-2xl border border-black/10
                            bg-white dark:bg-slate-950
                            p-4 sm:p-5
                            transition-transform duration-300
                            hover:-translate-y-1
                            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                            dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                          "
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-slate-500 dark:text-white/60">
                                {p.year}
                              </div>
                              <div className="mt-1 text-base font-extrabold text-slate-900 dark:text-white line-clamp-2">
                                {p.name[lang]}
                              </div>
                            </div>
                            <span className="shrink-0 inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                              {p.value}
                            </span>
                          </div>

                          <div className="mt-3 grid gap-1 text-xs sm:text-sm text-slate-600 dark:text-white/70">
                            <div>
                              <span className="font-semibold">
                                {isAr ? "العميل: " : "Client: "}
                              </span>
                              {p.client[lang]}
                            </div>
                            <div>
                              <span className="font-semibold">
                                {isAr ? "الجهة المانحة: " : "Donor: "}
                              </span>
                              {p.donor[lang]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {relatedAll.length > 4 && (
                      <div className="mt-6 flex justify-end">
                        <NavLink
                          to="/projects"
                          className="
                            inline-flex items-center gap-2 text-sm font-semibold
                            text-emerald-700 hover:text-emerald-600
                            dark:text-emerald-300 dark:hover:text-emerald-200
                          "
                        >
                          {t.seeAllProjects}
                          <ArrowRight
                            className={cx("h-4 w-4", isAr && "rotate-180")}
                          />
                        </NavLink>
                      </div>
                    )}
                  </>
                )}
              </MotionCard>
            </div>

            <div className="space-y-5">
              <MotionCard>
                <div className="font-extrabold text-slate-900 dark:text-white">
                  {isAr ? "جاهز لمناقشة مشروعك؟" : "Ready to discuss your project?"}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-white/75">
                  {isAr
                    ? "ارسل المتطلبات الأساسية وسنعود إليك بخطة تنفيذ واضحة."
                    : "Send a short brief and we will return with a clear delivery approach."}
                </p>

                <div className="mt-4 grid gap-3">
                  <NavLink
                    to="/contact"
                    className="
                      inline-flex items-center justify-center gap-2 rounded-xl
                      bg-sky-600 px-5 py-3 text-sm font-semibold text-white
                      hover:bg-sky-500 transition shadow-lg shadow-sky-600/20
                    "
                  >
                    {t.contact}
                    <ArrowRight
                      className={cx("h-4 w-4", isAr && "rotate-180")}
                    />
                  </NavLink>

                  <NavLink
                    to="/services"
                    className="
                      inline-flex items-center justify-center gap-2 rounded-xl
                      border border-black/10 bg-black/[0.03] px-5 py-3 text-sm font-semibold
                      text-slate-900 hover:bg-black/[0.06]
                      dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10
                      transition
                    "
                  >
                    {t.back}
                    <ArrowRight
                      className={cx("h-4 w-4", isAr && "rotate-180")}
                    />
                  </NavLink>
                </div>
              </MotionCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
