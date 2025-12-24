import React, { useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Building2, Handshake } from "lucide-react";
import { useLang } from "../hooks/useLang";

const projects = [
  {
    id: "concrete-roof-workshop-cafeteria-2007",
    serviceKey: "buildings",
    category: { ar: "مبانٍ وإنشاءات", en: "Building Construction" },
    title: {
      ar: "إنشاء سقف خرسانة – ورشة وكافتيريا",
      en: "Construction of Concrete Roof – Workshop & Cafeteria",
    },
    desc: {
      ar: "أعمال إنشاء سقف خرسانة لمنشأة ورشة وكافتيريا ضمن مشروع إنشائي.",
      en: "Construction works for a concrete roof serving a workshop and cafeteria facility.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2007",
    clientOwner: "UCAS",
    donor: "International Jumpstart",
    value: "USD 27,425",
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
    clientOwner: "Khan Younis Municipality",
    donor: "KfW",
    value: "EUR 74,296",
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
    clientOwner: "Khuza’a Municipality",
    donor: "UNDP",
    value: "EUR 43,050",
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
    clientOwner: "UCAS",
    donor: "Islamic Relief",
    value: "ILS 73,420",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=70",
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
    clientOwner: "Ministry of Public Works",
    donor: "IDB / PEC",
    value: "USD 468,500",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=70",
  },

  {
    id: "eye-hospital-2013",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: { ar: "تأهيل مستشفى العيون", en: "Rehabilitation of Eye Hospital" },
    desc: {
      ar: "أعمال تأهيل لمرفق صحي تخصصي تشمل تحسينات وظيفية وفق متطلبات الاستخدام الطبي.",
      en: "Rehabilitation works for a specialized healthcare facility aligned with operational medical requirements.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2013",
    clientOwner: "Ministry of Health",
    donor: "UAE Charity / IDB",
    value: "EUR 226,877",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=70",
  },

  {
    id: "al-durra-hospital-2014",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: { ar: "تأهيل مستشفى الدرة", en: "Rehabilitation of Al-Durra Hospital" },
    desc: {
      ar: "تنفيذ أعمال تأهيل وتطوير لمرفق المستشفى بما يعزز كفاءة التشغيل والخدمات.",
      en: "Hospital rehabilitation and upgrade works to enhance operational efficiency and service delivery.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2014",
    clientOwner: "Ministry of Health",
    donor: "ICRC",
    value: "USD 436,894",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=70",
  },

  {
    id: "al-sourani-clinic-2017",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: { ar: "إنشاء وتأهيل عيادة السوراني", en: "Construction & Rehabilitation – Al-Sourani Clinic" },
    desc: {
      ar: "إنشاء/تأهيل عيادة صحية تشمل أعمال تطوير داخلية وخدمية لدعم التشغيل الطبي.",
      en: "Clinic construction and rehabilitation works including internal upgrades and services supporting healthcare operations.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2017",
    clientOwner: "Ministry of Health",
    donor: "ICRC",
    value: "USD 23,952",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=70",
  },

  {
    id: "al-aqsa-emergency-dept-2019",
    serviceKey: "healthcare",
    category: { ar: "منشآت صحية", en: "Healthcare Facilities" },
    title: { ar: "تأهيل قسم الطوارئ – مستشفى الأقصى", en: "Emergency Department Rehabilitation – Al-Aqsa Hospital" },
    desc: {
      ar: "أعمال تأهيل لقسم الطوارئ تشمل تحسينات وظيفية ومعيارية لتلبية احتياجات الخدمة.",
      en: "Emergency department rehabilitation with functional and standards-aligned upgrades to meet service demands.",
    },
    location: { ar: "فلسطين", en: "Palestine" },
    year: "2019",
    clientOwner: "Ministry of Health",
    donor: "Doctors of the World (France)",
    value: "USD 34,259",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=70",
  },

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
    clientOwner: "Ministry of Health",
    donor: "ICRC",
    value: "ILS 275,115",
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
    clientOwner: "Ministry of Health",
    donor: "EMERGENCY",
    value: "USD 227,500",
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
    clientOwner: "Ministry of Health",
    donor: "INTERBURNS",
    value: "USD 203,264",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2000&q=70",
  },
];

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function LabelRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-black/[0.02] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-slate-500 dark:text-white/60">
          {label}
        </div>
        <div className="mt-1 break-words text-sm text-slate-800 dark:text-white/90">
          {value || "—"}
        </div>
      </div>
    </div>
  );
}

function ProjectCardCompact({ p, lang, isAr, onOpen }) {
  return (
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
        <div className="relative h-40 sm:h-44">
          <img
            src={p.image}
            alt={p.title[lang]}
            className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/10 to-transparent dark:from-slate-950/95 dark:via-slate-950/25" />

          <div className={`absolute top-3 ${isAr ? "right-3" : "left-3"}`}>
            <span
              className={cx(
                "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold",
                "bg-white/70 text-slate-800 ring-1 ring-black/10",
                "dark:bg-white/10 dark:text-white/80 dark:ring-white/15"
              )}
            >
              {p.category[lang]}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex min-h-[148px] flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
              {p.title[lang]}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70 line-clamp-2">
              {p.desc[lang]}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {p.location[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {p.year}
              </span>
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between">
              <button
                onClick={onOpen}
                className={cx(
                  "inline-flex items-center gap-2 text-sm font-semibold transition",
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
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const isAr = lang === "ar";

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  const related = useMemo(() => {
    if (!project) return [];
    return projects
      .filter((p) => p.id !== project.id)
      .filter((p) => p.serviceKey === project.serviceKey)
      .slice(0, 4);
  }, [project]);

  if (!project) {
    return (
      <section className="py-14 sm:py-16" dir={isAr ? "rtl" : "ltr"}>
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isAr ? "المشروع غير موجود" : "Project Not Found"}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-white/70">
            {isAr
              ? "قد يكون الرابط غير صحيح أو أن بيانات هذا المشروع لم تُضف بعد."
              : "The link may be incorrect or this project data hasn’t been added yet."}
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/[0.02] px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-black/[0.04] dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
            >
              {isAr ? "العودة للمشاريع" : "Back to Projects"}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 sm:py-16" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <NavLink
            to="/projects"
            className={cx(
              "inline-flex w-fit items-center gap-2 text-sm font-semibold transition",
              "text-sky-700 hover:text-sky-600",
              "dark:text-sky-300 dark:hover:text-sky-200"
            )}
          >
            <ArrowRight className={`h-4 w-4 ${isAr ? "" : "rotate-180"}`} />
            {isAr ? "العودة إلى المشاريع" : "Back to Projects"}
          </NavLink>

          <NavLink
            to="/contact"
            className={cx(
              "inline-flex w-fit items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition",
              "border-black/10 bg-black/[0.02] text-slate-800 hover:bg-black/[0.04]",
              "dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
            )}
          >
            {isAr ? "تواصل معنا" : "Get in Touch"}
            <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
          </NavLink>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div
            className={cx(
              "lg:col-span-7 group relative rounded-2xl overflow-hidden",
              "border border-black/10 bg-white/70",
              "dark:border-white/10 dark:bg-slate-950/60",
              "backdrop-blur-[2px]"
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

            <div className="relative h-60 sm:h-72">
              <img
                src={project.image}
                alt={project.title[lang]}
                className="h-full w-full object-cover opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent dark:from-slate-950/95 dark:via-slate-950/25" />

              <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"}`}>
                <span
                  className={cx(
                    "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                    "bg-white/70 text-slate-800 ring-1 ring-black/10",
                    "dark:bg-white/10 dark:text-white/80 dark:ring-white/15"
                  )}
                >
                  {project.category[lang]}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {project.title[lang]}
              </h1>

              <p className="mt-3 text-slate-600 dark:text-white/70 leading-relaxed">
                {project.desc[lang]}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-white/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {project.location[lang]}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          <div
            className={cx(
              "lg:col-span-5 rounded-2xl",
              "border border-black/10 bg-white/70",
              "dark:border-white/10 dark:bg-slate-950/60",
              "backdrop-blur-[2px]"
            )}
          >
            <div className="p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "تفاصيل المشروع" : "Project Details"}
              </h2>

              <div className="mt-5 grid gap-4">
                <LabelRow
                  icon={Calendar}
                  label={isAr ? "السنة" : "Year"}
                  value={project.year}
                />
                <LabelRow
                  icon={Building2}
                  label={isAr ? "الجهة المالكة / العميل" : "Client / Owner"}
                  value={project.clientOwner}
                />
                <LabelRow
                  icon={Handshake}
                  label={isAr ? "الجهة المانحة" : "Donor"}
                  value={project.donor}
                />
                <LabelRow
                  icon={ArrowRight}
                  label={isAr ? "قيمة العقد" : "Value"}
                  value={project.value}
                />
              </div>

              <div className="mt-6 h-px bg-black/10 dark:bg-white/10" />

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className={cx(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
                    "bg-sky-600 text-white hover:bg-sky-500"
                  )}
                >
                  {isAr ? "اتصل بنا" : "Contact Us"}
                  <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {isAr ? "مشاريع مرتبطة" : "Related Projects"}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
                {isAr
                  ? "مشاريع ضمن نفس المجال/الخدمة."
                  : "More projects under the same service area."}
              </p>
            </div>

            <NavLink
              to="/projects"
              className={cx(
                "hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition",
                "text-emerald-700 hover:text-emerald-600",
                "dark:text-emerald-300 dark:hover:text-emerald-200"
              )}
            >
              {isAr ? "عرض كل المشاريع" : "See All Projects"}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            </NavLink>
          </div>

          {related.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-5 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-white/70">
              {isAr ? "لا توجد مشاريع مرتبطة متاحة حالياً." : "No related projects available yet."}
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProjectCardCompact
                  key={p.id}
                  p={p}
                  lang={lang}
                  isAr={isAr}
                  onOpen={() => navigate(`/projects/${p.id}`)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 sm:hidden">
          <NavLink
            to="/projects"
            className={cx(
              "inline-flex w-fit items-center gap-2 font-semibold transition",
              "text-emerald-700 hover:text-emerald-600",
              "dark:text-emerald-300 dark:hover:text-emerald-200"
            )}
          >
            {isAr ? "عرض كل المشاريع" : "See All Projects"}
            <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}


