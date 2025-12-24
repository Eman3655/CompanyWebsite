// src/data/servicesData.js
import { Building2, Route, Zap, Droplets, Package } from "lucide-react";

export const SERVICES = [
  {
    id: "building-construction",
    icon: Building2,
    title: { ar: "إنشاءات المباني", en: "Building Construction" },
    subtitle: {
      ar: "من السكني وحتى المرافق الصحية — تنفيذ متكامل وتسليم بمستوى احترافي.",
      en: "From residential to healthcare facilities — integrated delivery with professional handover.",
    },
    desc: {
      ar: "تنفيذ مبانٍ سكنية وإدارية ومؤسساتية وعامة، مع التشطيبات وإعادة التأهيل وحلول تسليم مفتاح.",
      en: "Construction of residential, administrative, institutional, and public buildings, including finishing, rehabilitation, and turnkey solutions.",
    },
    grade: { ar: "درجة II", en: "Grade II" },
    cover:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa3?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=75",
    ],
    bullets: {
      ar: [
        "تنفيذ وفق المواصفات والرسومات",
        "تنسيق كامل مع المالك والاستشاري",
        "إدارة جودة وسلامة (HSE)",
        "تسليم ضمن الجدول الزمني",
      ],
      en: [
        "Execution per specs and drawings",
        "Full coordination with client & consultant",
        "Quality & HSE management",
        "On-time delivery commitment",
      ],
    },
    scope: {
      ar: [
        "أعمال هيكل خرساني وتشطيبات",
        "إعادة تأهيل وتوسعات",
        "حلول تسليم مفتاح",
        "تنسيق كهروميكانيك ضمن المباني",
      ],
      en: [
        "Structural works and finishing",
        "Rehabilitation & extensions",
        "Turnkey solutions",
        "MEP coordination within buildings",
      ],
    },
    micro: {
      ar: [
        { k: "نمط التنفيذ", v: "تسليم متكامل" },
        { k: "تركيزنا", v: "جودة + سلامة" },
        { k: "القطاع", v: "مرافق عامة/صحية" },
      ],
      en: [
        { k: "Delivery", v: "End-to-end" },
        { k: "Focus", v: "Quality + HSE" },
        { k: "Sector", v: "Public/Healthcare" },
      ],
    },
  },

  {
    id: "roads-infrastructure",
    icon: Route,
    title: { ar: "الطرق والبنية التحتية", en: "Roads & Infrastructure Works" },
    subtitle: {
      ar: "تهيئة شبكات وطرق تخدم المجتمع… بخدمات داعمة ومعايير تنفيذ دقيقة.",
      en: "Road corridors and municipal infrastructure with disciplined execution.",
    },
    desc: {
      ar: "تنفيذ وتأهيل الطرق والأرصفة وأعمال الحفر والردم ومشاريع البنية التحتية البلدية.",
      en: "Road construction, rehabilitation, pavements, sidewalks, earthworks, and municipal infrastructure projects.",
    },
    grade: { ar: "درجة II", en: "Grade II" },
    cover:
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa3?auto=format&fit=crop&w=2200&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1465446751832-9f10e641fd33?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=75",
    ],
    bullets: {
      ar: [
        "رفع كفاءة البنية التحتية للطرق",
        "تنسيق خدمات (مياه/صرف/كهرباء) حسب الحاجة",
        "تحكم بالجودة والمواد",
        "تسليم مرحلي لتقليل المخاطر",
      ],
      en: [
        "Road corridor upgrades",
        "Utility coordination as needed",
        "Material & QA control",
        "Phased handover to reduce risk",
      ],
    },
    scope: {
      ar: ["أرصفة وبردورات", "حفر وردم وتسوية", "إعادة تأهيل طرق", "أعمال بلدية داعمة"],
      en: ["Pavements & curbstones", "Earthworks & grading", "Road rehabilitation", "Municipal supporting works"],
    },
    micro: {
      ar: [
        { k: "المخرجات", v: "طرق + خدمات" },
        { k: "النهج", v: "مرحلي" },
        { k: "الاستدامة", v: "تشغيل أطول" },
      ],
      en: [
        { k: "Output", v: "Road + utilities" },
        { k: "Approach", v: "Phased" },
        { k: "Durability", v: "Longer lifecycle" },
      ],
    },
  },

  {
    id: "electromechanical-works",
    icon: Zap,
    title: { ar: "الأعمال الكهروميكانيكية", en: "Electromechanical Works" },
    subtitle: {
      ar: "MEP بتنفيذ منضبط — فحص وتشغيل وتسليم موثق.",
      en: "Disciplined MEP delivery — testing, commissioning, documented handover.",
    },
    desc: {
      ar: "أعمال كهرباء (LV) وسباكة وHVAC وفحص وتشغيل وصيانة وفق متطلبات المشروع.",
      en: "Electrical installations (LV), plumbing works, HVAC systems, testing, commissioning, and maintenance.",
    },
    grade: { ar: "درجة III", en: "Grade III" },
    cover:
      "https://images.unsplash.com/photo-1581092335397-9fa341108f5d?auto=format&fit=crop&w=2200&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1581091870622-7c4245f6c1d1?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=1200&q=75",
    ],
    bullets: {
      ar: [
        "شبكات LV وتمديدات داخلية",
        "أنظمة HVAC وتهوية",
        "اختبارات وتشغيل وتسليم",
        "صيانة ودعم تشغيل حسب الحاجة",
      ],
      en: [
        "LV installations & cabling",
        "HVAC & ventilation systems",
        "Testing, commissioning & handover",
        "Maintenance support as needed",
      ],
    },
    scope: {
      ar: ["أعمال كهرباء LV", "سباكة/تغذية وصرف", "HVAC", "فحوصات وتشغيل وتسليم"],
      en: ["LV electrical works", "Plumbing & drainage", "HVAC", "Testing & handover"],
    },
    micro: {
      ar: [
        { k: "التسليم", v: "توثيق كامل" },
        { k: "الفحوص", v: "قبل التسليم" },
        { k: "التوافق", v: "حسب المتطلبات" },
      ],
      en: [
        { k: "Handover", v: "Documented" },
        { k: "Testing", v: "Pre-handover" },
        { k: "Compliance", v: "Per requirements" },
      ],
    },
  },

  {
    id: "water-sewerage-works",
    icon: Droplets,
    title: { ar: "أعمال المياه والصرف الصحي", en: "Water & Sewerage Works" },
    subtitle: {
      ar: "شبكات وحلول تصريف وإعادة تأهيل… بعناية تنفيذية عالية.",
      en: "Networks, drainage solutions, and rehabilitation with precise execution.",
    },
    desc: {
      ar: "شبكات مياه وصرف، خطوط وأنابيب وغرف تفتيش وأعمال تصريف وإعادة تأهيل الشبكات.",
      en: "Water supply networks, sewerage systems, pipelines, manholes, drainage works, and network rehabilitation.",
    },
    grade: { ar: "درجة V", en: "Grade V" },
    cover:
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=2200&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1567606400547-7f7f86f78f85?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1600869009498-8d429f88d075?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa3?auto=format&fit=crop&w=1200&q=75",
    ],
    bullets: {
      ar: ["تركيب خطوط وأنابيب", "غرف تفتيش ومناهل", "حلول تصريف", "تأهيل شبكات"],
      en: ["Pipelines installation", "Manholes & chambers", "Drainage solutions", "Network rehabilitation"],
    },
    scope: {
      ar: ["شبكات مياه", "شبكات صرف صحي", "تصريف أمطار", "إعادة تأهيل"],
      en: ["Water networks", "Sewerage networks", "Stormwater drainage", "Rehabilitation"],
    },
    micro: {
      ar: [
        { k: "التركيز", v: "اعتمادية" },
        { k: "التنفيذ", v: "مرحلي" },
        { k: "المخرجات", v: "شبكات مستدامة" },
      ],
      en: [
        { k: "Focus", v: "Reliability" },
        { k: "Execution", v: "Phased" },
        { k: "Output", v: "Sustainable networks" },
      ],
    },
  },

  {
    id: "general-trading-supply",
    icon: Package,
    title: { ar: "التجارة العامة والتوريد", en: "General Trading & Supply" },
    subtitle: {
      ar: "توريد مواد ومعدات داعمة لتنفيذ المشاريع — بجودة وموثوقية.",
      en: "Supplying materials & equipment that support project delivery — reliably.",
    },
    desc: {
      ar: "توريد مواد البناء ومعدات كهروميكانيكية ومواد البنية التحتية الداعمة لتنفيذ المشاريع.",
      en: "Supply of construction materials, electromechanical equipment, and infrastructure-related materials supporting project implementation.",
    },
    grade: { ar: "توريد/تجارة", en: "Trading/Supply" },
    cover:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1586528116493-0c3f4f6ed1c8?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa3?auto=format&fit=crop&w=1200&q=75",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=75",
    ],
    bullets: {
      ar: ["توريد مواد بناء", "معدات كهروميكانيك", "تجهيزات داعمة", "التزام بالمواصفات"],
      en: ["Construction materials", "Electromechanical equipment", "Supporting supplies", "Spec compliance"],
    },
    scope: {
      ar: ["مواد بناء", "معدات MEP", "مواد بنية تحتية", "توريد حسب الحاجة"],
      en: ["Construction materials", "MEP equipment", "Infrastructure supplies", "On-demand supply"],
    },
    micro: {
      ar: [
        { k: "النهج", v: "موثوقية" },
        { k: "الجودة", v: "حسب المواصفات" },
        { k: "التوريد", v: "مرن" },
      ],
      en: [
        { k: "Approach", v: "Reliable" },
        { k: "Quality", v: "Spec-based" },
        { k: "Supply", v: "Flexible" },
      ],
    },
  },
];

export const PROJECTS = [
  // Building Construction
  {
    id: "p-2007-roof-workshop-cafeteria",
    serviceId: "building-construction",
    year: "2007",
    name: { ar: "إنشاء سقف خرساني – ورشة وكافتيريا", en: "Construction of concrete roof – workshop & cafeteria" },
    client: { ar: "جامعة UCAS", en: "UCAS" },
    donor: { ar: "International Jumpstart", en: "International Jumpstart" },
    value: "USD 27,425",
  },
  {
    id: "p-2011-khan-younis-central-market",
    serviceId: "building-construction",
    year: "2011",
    name: { ar: "تأهيل سوق خان يونس المركزي", en: "Rehabilitation of Khan Younis Central Market" },
    client: { ar: "بلدية خان يونس", en: "Khan Younis Municipality" },
    donor: { ar: "KfW", en: "KfW" },
    value: "EUR 74,296",
  },
  {
    id: "p-2013-eye-hospital",
    serviceId: "building-construction",
    year: "2013",
    name: { ar: "تأهيل مستشفى العيون", en: "Rehabilitation of Eye Hospital" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "UAE Charity / IDB", en: "UAE Charity / IDB" },
    value: "EUR 226,877",
  },
  {
    id: "p-2014-al-durra-hospital",
    serviceId: "building-construction",
    year: "2014",
    name: { ar: "تأهيل مستشفى الدرة", en: "Rehabilitation of Al-Durra Hospital" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "ICRC", en: "ICRC" },
    value: "USD 436,894",
  },
  {
    id: "p-2017-al-sourani-clinic",
    serviceId: "building-construction",
    year: "2017",
    name: { ar: "إنشاء وتأهيل عيادة السوراني", en: "Construction & Rehabilitation – Al-Sourani Clinic" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "ICRC", en: "ICRC" },
    value: "USD 23,952",
  },
  {
    id: "p-2019-al-aqsa-emergency",
    serviceId: "building-construction",
    year: "2019",
    name: { ar: "تأهيل قسم الطوارئ – مستشفى الأقصى", en: "Emergency Department Rehabilitation – Al-Aqsa Hospital" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "Doctors of the World (France)", en: "Doctors of the World (France)" },
    value: "USD 34,259",
  },
  {
    id: "p-2021-infection-control-egyh",
    serviceId: "building-construction",
    year: "2021",
    name: { ar: "مبنى مكافحة العدوى – مستشفى غزة الأوروبي", en: "Infection Control Building – European Gaza Hospital" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "ICRC", en: "ICRC" },
    value: "ILS 275,115",
  },
  {
    id: "p-2024-phc-mawasi",
    serviceId: "building-construction",
    year: "2024",
    name: { ar: "عيادة رعاية صحية أولية – مواصي خان يونس", en: "Primary Healthcare Clinic – Mawasi Khan Younis" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "EMERGENCY", en: "EMERGENCY" },
    value: "USD 227,500",
  },
  {
    id: "p-2025-burns-yassin-nasser",
    serviceId: "building-construction",
    year: "2025",
    name: { ar: "تأهيل قسم الحروق – مستشفى ياسين ناصر", en: "Burns Department Rehabilitation – Yassin Nasser Hospital" },
    client: { ar: "وزارة الصحة", en: "Ministry of Health" },
    donor: { ar: "INTERBURNS", en: "INTERBURNS" },
    value: "USD 203,264",
  },

  // Roads
  {
    id: "p-2011-al-madaris-street",
    serviceId: "roads-infrastructure",
    year: "2011",
    name: { ar: "تطوير شارع المدارس – خزاعة", en: "Development of Al-Madaris Street – Khuza’a" },
    client: { ar: "بلدية خزاعة", en: "Khuza’a Municipality" },
    donor: { ar: "UNDP", en: "UNDP" },
    value: "EUR 43,050",
  },
  {
    id: "p-2012-salah-al-din-road-rafah",
    serviceId: "roads-infrastructure",
    year: "2012",
    name: { ar: "تأهيل شارع صلاح الدين – رفح", en: "Rehabilitation of Salah Al-Din Road – Rafah" },
    client: { ar: "وزارة الأشغال العامة", en: "Ministry of Public Works" },
    donor: { ar: "IDB / PEC", en: "IDB / PEC" },
    value: "USD 468,500",
  },

  // Electromechanical
  {
    id: "p-2012-automotive-electronics-workshop",
    serviceId: "electromechanical-works",
    year: "2012",
    name: { ar: "تأهيل ورشة إلكترونيات السيارات", en: "Rehabilitation of Automotive Electronics Workshop" },
    client: { ar: "جامعة UCAS", en: "UCAS" },
    donor: { ar: "Islamic Relief", en: "Islamic Relief" },
    value: "ILS 73,420",
  },
];
