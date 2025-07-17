export default function HeroSection() {
  // Sample aesthetic/beauty photos for the 4x4 grid
  const aestheticPhotos = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=150&width=150`,
    alt: `Aesthetic work ${i + 1}`,
  }));

  return (
    <section className="relative h-screen overflow-hidden bg-brand-light-beige">
      <div className="absolute inset-0">
        {/* Left Half - Text Content with "/" Diagonal */}
        <div
          className="absolute inset-0 bg-brand-cream flex items-center justify-start pl-16"
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 25% 100%, 0% 100%)",
          }}
        >
          {/* Diagonal Layout Wrapper */}
          {/* Diagonal Layout Wrapper */}
          <div className="transform -rotate-[8deg] origin-bottom-left pl-10">
            <div className="transform rotate-[8deg] space-y-6 w-[150%]">
              <h1 className="font-playfair font-black italic text-5xl lg:text-6xl text-brand-charcoal leading-tight">
                Elevated Marketing for
                <br />
                <span className="text-brand-warm-brown">
                  Aesthetic Professionals
                </span>
              </h1>
              <p className="font-poppins text-lg text-brand-charcoal leading-relaxed">
                Strategic expertise with relational warmth.
                <br />
                Thoughtful guidance that builds authentic connections.
              </p>
              <div>
                <button className="bg-brand-warm-brown text-brand-cream px-8 py-4 rounded-md font-outfit font-semibold text-lg hover:bg-brand-charcoal transition-colors">
                  Discover Your Potential
                </button>
                <p className="font-poppins text-sm text-brand-warm-brown mt-4">
                  Trusted by 200+ professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half - 4x4 Image Grid with "/" Diagonal */}
        <div
          className="absolute inset-0 bg-brand-charcoal flex items-center justify-center"
          style={{
            clipPath: "polygon(75% 0%, 100% 0%, 100% 100%, 25% 100%)",
          }}
        >
          <div className="w-full h-full p-8">
            <div className="grid grid-cols-4 gap-1 w-full h-full">
              {aestheticPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative overflow-hidden rounded-sm"
                >
                  <div className="w-full h-full bg-brand-beige"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-charcoal/5 pointer-events-none"></div>
    </section>
  );
}
