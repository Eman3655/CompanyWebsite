import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import {
  ArrowRight,
  Building2,
  Route as RouteIcon,
  Zap,
  Droplets,
  Package,
  ShieldCheck,
  ClipboardCheck,
  Users,
  BadgeCheck,
  MapPin,
  Calendar,
  Phone,
  Mail,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
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

const CONTENT = {
  hero: {
    ar: {
      title: "نبني بثقة… ونُسلّم بجودة",
      subtitle:
        "خبرة تمتد منذ 2005 في الإنشاءات والبنية التحتية، مع التزام كامل بالامتثال ومتطلبات الجهات المانحة.",
      cta1: "تواصل معنا",
      cta2: "عرض الخدمات",
    },
    en: {
      title: "Build with Confidence. Deliver with Quality.",
      subtitle:
        "Established in 2005 with proven delivery across construction & infrastructure, fully aligned with donor compliance requirements.",
      cta1: "Contact Us",
      cta2: "Explore Services",
    },
  },

  overview: {
    ar: {
      title: "نبذة عن الشركة",
      text:
        "شركة المشروعات الهندسية هي شركة فلسطينية مرخصة للمقاولات والتجارة العامة والخدمات الصناعية، بخبرة تقارب عقدين في قطاع الإنشاءات والبنية التحتية، تأسست عام 2005 ومقرها خان يونس – فلسطين، وتقدم حلولًا هندسية موثوقة ومتوافقة وعالية الجودة للجهات الحكومية والمؤسسات الدولية والمنظمات الإنسانية والقطاع الخاص.",
    },
    en: {
      title: "Company Overview",
      text:
        "Engineering Projects Company is a licensed Palestinian contracting, general trading, and industrial services company with nearly two decades of proven experience in construction and infrastructure. Established in 2005 and headquartered in Khan Younis, Palestine, the company delivers reliable, compliant, and high-quality engineering solutions for public institutions, international organizations, humanitarian agencies, and private-sector clients.",
    },
  },

  experience: {
    ar: {
      title: "الخبرة والمكانة السوقية",
      text:
        "تمتلك الشركة سجلًا قويًا ومتّسقًا في المشاريع الممولة من الجهات المانحة والقطاع العام، مع خبرة خاصة في المنشآت الصحية. نفذت الشركة مشاريع ممولة من اللجنة الدولية للصليب الأحمر (ICRC) وجهات دولية أخرى، بما في ذلك برامج ممولة من USAID عبر شركاء، مع الالتزام بمتطلبات المشتريات والتقارير والامتثال.",
    },
    en: {
      title: "Experience & Market Position",
      text:
        "Engineering Projects Company has a strong and consistent track record in donor-funded and public-sector projects, with particular expertise in healthcare-related facilities. The company has implemented projects funded by the ICRC and other international donors, including USAID-financed programs through partner organizations, in compliance with donor procurement, reporting, and compliance requirements.",
    },
  },

  classification: {
    ar: {
      title: "التصنيف الرسمي للمقاول",
      items: [
        { label: "إنشاءات المباني", value: "Grade II", icon: Building2 },
        { label: "الطرق والبنية التحتية", value: "Grade II", icon: RouteIcon },
        { label: "الأعمال الكهروميكانيكية", value: "Grade III", icon: Zap },
        { label: "أعمال المياه والصرف الصحي", value: "Grade V", icon: Droplets },
      ],
    },
    en: {
      title: "Official Contractor Classification",
      items: [
        { label: "Buildings Construction", value: "Grade II", icon: Building2 },
        { label: "Roads & Infrastructure", value: "Grade II", icon: RouteIcon },
        { label: "Electromechanical Works", value: "Grade III", icon: Zap },
        { label: "Water & Sewerage Works", value: "Grade V", icon: Droplets },
      ],
    },
  },

  capabilities: {
    ar: {
      title: "الخدمات والقدرات الفنية",
      items: [
        {
          icon: Building2,
          title: "إنشاءات المباني (Grade II)",
          text:
            "إنشاء مبانٍ سكنية وإدارية ومؤسساتية وعامة، تشمل الأعمال الإنشائية والتشطيبات وإعادة التأهيل وحلول تسليم مفتاح.",
        },
        {
          icon: RouteIcon,
          title: "الطرق والبنية التحتية (Grade II)",
          text:
            "تنفيذ وتأهيل الطرق والأرصفة، أعمال الحفر والردم، ومشاريع البنية التحتية البلدية.",
        },
        {
          icon: Zap,
          title: "الأعمال الكهروميكانيكية (Grade III)",
          text:
            "تمديدات كهربائية (LV)، أعمال السباكة، أنظمة التكييف HVAC، الفحص والتشغيل والصيانة.",
        },
        {
          icon: Droplets,
          title: "أعمال المياه والصرف الصحي (Grade V)",
          text:
            "شبكات مياه وصرف، خطوط وأنابيب وغرف تفتيش وأعمال تصريف وإعادة تأهيل الشبكات.",
        },
        {
          icon: Package,
          title: "التجارة العامة والتوريد",
          text:
            "توريد مواد البناء والمعدات الكهروميكانيكية ومواد البنية التحتية الداعمة لتنفيذ المشاريع.",
        },
      ],
    },
    en: {
      title: "Services & Technical Capabilities",
      items: [
        {
          icon: Building2,
          title: "Building Construction (Grade II)",
          text:
            "Construction of residential, administrative, institutional, and public buildings, including structural works, finishing, rehabilitation, and turnkey solutions.",
        },
        {
          icon: RouteIcon,
          title: "Roads & Infrastructure Works (Grade II)",
          text:
            "Road construction, rehabilitation, pavements, sidewalks, earthworks, and municipal infrastructure projects.",
        },
        {
          icon: Zap,
          title: "Electromechanical Works (Grade III)",
          text:
            "Electrical installations (LV systems), plumbing works, HVAC systems, testing, commissioning, and maintenance.",
        },
        {
          icon: Droplets,
          title: "Water & Sewerage Works (Grade V)",
          text:
            "Water supply networks, sewerage systems, pipelines, manholes, drainage works, and network rehabilitation.",
        },
        {
          icon: Package,
          title: "General Trading & Supply",
          text:
            "Supply of construction materials, electromechanical equipment, and infrastructure-related materials supporting project implementation.",
        },
      ],
    },
  },

  quality: {
    ar: {
      title: "الجودة والسلامة والهيكل التنظيمي",
      blocks: [
        {
          icon: ClipboardCheck,
          title: "إدارة الجودة",
          text:
            "تطبيق ممارسات ضبط جودة عبر الإشراف المستمر بالموقع، والتحقق من المواد، والتنسيق مع العملاء والاستشاريين.",
        },
        {
          icon: ShieldCheck,
          title: "إدارة الصحة والسلامة والبيئة (HSE)",
          text:
            "تطبيق ومتابعة إجراءات السلامة والبيئة في جميع المشاريع بما يشمل معدات الوقاية PPE، وتحديد المخاطر، والالتزام بمتطلبات الجهات المانحة.",
        },
        {
          icon: Users,
          title: "الهيكل التنظيمي وفِرق التنفيذ",
          text:
            "هيكل تنظيمي واضح يقوده ملاك/إدارة مؤهلون هندسيًا، وتنفيذ المشاريع عبر هيكل قائم على المشروع مع فريق تقني مخصص لكل مشروع.",
        },
      ],
      teamTitle: "مكوّنات الفريق النموذجي للمشروع",
      team: [
        "مهندس مشروع / مهندس مقيم",
        "مهندس مساعد",
        "مشرف موقع",
        "مشرف ضبط الجودة",
        "فنيون وعمالة ماهرة",
      ],
    },
    en: {
      title: "Quality, HSE & Organizational Capacity",
      blocks: [
        {
          icon: ClipboardCheck,
          title: "Quality Management",
          text:
            "Established quality control practices through continuous site supervision, material verification, and coordination with clients and consultants.",
        },
        {
          icon: ShieldCheck,
          title: "Health, Safety & Environmental (HSE) Management",
          text:
            "HSE practices enforced across projects including PPE usage, hazard identification, and compliance with donor requirements.",
        },
        {
          icon: Users,
          title: "Organizational Structure & Delivery Teams",
          text:
            "Clear organizational structure led by engineering-qualified owners/management, with project-based delivery and a dedicated technical team assigned to each project.",
        },
      ],
      teamTitle: "Typical project team includes",
      team: [
        "Project / Resident Engineer",
        "Assistant Engineer",
        "Site Supervisor",
        "Quality Control Supervisor",
        "Skilled technical staff and labor",
      ],
    },
  },

  financial: {
    ar: {
      title: "القدرة المالية والعلاقات المصرفية",
      text:
        "تحافظ الشركة على وضع مالي سليم مدعوم باستقرار تشغيلي وإدارة مالية رشيدة، وتعمل عبر علاقات مصرفية ثابتة مع مؤسسات مالية محلية لإدارة التدفقات النقدية وسداد الموردين والالتزامات التعاقدية. أثبتت الشركة قدرتها على تنفيذ مشاريع متوسطة وكبيرة بما في ذلك مشاريع ممولة دوليًا، مع تلبية متطلبات الدفعات المقدمة والاستقطاعات وتأخر السداد. ويمكن تقديم بيانات مالية تفصيلية ومراجع بنكية عند الطلب ضمن إجراءات التأهيل المسبق أو العطاءات.",
      note: "يمكن تقديم البيانات المالية والمراجع البنكية رسميًا عند الطلب.",
    },
    en: {
      title: "Financial Capacity & Banking Relations",
      text:
        "Engineering Projects Company maintains sound financial standing supported by long-term operational stability and prudent financial management. The company operates through established banking relationships with local financial institutions, enabling effective management of project cash flows, supplier payments, and contractual financial obligations. The company has demonstrated the capability to execute medium to large-scale projects, including donor-funded and public-sector contracts, while meeting advance funding, retention, and delayed payment requirements. Detailed financial statements, bank references, and credit information can be provided upon official request as part of prequalification or tendering procedures.",
      note: "Detailed financial statements and bank references can be provided upon official request.",
    },
  },

  companyInfo: {
    ar: {
      title: "معلومات الشركة والتواصل",
      items: [
        { icon: BadgeCheck, label: "اسم الشركة", value: "شركة المشروعات الهندسية" },
        { icon: Calendar, label: "سنة التأسيس", value: "2005" },
        { icon: MapPin, label: "المقر الرئيسي", value: "خانيونس – فلسطين" },
        { icon: FileText, label: "السجل التجاري", value: "27657" },
        {
          icon: Building2,
          label: "الأنشطة المرخصة",
          value: "مقاولات عامة • تجارة عامة • خدمات صناعية",
        },
        { icon: Mail, label: "البريد الإلكتروني", value: "enganasrekeb@gmail.com" },
        { icon: Phone, label: "هاتف/فاكس", value: "+970 8 2072330" },
        { icon: Phone, label: "الجوال", value: "+970 599 401196" },
        { icon: FileText, label: "الموقع الإلكتروني", value: "Under Development" },
      ],
    },
    en: {
      title: "Company Information & Contact",
      items: [
        { icon: BadgeCheck, label: "Company Name", value: "Engineering Projects Company" },
        { icon: Calendar, label: "Year of Establishment", value: "2005" },
        { icon: MapPin, label: "Head Office", value: "Khan Younis – Palestine" },
        { icon: FileText, label: "Commercial Registration", value: "27657" },
        {
          icon: Building2,
          label: "Licensed Activities",
          value: "General Contracting • General Trading • Industrial Services",
        },
        { icon: Mail, label: "Email", value: "enganasrekeb@gmail.com" },
        { icon: Phone, label: "Tel / Fax", value: "+970 8 2072330" },
        { icon: Phone, label: "Mobile", value: "+970 599 401196" },
        { icon: FileText, label: "Website", value: "Under Development" },
      ],
    },
  },

  projects: [
    {
      year: "2007",
      title: { ar: "إنشاء سقف خرساني – ورشة وكافتيريا", en: "Construction of concrete roof – workshop & cafeteria" },
      client: { ar: "جامعة UCAS", en: "UCAS" },
      donor: { ar: "International Jumpstart", en: "International Jumpstart" },
      value: "USD 27,425",
    },
    {
      year: "2011",
      title: { ar: "تأهيل سوق خان يونس المركزي", en: "Rehabilitation of Khan Younis Central Market" },
      client: { ar: "بلدية خان يونس", en: "Khan Younis Municipality" },
      donor: { ar: "KfW", en: "KfW" },
      value: "EUR 74,296",
    },
    {
      year: "2011",
      title: { ar: "تطوير شارع المدارس – خزاعة", en: "Development of Al-Madaris Street – Khuza’a" },
      client: { ar: "بلدية خزاعة", en: "Khuza’a Municipality" },
      donor: { ar: "UNDP", en: "UNDP" },
      value: "EUR 43,050",
    },
    {
      year: "2012",
      title: { ar: "تأهيل ورشة إلكترونيات السيارات", en: "Rehabilitation of Automotive Electronics Workshop" },
      client: { ar: "جامعة UCAS", en: "UCAS" },
      donor: { ar: "Islamic Relief", en: "Islamic Relief" },
      value: "ILS 73,420",
    },
    {
      year: "2012",
      title: { ar: "تأهيل شارع صلاح الدين – رفح", en: "Rehabilitation of Salah Al-Din Road – Rafah" },
      client: { ar: "وزارة الأشغال العامة", en: "Ministry of Public Works" },
      donor: { ar: "IDB / PEC", en: "IDB / PEC" },
      value: "USD 468,500",
    },
    {
      year: "2013",
      title: { ar: "تأهيل مستشفى العيون", en: "Rehabilitation of Eye Hospital" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "UAE Charity / IDB", en: "UAE Charity / IDB" },
      value: "EUR 226,877",
    },
    {
      year: "2014",
      title: { ar: "تأهيل مستشفى الدرة", en: "Rehabilitation of Al-Durra Hospital" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "ICRC", en: "ICRC" },
      value: "USD 436,894",
    },
    {
      year: "2017",
      title: { ar: "إنشاء وتأهيل عيادة السوراني", en: "Construction & Rehabilitation – Al-Sourani Clinic" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "ICRC", en: "ICRC" },
      value: "USD 23,952",
    },
    {
      year: "2019",
      title: { ar: "تأهيل قسم الطوارئ – مستشفى الأقصى", en: "Emergency Department Rehabilitation – Al-Aqsa Hospital" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "Doctors of the World (France)", en: "Doctors of the World (France)" },
      value: "USD 34,259",
    },
    {
      year: "2021",
      title: { ar: "مبنى مكافحة العدوى – مستشفى غزة الأوروبي", en: "Infection Control Building – European Gaza Hospital" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "ICRC", en: "ICRC" },
      value: "ILS 275,115",
    },
    {
      year: "2024",
      title: { ar: "عيادة رعاية صحية أولية – مواصي خان يونس", en: "Primary Healthcare Clinic – Mawasi Khan Younis" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "EMERGENCY", en: "EMERGENCY" },
      value: "USD 227,500",
    },
    {
      year: "2025",
      title: { ar: "تأهيل قسم الحروق – مستشفى ياسين ناصر", en: "Burns Department Rehabilitation – Yassin Nasser Hospital" },
      client: { ar: "وزارة الصحة", en: "Ministry of Health" },
      donor: { ar: "INTERBURNS", en: "INTERBURNS" },
      value: "USD 203,264",
    },
  ],
};

function InfoTile({ icon: Icon, label, value, isLink = false, href }) {
  const Wrapper = isLink ? "a" : "div";
  const props = isLink
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <div
      className="
        rounded-2xl border border-black/10 bg-black/[0.02]
        dark:border-white/10 dark:bg-white/[0.03]
        p-4
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            h-10 w-10 rounded-xl grid place-items-center
            bg-sky-500/12 border border-sky-500/20 text-sky-700
            dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
            shrink-0
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-500 dark:text-white/60">
            {label}
          </div>

          {isLink ? (
            <a
              {...props}
              className="mt-1 inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white break-words hover:underline"
            >
              <span className="break-words">{value}</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          ) : (
            <div className="mt-1 font-semibold text-slate-900 dark:text-white break-words">
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const t = (obj) => obj[lang];
  const hero = t(CONTENT.hero);

  const sortedProjects = useMemo(() => {
    return [...CONTENT.projects].sort((a, b) => Number(b.year) - Number(a.year));
  }, []);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, 6);

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="w-full">
      <header className="relative overflow-hidden">
        <div className="relative h-[62svh] min-h-[460px]">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=70"
            alt="Engineering Projects Company"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-emerald-500/15" />

          <div className="relative z-10 h-full flex items-end">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
              <Reveal>

                <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold text-white leading-[1.05] drop-shadow">
                  {hero.title}
                </h1>

                <p className="mt-4 max-w-3xl text-white/85">{hero.subtitle}</p>

                <div className={cx("mt-8 flex flex-wrap gap-3", isAr ? "justify-end" : "justify-start")}>
                  <NavLink
                    to="/contact"
                    className="
                      rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white
                      hover:bg-sky-500 transition shadow-lg shadow-sky-600/20
                    "
                  >
                    {hero.cta1}
                  </NavLink>

                  <NavLink
                    to="/services"
                    className="
                      rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white
                      hover:bg-white/10 transition
                    "
                  >
                    {hero.cta2}
                  </NavLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            <MotionCard className="h-full">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t(CONTENT.overview).title}
              </h2>
              <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                {t(CONTENT.overview).text}
              </p>
            </MotionCard>

            <MotionCard className="h-full">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t(CONTENT.experience).title}
              </h2>
              <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                {t(CONTENT.experience).text}
              </p>
            </MotionCard>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className={cx("mb-10", isAr ? "text-right" : "text-left")}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t(CONTENT.classification).title}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {t(CONTENT.classification).items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <MotionCard key={idx} className="p-0 h-full">
                  <div className="p-6 sm:p-7 h-full flex items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          h-12 w-12 rounded-2xl grid place-items-center
                          bg-sky-500/12 border border-sky-500/20 text-sky-700
                          dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {it.label}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-white/70">
                          {it.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className={cx("mb-10", isAr ? "text-right" : "text-left")}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t(CONTENT.capabilities).title}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {t(CONTENT.capabilities).items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <MotionCard key={idx} className="h-full">
                  <div
                    className="
                      h-12 w-12 rounded-2xl grid place-items-center
                      bg-sky-500/10 border border-sky-500/20 text-sky-700
                      dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-slate-900 dark:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                    {it.text}
                  </p>
                  
                </MotionCard>
              );
            })}
          </div>
        </div>
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
      </section>

      <section className="py-16 bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className={cx("mb-10", isAr ? "text-right" : "text-left")}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {isAr ? "خبرات ذات صلة" : "Relevant Experience"}
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600 dark:text-white/70">
                {isAr
                  ? "مختارات من المشاريع المنفذة (الأحدث أولاً)."
                  : "A curated selection of delivered projects (latest first)."}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            {visibleProjects.map((p, idx) => (
              <MotionCard key={idx} className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-500 dark:text-white/60">
                      {p.year}
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                      {p.title[lang]}
                    </div>
                  </div>

                  <span
                    className="
                      text-xs font-semibold
                      text-emerald-300/80
                      bg-emerald-500/10
                      border border-emerald-400/20
                      rounded-full px-3 py-1
                      shrink-0
                    "
                  >
                    {p.value}
                  </span>

                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-white/80">
                  <div>
                    <span className="font-bold">{isAr ? "العميل: " : "Client: "}</span>
                    {p.client[lang]}
                  </div>
                  <div>
                    <span className="font-bold">{isAr ? "الجهة المانحة: " : "Donor: "}</span>
                    {p.donor[lang]}
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>

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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className={cx("mb-10", isAr ? "text-right" : "text-left")}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {t(CONTENT.quality).title}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {t(CONTENT.quality).blocks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <MotionCard key={idx} className="h-full">
                  <div
                    className="
                      h-12 w-12 rounded-2xl grid place-items-center
                      bg-sky-500/12 border border-sky-500/20 text-sky-700
                      dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-slate-900 dark:text-white">
                    {b.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                    {b.text}
                  </p>
                </MotionCard>
              );
            })}
          </div>

          <div className="mt-8">
            <MotionCard>
              <div className="flex items-start gap-4">
                <Users className="h-7 w-7 text-sky-600 dark:text-sky-300 shrink-0" />
                <div className="min-w-0 w-full">
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {t(CONTENT.quality).teamTitle}
                  </div>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {t(CONTENT.quality).team.map((x, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-white/80"
                      >
                  <BadgeCheck className="h-5 w-5 text-sky-600 dark:text-sky-300 mt-0.5" />
                        <span className="leading-6">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionCard>
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-7 w-7 text-sky-600 shrink-0" />
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t(CONTENT.financial).title}
                </h2>
                <p className="mt-3 leading-7 text-slate-700 dark:text-white/80">
                  {t(CONTENT.financial).text}
                </p>
                <div className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                </div>
              </div>
            </div>
          </MotionCard>
        </div>
      </section>

<section className="py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Reveal>
      <div className={cx("mb-10", isAr ? "text-right" : "text-left")}>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {t(CONTENT.companyInfo).title}
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-white/70">
          {isAr
            ? "بيانات الشركة وطرق التواصل."
            : "Company details and contact information."}
        </p>
      </div>
    </Reveal>

    {(() => {
      const extraCompanyInfo = [
        {
          icon: ShieldCheck,
          label: isAr ? "الامتثال" : "Compliance",
          value: isAr
            ? "التزام بمتطلبات الجهات المانحة والمشتريات والتقارير"
            : "Aligned with donor procurement, reporting & compliance requirements",
        },
        {
          icon: MapPin,
          label: isAr ? "نطاق العمل" : "Coverage",
          value: isAr ? "فلسطين — قطاع غزة" : "Palestine — Gaza Strip",
        },
      ];

      const extraContactInfo = [
        {
          icon: Calendar,
          label: isAr ? "ساعات التواصل" : "Contact Hours",
          value: isAr ? "أيام العمل الرسمية" : "During business days",
        },
      ];

      const Tile = ({ icon: Icon, label, value }) => (
        <div
          className="
            rounded-2xl border border-black/10 bg-black/[0.02]
            dark:border-white/10 dark:bg-white/[0.03]
            p-4
          "
        >
          <div className="flex items-start gap-3 min-w-0">
            <div
              className="
                h-10 w-10 rounded-xl grid place-items-center shrink-0
                bg-sky-500/12 border border-sky-500/20 text-sky-700
                dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
              "
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-500 dark:text-white/60">
                {label}
              </div>
              <div className="mt-1 font-semibold text-slate-900 dark:text-white break-words">
                {value}
              </div>
            </div>
          </div>
        </div>
      );

      const items = t(CONTENT.companyInfo).items;

      const companyItems = items.filter((it) => {
        const v = String(it.value || "");
        const isEmail = v.includes("@");
        const isPhone = /^[+0-9]/.test(v.trim());
        const isWebsite =
          String(it.label).toLowerCase().includes("website") ||
          String(it.label).includes("الموقع");
        return !isEmail && !isPhone && !isWebsite;
      });

      const contactItems = items.filter((it) => {
        const v = String(it.value || "");
        const isEmail = v.includes("@");
        const isPhone = /^[+0-9]/.test(v.trim());
        const isWebsite =
          String(it.label).toLowerCase().includes("website") ||
          String(it.label).includes("الموقع");
        return isEmail || isPhone || isWebsite;
      });

      return (
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          <MotionCard className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isAr ? "معلومات الشركة" : "Company Info"}
                </h3>
              </div>

              <div
                className="
                  shrink-0 h-11 w-11 rounded-2xl grid place-items-center
                  bg-sky-500/12 border border-sky-500/20 text-sky-700
                  dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                "
              >
                <FileText className="h-5 w-5" />
              </div>
            </div>

<div className="mt-6 grid gap-4">
  {[...companyItems, ...extraCompanyInfo].map((it, idx) => (
    <div
      key={`ci-long-${idx}`}
      className="
        rounded-2xl border border-black/10 bg-black/[0.02]
        dark:border-white/10 dark:bg-white/[0.03]
        p-4
      "
    >
      <div className="flex items-center gap-4 min-w-0">
        <div
          className="
            h-12 w-12 rounded-2xl grid place-items-center shrink-0
            bg-sky-500/12 border border-sky-500/20 text-sky-700
            dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
          "
        >
          <it.icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-500 dark:text-white/60">
            {it.label}
          </div>
          <div className="mt-1 font-semibold text-slate-900 dark:text-white break-words">
            {it.value}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


          </MotionCard>

          <MotionCard className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isAr ? "التواصل" : "Contact"}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                  {isAr ? "اختر الطريقة الأنسب للتواصل." : "Choose the easiest way to reach us."}
                </p>
              </div>

              <div
                className="
                  shrink-0 h-11 w-11 rounded-2xl grid place-items-center
                  bg-sky-500/12 border border-sky-500/20 text-sky-700
                  dark:bg-sky-500/15 dark:border-sky-400/25 dark:text-sky-300
                "
              >
                <Phone className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {contactItems.map((it, idx) => (
                <Tile
                  key={`ct-${idx}`}
                  icon={it.icon}
                  label={it.label}
                  value={it.value}
                />
              ))}

              {extraContactInfo.map((x, idx) => (
                <Tile
                  key={`xct-${idx}`}
                  icon={x.icon}
                  label={x.label}
                  value={x.value}
                />
              ))}

              <div className="pt-2 grid gap-3">
                <NavLink
                  to="/contact"
                  className="
                    inline-flex items-center justify-center gap-2 rounded-xl
                    bg-sky-600 px-5 py-3 text-sm font-semibold text-white
                    hover:bg-sky-500 transition
                  "
                >
                  {isAr ? "تواصل الآن" : "Contact Now"}
                  <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
                </NavLink>

                <NavLink
                  to="/services"
                  className="
                    inline-flex items-center justify-center gap-2 rounded-xl
                    border border-black/10 bg-black/[0.03] px-5 py-3
                    text-sm font-semibold text-slate-900 hover:bg-black/[0.05]
                    dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10
                    transition
                  "
                >
                  {isAr ? "عرض الخدمات" : "View Services"}
                  <ArrowRight className={cx("h-4 w-4", isAr && "rotate-180")} />
                </NavLink>
              </div>
            </div>
          </MotionCard>
        </div>
      );
    })()}
  </div>
</section>


    </main>
  );
}
