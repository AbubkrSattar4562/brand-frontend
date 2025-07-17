import { Menu } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-brand-cream border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/images/brand-appeal-logo-wide-bw.svg"
              alt="Brand Appeal"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-brand-charcoal hover:text-brand-warm-brown font-poppins transition-colors">
              Services
            </a>
            <a href="#success-stories" className="text-brand-charcoal hover:text-brand-warm-brown font-poppins transition-colors">
              About
            </a>
            <a href="#whats-included" className="text-brand-charcoal hover:text-brand-warm-brown font-poppins transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-brand-charcoal hover:text-brand-warm-brown font-poppins transition-colors">
              Contact
            </a>
            <a
              href="#pricing"
              className="bg-brand-warm-brown text-brand-cream px-6 py-2 rounded-md font-outfit font-semibold hover:bg-brand-charcoal transition-colors"
            >
              Get Started
            </a>
          </nav>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-brand-charcoal" />
          </div>
        </div>
      </div>
    </header>
  )
}
