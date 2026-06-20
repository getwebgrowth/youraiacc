"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, Info, Monitor, UserCircle, Hourglass, ChevronLeft, ChevronRight, X } from "lucide-react";
import { productData } from "@/config/product";

const carouselImages = [
  { src: "/carousel-2.png", alt: "Google Gemini Pro 18 Months - official subscription on your own account" },
  { src: "/carousel-3.jpeg", alt: "Gemini Pro dashboard" },
  { src: "/carousel-4.jpeg", alt: "Gemini Pro 5TB storage" },
  { src: "/carousel-5.jpeg", alt: "Gemini Pro AI features" },
  { src: "/carousel-6.jpeg", alt: "Gemini Pro subscription details" },
];

export function Hero({ onOpenCart }: { onOpenCart: () => void }) {
  const [region, setRegion] = useState("Global");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_name) setRegion(data.country_name);
      })
      .catch(() => setRegion("Global"));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section id="product" className="relative pt-6 pb-20 md:pt-12 md:pb-24 overflow-hidden bg-[#F8F9FA]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Details */}
          <div className="flex-1 space-y-6 min-w-0">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 overflow-x-auto">
              <span className="hover:text-neutral-900 cursor-pointer flex-shrink-0">Home</span>
              <span className="flex-shrink-0">/</span>
              <span className="hover:text-neutral-900 cursor-pointer flex-shrink-0">Subscription</span>
              <span className="flex-shrink-0">/</span>
              <span className="text-neutral-900 font-medium flex-shrink-0">Gemini</span>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                {/* Product Image Carousel */}
                <div
                  className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden shadow-inner bg-neutral-100 flex-shrink-0 group cursor-pointer"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    fill
                    className="object-contain p-2 transition-opacity duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-neutral-700 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-neutral-700 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  {/* Thumbnail Strip */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-6">
                    <div className="flex justify-center gap-2">
                      {carouselImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`relative w-8 h-8 rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                            idx === currentSlide
                              ? "border-white scale-110 shadow-lg"
                              : "border-white/40 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={`Slide ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Slide counter */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                    {currentSlide + 1}/{carouselImages.length}
                  </div>
                </div>

                <div className="flex-1 space-y-4 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-tight">Google Gemini Pro 18 months</h1>
                    </div>
                    <span className="text-rose-500 text-xs sm:text-sm font-bold flex items-center gap-1 cursor-pointer flex-shrink-0 whitespace-nowrap">
                      <Zap className="w-4 h-4 fill-current" />
                      Best value
                    </span>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {["Gemini 3.1 Pro", "Veo", "Nano Banana 2", "Antigravity", "5TB Storage"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-lg text-[11px] font-bold text-neutral-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-500 mb-2">Subscription validity</p>
                      <div className="inline-flex px-3 sm:px-4 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm font-black">
                        {productData.duration}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-500 mb-2">Select Type</p>
                      <div className="inline-flex px-3 sm:px-4 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm font-black relative">
                        Gift to your account
                        <Info className="w-3 h-3 ml-1 inline text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <div className="flex flex-wrap items-center gap-4 text-[12px] sm:text-[13px] text-neutral-500">
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Specs Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-12 mt-10 pt-10 border-t border-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-neutral-400 text-[12px] sm:text-[13px] font-bold leading-tight">Can be activated in <span className="text-neutral-900">{region}</span></p>
                    <button className="text-indigo-500 text-[12px] sm:text-[13px] font-bold hover:underline mt-1">Check region restrictions</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 flex-shrink-0">
                    <UserCircle className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-neutral-400 text-[12px] sm:text-[13px] font-bold leading-tight">Sharing Method</p>
                    <p className="text-neutral-900 text-sm sm:text-[15px] font-black">Full access / invite 5 family members</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 flex-shrink-0">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-neutral-400 text-[12px] sm:text-[13px] font-bold leading-tight">Supported devices</p>
                    <p className="text-neutral-900 text-sm sm:text-[15px] font-black">PC, Phone, Mac, any</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 flex-shrink-0">
                    <Hourglass className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-neutral-400 text-[12px] sm:text-[13px] font-bold leading-tight">Duration</p>
                    <p className="text-neutral-900 text-sm sm:text-[15px] font-black">18 Months / Full Warranty</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-10 text-xs sm:text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-6">
                Google Gemini Pro is the premium AI subscription for faster answers, stronger reasoning, image generation, and video creation. This 18-month package gives you official Gemini Pro access on your own account for just $25 — 93% less than Google&apos;s official price of $359.82.
              </p>
            </div>
          </div>

          {/* Right Column: Purchase Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0 pb-20 md:pb-0">
            <div className="sticky top-20 md:top-24 bg-white rounded-2xl md:rounded-[2.5rem] shadow-lg md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-neutral-100 p-6 sm:p-8 space-y-6">

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[12px] font-bold text-neutral-500">4.9 <span className="text-neutral-300">(124 reviews)</span></span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 text-xs sm:text-sm font-black uppercase italic tracking-wider">Official Price</span>
                  <span className="text-neutral-400 text-xs sm:text-sm line-through font-black">$360.00</span>
                </div>
                
                <div className="relative py-4 px-6 bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl border border-rose-100 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase italic">
                    Save 92%
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <p className="text-neutral-500 text-[10px] font-black uppercase italic mb-1">Our Special Price</p>
                      <span className="text-3xl sm:text-4xl font-black text-rose-500 tracking-tighter italic">$25</span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[10px] text-neutral-400 font-bold uppercase italic">$1.39 / mo</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                  <Zap className="w-4 h-4 fill-current flex-shrink-0" />
                  <span className="text-[11px] font-black uppercase italic">You save $334.82 overall</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={onOpenCart}
                  className="w-full py-5 sm:py-6 bg-rose-500 hover:bg-rose-600 active:bg-rose-600 text-white rounded-2xl font-black text-xl sm:text-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95 uppercase italic tracking-tight"
                >
                  Buy Now
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={productData.links.whatsapp}
                    className="flex items-center justify-center gap-2 py-3 sm:py-3.5 bg-[#25D366] hover:bg-[#128C7E] active:bg-[#128C7E] text-white rounded-2xl font-black text-[10px] uppercase italic transition-all shadow-md active:scale-95"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href={productData.links.telegram}
                    className="flex items-center justify-center gap-2 py-3 sm:py-3.5 bg-[#0088cc] hover:bg-[#0077b5] active:bg-[#0077b5] text-white rounded-2xl font-black text-[10px] uppercase italic transition-all shadow-md active:scale-95"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Telegram
                  </a>
                </div>
              </div>

              {/* Social Proof: rating + recent purchases */}
              <div className="space-y-3 pt-2 border-t border-neutral-100">
                <div className="flex items-center gap-3 justify-center py-3 sm:py-3 bg-neutral-50 rounded-2xl border border-neutral-100">
                  <div className="flex -space-x-2">
                    {[
                      "https://i.pravatar.cc/40?u=1",
                      "https://i.pravatar.cc/40?u=2",
                      "https://i.pravatar.cc/40?u=3"
                    ].map((url, i) => (
                      <img key={i} src={url} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase italic">
                    <span className="text-neutral-900 font-black">1.2k+</span> users joined this week
                  </p>
                </div>

                {/* Live purchase notifications */}
                <div className="space-y-2">
                  {[
                    { name: "Alex", time: "3 min ago", avatar: "https://i.pravatar.cc/40?u=alex" },
                    { name: "Sarah", time: "8 min ago", avatar: "https://i.pravatar.cc/40?u=sarah" },
                    { name: "Mike", time: "14 min ago", avatar: "https://i.pravatar.cc/40?u=mike" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-4 bg-neutral-50 rounded-xl border border-neutral-100">
                      <img src={item.avatar} alt="" className="w-7 h-7 rounded-full object-cover border border-neutral-200" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-neutral-900 truncate">{item.name} bought Gemini Pro</p>
                        <p className="text-[9px] text-neutral-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upsell: delivery guarantees */}
              <div className="pt-4 border-t border-neutral-100 space-y-4">
                 <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-sm border border-emerald-100 flex-shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div className="min-w-0">
                     <p className="text-[11px] font-black text-neutral-900 uppercase tracking-tight italic">Instant Delivery</p>
                     <p className="text-[10px] text-neutral-400 font-bold">Manual delivery when online</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform shadow-sm border border-indigo-100 flex-shrink-0">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="min-w-0">
                     <p className="text-[11px] font-black text-neutral-900 uppercase tracking-tight italic">Private Account</p>
                     <p className="text-[10px] text-neutral-400 font-bold">On your own account</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
          {/* Lightbox thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselImages.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentSlide ? "border-white scale-110 shadow-lg" : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

