"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = ["Alex", "Sarah", "Mike", "Emma", "James", "Lisa", "David", "Sophie", "Chris", "Anna"];

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomTimeAgo() {
  const minutes = Math.floor(Math.random() * 15) + 1;
  return `${minutes} min ago`;
}

export function PurchaseNotification() {
  const [notifications, setNotifications] = useState<{ id: number; name: string; text: string }[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const show = () => {
      const name = randomItem(names);
      setNotifications((prev) => [
        ...prev.slice(-2),
        {
          id: Date.now(),
          name,
          text: `${name} bought Gemini Pro`,
        },
      ]);
      setCounter((c) => c + 1);
    };

    show();
    const interval = setInterval(show, 15000);

    return () => clearInterval(interval);
  }, []);

  const remove = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed bottom-20 left-4 z-50 space-y-2 max-w-[260px]">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            onAnimationEnd={() => setTimeout(() => remove(n.id), 5000)}
            className="bg-white rounded-xl shadow-xl border border-neutral-100 p-3.5 flex items-center gap-3 cursor-default"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
              {n.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-neutral-900 leading-tight truncate">{n.text}</p>
              <p className="text-[10px] text-neutral-400 font-medium mt-0.5">{randomTimeAgo()}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
