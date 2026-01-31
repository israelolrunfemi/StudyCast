"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void
}

export function FileUploadZone({ onFilesSelected }: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      const droppedFiles = Array.from(e.dataTransfer.files)
      onFilesSelected(droppedFiles)
    },
    [onFilesSelected],
  )

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files)
        onFilesSelected(selectedFiles)
      }
    },
    [onFilesSelected],
  )

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative border-2 border-dashed rounded-xl p-12 transition-all duration-200",
        isDragging ? "border-[#8B5CF6] bg-[#8B5CF6]/5" : "border-white/20 hover:border-white/30 hover:bg-white/5",
      )}
    >
      <input
        type="file"
        id="file-upload"
        multiple
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        accept=".pdf,.doc,.docx,.txt,image/*"
      />

      <div className="flex flex-col items-center justify-center gap-4 pointer-events-none">
        <div className="h-16 w-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center">
          <Upload className="h-8 w-8 text-[#8B5CF6]" />
        </div>

        <div className="text-center">
          <p className="text-base mb-1">
            <label
              htmlFor="file-upload"
              className="text-[#8B5CF6] font-medium cursor-pointer pointer-events-auto hover:underline"
            >
              Click to Upload
            </label>{" "}
            <span className="text-gray-400">or drag and drop</span>
          </p>
          <p className="text-sm text-gray-500">(Max. File size: 25 MB)</p>
        </div>
      </div>
    </div>
  )
}
