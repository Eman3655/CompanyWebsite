export default function ProjectCard({ p, lang }) {
  const cover = p.images?.[0];

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/30 hover:shadow-sm transition">
      <div className="h-40 bg-black/5 dark:bg-white/5">
        {cover ? <img src={cover} alt={p.title[lang]} className="w-full h-full object-cover" /> : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-extrabold leading-tight">{p.title[lang]}</h3>
          <span className="text-xs opacity-70">{p.year}</span>
        </div>

        <div className="mt-1 text-sm opacity-80">
          {p.category[lang]} • {p.location[lang]}
        </div>

        <p className="mt-3 text-sm leading-6 opacity-90">
          {p.summary[lang]}
        </p>
      </div>
    </div>
  );
}
