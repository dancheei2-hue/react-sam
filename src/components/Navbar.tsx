import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-5 md:px-6 md:pt-6">
    <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md md:px-4">
      <a href="#top" aria-label="Продай сам"><Logo /></a>
      <nav className="hidden items-center gap-7 lg:flex">
        <a className="text-sm font-medium text-[#52625e] transition hover:text-[#0164ff]" href="#system">О системе</a>
        <a className="text-sm font-medium text-[#52625e] transition hover:text-[#0164ff]" href="#mistakes">Ошибки</a>
        <a className="text-sm font-medium text-[#52625e] transition hover:text-[#0164ff]" href="#faq">FAQ</a>
        <a className="text-sm font-medium text-[#52625e] transition hover:text-[#0164ff]" href="#contact">Контакты</a>
      </nav>
      <div className="flex items-center gap-2">
        <a href="#contact" className="hidden rounded-full bg-[#0164ff] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0058df] lg:inline-flex">Начать сейчас <ArrowUpRight className="ml-1.5 h-4 w-4" /></a>
        <button onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Открыть меню" className="grid h-10 w-10 place-items-center rounded-full bg-[#f1f4f9]">
          <span className="relative h-4 w-5"><i className={`absolute left-0 top-1/2 h-[2px] w-5 rounded bg-[#102622] transition duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`} /><i className={`absolute left-0 top-1/2 h-[2px] w-5 rounded bg-[#102622] transition duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`} /></span>
        </button>
      </div>
    </div>
    <div className={`mx-auto mt-2 max-w-[1180px] origin-top rounded-2xl bg-white p-2 shadow-xl transition-all duration-200 lg:hidden ${open ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}>
      {['#system',' #mistakes','#faq','#contact'].map((href,i)=><a key={href} onClick={()=>setOpen(false)} href={href.trim()} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#f1f4f9]">{['О системе','Ошибки','FAQ','Контакты'][i]}</a>)}
      <a onClick={()=>setOpen(false)} href="#contact" className="mt-1 block rounded-xl bg-[#0164ff] px-4 py-3 text-center text-sm font-medium text-white">Начать сейчас →</a>
    </div>
  </header>
}
