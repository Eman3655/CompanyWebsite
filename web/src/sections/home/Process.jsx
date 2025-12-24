import { useState } from "react";
import { useLang } from "../../hooks/useLang";
import { homeData } from "../../data/homeData";

export default function Process() {
  const { lang } = useLang();
  const [active, setActive] = useState("04");

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          {lang === "ar" ? "منهجيتنا في التنفيذ" : "Our Proven Process"}
        </h2>
        <p className="mt-2 opacity-75">
          {lang === "ar"
            ? "من الرؤية إلى الواقع عبر مراحل واضحة"
            : "From vision to reality in structured phases"}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-7 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 opacity-70 rounded-full" />
        <div className="relative grid grid-cols-5 gap-2">
          {homeData.process.map((p) => {
            const isActive = p.n === active;
            return (
              <button
                key={p.n}
                onClick={() => setActive(p.n)}
                className="flex flex-col items-center gap-3"
                aria-label={`Step ${p.n}`}
              >
                <div
                  className={`grid place-items-center rounded-full font-extrabold border transition
                    ${isActive
                      ? "size-14 bg-blue-600 text-white border-blue-600"
                      : "size-12 bg-transparent text-blue-400 border-blue-400/60 hover:bg-white/5"}`}
                >
                  {p.n}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {homeData.process.map((p) => {
          const isActive = p.n === active;
          return (
            <div
              key={p.n}
              className={`rounded-2xl border p-5 transition
                ${isActive
                  ? "border-blue-500/60 bg-blue-500/5"
                  : "border-black/10 dark:border-white/10 bg-white dark:bg-slate-900/30"}`}
            >
              <div className="text-sm font-black text-blue-400">{p.n}</div>
              <h3 className="mt-2 font-extrabold">
                {p.title[lang]}
              </h3>

              <p className="mt-3 text-sm leading-7 opacity-80">
                {lang === "ar"
                  ? "وصف مختصر مؤقت لهذه المرحلة. يمكن تعديله حسب طريقة عمل شركتكم."
                  : "Temporary short description for this phase. You can customize it to match your workflow."}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

