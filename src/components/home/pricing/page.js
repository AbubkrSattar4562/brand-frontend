import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section className="bg-brand-charcoal py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-brand-cream mb-12">
          <div className="font-outfit font-semibold text-sm mb-4 text-brand-beige">STRATEGIC PARTNERSHIP</div>
          <div className="font-playfair font-black italic text-5xl mb-4">Investment in Excellence</div>
          <div className="font-poppins text-brand-beige text-lg">
            Custom solutions tailored to your practice&apos;s unique needs
          </div>
        </div>

        <p className="font-poppins text-brand-beige text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          We believe in transparent partnerships built on mutual success. Our investment reflects the strategic value
          and thoughtful execution you&apos;ll receive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Strategic Brand Development</span>
          </div>
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Content Strategy & Creation</span>
          </div>
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Digital Marketing Campaigns</span>
          </div>
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Performance Analytics</span>
          </div>
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Ongoing Strategic Support</span>
          </div>
          <div className="flex items-center space-x-4">
            <Check className="h-5 w-5 text-brand-beige flex-shrink-0" />
            <span className="font-poppins text-brand-cream">Dedicated Account Management</span>
          </div>
        </div>

        <button className="bg-brand-warm-brown text-brand-cream px-10 py-4 rounded-md font-outfit font-semibold text-lg hover:bg-brand-beige hover:text-brand-charcoal transition-colors">
          Schedule Strategic Consultation
        </button>
      </div>
    </section>
  )
}
