import {  BookOpen, Headphones, Sparkles, Zap, Repeat } from "lucide-react"

const WorkSection = () => {
  return (
   <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#0A0A0B] to-[#18181B]/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              How It <span className="text-[#FACC15]">Works</span>
            </h2>
            <p className="text-xl text-gray-400">From textbook to podcast in minutes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <BookOpen className="h-8 w-8 text-[#8B5CF6]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#8B5CF6]">STEP 1</p>
                <h3 className="text-lg font-semibold">Upload PDF</h3>
                <p className="text-sm text-gray-400">Drop your textbook or study material</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center border border-[#FACC15]/20">
                <Zap className="h-8 w-8 text-[#FACC15]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#FACC15]">STEP 2</p>
                <h3 className="text-lg font-semibold">AI Processing</h3>
                <p className="text-sm text-gray-400">Our AI creates podcast-style explanations</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center border border-[#1E3A8A]/20">
                <Headphones className="h-8 w-8 text-[#1E3A8A]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#1E3A8A]">STEP 3</p>
                <h3 className="text-lg font-semibold">Listen & Learn</h3>
                <p className="text-sm text-gray-400">Stream or download your audio</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                <Repeat className="h-8 w-8 text-[#8B5CF6]" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#8B5CF6]">STEP 4</p>
                <h3 className="text-lg font-semibold">Revisit Anytime</h3>
                <p className="text-sm text-gray-400">Access your library anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>


  )
}

export default WorkSection