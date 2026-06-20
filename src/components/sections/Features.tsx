import { Sparkles, Brain, Cloud, Rocket, CheckSquare, Zap, Clock, Search, Gift } from "lucide-react";
import { productData } from "@/config/product";
import Image from "next/image";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function Features() {
  const infoCards = [
    {
      title: "Official Gemini Pro (Google AI Pro) Account",
      description: "Supports the latest Gemini 3.1 Flash model with faster speeds and stronger processing power, making it better suited for complex tasks.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Private account, with conversations visible only to you",
      description: "And not shared with others, ensuring greater privacy and peace of mind.",
      icon: <CheckSquare className="w-5 h-5" />
    },
    {
      title: "Activation via gift link on your own account",
      description: "We send an activation gift link to your email. Open it from your browser while logged into your Google account, click activate, and you get 18 months of Pro instantly.",
      icon: <Gift className="w-5 h-5" />
    },
    {
      title: "Nano Banana 2: Finer rendering",
      description: "Sharper accuracy, instant ultra-HD visuals.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Integrated with Google Search",
      description: "And its information ecosystem for greater efficiency in research, learning, and analysis.",
      icon: <Search className="w-5 h-5" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Info Cards */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-black text-neutral-900 tracking-tighter uppercase italic mb-6">Gemini Pro Features</h2>
            {infoCards.map((card, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-neutral-900 mb-1">{card.title}</h4>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: FAQ & Related */}
          <div className="lg:w-[380px] space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-neutral-900 tracking-tighter uppercase italic">FAQ</h3>
              <div className="space-y-3">
                {[
                  "What is included in the subscription?",
                  "How does the gift link work?",
                  "Is this on my own personal account?"
                ].map((q, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-neutral-100 flex items-center gap-4 cursor-pointer hover:border-rose-200 transition-colors shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-black italic">Q</span>
                    </div>
                    <span className="text-[13px] font-bold text-neutral-800 line-clamp-2">{q}</span>
                    <span className="ml-auto text-neutral-300 font-light text-xl">+</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Sections with Separators */}
        <div className="mt-32 space-y-32">
          {/* Nano Banana Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-neutral-100 rounded-[3rem] overflow-hidden relative shadow-lg">
              <Image 
                src="/feature-1.jpg" 
                alt="Gemini Pro Nano Banana 2 - ultra-HD image generation" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur rounded-3xl shadow-xl">
                <h5 className="font-black text-xl mb-2 italic uppercase tracking-tighter">Nano Banana 2</h5>
                <p className="text-sm text-neutral-500">Sharper accuracy, instant ultra-HD visuals.</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-rose-500 text-sm font-bold uppercase italic tracking-widest">One-click ultra-HD 4K image generation</p>
              <SeparatorLine />
              <h4 className="text-4xl font-black text-neutral-900 tracking-tighter uppercase italic">Nano Banana 2</h4>
              <p className="text-neutral-500 leading-relaxed font-medium">
                Clearer details and more natural lighting! Fine-tune specific features with a single prompt to streamline your creative process.
              </p>
            </div>
          </div>

          {/* No Waiting Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-rose-500 text-sm font-bold uppercase italic tracking-widest">Steps are simpler and delivery is faster</p>
              <SeparatorLine />
              <h4 className="text-4xl font-black text-neutral-900 tracking-tighter uppercase italic leading-none">No waiting, order now</h4>
              <p className="text-neutral-500 leading-relaxed font-medium">
                After purchase, we send an activation gift link to your email. Open it from your browser on your own Google account, click activate, and start using Gemini Pro immediately.
              </p>
            </div>
            <div className="aspect-video bg-neutral-100 rounded-[3rem] overflow-hidden relative shadow-lg order-1 md:order-2">
              <video 
                src="/demo-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Private Account Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-neutral-900 rounded-[3rem] overflow-hidden relative shadow-lg">
              <Image 
                src="/feature-4.jpg" 
                alt="Gemini Pro private account - secure personal AI assistant" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur px-8 py-4 rounded-2xl border border-white/20">
                  <span className="text-white text-3xl font-black italic uppercase tracking-tighter">Private</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-rose-500 text-sm font-bold uppercase italic tracking-widest">A faster personal AI assistant</p>
              <SeparatorLine />
              <h4 className="text-4xl font-black text-neutral-900 tracking-tighter uppercase italic leading-none">Private account, optimized results</h4>
              <p className="text-neutral-500 leading-relaxed font-medium">
                A private account avoids chat mixing, handles a 1M-token context and replies fast. You can jump into hard tasks with Custom Gems in one click as your personal AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
