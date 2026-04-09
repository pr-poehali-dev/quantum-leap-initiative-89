export default function Header() {
  const navItems = [
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#f85a00] flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">SL</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-base tracking-tight">SportLife</span>
            <span className="text-white/50 text-[9px] tracking-widest uppercase font-normal">Спорт & Отдых</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:block px-5 py-2 bg-[#f85a00] text-white text-sm font-semibold rounded-full hover:bg-[#ff6a10] transition-all duration-200 hover:scale-105"
        >
          Записаться
        </a>
      </div>
    </header>
  )
}
