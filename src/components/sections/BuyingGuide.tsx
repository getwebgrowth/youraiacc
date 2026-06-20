"use client";

import { CheckCircle, Clock, Mail, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function BuyingGuide() {
  const steps = [
    {
      number: "1",
      icon: <Mail className="w-6 h-6" />,
      title: "Choose Your Payment Method",
      description: "Select from WhatsApp, Telegram, or NOWPayments. Pick whatever's most convenient for you.",
      details: [
        "WhatsApp & Telegram: Instant communication with our support team",
        "NOWPayments: Accept 50+ cryptocurrencies"
      ]
    },
    {
      number: "2",
      icon: <Zap className="w-6 h-6" />,
      title: "Complete Your Purchase",
      description: "Click 'Buy Now' and follow the payment flow. Your order is processed instantly and securely.",
      details: [
        "Prices in USD, EUR, GBP, and more",
        "Your transaction is encrypted and protected",
        "You'll receive an order confirmation immediately"
      ]
    },
    {
      number: "3",
      icon: <Clock className="w-6 h-6" />,
      title: "Receive Your Gift Link",
      description: "We send an activation gift link to your email. You open it from your browser while logged into your own Google account — then click activate to get 18 months of Pro.",
      details: [
        "Activation gift link sent to your email",
        "Open from your browser on your own account",
        "Simple setup instructions included",
        "Support contact info for questions"
      ]
    },
    {
      number: "4",
      icon: <Lock className="w-6 h-6" />,
      title: "Activate Your Account",
      description: "Just load the provided gift link in your browser while logged into your own Google account, then click activate.",
      details: [
        "All premium features unlocked",
        "5TB Google One storage ready to use",
        "Family sharing setup available",
        "Full account control is yours"
      ]
    },
    {
      number: "5",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Enjoy Full 18-Month Access",
      description: "Use your Gemini Pro account for the full 18-month subscription period with zero restrictions.",
      details: [
        "Access all latest Gemini features",
        "Use on unlimited devices",
        "Share with up to 5 family members",
        "Priority 24/7 support included"
      ]
    }
  ];

  const faqItems = [
    {
      q: "How long is activation after purchase?",
      a: "Usually within 5-15 minutes when we're online. Our team works 24/7 to deliver accounts as fast as possible."
    },
    {
      q: "Can I share this with family members?",
      a: "Yes! Your account supports family sharing for up to 5 members. Each person gets their own login while sharing the subscription cost."
    },
    {
      q: "What if I lose my password?",
      a: "You can reset your password through Google's official account recovery. We'll provide instructions and support if you need help."
    },
    {
      q: "Will this work in my country?",
      a: "Gemini is available globally, though some features may vary by region. We detect your location and show region-specific information during checkout."
    },
    {
      q: "Can I upgrade or extend after 18 months?",
      a: "Yes! When your subscription expires, you can renew with us at the same unbeatable price. We'll contact you before expiration to offer renewal options."
    }
  ];

  return (
    <section id="buying-guide" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter mb-2">
          How to Buy Google Gemini Pro
        </h2>
        <SeparatorLine />

        <p className="text-center text-neutral-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          Simple 5-step process to get Google Gemini Pro on your own account. From purchase to full activation, we&apos;ll guide you every step of the way.
        </p>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-lg italic shadow-lg">
                      {step.number}
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-rose-500 to-amber-200 mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-rose-500">{step.icon}</div>
                      <h3 className="text-xl font-black text-neutral-900 uppercase italic tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 mb-4 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex items-start gap-3 text-[13px] text-neutral-500">
                          <span className="text-rose-400 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-neutral-900 uppercase italic tracking-tighter mb-8">
            Common Questions
          </h3>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-rose-200 transition-colors shadow-sm hover:shadow-md"
              >
                <h4 className="font-black text-neutral-900 text-[15px] uppercase italic tracking-tight mb-3">
                  {item.q}
                </h4>
                <p className="text-[14px] text-neutral-600 leading-relaxed font-medium">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-12 border border-rose-200">
          <h3 className="text-2xl font-black text-neutral-900 uppercase italic tracking-tighter mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            It takes just 5 minutes from purchase to full activation. Join thousands of happy customers enjoying Gemini Pro at an unbeatable price.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-xl font-black uppercase italic tracking-widest transition-colors shadow-lg hover:shadow-xl active:scale-95">
            Buy Now for $25
          </button>
        </div>
      </div>
    </section>
  );
}
