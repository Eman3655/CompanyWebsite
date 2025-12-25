import React, { useMemo } from "react";
import { useLang } from "../hooks/useLang";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const CONTACT = useMemo(
    () => ({
      addressAR: "خانيونس – فلسطين",
      addressEN: "Khan Younis – Palestine",
      telfax: "+970 8 2072330",
      mobile: "+972 599 401196",
      email: "enganasrekeb@gmail.com",
    }),
    []
  );

  const t = useMemo(
    () => ({
      heroTitle: isAr ? "اتصل بنا" : "Contact Us",
      heroSub: isAr
        ? "للاستفسارات والعطاءات وطلبات العروض، تواصل معنا مباشرة عبر القنوات أدناه."
        : "For inquiries, tenders, and RFPs, reach us directly via the channels below.",
      sections: {
        contact: isAr ? "معلومات التواصل" : "Contact Information",
        map: isAr ? "موقع المقر" : "Head Office Location",
        quick: isAr ? "إجراءات سريعة" : "Quick Actions",
      },
      labels: {
        telfax: isAr ? "هاتف/فاكس" : "Tel/Fax",
        mobile: isAr ? "جوال" : "Mobile",
        email: isAr ? "البريد الإلكتروني" : "Email",
        address: isAr ? "العنوان" : "Address",
        hours: isAr ? "ساعات التواصل" : "Contact Hours",
        hoursHint: isAr ? "الرد خلال أيام العمل الرسمية." : "We respond during business days.",
        emailUs: isAr ? "مراسلة عبر البريد" : "Email Us",
        whatsapp: isAr ? "مراسلة واتساب" : "WhatsApp Chat",
      },
    }),
    [isAr]
  );

 const emailHref = useMemo(() => {
  return `mailto:${CONTACT.email}`;
}, [CONTACT.email]);


const whatsappHref = useMemo(() => {
  const num = CONTACT.mobile.replace(/\D/g, ""); 
  return `https://wa.me/${num}`;
}, [CONTACT.mobile]);

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-black/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/[0.03] shadow-[0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.heroTitle}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300/85">
            {t.heroSub}
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/[0.03] shadow-[0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.sections.contact}
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-700 dark:text-sky-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {t.labels.address}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {isAr ? CONTACT.addressAR : CONTACT.addressEN}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-700 dark:text-sky-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {t.labels.telfax}
                  </div>
                  <a
                    href={`tel:${CONTACT.telfax}`}
                    className="mt-1 block font-semibold text-slate-900 hover:text-sky-700 dark:text-white"
                  >
                    {CONTACT.telfax}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-700 dark:text-sky-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {t.labels.mobile}
                  </div>
                  <a
                    href={`tel:${CONTACT.mobile}`}
                    className="mt-1 block font-semibold text-slate-900 hover:text-sky-700 dark:text-white"
                  >
                    {CONTACT.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-700 dark:text-sky-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {t.labels.email}
                  </div>
                  <a
                    href={emailHref}
                    className="mt-1 block font-semibold text-slate-900 hover:text-sky-700 dark:text-white break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-700 dark:text-sky-300">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {t.labels.hours}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {t.labels.hoursHint}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/[0.03] shadow-[0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.sections.quick}
            </h2>

            <div className="mt-6 grid gap-4">
              <a
                href={emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500 transition"
              >
                <Mail className="h-4 w-4" />
                {t.labels.emailUs}
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-600/90 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition"
              >
                <MessageSquare className="h-4 w-4" />
                {t.labels.whatsapp}
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: isAr
                ? "شركة المشروعات الهندسية"
                : "Engineering Projects Company",
              url: "https://companywebsite-production.up.railway.app/",
              email: CONTACT.email,
              telephone: CONTACT.telfax,
              address: {
                "@type": "PostalAddress",
                addressCountry: "PS",
                addressLocality: isAr ? "خانيونس" : "Khan Younis",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: CONTACT.mobile,
                  contactType: "customer service",
                  areaServed: "PS",
                  availableLanguage: ["ar", "en"],
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  );
}
