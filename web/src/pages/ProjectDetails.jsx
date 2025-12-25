import React, { useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Handshake,
} from "lucide-react";
import { useLang } from "../hooks/useLang";
import { Reveal } from "../components/motion/Reveal";

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
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
      ar: "تأهيل سوق خانيونس المركزي",
      en: "Rehabilitation of Khan Younis Central Market",
    },
    desc: {
      ar: "أعمال إعادة تأهيل وتطوير لمرافق السوق المركزي بما يشمل تحسينات إنشائية وخدمية.",
      en: "Rehabilitation and upgrades of the central market facilities including structural and service improvements.",
    },
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
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
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
    title: {
      ar: "إنشاء وتأهيل عيادة السوراني",
      en: "Construction & Rehabilitation – Al-Sourani Clinic",
    },
    desc: {
      ar: "إنشاء/تأهيل عيادة صحية تشمل أعمال تطوير داخلية وخدمية لدعم التشغيل الطبي.",
      en: "Clinic construction and rehabilitation works including internal upgrades and services supporting healthcare operations.",
    },
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
    title: {
      ar: "تأهيل قسم الطوارئ – مستشفى الأقصى",
      en: "Emergency Department Rehabilitation – Al-Aqsa Hospital",
    },
    desc: {
      ar: "أعمال تأهيل لقسم الطوارئ تشمل تحسينات وظيفية ومعيارية لتلبية احتياجات الخدمة.",
      en: "Emergency department rehabilitation with functional and standards-aligned upgrades to meet service demands.",
    },
    location: { ar: "قطاع غزة – فلسطين", en: "Gaza Strip, Palestine" },
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
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
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
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
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
    location: { ar: "خانيونس – فلسطين", en: "Khan Younis, Palestine" },
    year: "2025",
    clientOwner: "Ministry of Health",
    donor: "INTERBURNS",
    value: "USD 203,264",
    image:
      "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679900/photo_5938552633830345663_y_qnnvfi.jpg",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679902/photo_5938552633830345661_y_f7wvc3.jpg",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679902/photo_5938552633830345661_y_f7wvc3.jpg",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679901/photo_5938552633830345660_y_eiy5ew.jpg",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679901/photo_5938552633830345660_y_eiy5ew.jpg",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679900/photo_5938552633830345663_y_qnnvfi.jpg",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766679900/photo_5938552633830345663_y_qnnvfi.jpg",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dptlhu0s0/video/upload/v1766679900/document_5938552633370351915_xircdq.mp4",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766680426/Screenshot_2025-12-25_183324_dviobn.jpg",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dptlhu0s0/video/upload/v1766679900/document_5938552633370351917_qpwcbb.mp4",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766680348/Screenshot_2025-12-25_183155_xlvvov.jpg",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/dptlhu0s0/video/upload/v1766679902/document_5938552633370351916_g2eufd.mp4",
        thumb:
          "https://res.cloudinary.com/dptlhu0s0/image/upload/v1766680516/Screenshot_2025-12-25_183442_m7xvnm.jpg",
      },
    ],
  },
];

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function MotionCard({ children, className = "" }) {
  return (
    <Reveal>
      <div
        className={cx(
          `
          group relative w-full rounded-3xl
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
        <div className="relative z-10 p-4 sm:p-6 md:p-8">{children}</div>
      </div>
    </Reveal>
  );
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
                  <ArrowRight
                    className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
                  />
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

function MediaGallery({ media = [], isAr }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media || media.length === 0) return null;

  const current = media[activeIndex];
  const isVideo = current.type === "video";

  return (
    <MotionCard>
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            {isAr ? "معرض المشروع" : "Project Media"}
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-white/60">
            {isAr ? `${media.length} عنصر` : `${media.length} items`}
          </span>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black">
          {isVideo ? (
            <video
              key={current.src}
              src={current.src}
              controls
              className="
                w-full
                max-h-[260px] sm:max-h-[360px]
                object-contain
                bg-black
              "
            />
          ) : (
            <div className="relative">
              <img
                src={current.src}
                alt=""
                loading="lazy"
                className="
                  w-full
                  max-h-[260px] sm:max-h-[360px]
                  object-cover
                  transition duration-500
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          )}
        </div>

        <div
          className={cx(
            "flex gap-3 overflow-x-auto pb-2 -mx-1 sm:mx-0 media-scroll",
            isAr ? "flex-row-reverse" : "flex-row"
          )}
        >
          {media.map((item, idx) => {
            const isActive = idx === activeIndex;
            const thumbIsVideo = item.type === "video";
            const thumbSrc = item.thumb || item.src;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cx(
                  "relative shrink-0 rounded-xl overflow-hidden border mx-1 sm:mx-0",
                  "transition-all duration-200",
                  "h-20 w-28 sm:h-24 sm:w-40",
                  isActive
                    ? "border-sky-500 ring-2 ring-sky-400/70"
                    : "border-black/10 dark:border-white/10 hover:border-sky-300/70 dark:hover:border-sky-400/60"
                )}
              >
                <img
                  src={thumbSrc}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />

                {thumbIsVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-9 w-9 rounded-full bg-black/65 flex items-center justify-center">
                      <div
                        className={cx(
                          "ml-0.5 border-l-[10px] border-y-[7px] border-l-white border-y-transparent",
                          isAr && "rotate-180 -ml-0.5"
                        )}
                      />
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </MotionCard>
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
      <main dir={isAr ? "rtl" : "ltr"} className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <MotionCard>
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
                <ArrowRight
                  className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </MotionCard>
        </div>
      </main>
    );
  }

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="w-full pb-12 sm:pb-16">
      <header className="relative overflow-hidden">
        <div className="relative h-[48vh] sm:h-[52vh] min-h-[320px] sm:min-h-[360px]">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/18 via-cyan-500/12 to-emerald-500/18" />

          <div className="relative z-10 h-full flex items-end">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <NavLink
                      to="/projects"
                      className={cx(
                        "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition",
                        "text-sky-300 hover:text-sky-200"
                      )}
                    >
                      <ArrowRight
                        className={`h-4 w-4 ${isAr ? "" : "rotate-180"}`}
                      />
                      {isAr ? "العودة إلى المشاريع" : "Back to Projects"}
                    </NavLink>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/30">
                        {project.category[lang]}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white/85">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    {project.title[lang]}
                  </h1>

                  <p className="max-w-3xl text-sm sm:text-base text-white/85">
                    {project.desc[lang]}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {project.location[lang]}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {project.clientOwner}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <MotionCard>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isAr ? "وصف المشروع" : "Project Overview"}
                </h2>
                <p className="mt-3 leading-7 text-slate-700 dark:text-white/80 text-sm sm:text-base">
                  {project.desc[lang]}
                </p>

                <div className="mt-5 grid gap-3 text-sm text-slate-700 dark:text-white/80">
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                    {project.location[lang]}
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                    {project.year}
                  </div>
                </div>
              </MotionCard>

              {project.media && project.media.length > 0 && (
                <MediaGallery media={project.media} isAr={isAr} />
              )}
            </div>

            <div className="space-y-5">
              <MotionCard>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
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
                    label={isAr ? "قيمة العقد" : "Contract Value"}
                    value={project.value}
                  />
                </div>

                <div className="mt-6 h-px bg-black/10 dark:bg-white/10" />

                <div className="mt-6 flex flex-col gap-3">
                  <NavLink
                    to="/contact"
                    className={cx(
                      "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
                      "bg-sky-600 text-white hover:bg-sky-500"
                    )}
                  >
                    {isAr
                      ? "تواصل معنا بخصوص مشاريع مشابهة"
                      : "Discuss a similar project"}
                    <ArrowRight
                      className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
                    />
                  </NavLink>
                </div>
              </MotionCard>
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="flex items-end justify-between gap-3 flex-wrap">
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
                <ArrowRight
                  className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
                />
              </NavLink>
            </div>

            {related.length === 0 ? (
              <MotionCard className="mt-6">
                <p className="text-sm text-slate-700 dark:text-white/70">
                  {isAr
                    ? "لا توجد مشاريع مرتبطة متاحة حالياً."
                    : "No related projects available yet."}
                </p>
              </MotionCard>
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

            <div className="mt-8 sm:hidden">
              <NavLink
                to="/projects"
                className={cx(
                  "inline-flex items-center gap-2 font-semibold transition",
                  "text-emerald-700 hover:text-emerald-600",
                  "dark:text-emerald-300 dark:hover:text-emerald-200"
                )}
              >
                {isAr ? "عرض كل المشاريع" : "See All Projects"}
                <ArrowRight
                  className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
