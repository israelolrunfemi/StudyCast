import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import    {Sparkles, BookOpen ,Headphones , Brain} from "lucide-react"

const HeroSection = () => {
  return (
<section className="relative pt-32 pb-20 overflow-hidden gradient-radial">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                <Sparkles className="h-4 w-4 text-[#8B5CF6]" />
                <span className="text-sm text-[#8B5CF6] font-medium">AI-Powered Learning</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
                Don't Just Read It, <span className="text-[#8B5CF6]">Hear It.</span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed text-pretty">
                Transform your textbooks into engaging podcasts. Upload any PDF and StudyCast turns it into personalized
                audio explanations — so you can learn on the go, like your favorite podcast show.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-lg px-8 py-6">
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-lg px-8 py-6 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              <p className="text-sm text-gray-500">No credit card required — just your curiosity.</p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative z-10 animate-float">
                <img
                  src="/owl-mascot.png"
                  alt="StudyCast Owl Mascot reading Chapter 5: Quantum Physics"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>

              <Card className="absolute bottom-8 left-4 lg:left-8 bg-[#18181B] border-white/10 p-4 rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs z-20">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#1E3A8A]/20 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Chapter 5: Quantum Physics</p>
                      <p className="text-xs text-gray-400">Physics Textbook</p>
                    </div>
                  </div>
                  <div className="h-1.5 bg-[#8B5CF6]/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#8B5CF6] rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">12:34 / 16:42</span>
                    <div className="flex items-center gap-1.5">
                      <Headphones className="h-3.5 w-3.5 text-[#FACC15]" />
                      <span className="text-[#FACC15]">Playing</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="absolute top-8 right-4 lg:right-8 bg-[#18181B] border-white/10 p-4 -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-[#FACC15]" />
                  <div>
                    <p className="font-semibold text-sm">85% Retention</p>
                    <p className="text-xs text-gray-400">vs 60% reading</p>
                  </div>
                </div>
              </Card>

              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#1E3A8A]/20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>


  )
}

export default HeroSection