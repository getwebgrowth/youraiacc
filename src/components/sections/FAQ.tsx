"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in the subscription?",
      answer: "Your 18-month subscription includes full access to Gemini 3.1 Pro, Nano Banana 2 for image generation, Veo video creation, Antigravity workspace, and 5TB of Google One cloud storage. You get all the premium features on your own personal account with no restrictions."
    },
    {
      question: "How is the account delivered?",
      answer: "We send an activation gift link to your email address after purchase. You simply open the link from your browser while logged into your own Google account and click activate. The 18 months of Gemini Pro are applied instantly to your personal account."
    },
    {
      question: "Is this on my own personal account?",
      answer: "Yes, absolutely. This upgrade is applied directly to your own Gmail account. You don't receive a shared or secondary account. You maintain complete privacy and control, and all your conversations remain personal to you."
    },
    {
      question: "Do I need to share my password?",
      answer: "No, we never ask for your password. You'll receive an activation gift link that you open from your own browser while logged into your Google account. Click activate and the upgrade is applied securely — no password sharing required."
    },
    {
      question: "Can I invite family members?",
      answer: "Yes, once activated on your account, you can invite up to 5 family members to share access. Each person can use the premium features with their own login while you maintain the primary account."
    },
    {
      question: "What devices are supported?",
      answer: "Gemini works on all devices: PC (Windows/Mac), smartphones (iOS/Android), tablets, and any device with a web browser. You get seamless synchronization across all your devices."
    },
    {
      question: "What happens if I face issues after purchase?",
      answer: "We offer 24/7 support. Contact us via WhatsApp or Telegram and we'll resolve any activation or usage issues immediately. We're committed to ensuring your smooth experience."
    },
    {
      question: "Is there a warranty?",
      answer: "Yes, we provide a full warranty covering the entire 18-month subscription period. If you encounter any problems with account access or features, we'll fix them at no additional cost."
    },
    {
      question: "Can I use this in my country?",
      answer: "Gemini is available globally. However, some features may have regional restrictions. We detect your location automatically and show region-specific information during checkout."
    },
    {
      question: "What's the difference between your price and Google's official price?",
      answer: "Google charges $19.99/month for Gemini Pro ($359.82 for 18 months). We offer the same official account and features for just $25 total ($1.39/month equivalent), saving you over $334!"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter mb-2">FAQ</h2>
        <SeparatorLine />

        <div className="max-w-4xl space-y-4 mt-12">
          {faqs.map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all",
                openIndex === idx ? "shadow-md border-neutral-300" : "hover:border-neutral-300"
              )}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-black text-neutral-900 text-lg uppercase italic tracking-tight">{item.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-neutral-500 transition-transform duration-300",
                    openIndex === idx ? "rotate-180" : ""
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-neutral-600 leading-relaxed font-medium text-[14px] border-t border-neutral-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
