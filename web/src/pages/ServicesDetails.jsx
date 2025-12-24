import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import { SERVICES, PROJECTS } from "../data/servicesData";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  ClipboardCheck,
  Timer,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "../components/motion/Reveal";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span
      className="
        inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
        bg-white/85 text-slate-900 ring-1 ring-black/10
        dark:bg-white/10 dark:text-white/85 dark:ring-white/15
      "
    >
      {children}
    </span>
  );
}

function LuxeCard({ children, className = "" }) {
  return (
    <div
      className={cx(
        `
        relative rounded-3xl overflow-hidden
        border border-black/10 bg-white
        dark:border-white/10 dark:bg-slate-950
        shadow-[0_18px_60px_rgba(2,6,23,0.08)]
        dark:shadow-[0_28px_90px_rgba(0,0,0,0.50)]
        `,
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 opacity-80" />
      {children}
    </div>
  );
}

function SectionTitle({ title, desc, align }) {
  return (
    <div className={cx("mb-5", align === "right" ? "text-right" : "text-left")}>
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {desc ? (
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function MicroStat({ k, v }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="text-xs font-semibold text-slate-500 dark:text-white/60">
        {k}
      </div>
      <div className="mt-1 text-base font-extrabold text-slate-900 dark:text-white">
        {v}
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
      <div className="flex items-start gap-3">
        <div
          className="
            h-11 w-11 rounded-2xl grid place-items-center
            bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/20
            dark:bg-sky-500/15 dark:text-sky-200 dark:ring-sky-400/20
          "
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-900 dark:text-white">
            {title}
          </div>
          <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/70">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

function Masonry({ images = [] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-12">
      <div className="sm:col-span-7">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10">
          <img
            src={images[0]}
            alt=""
            className="h-64 sm:h-72 w-full object-cover transition duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
      </div>

      <div className="sm:col-span-5 grid gap-3">
        {images.slice(1, 4).map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10"
          >
            <img
              src={src}
              alt=""
              className="h-20 sm:h-[92px] w-full object-cover transition duration-500 hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetails() {
  const { id } = useParams();
  const { lang } = useLang();
  const isAr = lang === "ar";
  const nav = useNavigate();

  const idx = SERVICES.findIndex((s) => s.id === id);
  const service = idx >= 0 ? SERVICES[idx] : null;
  const prev = idx > 0 ? SERVICES[idx - 1] : null;
  const next = idx >= 0 && idx < SERVICES.length - 1 ? SERVICES[idx + 1] : null;

  const related = React.useMemo(
    () =>
      PROJECTS.filter((p) => p.serviceId === id).sort(
        (a, b) => Number(b.year) - Number(a.year)
      ),
    [id]
  );

  if (!service) {
    return (
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <LuxeCard>
            <div className="p-7">
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                {isAr ? "الخدمة غير موجودة" : "Service not found"}
              </div>
              <button
                onClick={() => nav("/services")}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-sky-700 dark:text-sky-300"
              >
                {isAr ? "العودة للخدمات" : "Back to Services"}
                <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
              </button>
            </div>
          </LuxeCard>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  const t = {
    badge: isAr ? "تفاصيل الخدمة" : "Service Details",
    grade: isAr ? "التصنيف" : "Classification",
    overviewTitle: isAr ? "نظرة عامة" : "Overview",
    deliverTitle: isAr ? "نطاق العمل" : "Scope of work",
    processTitle: isAr ? "منهج التنفيذ" : "Delivery approach",
    processDesc: isAr
      ? "طريقة عمل منظمة تُظهر الاحتراف والالتزام."
      : "A structured process that reflects discipline and commitment.",
    relatedTitle: isAr ? "خبرات ذات صلة" : "Relevant experience",
    relatedDesc: isAr
      ? "مشاريع مرتبطة."
      : "Related projects.",
    contact: isAr ? "تواصل معنا" : "Contact us",
    back: isAr ? "العودة للخدمات" : "Back to Services",
    browse: isAr ? "تصفح الخدمات" : "Browse services",
    next: isAr ? "التالي" : "Next",
    prev: isAr ? "السابق" : "Previous",
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="pb-16">
      <header className="relative">
        <div className="relative h-[52vh] sm:h-[60vh] overflow-hidden">
          <img
            src={service.cover}
            alt={service.title[lang]}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/10 to-emerald-950/25" />

          <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white dark:bg-slate-950 [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)]" />
        </div>

        <div className="relative -mt-20 sm:-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal from={isAr ? "right" : "left"}>
              <div className="grid gap-5 lg:grid-cols-12 items-end">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill>
                      <Sparkles className="h-4 w-4" />
                      {t.badge}
                    </Pill>
                    <Pill>
                      {t.grade}: {isAr ? service.grade.ar : service.grade.en}
                    </Pill>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div
                      className="
                        h-14 w-14 rounded-3xl grid place-items-center
                        bg-white/90 text-slate-900 ring-1 ring-black/10
                        dark:bg-white/10 dark:text-white dark:ring-white/15
                      "
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="min-w-0">
                      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {service.title[lang]}
                      </h1>
                      <p className="mt-2 text-sm sm:text-base leading-7 text-slate-600 dark:text-white/70 max-w-3xl">
                        {isAr ? service.subtitle.ar : service.subtitle.en}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3 max-w-3xl">
                    {(isAr ? service.micro.ar : service.micro.en).map((m, i) => (
                      <MicroStat key={i} k={m.k} v={m.v} />
                    ))}
                  </div>
                </div>

              
                <div className="lg:col-span-4">
                  <LuxeCard className="bg-white/92 dark:bg-slate-950/95">
                    <div className="p-5 sm:p-6">

                      {(prev || next) && (
                        <div className="mt-4 grid gap-2 border-t border-black/10 pt-4 dark:border-white/10">
                          {prev && (
                            <button
                              onClick={() => nav(`/services/${prev.id}`)}
                              className="
                                w-full inline-flex items-center justify-between gap-3
                                rounded-2xl border border-black/10 bg-white px-4 py-3
                                text-sm font-semibold text-slate-900 hover:bg-black/[0.02] transition
                                dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:bg-white/[0.03]
                              "
                            >
                              <span className="inline-flex items-center gap-2">
                                {isAr ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                                {t.prev}
                              </span>
                              <span className="opacity-80 truncate">{prev.title[lang]}</span>
                            </button>
                          )}

                          {next && (
                            <button
                              onClick={() => nav(`/services/${next.id}`)}
                              className="
                                w-full inline-flex items-center justify-between gap-3
                                rounded-2xl border border-black/10 bg-white px-4 py-3
                                text-sm font-semibold text-slate-900 hover:bg-black/[0.02] transition
                                dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:bg-white/[0.03]
                              "
                            >
                              <span className="inline-flex items-center gap-2">
                                {t.next}
                                {isAr ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                              </span>
                              <span className="opacity-80 truncate">{next.title[lang]}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </LuxeCard>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8">
            <Reveal>
              <LuxeCard>
                <div className="p-6 sm:p-8">
                  <SectionTitle
                    align={isAr ? "right" : "left"}
                    title={isAr ? "لمحات من العمل" : "Work glimpses"}
                  />
                  <Masonry images={service.gallery || []} />
                </div>
              </LuxeCard>
            </Reveal>

            <Reveal delay={80}>
              <LuxeCard>
                <div className="p-6 sm:p-8">
                  <SectionTitle
                    align={isAr ? "right" : "left"}
                    title={t.overviewTitle}
                  />

                  <p className="text-sm sm:text-base leading-7 text-slate-700 dark:text-white/80">
                    {isAr ? service.desc.ar : service.desc.en}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {(isAr ? service.bullets.ar : service.bullets.en).map((x, i) => (
                      <div
                        key={i}
                        className="
                          rounded-2xl border border-black/10 bg-black/[0.02] p-4
                          dark:border-white/10 dark:bg-white/[0.03]
                          flex items-start gap-2
                        "
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <div className="text-sm leading-6 text-slate-800 dark:text-white/85">
                          {x}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </LuxeCard>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <SectionTitle
                  align={isAr ? "right" : "left"}
                  title={t.deliverTitle}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {(isAr ? service.scope.ar : service.scope.en).map((x, i) => (
                    <div
                      key={i}
                      className="
                        rounded-3xl border border-black/10 bg-white p-5
                        dark:border-white/10 dark:bg-slate-950
                        shadow-[0_12px_40px_rgba(2,6,23,0.06)]
                        dark:shadow-[0_20px_70px_rgba(0,0,0,0.40)]
                        transition hover:-translate-y-1
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            mt-0.5 h-10 w-10 rounded-2xl grid place-items-center
                            bg-gradient-to-br from-sky-500/15 to-emerald-500/10
                            ring-1 ring-black/10 dark:ring-white/10
                          "
                        >
                          <span className="h-2 w-2 rounded-full bg-sky-500" />
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-7">
                          {x}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <LuxeCard>
                <div className="p-6 sm:p-8">
                  <SectionTitle
                    align={isAr ? "right" : "left"}
                    title={t.processTitle}
                    desc={t.processDesc}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FeatureItem
                      icon={ClipboardCheck}
                      title={isAr ? "التخطيط والمتطلبات" : "Requirements & plan"}
                      desc={isAr ? "نحدد نطاق العمل والمواصفات والمراحل." : "Define scope, specs and milestones."}
                    />
                    <FeatureItem
                      icon={ShieldCheck}
                      title={isAr ? "الجودة والسلامة" : "Quality & HSE"}
                      desc={isAr ? "إجراءات ضبط الجودة والسلامة بالموقع." : "QA/QC and HSE procedures on site."}
                    />
                    <FeatureItem
                      icon={Timer}
                      title={isAr ? "تسليم مرحلي" : "Phased delivery"}
                      desc={isAr ? "تقسيم وتسليم لتقليل المخاطر." : "Phased handover to reduce risk."}
                    />
                    <FeatureItem
                      icon={CheckCircle2}
                      title={isAr ? "اختبارات وتسليم نهائي" : "Testing & final handover"}
                      desc={isAr ? "فحص + توثيق + تسليم مطابق." : "Testing + documentation + compliant handover."}
                    />
                  </div>
                </div>
              </LuxeCard>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <SectionTitle
                  align={isAr ? "right" : "left"}
                  title={t.relatedTitle}
                  desc={t.relatedDesc}
                />

                {related.length === 0 ? (
                  <LuxeCard>
                    <div className="p-6 text-sm text-slate-700 dark:text-white/70">
                      {isAr
                        ? "لا توجد مشاريع."
                        : "No projects."}
                    </div>
                  </LuxeCard>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {related.map((p) => (
                      <LuxeCard key={p.id} className="transition hover:-translate-y-1">
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-slate-500 dark:text-white/60">
                                {p.year}
                              </div>
                              <div className="mt-1 text-base font-extrabold text-slate-900 dark:text-white">
                                {isAr ? p.name.ar : p.name.en}
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-sky-600 dark:text-sky-300 opacity-70" />
                          </div>

                          <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-white/75">
                            <div className="flex justify-between gap-3">
                              <span className="font-semibold">{isAr ? "العميل" : "Client"}</span>
                              <span className="text-right">{isAr ? p.client.ar : p.client.en}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="font-semibold">{isAr ? "المانح" : "Donor"}</span>
                              <span className="text-right">{isAr ? p.donor.ar : p.donor.en}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="font-semibold">{isAr ? "القيمة" : "Value"}</span>
                              <span className="text-right">{p.value}</span>
                            </div>
                          </div>

                          <NavLink
                            to="/projects"
                            className="
                              mt-4 inline-flex items-center gap-2 text-sm font-semibold
                              text-emerald-700 hover:text-emerald-600
                              dark:text-emerald-300 dark:hover:text-emerald-200
                              transition
                            "
                          >
                            {isAr ? "عرض المشاريع" : "Go to Projects"}
                            <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
                          </NavLink>
                        </div>
                      </LuxeCard>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal from={isAr ? "left" : "right"}>
              <div className="sticky top-24 space-y-5">
                <LuxeCard>
                  <div className="p-6">
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {isAr ? "جاهز لمناقشة مشروعك؟" : "Ready to discuss your project?"}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      {isAr
                        ? "ارسل المتطلبات الأساسية وسنرد بخطة تنفيذ واضحة."
                        : "Send a brief and we’ll respond with a clear delivery plan."}
                    </div>

                    <div className="mt-4 grid gap-3">
                      <NavLink
                        to="/contact"
                        className="
                          inline-flex items-center justify-center gap-2 rounded-xl
                          bg-sky-600 px-4 py-3 text-sm font-semibold text-white
                          hover:bg-sky-500 transition shadow-lg shadow-sky-600/25
                        "
                      >
                        {t.contact}
                        <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
                      </NavLink>

                      <NavLink
                        to="/services"
                        className="
                          inline-flex items-center justify-center gap-2 rounded-xl
                          border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-semibold
                          text-slate-900 hover:bg-black/[0.06]
                          dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10
                          transition
                        "
                      >
                        {t.back}
                        <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
                      </NavLink>
                    </div>
                  </div>
                </LuxeCard>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
