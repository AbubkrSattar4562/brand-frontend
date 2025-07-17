import Header from "@/components/home/header/page"
import HeroSection from "@/components/home/herosection/page"
import Features from "@/components/home/features/page"
import WhatsIncluded from "@/components/home/whatsincluded/page"
import ContentCalendar from "@/components/home/contentcalendar/page"
import TrendsTracker from "@/components/home/trendtracker/page"
import SuccessStories from "@/components/home/successstories/page"
import TargetAudience from "@/components/home/targetaudience/page"
import Testimonials from "@/components/home/testimonials/page"
import Pricing from "@/components/home/pricing/page"
import FAQ from "@/components/home/faq/page"
import FinalCTA from "@/components/home/finalcta/page"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="features">
        <Features />
      </div>
      <div id="whats-included">
        <WhatsIncluded />
      </div>
      <ContentCalendar />
      <TrendsTracker />
      <div id="success-stories">
        <SuccessStories />
      </div>
      <TargetAudience />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <FAQ />
      <div id="contact">
        <FinalCTA />
      </div>
    </main>
  )
}
