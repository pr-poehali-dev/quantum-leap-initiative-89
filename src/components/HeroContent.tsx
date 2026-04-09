export default function HeroContent() {
  return (
    <main className="absolute bottom-12 left-6 z-20 max-w-2xl">
      <div className="text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f85a00]/20 backdrop-blur-sm border border-[#f85a00]/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#f85a00] animate-pulse" />
          <span className="text-[#ff8a4a] text-xs font-semibold tracking-wide uppercase">
            Спорт · Отдых · Праздники
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-black italic text-white leading-none mb-4 uppercase">
          Заряжайся,
          <br />
          <span className="text-[#f85a00]">тренируйся,</span>
          <br />
          <span className="font-light not-italic text-white/80">отдыхай</span>
        </h1>

        <p className="text-sm font-normal text-white/60 mb-8 leading-relaxed max-w-sm">
          Спортзал, летняя веранда, бильярд и живая музыка — всё для тебя и твоей компании, в одном месте.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#services"
            className="px-7 py-3 rounded-full bg-[#f85a00] text-white font-bold text-sm uppercase tracking-wide transition-all duration-200 hover:bg-[#ff6a10] hover:scale-105 active:scale-95"
          >
            Что у нас есть
          </a>
          <a
            href="#contacts"
            className="px-7 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm uppercase tracking-wide transition-all duration-200 hover:bg-white/20"
          >
            Позвонить
          </a>
        </div>
      </div>
    </main>
  )
}
