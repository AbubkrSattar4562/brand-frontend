export default function ContentCalendar() {
    return (
      <section className="bg-brand-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-brand-cream rounded-lg shadow-xl overflow-hidden border border-brand-beige">
              <div className="bg-brand-warm-brown text-brand-cream p-6">
                <h4 className="font-outfit font-semibold text-lg">Strategic Content Calendar</h4>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-poppins text-sm font-medium text-brand-charcoal py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square border border-brand-beige rounded p-1 text-xs">
                      {i % 7 === 0 && i < 28 ? (
                        <div className="bg-brand-soft-beige text-brand-charcoal rounded px-1 py-0.5 text-xs font-poppins">
                          Content
                        </div>
                      ) : (
                        <div className="text-brand-warm-brown font-poppins">{(i % 30) + 1}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            <div>
              <h3 className="font-playfair font-black italic text-3xl text-brand-charcoal mb-8">
                Thoughtful Content Planning
              </h3>
              <p className="font-poppins text-brand-charcoal mb-6 leading-relaxed">
                Our strategic content calendar ensures consistent, valuable communication with your audience. Every piece
                of content is crafted with intention, reflecting your expertise while building trust and genuine
                connections.
              </p>
              <p className="font-poppins text-brand-charcoal mb-10 leading-relaxed">
                No more wondering what to share—we provide clarity and direction for your content strategy.
              </p>
              <button className="bg-brand-warm-brown text-brand-cream px-8 py-3 rounded-md font-outfit font-semibold hover:bg-brand-charcoal transition-colors">
                View Content Strategy
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  