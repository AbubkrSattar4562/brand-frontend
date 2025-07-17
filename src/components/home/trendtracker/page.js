export default function TrendsTracker() {
    return (
      <section className="bg-brand-light-beige py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-playfair font-black italic text-3xl text-brand-charcoal mb-8">
                Strategic Insights & Analytics
              </h3>
              <p className="font-poppins text-brand-charcoal mb-8 leading-relaxed">
                We monitor industry trends and analyze performance data to ensure your marketing strategy remains
                effective and aligned with your goals. Our insights-driven approach provides clarity on what&apos;s working and
                where opportunities exist.
              </p>
  
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-warm-brown rounded-full"></div>
                  <span className="font-poppins text-brand-charcoal">Performance tracking and optimization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-warm-brown rounded-full"></div>
                  <span className="font-poppins text-brand-charcoal">Industry trend analysis</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-warm-brown rounded-full"></div>
                  <span className="font-poppins text-brand-charcoal">Strategic recommendations</span>
                </div>
              </div>
            </div>
  
            <div className="flex justify-center">
              <div className="bg-brand-cream rounded-lg shadow-xl p-10 max-w-sm w-full">
                <div className="text-center mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-brand-soft-beige rounded-full"></div>
                    <div className="absolute inset-3 bg-brand-warm-brown rounded-full flex items-center justify-center">
                      <span className="text-brand-cream font-outfit font-bold text-2xl">92%</span>
                    </div>
                  </div>
                  <h4 className="font-outfit font-semibold text-brand-charcoal">Client Satisfaction</h4>
                </div>
  
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-brand-charcoal">Engagement</span>
                    <span className="font-outfit font-semibold text-brand-charcoal">+156%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-brand-charcoal">Reach</span>
                    <span className="font-outfit font-semibold text-brand-charcoal">+89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-brand-charcoal">Conversions</span>
                    <span className="font-outfit font-semibold text-brand-charcoal">+234%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  