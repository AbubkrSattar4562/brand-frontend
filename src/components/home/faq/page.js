import { ChevronDown } from "lucide-react"

export default function FAQ() {
  return (
    <section className="bg-brand-light-beige py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-black italic text-4xl lg:text-5xl text-brand-charcoal mb-6">
            Questions? We&#39;re Here to Help
          </h2>
          <p className="font-poppins text-brand-charcoal text-lg">
            Clear answers to help you understand our strategic approach.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">
                How do you ensure our brand reflects our unique practice?
              </span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>

          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">
                What makes your approach different from other marketing agencies?
              </span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>

          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">
                How long does it take to see results from your strategies?
              </span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>

          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">
                Do you work with practices of all sizes?
              </span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>

          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">How do you measure success and ROI?</span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>

          <div className="bg-brand-cream rounded-lg border border-brand-beige shadow-sm">
            <button className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-light-beige transition-colors">
              <span className="font-outfit font-semibold text-brand-charcoal">
                What level of involvement is required from our team?
              </span>
              <ChevronDown className="h-5 w-5 text-brand-warm-brown" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
