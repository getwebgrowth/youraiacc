"use client";

export function OfferDescription() {
  return (
    <section id="offer" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Offer Description */}
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl font-black text-neutral-900 uppercase italic tracking-tighter">
              Offer Description
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-black text-rose-500 uppercase italic tracking-widest mb-3">
                  Seller&apos;s Description
                </h3>
                <p className="text-2xl font-black text-neutral-900 leading-tight">
                  🚀 Google Gemini Pro 18 Months — On Your Own Account
                </p>
                <p className="text-neutral-500 leading-relaxed mt-4 font-medium">
                  Get full access to Google Gemini Pro for 18 months, activated directly on your own Google account. No shared login. No risky setup. Just fast, clean activation on your personal account.
                </p>
              </div>

              {/* Vimeo Video */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1200969320?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="Google Gemini Pro - see it in action"
                ></iframe>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-black text-neutral-900 uppercase italic tracking-tight">
                  💎 What&apos;s Included:
                </h4>
                <ul className="space-y-3">
                  {[
                    ["🧠", "Gemini 3.1 Pro", "advanced AI reasoning, writing, coding, analysis"],
                    ["🎬", "Veo 3.1", "powerful AI video generation with realistic output"],
                    ["🖼", "Nano Banana Pro", "premium AI image generation and creative tools"],
                    ["🛸", "Antigravity", "AI development workspace with 1,000 credits/month"],
                    ["☁️", "Google One 5TB", "huge cloud storage for Drive, Photos, and files"],
                    ["👨‍👩‍👧‍👦", "Family Sharing", "add up to 5 members on supported plans"],
                    ["📝", "NotebookLM Pro + Workspace AI", "research, productivity, and smart work tools"],
                  ].map(([emoji, title, desc], idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{emoji}</span>
                      <div>
                        <span className="font-black text-neutral-900 text-[14px]">{title}</span>
                        <span className="text-neutral-500 text-[14px] font-medium"> — {desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-black text-neutral-900 uppercase italic tracking-tight">
                  ✨ Why choose this offer?
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "✅ 18 months access",
                    "✅ Activated on your own account",
                    "✅ No shared account [ you can add your own family upto 5 people ]",
                    "✅ No password sharing",
                    "✅ Easy setup",
                    "✅ Fast delivery",
                    "✅ 24/7 support",
                    "✅ Perfect for developers, creators, students, and professionals",
                  ].map((item, idx) => (
                    <span key={idx} className="text-[13px] font-bold text-neutral-700">{item}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-black text-neutral-900 uppercase italic tracking-tight">
                  🔥 Best for:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["👨‍💻 Coding", "🎨 Design", "📚 Study", "💼 Work", "🎥 Content creation", "🧠 AI productivity"].map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-neutral-100 rounded-xl text-[12px] font-black text-neutral-700 uppercase italic">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                <p className="text-[13px] font-bold text-neutral-700">
                  📩 Please contact before ordering for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
