"use client"

import { Home, FileText, Headphones, HelpCircle, Settings, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const navItems = [
  {
    title: "Home",
    href: "/home",
    icon: Home,
  },
  {
    title: "Summaries",
    href: "/summaries",
    icon: FileText,
  },
  {
    title: "Podcasts",
    href: "/podcasts",
    icon: Headphones,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 border-r border-white/10 bg-[#0A0A0B] flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 z-50 h-6 w-6 rounded-full border border-white/10 bg-[#0A0A0B] hover:bg-white/5"
      >
        <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
      </Button>

      <div className="h-16 flex items-center gap-3 px-4 border-b border-white/10">
        <Image src="/owl-mascot.png" alt="StudyCast" width={32} height={32} className="rounded-lg flex-shrink-0" />
        {!isCollapsed && (
          <span className="text-lg font-bold">
            Study<span className="text-[#8B5CF6]">Cast</span>
          </span>
        )}
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium",
                isActive
                  ? "bg-[#1E3A8A]/20 text-white border border-[#1E3A8A]/30"
                  : "text-gray-400 hover:bg-white/5 hover:text-white",
                isCollapsed && "justify-center px-0",
              )}
              title={isCollapsed ? item.title : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-3 space-y-1">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-gray-400 hover:bg-white/5 hover:text-white h-auto py-2.5 px-3",
            isCollapsed && "justify-center px-0",
          )}
          title={isCollapsed ? "Support" : undefined}
        >
          <HelpCircle className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Support</span>}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-gray-400 hover:bg-white/5 hover:text-white h-auto py-2.5 px-3",
            isCollapsed && "justify-center px-0",
          )}
          title={isCollapsed ? "Settings" : undefined}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Settings</span>}
        </Button>

        <div className="mt-3 pt-3 border-t border-white/10">
          <div
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors",
              isCollapsed && "justify-center px-0",
            )}
            title={isCollapsed ? "John Doe" : undefined}
          >
            <Avatar className="h-9 w-9 flex-shrink-0">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
              <AvatarFallback className="bg-[#8B5CF6] text-white text-sm">JD</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-gray-400 truncate">john@studycast.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
