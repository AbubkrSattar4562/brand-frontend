import { Check, Play } from "lucide-react"

export default function Features() {
  return (
    <section className="bg-brand-charcoal py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-black italic text-4xl lg:text-5xl text-brand-cream mb-6">
            Strategic Marketing in Action
          </h2>
          <p className="font-poppins text-brand-beige text-lg max-w-2xl mx-auto leading-relaxed">
            See how our thoughtful approach transforms aesthetic practices through authentic brand storytelling and
            strategic digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-brand-cream rounded-lg shadow-2xl p-6">
              <div className="bg-brand-light-beige aspect-video rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-brand-warm-brown" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-outfit font-bold text-xl text-brand-cream mb-3">Brand Strategy & Positioning</h3>
                <p className="font-poppins text-brand-beige leading-relaxed">
                  Thoughtful brand development that reflects your expertise and values, creating authentic connections
                  with your ideal clients.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-outfit font-bold text-xl text-brand-cream mb-3">Content Strategy & Creation</h3>
                <p className="font-poppins text-brand-beige leading-relaxed">
                  Sophisticated content that educates and inspires, positioning you as the trusted expert in your field
                  without pressure or hype.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Check className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-outfit font-bold text-xl text-brand-cream mb-3">Digital Marketing Excellence</h3>
                <p className="font-poppins text-brand-beige leading-relaxed">
                  Strategic digital campaigns that build genuine relationships and drive meaningful engagement with your
                  target audience.
                </p>
              </div>
            </div>

            <button className="bg-brand-warm-brown text-brand-cream px-8 py-3 rounded-md font-outfit font-semibold hover:bg-brand-beige hover:text-brand-charcoal transition-colors">
              Explore Our Approach
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
