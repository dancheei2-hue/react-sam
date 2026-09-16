import { ArrowRight, Check, Home, MessageCircle, WalletCards } from 'lucide-react';

export default function AboutSection() {
  const audience = [
    ['Продавать квартиру самостоятельно', Home],
    ['Сэкономить на комиссии', WalletCards],
    ['Получить понятный план действий', Check],
    ['Получить максимально возможную цену', ArrowRight],
  ] as const;
  return <section id="about" className="relative z-10 -mt-6 rounded-t-[25px] bg-[#F6E4CF] px-5 py-20 text-[#321C04] md:px-10 md:py-32">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mx-auto max-w-lg text-base leading-relaxed md:text-lg">Продажа квартиры — это не просто разместить объявление. Важно понимать весь путь: от цены и упаковки до переговоров и сделки.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#321C04] px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#FFF9F2] transition hover:bg-[#1F1003]"><span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#321C04]"><MessageCircle className="h-4 w-4" /></span>Обсудить продажу</a>
        <a href="#system" className="inline-flex items-center gap-2 rounded-full bg-[#D9C4AA] px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition hover:bg-[#CEBA9E]"><span className="grid h-7 w-7 place-items-center rounded-full bg-white"><ArrowRight className="h-4 w-4" /></span>Посмотреть систему</a>
      </div>
    </div>
    <div className="mx-auto mt-20 flex max-w-[1180px] flex-col gap-12 border-t-2 border-[#D9C4AA] pt-10 md:mt-32 md:flex-row md:gap-20">
      <div className="flex shrink-0 items-start gap-3 md:w-40"><svg width="40" height="40" viewBox="0 0 256 256" fill="none"><path d="M256 256h-78c-27.6 0-50-22.4-50-50v50H0v-64c0-35.35 28.65-64 64-64s64 28.65 64 64V128h128v128ZM78 0c27.6 0 50 22.39 50 50V0h128v64c0 35.35-28.65 64-64 64s-64-28.65-64-64v64H0V0h78Z" fill="#321C04"/></svg><span className="pt-1 text-[10px] font-semibold uppercase tracking-[.2em]">Продай<br/>сам</span></div>
      <p className="max-w-4xl text-2xl leading-[1.3] md:text-4xl lg:text-[42px]">Мы собрали систему, которая переносит на себя когнитивную нагрузку продажи: что делать, когда делать и на что смотреть, чтобы не действовать вслепую.</p>
    </div>
    <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-3 sm:grid-cols-2 md:mt-20 md:grid-cols-4">{audience.map(([text,Icon])=><div key={text} className="rounded-2xl bg-[#FFF9F2] p-5"><Icon className="mb-8 h-5 w-5"/><p className="text-sm font-medium leading-relaxed">{text}</p></div>)}</div>
  </section>
}
