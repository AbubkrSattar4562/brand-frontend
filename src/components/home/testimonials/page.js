export default function Testimonials() {
    return (
      <section className="bg-brand-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-black italic text-4xl lg:text-5xl text-brand-charcoal mb-6">
              What Our Partners Say
            </h2>
            <p className="font-poppins text-brand-charcoal text-lg max-w-2xl mx-auto leading-relaxed">
              Authentic feedback from aesthetic professionals who&apos;ve experienced our strategic approach.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-light-beige rounded-lg p-8 shadow-md">
              <p className="font-poppins text-brand-charcoal mb-6 italic leading-relaxed text-lg">
                &quot;Brand Appeal transformed our practice&apos;s entire marketing approach. Their strategic insight and
                sophisticated execution elevated our brand while maintaining the authentic relationships we value with our
                clients.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-soft-beige rounded-full mr-4"></div>
                <div>
                  <div className="font-outfit font-semibold text-brand-charcoal">Dr. Sarah Mitchell</div>
                  <div className="font-poppins text-sm text-brand-warm-brown">Plastic Surgeon, Beverly Hills</div>
                </div>
              </div>
            </div>
  
            <div className="bg-brand-light-beige rounded-lg p-8 shadow-md">
              <p className="font-poppins text-brand-charcoal mb-6 italic leading-relaxed text-lg">
                &quot;Working with Brand Appeal has been transformative. Their thoughtful guidance and strategic expertise
                helped us build genuine connections with our ideal clients while maintaining our professional integrity.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-soft-beige rounded-full mr-4"></div>
                <div>
                  <div className="font-outfit font-semibold text-brand-charcoal">Maria Rodriguez</div>
                  <div className="font-poppins text-sm text-brand-warm-brown">Med Spa Owner, Austin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  