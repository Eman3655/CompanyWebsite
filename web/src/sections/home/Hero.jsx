import { useLang } from "../../hooks/useLang";

export default function Hero() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dptlhu0s0/video/upload/f_mp4,q_auto/v1766161519/5590390-hd_1920_1080_30fps_cpqphw.mp4"
          type="video/mp4"
        />
      </video>

<div className="absolute inset-0 bg-gradient-to-r 
  from-slate-900/25 
  via-cyan-900/15 
  to-emerald-900/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/25 via-cyan-500/10 to-emerald-500/20" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl ${isAr ? "text-right" : "text-left"}`}>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] text-white drop-shadow-lg">
              {isAr ? (
  <>
    التميّز الهندسي،
    <span className="block">
      نبني الغد
    </span>
  </>
) : "Engineering Excellence, Building Tomorrow"}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/95 drop-shadow">
              {isAr
                ? "نقدّم حلولًا هندسية وتنفيذية مبتكرة مع أعلى معايير الجودة والسلامة والاستدامة."
                : "We deliver innovative engineering and construction solutions with precision, safety, and sustainability."}
            </p>

            <div className={`mt-8 flex flex-wrap gap-3 ${isAr ? "justify-end" : "justify-start"}`}>
              <a
                href="#services"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-sky-600 text-white font-semibold text-sm sm:text-base hover:bg-sky-500 transition shadow-lg shadow-sky-600/20"
              >
                {isAr ? "استعراض الخدمات" : "Explore Services"}
              </a>

              <a
                href="#projects"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/25 bg-white/5 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition"
              >
                {isAr ? "عرض المشاريع" : "View Projects"}
              </a>
            </div>

            <p className={`mt-6 text-xs sm:text-sm text-white/60 ${isAr ? "text-right" : "text-left"}`}>
              {isAr ? "مرّر للأسفل لاستكشاف المزيد" : "Scroll down to explore more"}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce select-none">
        ↓
      </div>
    </section>
  );
}





