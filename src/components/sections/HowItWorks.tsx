"use client";

import { Gift, LogIn, Sparkles } from "lucide-react";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Receive Your Credentials",
      description:
        "We'll send you complete login information within minutes via your chosen contact method. We send an activation gift link to your email. You load the gift from your browser on your own account and click activate — then you get 18 months of Pro.",
      icon: <Gift className="w-6 h-6" />,
      items: [
        "Email address / Gmail to use",
        "Secure password provided",
        "Account setup instructions included",
        "Support contact info for questions",
      ],
    },
    {
      title: "Activate Your Account",
      description:
        "Log in to gemini.google.com with your provided credentials and start using Gemini Pro immediately.",
      icon: <LogIn className="w-6 h-6" />,
      items: [
        "All premium features unlocked",
        "5TB Google One storage ready to use",
        "Family sharing setup available",
        "Full account control is yours",
      ],
    },
    {
      title: "Enjoy Full 18-Month Access",
      description:
        "Use your Gemini Pro account for the full 18-month subscription period with zero restrictions.",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        "Access all latest Gemini features",
        "Use on unlimited devices",
        "Share with up to 5 family members",
        "Priority 24/7 support included",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter mb-2">
          How it works
        </h2>
        <SeparatorLine />

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-neutral-100 transition-colors group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-neutral-900 mb-3 uppercase tracking-tight italic">
                {step.title}
              </h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed mb-5">
                {step.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-neutral-700 font-medium">
                    <span className="text-rose-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
