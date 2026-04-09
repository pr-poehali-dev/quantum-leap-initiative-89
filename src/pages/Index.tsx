import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Dumbbell",
    title: "Спортзал",
    desc: "Силовое оборудование, штанги, стойки — для серьёзных тренировок и любого уровня подготовки.",
    tag: "Фитнес",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/8d441164-2571-4518-bbef-e45b371a3772.jpg",
  },
  {
    icon: "Sunset",
    title: "Летняя веранда",
    desc: "Деревянные столы под прозрачной крышей — место для встреч, отдыха и тихих вечеров.",
    tag: "Отдых",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/3ef8e5e7-d3d6-4d78-b6c5-3ac3f557e872.png",
  },
  {
    icon: "PartyPopper",
    title: "Аренда зала",
    desc: "Дни рождения, корпоративы, праздники. Бильярд и живая музыка — уже внутри.",
    tag: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/400c4805-5f4b-4f50-8100-7b17b99da362.png",
  },
]

const extras = [
  {
    icon: "CircleDot",
    title: "Бильярд",
    desc: "Профессиональный стол — отличное развлечение для компании.",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/2957da76-1d02-408f-a86b-df97f90f6175.jpg",
  },
  {
    icon: "Music",
    title: "Музыкальная установка",
    desc: "Гитары, синтезаторы, микрофоны — всё для живого звука и репетиций.",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/fb040cc6-8c26-4208-9bb0-f1a614dc0220.jpg",
  },
]

const reviews = [
  {
    name: "Анна М.",
    role: "Постоянный клиент",
    text: "Хожу уже полгода — тренеры внимательные, оборудование в порядке. Атмосфера реально заряжает!",
    rating: 5,
  },
  {
    name: "Дмитрий К.",
    role: "Провёл корпоратив",
    text: "Арендовали зал на 40 человек. Всё чётко — и весело, и вкусно, и без лишних заморочек.",
    rating: 5,
  },
  {
    name: "Елена В.",
    role: "День рождения",
    text: "Отмечали юбилей на веранде. Гости до сих пор вспоминают — место просто огонь!",
    rating: 5,
  },
]

const faqs = [
  {
    q: "Как записаться на тренировку?",
    a: "Позвоните, напишите в WhatsApp или заполните форму. Подберём удобное время и тренера.",
  },
  {
    q: "Есть ли пробное занятие?",
    a: "Да! Первое занятие в спортзале — бесплатно. Приходи познакомиться.",
  },
  {
    q: "Как забронировать зал?",
    a: "Пишите или звоните — обсудим дату, помжем с организацией: декор, кейтеринг, музыка.",
  },
  {
    q: "Когда вы работаете?",
    a: "Спортзал — ежедневно с 7:00 до 23:00. Веранда и банкетный зал — по записи.",
  },
  {
    q: "Есть абонементы?",
    a: "Да — месяц и год со скидкой до 30%. Есть семейный тариф.",
  },
]

export default function Index() {
  return (
    <div className="font-sans">
      {/* HERO */}
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>

      {/* О КОМПАНИИ */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[#f85a00] text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-6 h-0.5 bg-[#f85a00]" />
              О нас
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-[#0f1723] leading-none mb-6">
              Больше чем<br />
              <span className="text-[#f85a00] italic">спортклуб</span>
            </h2>
            <p className="text-[#0f1723]/60 leading-relaxed mb-5 text-base">
              SportLife — спортзал, веранда, бильярд и живая музыка в одном месте. Тренируйся, тусуйся, отмечай — всё здесь.
            </p>
            <p className="text-[#0f1723]/50 leading-relaxed text-sm">
              5 лет создаём атмосферу, в которую хочется возвращаться. Крутая команда и искренняя забота о каждом.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5+", label: "лет опыта", icon: "Trophy" },
              { num: "1200+", label: "клиентов", icon: "Users" },
              { num: "3", label: "пространства", icon: "MapPin" },
              { num: "20+", label: "тренеров", icon: "Zap" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group bg-[#f5f6f8] rounded-2xl p-6 hover:bg-[#f85a00] transition-colors duration-300 cursor-default"
              >
                <Icon name={stat.icon} size={20} className="text-[#f85a00] group-hover:text-white mb-3 transition-colors" />
                <div className="text-3xl font-black text-[#0f1723] group-hover:text-white leading-none mb-1 transition-colors">{stat.num}</div>
                <div className="text-xs text-[#0f1723]/50 group-hover:text-white/80 uppercase tracking-wider transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="bg-[#0f1723] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[#f85a00] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-6 h-0.5 bg-[#f85a00]" />
                Услуги
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white leading-none">
                Всё в одном<br />
                <span className="text-[#f85a00] italic">месте</span>
              </h2>
            </div>
            <a
              href="#contacts"
              className="self-start md:self-auto px-6 py-3 bg-[#f85a00] text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-[#ff6a10] transition-all hover:scale-105 whitespace-nowrap"
            >
              Записаться
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1723] via-[#0f1723]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest bg-[#f85a00] px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 group-hover:border-[#f85a00]/40 transition-colors rounded-b-2xl -mt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={s.icon} size={16} className="text-[#f85a00]" />
                    <h3 className="text-white font-bold text-base">{s.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4 block">Дополнительно</span>
            <div className="grid md:grid-cols-2 gap-4">
              {extras.map((e) => (
                <div
                  key={e.title}
                  className="group flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#f85a00]/40 transition-all duration-300"
                >
                  <div className="w-32 h-24 shrink-0 overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="py-3 pr-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon name={e.icon} size={14} className="text-[#f85a00]" />
                      <h4 className="text-white font-bold text-sm">{e.title}</h4>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="bg-[#f5f6f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-[#f85a00] text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-6 h-0.5 bg-[#f85a00]" />
              Отзывы
              <span className="w-6 h-0.5 bg-[#f85a00]" />
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-[#0f1723] leading-none">
              Говорят наши<br />
              <span className="text-[#f85a00] italic">клиенты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#f85a00] fill-[#f85a00]" />
                  ))}
                </div>
                <p className="text-[#0f1723]/70 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f85a00]/15 flex items-center justify-center">
                    <span className="text-[#f85a00] font-black text-xs">{r.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[#0f1723] font-bold text-sm">{r.name}</div>
                    <div className="text-[#0f1723]/40 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-[#f85a00] text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-6 h-0.5 bg-[#f85a00]" />
              FAQ
              <span className="w-6 h-0.5 bg-[#f85a00]" />
            </span>
            <h2 className="font-display text-5xl font-black uppercase text-[#0f1723] leading-none">
              Частые<br /><span className="text-[#f85a00] italic">вопросы</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="group bg-[#f5f6f8] hover:bg-[#f85a00]/5 border border-transparent hover:border-[#f85a00]/20 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#f85a00]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#f85a00]/25 transition-colors">
                    <Icon name="Plus" size={12} className="text-[#f85a00]" />
                  </div>
                  <div>
                    <h3 className="text-[#0f1723] font-bold text-sm mb-2">{f.q}</h3>
                    <p className="text-[#0f1723]/55 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-[#0f1723] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[#f85a00] text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-6 h-0.5 bg-[#f85a00]" />
              Контакты
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
              Приходи<br />
              <span className="text-[#f85a00] italic">к нам!</span>
            </h2>
            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                { icon: "MessageCircle", label: "WhatsApp", value: "+7 (900) 000-00-00" },
                { icon: "MapPin", label: "Адрес", value: "ул. Примерная, 1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Вс, 7:00 – 23:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f85a00]/15 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={16} className="text-[#f85a00]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white font-semibold text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6">Оставить заявку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#f85a00]/60 transition-colors"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#f85a00]/60 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="Что вас интересует?"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#f85a00]/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#f85a00] text-white font-bold text-sm uppercase tracking-wide rounded-xl hover:bg-[#ff6a10] transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080d14] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#f85a00] flex items-center justify-center">
              <span className="text-white font-black text-xs">SL</span>
            </div>
            <span className="text-white/60 text-sm font-medium">SportLife</span>
          </div>
          <span className="text-white/30 text-xs">© 2024 SportLife. Все права защищены.</span>
        </div>
      </footer>
    </div>
  )
}
