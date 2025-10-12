import { Card } from "@/components/ui/card"
import {Sparkles,Headphones, Brain, Download } from "lucide-react"

const FeatureSection = () => {
  return (
   <section id="features" className="py-20 bg-[#0A0A0B]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Students Love <span className="text-[#8B5CF6]">StudyCast</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Study smarter, not harder. Let your textbooks talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#18181B] border-white/10 p-6 hover:border-[#8B5CF6]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn Anywhere</h3>
              <p className="text-gray-400 leading-relaxed">
                Listen while walking, cooking, or commuting. Your textbooks, your playlist.
              </p>
            </Card>

            <Card className="bg-[#18181B] border-white/10 p-6 hover:border-[#FACC15]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#FACC15]/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-[#FACC15]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Summaries</h3>
              <p className="text-gray-400 leading-relaxed">
                Converts complex chapters into simple, conversational explanations.
              </p>
            </Card>

            <Card className="bg-[#18181B] border-white/10 p-6 hover:border-[#1E3A8A]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-[#1E3A8A]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Retain More</h3>
              <p className="text-gray-400 leading-relaxed">
                Hearing explanations improves focus and understanding by up to 85%.
              </p>
            </Card>

            <Card className="bg-[#18181B] border-white/10 p-6 hover:border-[#8B5CF6]/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Your Podcasts</h3>
              <p className="text-gray-400 leading-relaxed">
                Revisit your generated audio anytime. Build your personal learning library.
              </p>
            </Card>
          </div>
        </div>
      </section>


  )
}

export default FeatureSection