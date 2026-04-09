import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Dumbbell",
    title: "Спортзал",
    desc: "Силовое оборудование, штанги, стойки и всё необходимое для серьёзных тренировок. Подходит для любого уровня подготовки.",
    tag: "Фитнес",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/8d441164-2571-4518-bbef-e45b371a3772.jpg",
  },
  {
    icon: "Sunset",
    title: "Летняя веранда",
    desc: "Уютное пространство под прозрачной крышей с деревянными столами — идеально для отдыха, встреч и тихих вечеров.",
    tag: "Отдых",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/3ef8e5e7-d3d6-4d78-b6c5-3ac3f557e872.png",
  },
  {
    icon: "PartyPopper",
    title: "Аренда помещения",
    desc: "Просторный зал для дней рождения, корпоративов и семейных торжеств. Бильярд и музыкальная установка — в наличии.",
    tag: "Мероприятия",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/400c4805-5f4b-4f50-8100-7b17b99da362.png",
  },
]

const extras = [
  {
    icon: "CircleDot",
    title: "Бильярд",
    desc: "Профессиональный стол в атмосферном зале — отличное развлечение для компании.",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/2957da76-1d02-408f-a86b-df97f90f6175.jpg",
  },
  {
    icon: "Music",
    title: "Музыкальная установка",
    desc: "Профессиональный звук, гитары, синтезаторы и микрофоны — всё для живой музыки и репетиций.",
    image: "https://cdn.poehali.dev/projects/cf003ea4-29ff-4ab1-9a83-23282ee9af3c/bucket/fb040cc6-8c26-4208-9bb0-f1a614dc0220.jpg",
  },
]

const reviews = [
  {
    name: "Анна М.",
    role: "Постоянный клиент",
    text: "Хожу в спортзал уже полгода — тренеры внимательные, оборудование всегда в идеальном состоянии. Атмосфера заряжает на результат!",
    rating: 5,
  },
  {
    name: "Дмитрий К.",
    role: "Провёл корпоратив",
    text: "Арендовали зал для корпоратива на 40 человек. Всё было организовано на высшем уровне — вкусно, красиво и профессионально.",
    rating: 5,
  },
  {
    name: "Елена В.",
    role: "День рождения",
    text: "Провела юбилей на летней веранде. Место потрясающее — живая зелень, уютная обстановка, гости были в восторге!",
    rating: 5,
  },
]

const faqs = [
  {
    q: "Как записаться на тренировку?",
    a: "Позвоните нам, напишите в WhatsApp или заполните форму на сайте. Администратор подберёт удобное время и тренера.",
  },
  {
    q: "Есть ли пробное занятие?",
    a: "Да! Первое занятие в спортзале — бесплатно. Приходите познакомиться с командой и попробовать оборудование.",
  },
  {
    q: "Как забронировать зал для мероприятия?",
    a: "Свяжитесь с нами для обсуждения даты и деталей. Мы поможем с организацией: декор, кейтеринг, развлечения.",
  },
  {
    q: "Какой график работы?",
    a: "Спортзал открыт ежедневно с 7:00 до 23:00. Веранда и банкетный зал — по предварительной записи.",
  },
  {
    q: "Есть ли абонементы?",
    a: "Да, предлагаем месячные и годовые абонементы со скидкой до 30%. Также действует семейный тариф.",
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
      <section id="about" className="bg-[#f5f0e8] py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c8a84b] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
              О компании
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0d0d0d] leading-tight mb-6">
              Создаём <span className="font-semibold italic">пространство</span>
              <br />для вашей жизни
            </h2>
            <p className="text-[#0d0d0d]/60 leading-relaxed mb-6 text-sm">
              SportLife — это больше, чем спортивный клуб. Мы объединили фитнес, отдых и праздник
              в одном месте, чтобы каждый момент здесь был наполнен энергией и радостью.
            </p>
            <p className="text-[#0d0d0d]/60 leading-relaxed text-sm">
              Более 5 лет мы создаём атмосферу, в которую хочется возвращаться снова и снова.
              Профессиональная команда, современное оборудование и искренняя забота о каждом госте.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "5+", label: "лет на рынке" },
              { num: "1200+", label: "довольных клиентов" },
              { num: "3", label: "уникальных пространства" },
              { num: "20+", label: "профессиональных тренеров" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-[#c8a84b]/20 hover:border-[#c8a84b]/50 transition-colors"
              >
                <div className="text-3xl font-semibold text-[#c8a84b] mb-1">{stat.num}</div>
                <div className="text-xs text-[#0d0d0d]/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="bg-[#0d0d0d] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[#c8a84b] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
                Наши услуги
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Три направления —
                <br />
                <span className="font-semibold italic text-[#c8a84b]">один адрес</span>
              </h2>
            </div>
            <a
              href="#contacts"
              className="self-start md:self-auto px-8 py-3 border border-[#c8a84b]/50 text-[#c8a84b] text-xs uppercase tracking-widest hover:bg-[#c8a84b]/10 transition-all rounded-full whitespace-nowrap"
            >
              Записаться
            </a>
          </div>

          {/* Основные услуги с фото */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#c8a84b]/50 transition-all duration-500 cursor-pointer"
              >
                {/* Фото */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-[#c8a84b] text-[10px] uppercase tracking-[0.25em] bg-[#0d0d0d]/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#c8a84b]/30">
                    {s.tag}
                  </span>
                </div>
                {/* Текст */}
                <div className="p-6 bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c8a84b]/15 flex items-center justify-center group-hover:bg-[#c8a84b]/25 transition-colors">
                      <Icon name={s.icon} size={16} className="text-[#c8a84b]" />
                    </div>
                    <h3 className="text-white text-lg font-medium">{s.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительные услуги */}
          <div>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6 block">Дополнительно</span>
            <div className="grid md:grid-cols-2 gap-5">
              {extras.map((e) => (
                <div
                  key={e.title}
                  className="group flex gap-5 items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c8a84b]/40 transition-all duration-300"
                >
                  <div className="w-36 h-28 shrink-0 overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="py-4 pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={e.icon} size={14} className="text-[#c8a84b]" />
                      <h4 className="text-white font-medium text-sm">{e.title}</h4>
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
      <section id="reviews" className="bg-[#f5f0e8] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[#c8a84b] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
              Отзывы
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0d0d0d] leading-tight">
              Что говорят <span className="font-semibold italic">наши гости</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-8 border border-[#c8a84b]/15 hover:border-[#c8a84b]/40 transition-colors">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#c8a84b] fill-[#c8a84b]" />
                  ))}
                </div>
                <p className="text-[#0d0d0d]/70 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div>
                  <div className="text-[#0d0d0d] font-medium text-sm">{r.name}</div>
                  <div className="text-[#0d0d0d]/40 text-xs uppercase tracking-wider mt-0.5">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[#c8a84b] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
              Частые вопросы
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0d0d0d] leading-tight">
              Ответы на <span className="font-semibold italic">ваши вопросы</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-[#f5f0e8] rounded-2xl border border-[#c8a84b]/15 overflow-hidden hover:border-[#c8a84b]/40 transition-colors"
              >
                <summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none">
                  <span className="text-[#0d0d0d] font-medium text-sm pr-4">{item.q}</span>
                  <Icon name="Plus" size={16} className="text-[#c8a84b] shrink-0 group-open:hidden" />
                  <Icon name="Minus" size={16} className="text-[#c8a84b] shrink-0 hidden group-open:block" />
                </summary>
                <div className="px-7 pb-5">
                  <p className="text-[#0d0d0d]/60 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="bg-[#0d0d0d] py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#c8a84b] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
              Контакты
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
              Приходите,
              <br />
              <span className="font-semibold italic text-[#c8a84b]">будем рады!</span>
            </h2>
            <div className="space-y-5">
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Спортивная, 12, Москва" },
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                { icon: "Mail", label: "Email", value: "hello@sportlife.ru" },
                { icon: "Clock", label: "Режим работы", value: "Ежедневно, 7:00 – 23:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c8a84b]/15 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={16} className="text-[#c8a84b]" />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] uppercase tracking-wider">{c.label}</div>
                    <div className="text-white text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-medium mb-6">Оставить заявку</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#c8a84b]/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#c8a84b]/50 transition-colors"
              />
              <select className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 text-white/60 text-sm focus:outline-none focus:border-[#c8a84b]/50 transition-colors appearance-none">
                <option value="">Выберите услугу</option>
                <option value="gym">Спортзал</option>
                <option value="veranda">Летняя веранда</option>
                <option value="event">Аренда под мероприятие</option>
              </select>
              <textarea
                rows={3}
                placeholder="Комментарий (необязательно)"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#c8a84b]/50 transition-colors resize-none"
              />
              <button className="w-full py-4 bg-[#c8a84b] text-black font-medium text-xs uppercase tracking-widest rounded-xl hover:bg-[#d4b860] transition-colors cursor-pointer">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-white font-semibold text-base tracking-wide uppercase">SportLife</span>
            <span className="text-[#c8a84b] text-xs ml-3 tracking-widest">Спорт & Отдых</span>
          </div>
          <p className="text-white/25 text-xs">© 2024 SportLife. Все права защищены.</p>
        </div>
      </section>
    </div>
  )
}