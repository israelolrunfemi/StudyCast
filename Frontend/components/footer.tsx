import { BookOpen, Headphones } from "lucide-react"

const Footer = () => {
  return (
   <footer className="border-t border-white/10 py-12 bg-[#0A0A0B]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <BookOpen className="absolute inset-0 h-8 w-8 text-[#1E3A8A]" />
                <Headphones className="absolute inset-0 h-8 w-8 text-[#8B5CF6] translate-x-1 translate-y-1" />
              </div>
              <span className="text-lg font-bold">
                Study<span className="text-[#8B5CF6]">Cast</span>
              </span>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>

            <p className="text-sm text-gray-500">© 2025 StudyCast. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer