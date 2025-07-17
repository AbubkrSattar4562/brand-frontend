import { Check } from "lucide-react"

export default function SuccessStories() {
  return (
    <section className="bg-brand-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-black italic text-4xl lg:text-5xl text-brand-charcoal mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="font-poppins text-brand-charcoal text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions designed with integrity, insight, and intentionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Strategic Planning</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Thoughtful marketing strategies tailored to your unique practice and goals
            </p>
          </div>

          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Brand Development</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Sophisticated brand identity that reflects your expertise and values
            </p>
          </div>

          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Content Creation</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Elevated content that educates and inspires without hype or pressure
            </p>
          </div>

          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Digital Marketing</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Strategic campaigns that build authentic relationships with your audience
            </p>
          </div>

          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Performance Analytics</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Clear insights and data-driven recommendations for continuous growth
            </p>
          </div>

          <div className="text-center">
            <div className="bg-brand-soft-beige w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-brand-warm-brown" />
            </div>
            <h3 className="font-outfit font-bold text-xl text-brand-charcoal mb-4">Ongoing Support</h3>
            <p className="font-poppins text-brand-charcoal leading-relaxed">
              Dedicated partnership with responsive guidance and strategic direction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
