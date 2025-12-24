import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { isRTL } from "../i18n/translations";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ar");

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = isRTL(lang) ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")),
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider />");
  return ctx;
}
