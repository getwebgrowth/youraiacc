"use client";

import { ShieldCheck, Zap, Clock, Users, HeadsetIcon, Award } from "lucide-react";
import { motion } from "framer-motion";

function SeparatorLine() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </div>
  );
}

export function WhyBuy() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Official Google Account",
      description: "This is a genuine, official Gemini Pro account directly from Google. No fake, no shared, no third-party accounts."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Activation",
      description: "Receive your login credentials within minutes of purchase. Start using Gemini Pro immediately—no waiting, no delays."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "92% Savings",
      description: "Pay just $25 for 18 months instead of $359.82 on Google's official store. Save over $334 while getting the exact same service."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Sharing Ready",
      description: "Invite up to 5 family members to share your subscription. Everyone gets full Gemini Pro features on their own login."
    },
    {
      icon: <HeadsetIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description: "We're here to help. Contact us via WhatsApp or Telegram anytime for activation help, troubleshooting, or account issues."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Full Warranty",
      description: "Backed by a complete 18-month warranty. If anything goes wrong, we'll fix it for free. Your satisfaction is guaranteed."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter mb-2">
          Why Buy Gemini Pro From YourAIPartner
        </h2>
        <SeparatorLine />

        <p className="text-center text-neutral-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          We&apos;re not resellers or middlemen. We provide official Gemini Pro accounts with the best service, unbeatable pricing, and 100% buyer protection.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:border-rose-200 hover:bg-rose-50 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-black text-neutral-900 mb-3 uppercase italic tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Section */}
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border border-rose-200 p-12">
          <h3 className="text-xl font-black text-neutral-900 uppercase italic tracking-tighter mb-8 text-center">
            Trusted by Thousands Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-black text-rose-600 italic mb-2">10K+</p>
              <p className="text-[12px] text-neutral-600 font-bold uppercase italic">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-rose-600 italic mb-2">4.9★</p>
              <p className="text-[12px] text-neutral-600 font-bold uppercase italic">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-rose-600 italic mb-2">99.8%</p>
              <p className="text-[12px] text-neutral-600 font-bold uppercase italic">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-rose-600 italic mb-2">24/7</p>
              <p className="text-[12px] text-neutral-600 font-bold uppercase italic">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
