export default function HeroContent() {
  return (
    <main className="absolute bottom-12 left-8 z-20 max-w-xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-[#c8a84b]/40 to-transparent rounded-full" />
          <span className="text-[#c8a84b] text-xs font-light relative z-10 tracking-widest uppercase">
            Спорт · Отдых · Праздники
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-[1.1] tracking-tight font-light text-white mb-5">
          <span className="font-semibold italic text-[#c8a84b]">Место,</span> где
          <br />
          <span className="font-light text-white">рождается</span>
          <br />
          <span className="font-semibold">энергия</span>
        </h1>

        <p className="text-sm font-light text-white/65 mb-8 leading-relaxed max-w-sm">
          Современный спортзал, уютная летняя веранда и площадка для незабываемых праздников —
          всё в одном месте для вас и вашей компании.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#services"
            className="px-8 py-3 rounded-full bg-[#c8a84b] text-black font-medium text-xs uppercase tracking-widest transition-all duration-200 hover:bg-[#d4b860] cursor-pointer"
          >
            Наши услуги
          </a>
          <a
            href="#contacts"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-light text-xs uppercase tracking-widest transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            Записаться
          </a>
        </div>
      </div>
    </main>
  )
}