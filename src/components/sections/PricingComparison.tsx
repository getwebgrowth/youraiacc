"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function PricingComparison() {
  const comparison = [
    {
      feature: "Gemini Pro Access",
      official: true,
    },
    {
      feature: "Gemini 3.1 Flash Model",
      official: true,
    },
    {
      feature: "Nano Banana 2 (Image Gen)",
      official: true,
    },
    {
      feature: "Veo Video Creation",
      official: true,
    },
    {
      feature: "Google Search Integration",
      official: true,
    },
    {
      feature: "5TB Google One Storage",
      official: true,

    },
    {
      feature: "Private Personal Account",
      official: true,

    },
    {
      feature: "Custom Gems",
      official: true,

    },
    {
      feature: "Antigravity Workspace",
      official: true,

    },
    {
      feature: "Family Sharing (5 members)",
      official: true,

    },
    {
      feature: "24/7 Support",
      official: false,

    },
    {
      feature: "Full Warranty",
      official: false,

    },
    {
      feature: "Instant Activation",
      official: false,

    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter mb-2">
          Gemini Pro Pricing Comparison
        </h2>
        <SeparatorLine />

        <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
          Same official Google Gemini Pro account, identical features and performance. We just offer it at 92% less than Google&apos;s direct pricing — saving you over $330.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
          {/* Google Official */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-100 rounded-3xl p-8 border border-neutral-200"
          >
            <h3 className="text-xl font-black text-neutral-900 uppercase italic tracking-tight mb-2">
              Google Official
            </h3>
            <p className="text-sm text-neutral-500 mb-6">Direct from Google Store</p>
            
            <div className="space-y-2 mb-8">
              <div className="text-xs text-neutral-500">Per Month</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-neutral-900 italic">$19.99</span>
                <span className="text-sm text-neutral-500">/mo</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-neutral-500">18 Months Total</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-neutral-900 italic">$359.82</span>
              </div>
            </div>
          </motion.div>

          {/* YourAIAcc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border-2 border-rose-200 relative overflow-hidden shadow-lg"
          >
            {/* Badge */}
            <div className="absolute -top-2 -right-2 bg-rose-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase italic tracking-widest rotate-12 shadow-lg">
              92% OFF
            </div>

            <h3 className="text-xl font-black text-neutral-900 uppercase italic tracking-tight mb-2">
              YourAIAcc
            </h3>
            <p className="text-sm text-rose-600 font-bold mb-6">Limited Time Offer</p>
            
            <div className="space-y-2 mb-8">
              <div className="text-xs text-neutral-600">One-Time Payment</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-rose-600 italic">$25</span>
                <span className="text-sm text-neutral-600">(18 months)</span>
              </div>
            </div>

            <div className="space-y-2 p-4 bg-white/70 rounded-xl border border-rose-100">
              <div className="text-xs text-neutral-600">Monthly Equivalent</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-rose-600 italic">$1.39</span>
                <span className="text-xs text-neutral-600">/mo</span>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="mt-6 p-4 bg-rose-500/10 rounded-xl border border-rose-200">
              <p className="text-[13px] font-black text-rose-600 uppercase italic tracking-tight">
                You Save: $329.83
              </p>
              <p className="text-[11px] text-rose-600 mt-1">Compared to Google&apos;s official pricing</p>
            </div>
          </motion.div>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-100 border-b border-neutral-200">
                <th className="px-6 py-4 text-left text-sm font-black text-neutral-900 uppercase italic tracking-tight">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-black text-neutral-900 uppercase italic tracking-tight">
                  Google
                </th>
                <th className="px-6 py-4 text-center text-sm font-black text-rose-600 uppercase italic tracking-tight">
                  YourAIAcc
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                >
                  <td className="px-6 py-4 text-sm text-neutral-800 font-medium">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.official ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-300 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-rose-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
            Same official Google account. Same features. Activated within minutes. 
            <br className="hidden md:block" />
            No shared accounts, no restrictions, just pure Gemini Pro at an unbeatable price.
          </p>
        </div>
      </div>
    </section>
  );
}
