"use client"

import { BookOpen, Headphones, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <BookOpen className="absolute inset-0 h-10 w-10 text-[#1E3A8A]" />
            <Headphones className="absolute inset-0 h-10 w-10 text-[#8B5CF6] translate-x-1 translate-y-1" />
          </div>
          <span className="text-xl font-bold">
            Study<span className="text-[#8B5CF6]">Cast</span>
          </span>
        </div>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback className="bg-[#8B5CF6] text-white">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#18181B] border-white/10" align="end">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-gray-300 focus:bg-white/5 focus:text-white">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 focus:bg-white/5 focus:text-white">Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-gray-300 focus:bg-white/5 focus:text-white">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
