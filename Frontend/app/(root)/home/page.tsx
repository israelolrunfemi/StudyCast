"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { UploadModal } from "@/components/uploadModal"

export default function HomePage() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false)

  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] space-y-6">
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-4xl font-bold">Welcome to StudyCast</h1>
          <p className="text-gray-400 text-lg">Upload your first document to get started</p>
        </div>

        <Button
          size="lg"
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-lg px-8 py-6"
          onClick={() => setUploadModalOpen(true)}
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload Document
        </Button>
      </div>

      <UploadModal open={uploadModalOpen} onOpenChange={setUploadModalOpen} />
    </div>
  )
}
