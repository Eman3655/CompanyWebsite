export const isRTL = (lang) => lang === "ar";

export const t = {
  ar: {
    brand: "شركة المشروعات الهندسية",
    nav: { home: "الرئيسية", about: "من نحن", projects: "المشاريع", contact: "تواصل" },
    ui: { langToggle: "EN", dark: "داكن", light: "فاتح", all: "الكل", notFound: "الصفحة غير موجودة" },
    home: { title: "واجهة مؤقتة لتصوّر الموقع", ctaProjects: "مشاهدة المشاريع", ctaContact: "تواصل معنا" },
    about: { title: "من نحن" },
    projects: { title: "المشاريع", filter: "التصنيف" },
    contact: { title: "تواصل" }
  },
  en: {
    brand: "Engineering Projects Company",
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    ui: { langToggle: "AR", dark: "Dark", light: "Light", all: "All", notFound: "Page not found" },
    home: { title: "Temporary prototype for the website", ctaProjects: "View Projects", ctaContact: "Contact Us" },
    about: { title: "About" },
    projects: { title: "Projects", filter: "Category" },
    contact: { title: "Contact" }
  }
};
