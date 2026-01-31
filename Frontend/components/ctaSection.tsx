import { Card } from "./ui/card"
import { Button } from "./ui/button"

const CtaSection = () => {
  return (
<section className="py-20 bg-[#0A0A0B]">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#1E3A8A]/10 border-[#8B5CF6]/20 p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Study smarter, not harder.</h2>
              <p className="text-xl text-gray-300 text-pretty">
                Stop staring at pages. Let your textbooks talk. StudyCast makes learning as easy as listening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-lg px-8 py-6">
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-lg px-8 py-6 bg-transparent"
                >
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500">Join thousands of students learning smarter</p>
            </div>
          </Card>
        </div>
      </section>
  )
}

export default CtaSection