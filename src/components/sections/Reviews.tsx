import { Star, ThumbsUp, Plus, Minus } from "lucide-react";
import { productData } from "@/config/product";

export function Reviews() {
  const { reviews } = productData;

  return (
    <section id="reviews" className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <p className="text-rose-500 text-sm font-bold uppercase italic mb-2 tracking-widest">GQ Review Board</p>
          <h2 className="text-3xl font-black text-neutral-900 tracking-tighter uppercase italic">Gemini Product Review</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-[#F8F9FA] rounded-[3rem] p-8 md:p-12 border border-neutral-100">
          {/* Summary Box */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-neutral-100 text-center">
              <div className="inline-block bg-emerald-500 text-white text-5xl font-black px-6 py-4 rounded-[2rem] mb-4">
                {reviews.average}
              </div>
              <h3 className="font-black text-2xl text-neutral-900 uppercase italic flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Great
              </h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-12 text-left">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Ease of Use</span>
                    <span className="text-xs font-black text-indigo-500">4.9</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full">
                    <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Answer Quality</span>
                    <span className="text-xs font-black text-indigo-500">4.9</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full">
                    <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Speed & Efficiency</span>
                    <span className="text-xs font-black text-indigo-500">4.8</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full">
                    <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-neutral-400 uppercase">Multilingual</span>
                    <span className="text-xs font-black text-indigo-500">4.9</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full">
                    <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed analysis style */}
          <div className="w-full lg:w-2/3 space-y-8">
            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
              I have been using Gemini a lot recently. The most noticeable features are its accuracy and understanding. It responds quickly to daily tasks like writing emails, polishing copy, and summarizing data. The results are often very satisfying. Compared to other models, it&apos;s more precise and less likely to miss key information. However, it still has its limits, I can&apos;t expect a perfect answer every time. Sometimes I need to double-check facts or ask a follow-up question or add another condition to get closer to what I want. Overall, it&apos;s still a very efficient AI helper.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                 <h4 className="flex items-center gap-2 text-xs font-black text-neutral-900 uppercase italic">
                   <ThumbsUp className="w-4 h-4 text-emerald-500" /> Pros
                 </h4>
                 <ul className="space-y-3">
                    {[
                      "Achieve your goals with simple prompts so you can get started fast",
                      "It can read long content and pull out the key points with clear and easy-to-follow results",
                      "The translations and the local style feel natural and also handle multiple languages well",
                      "The output feels complete and well-covered, usually ready to use"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-[11px] text-neutral-400 font-medium">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                 </ul>
               </div>
               <div className="space-y-4">
                 <h4 className="flex items-center gap-2 text-xs font-black text-neutral-900 uppercase italic">
                   <Minus className="w-4 h-4 text-rose-500 rotate-90" /> Cons
                 </h4>
                 <ul className="space-y-3">
                    {[
                      "Thinking mode takes too long to respond sometimes",
                      "The latest update section is not always reliable, so you need to double-check it"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-[11px] text-neutral-400 font-medium">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>

        {/* User reviews list */}
        <div className="mt-24">
           <div className="mb-12">
            <p className="text-rose-500 text-sm font-bold uppercase italic mb-2 tracking-widest">Smart Child</p>
            <h2 className="text-3xl font-black text-neutral-900 tracking-tighter uppercase italic">What Do Our Users say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.list.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-[13px] text-neutral-500 leading-relaxed mb-8 italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-neutral-50">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white font-black text-xs flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-neutral-900 text-xs uppercase italic">{review.name}</h4>
                    <span className="text-[10px] text-neutral-400">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

