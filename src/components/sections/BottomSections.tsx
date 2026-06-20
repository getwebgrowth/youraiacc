export function BottomSections({ onOpenCart }: { onOpenCart: () => void }) {
  return (
    <section className="bg-white">
      {/* Rich Text Block */}
      <div className="container mx-auto px-4 md:px-6 py-24 border-t border-neutral-100">
        <div className="max-w-4xl">
           <p className="text-rose-500 text-[10px] font-black uppercase italic tracking-[0.2em] mb-4">Buying Guide</p>
           <h2 className="text-2xl font-black text-neutral-900 uppercase italic tracking-tighter mb-8">Buy Gemini Pro on your own Google account</h2>
           <div className="space-y-6 text-[13px] text-neutral-500 font-medium leading-relaxed">
              <p>
                Gemini Pro is Google&apos;s premium AI subscription for people who want faster answers, stronger reasoning, image generation, video creation, and deeper integration with Google Search and Google One storage.
              </p>
              <p>
                This 18-month package gives you official Gemini Pro access on your own account for a one-time payment of $25, making it a practical upgrade for study, work, research, and content creation.
              </p>
              <button className="text-indigo-500 font-black uppercase italic text-[11px] flex items-center gap-1 hover:gap-2 transition-all">
                Read More <span>&gt;</span>
              </button>
           </div>
        </div>
      </div>

      {/* Red Bottom CTA Banner */}
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="bg-rose-500 rounded-[3rem] p-12 text-center text-white space-y-6 shadow-2xl shadow-rose-200">
           <h3 className="text-xl font-black uppercase italic tracking-tighter">DIGIBRO</h3>
           <p className="text-sm font-bold uppercase italic opacity-80">Official Google price $20.00 / month vs DIGIBRO special $1.39 / month</p>
           <div className="text-4xl font-black uppercase italic tracking-tighter mb-4">SAVE OVER $334 TODAY</div>
           <button 
             onClick={onOpenCart}
             className="bg-white text-rose-500 px-12 py-5 rounded-full font-black uppercase italic text-sm hover:scale-105 active:scale-95 transition-transform shadow-xl"
           >
             PURCHASE NOW
           </button>
        </div>
      </div>
    </section>
  );
}
