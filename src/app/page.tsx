"use client";

import { useState } from "react";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OfferDescription } from "@/components/sections/OfferDescription";
import { SubtitleSection } from "@/components/sections/SubtitleSection";
import { Features } from "@/components/sections/Features";
import { PricingComparison } from "@/components/sections/PricingComparison";
import { WhyBuy } from "@/components/sections/WhyBuy";
import { BuyingGuide } from "@/components/sections/BuyingGuide";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { StickyBuyBar } from "@/components/layout/StickyBuyBar";
import { PurchaseNotification } from "@/components/layout/PurchaseNotification";
import { BottomSections } from "@/components/sections/BottomSections";
import { productData, siteConfig } from "@/config/product";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Script id="product-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: productData.name,
          description: productData.description,
          brand: { "@type": "Brand", name: siteConfig.name },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: productData.price,
            availability: "https://schema.org/InStock",
            url: siteConfig.url,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: productData.reviews.average,
            reviewCount: productData.reviews.count,
          },
        })}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: productData.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>
      <Navbar onOpenCart={openCart} />
      
      <main className="flex-grow">
        <Hero onOpenCart={openCart} />
        <OfferDescription />
        <SubtitleSection />
        <Features />
        <PricingComparison />
        <WhyBuy />
        <BuyingGuide />
        <Reviews />
        <FAQ />
        <BottomSections onOpenCart={openCart} />
      </main>

      <Footer />
      
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <StickyBuyBar onOpenCart={openCart} />
      <PurchaseNotification />
    </div>
  );
}
