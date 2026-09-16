export default function Logo({ light=false }: { light?: boolean }) {
  return <div className="flex items-center gap-3">
    <span className={`grid h-10 w-10 place-items-center rounded-xl ${light ? 'bg-white/10 text-white' : 'bg-[#0164ff] text-white'}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5 12 4l8 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"/><path d="M9.5 20v-5h5v5"/></svg>
    </span>
    <span className={`text-[17px] font-semibold tracking-tight ${light ? 'text-white' : 'text-[#102622]'}`}>ПРОДАЙ САМ</span>
  </div>
}
