import Image from "next/image";

export default function HeroSection() {
  // Sample aesthetic/beauty photos for the 4x4 grid
  const aestheticPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 6",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 7",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 8",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 9",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 10",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 11",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 12",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 13",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 14",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 15",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      alt: "Aesthetic work 16",
    },
  ];

  return (
    <section className="relative bg-brand-light-beige">
      {/* --- Desktop Layout with Diagonal Split --- */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        {/* Left Side */}
        <div
          className="absolute inset-0 bg-brand-cream flex items-center justify-start pl-16"
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 25% 100%, 0% 100%)",
          }}
        >
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

        {/* Right Side (Desktop) */}
      
        <div
          className="absolute inset-0 bg-brand-charcoal flex items-center justify-center"
          style={{
            clipPath: "polygon(75% 0%, 100% 0%, 100% 100%, 25% 100%)",
          }}
        >
          <div className="w-full h-full p-8">
            <div className="grid grid-cols-4 h-full w-full">
              {aestheticPhotos.slice(0, 12).map((photo) => (
                <div
                  key={photo.id}
                  className="p-2" // Simulates consistent spacing all around
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 12vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile/Tablet Layout (Stacked) --- */}
      <div className="block lg:hidden p-6 space-y-12">
        {/* Text Content */}
        <div className="text-center space-y-6">
          <h1 className="font-playfair font-black italic text-4xl text-brand-charcoal leading-tight">
            Elevated Marketing for
            <br />
            <span className="text-brand-warm-brown">
              Aesthetic Professionals
            </span>
          </h1>
          <p className="font-poppins text-base text-brand-charcoal leading-relaxed">
            Strategic expertise with relational warmth.
            <br />
            Thoughtful guidance that builds authentic connections.
          </p>
          <div>
            <button className="bg-brand-warm-brown text-brand-cream px-6 py-3 rounded-md font-outfit font-semibold text-base hover:bg-brand-charcoal transition-colors">
              Discover Your Potential
            </button>
            <p className="font-poppins text-sm text-brand-warm-brown mt-4">
              Trusted by 200+ professionals
            </p>
          </div>
        </div>

        {/* Image Grid - 4 images per row, 2 rows only */}
        <div className="grid grid-cols-4 gap-1">
          {aestheticPhotos.slice(0, 8).map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
