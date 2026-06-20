import { siteConfig, productData } from "@/config/product";

export function Footer() {
  return (
    <footer className="bg-[#1A202C] text-neutral-400 py-16 text-[11px] font-bold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h4 className="text-white mb-6 uppercase tracking-widest">PRODUCT</h4>
            <ul className="space-y-3">
              <li><a href="#product" className="hover:text-white transition-colors uppercase italic">Google Gemini Pro</a></li>
              <li><a href="#offer" className="hover:text-white transition-colors uppercase italic">How Gift Link Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors uppercase italic">Pricing Comparison</a></li>
              <li><a href="#buying-guide" className="hover:text-white transition-colors uppercase italic">Buying Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest">SUPPORT</h4>
            <ul className="space-y-3">
              <li><a href={productData.links.whatsapp} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors uppercase italic">Contact Us</a></li>
              <li><a href={productData.links.whatsapp} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors uppercase italic">WhatsApp Support</a></li>
              <li><a href={productData.links.telegram} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors uppercase italic">Telegram Support</a></li>
              <li><a href={productData.links.whatsapp} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors uppercase italic">24/7 Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest">LEGAL</h4>
            <ul className="space-y-3">
              <li><span className="text-neutral-500 uppercase italic cursor-not-allowed opacity-50">Privacy Policy</span></li>
              <li><span className="text-neutral-500 uppercase italic cursor-not-allowed opacity-50">Terms of Service</span></li>
              <li><span className="text-neutral-500 uppercase italic cursor-not-allowed opacity-50">Refund Policy</span></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white mb-6 uppercase tracking-widest">About {siteConfig.name}</h4>
            <p className="text-neutral-500 leading-relaxed mb-4 max-w-sm">
              {siteConfig.description}
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            {["VISA", "MASTERCARD", "AMEX", "PAYPAL", "CRYPTO"].map(p => (
              <span key={p} className="text-white opacity-20 hover:opacity-100 transition-opacity cursor-default tracking-[0.2em] uppercase italic">{p}</span>
            ))}
          </div>
          <p className="text-[10px] text-neutral-500 text-center md:text-right uppercase italic tracking-tighter">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
