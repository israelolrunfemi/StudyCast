import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { HomeNavbar } from "@/components/homeNavbar"
import { Sidebar } from "@/components/sidebar"

export const metadata: Metadata = {
  title: "StudyCast – Don't Just Read It, Hear It",
  description: "Transform your textbooks into engaging podcasts. Learn anywhere with AI-powered audio explanations.",
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <HomeNavbar />
        <Sidebar />
        <main className="ml-64 mt-16 min-h-screen transition-all duration-300 [body:has(aside.w-16)_&]:ml-16">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </body>
    </html>
  )
}
