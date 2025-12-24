import { useLang } from "../hooks/useLang";
import { t } from "../i18n/translations";

export default function NotFound() {
  const { lang } = useLang();
  const tr = t[lang];
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
      <h1 className="text-2xl font-extrabold">{tr.ui.notFound}</h1>
    </div>
  );
}
