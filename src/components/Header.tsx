export default function Header() {
  const navItems = [
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col leading-none">
          <span className="text-white font-semibold text-lg tracking-wide uppercase">SportLife</span>
          <span className="text-[#c8a84b] text-[10px] tracking-[0.2em] uppercase font-light">Спорт & Отдых</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-[#c8a84b] transition-colors duration-300 text-xs uppercase tracking-widest font-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="hidden md:block px-6 py-2 border border-[#c8a84b]/60 text-[#c8a84b] text-xs uppercase tracking-widest hover:bg-[#c8a84b]/10 transition-all duration-300 rounded-full"
        >
          Записаться
        </a>
      </div>
    </header>
  )
}