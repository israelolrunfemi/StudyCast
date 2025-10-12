"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Headphones, Upload, X, FileText, ImageIcon, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadedFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "completed" | "error"
  type: "pdf" | "image" | "other"
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }, [])

  const handleFiles = (fileList: File[]) => {
    const newFiles: UploadedFile[] = fileList.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading" as const,
      type: file.type.includes("pdf") ? "pdf" : file.type.includes("image") ? "image" : "other",
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateUpload(file.id)
    })
  }

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId && file.progress < 100) {
            const newProgress = Math.min(file.progress + Math.random() * 30, 100)
            return {
              ...file,
              progress: newProgress,
              status: newProgress === 100 ? "completed" : "uploading",
            }
          }
          return file
        }),
      )
    }, 500)

    setTimeout(() => clearInterval(interval), 5000)
  }

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  const getTimeRemaining = (progress: number) => {
    if (progress === 100) return "Completed"
    const remaining = Math.ceil((100 - progress) / 10)
    return `${remaining} sec left`
  }

  const uploadingFiles = files.filter((f) => f.status === "uploading")
  const completedFiles = files.filter((f) => f.status === "completed")

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <BookOpen className="absolute inset-0 h-10 w-10 text-[#1E3A8A]" />
                <Headphones className="absolute inset-0 h-10 w-10 text-[#8B5CF6] translate-x-1 translate-y-1" />
              </div>
              <span className="text-xl font-bold">
                Study<span className="text-[#8B5CF6]">Cast</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-sm text-gray-400 hover:text-white">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Upload Section */}
      <div className="pt-24 pb-12 min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl bg-[#18181B] border-white/10 p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Upload and attach files</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white"
              onClick={() => window.history.back()}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-400 mb-8">Attachments will be a part of this project.</p>

          {/* Drop Zone */}
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

          {/* Uploading Files */}
          {uploadingFiles.length > 0 && (
            <div className="mt-6 space-y-4">
              <p className="text-sm font-medium text-gray-300">
                {uploadingFiles.length} file{uploadingFiles.length > 1 ? "s" : ""} uploading...
              </p>

              {uploadingFiles.map((file) => (
                <Card key={file.id} className="bg-[#0A0A0B] border-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                      {file.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-[#8B5CF6]" />
                      ) : file.type === "image" ? (
                        <ImageIcon className="h-5 w-5 text-[#8B5CF6]" />
                      ) : (
                        <FileText className="h-5 w-5 text-[#8B5CF6]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{file.name}</p>
                          <p className="text-xs text-gray-400">
                            {formatFileSize(file.size)} • {getTimeRemaining(file.progress)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{Math.round(file.progress)}%</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-white"
                            onClick={() => removeFile(file.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Progress value={file.progress} className="h-1.5" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Completed Files */}
          {completedFiles.length > 0 && (
            <div className="mt-6 space-y-4">
              {completedFiles.map((file) => (
                <Card key={file.id} className="bg-[#0A0A0B] border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                      {file.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-[#1E3A8A]" />
                      ) : file.type === "image" ? (
                        <ImageIcon className="h-5 w-5 text-[#1E3A8A]" />
                      ) : (
                        <FileText className="h-5 w-5 text-[#1E3A8A]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{file.name}</p>
                      <p className="text-xs text-gray-400">{formatFileSize(file.size)} • Completed</p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-red-400"
                      onClick={() => removeFile(file.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
            <Button
              variant="outline"
              className="flex-1 border-white/20 hover:bg-white/5 bg-transparent"
              onClick={() => setFiles([])}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
              disabled={files.length === 0 || uploadingFiles.length > 0}
            >
             Summarize
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
