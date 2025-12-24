import { useLang } from "../../hooks/useLang";
import { homeData } from "../../data/homeData";

export default function Testimonials() {
  const { lang } = useLang();

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          {lang === "ar" ? "آراء العملاء" : "Client Testimonials"}
        </h2>
        <p className="mt-2 opacity-75">
          {lang === "ar"
            ? "ماذا يقول شركاؤنا عن العمل معنا"
            : "What our partners say about working with us"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {homeData.testimonials.map((x) => (
          <figure
            key={x.key}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900/30 p-6"
          >
            <div className="text-4xl text-blue-500/40 font-black">“</div>
            <blockquote className="mt-3 leading-7 opacity-90">
              {x.text[lang]}
            </blockquote>

            <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-4">
              <div className="font-extrabold">{x.name[lang]}</div>
              <div className="text-sm opacity-70">{x.role[lang]}</div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
