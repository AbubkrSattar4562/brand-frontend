import { Check } from "lucide-react"

export default function WhatsIncluded() {
  return (
    <section className="bg-brand-light-beige py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-black italic text-4xl lg:text-5xl text-brand-charcoal mb-6">
            What&apos;s Included in Our Partnership?
          </h2>
          <p className="font-poppins text-brand-charcoal text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive marketing solutions designed with integrity, insight, and intentionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-outfit font-bold text-3xl text-brand-charcoal mb-8">Strategic Brand Development</h3>
            <p className="font-poppins text-brand-charcoal mb-8 leading-relaxed">
              Our thoughtful approach to brand development ensures your practice reflects sophistication and expertise
              while maintaining genuine human connection with your clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Brand Strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Visual Identity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Content Strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Digital Presence</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Marketing Campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-brand-warm-brown flex-shrink-0" />
                <span className="font-poppins text-brand-charcoal">Ongoing Support</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-brand-cream rounded-2xl shadow-xl p-8 max-w-sm">
              <div className="bg-gradient-to-br from-brand-beige to-brand-warm-brown aspect-[9/16] rounded-xl flex items-center justify-center">
                <div className="text-brand-cream text-center">
                  <div className="font-outfit font-bold text-2xl mb-2">Brand</div>
                  <div className="font-poppins text-sm opacity-90">Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
