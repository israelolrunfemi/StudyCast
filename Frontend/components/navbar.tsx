import { Button } from "@/components/ui/button"
import {BookOpen,Headphones} from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  return (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
              src= "/logo.png"
              alt="Logo"
              width={150}
              height={150}
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition">
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-sm text-gray-400 hover:text-white">
                Login
              </Button>
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">Get Started Free</Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar