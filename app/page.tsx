
import Navbar from "@/components/navbar"
import HeroSection from "@/components/heroSection"
import FeatureSection from "@/components/featureSection"
import WorkSection from "@/components/workSection"
import CtaSection from "@/components/ctaSection"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
            {/* Features Section */}
            <FeatureSection/>
            {/* How It Works */}
            <WorkSection/>
            {/* CTA Section */}
             <CtaSection/>
      {/* Footer */}
       <Footer/>
    </div>
  )
}
