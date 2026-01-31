"use client"
import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "@/components/ui/button"
import { FileUploadZone } from "./fileUploadZone"
import { FileList } from "./fileList"

interface UploadedFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "completed" | "error"
  type: "pdf" | "image" | "other"
}

interface UploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadModal({ open, onOpenChange }: UploadModalProps) {
  const [files, setFiles] = useState<UploadedFile[]>([])

  const handleFiles = useCallback((fileList: File[]) => {
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
  }, [])

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

  const handleCancel = () => {
    setFiles([])
    onOpenChange(false)
  }

  const handleAttach = () => {
    // Handle file attachment logic here
    console.log("Attaching files:", files)
    onOpenChange(false)
    setFiles([])
  }

  const uploadingFiles = files.filter((f) => f.status === "uploading")
  const completedFiles = files.filter((f) => f.status === "completed")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#18181B] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Upload and attach files</DialogTitle>
          <p className="text-sm text-gray-400">Attachments will be a part of this project.</p>
        </DialogHeader>

        <div className="space-y-6">
          <FileUploadZone onFilesSelected={handleFiles} />

          <FileList uploadingFiles={uploadingFiles} completedFiles={completedFiles} onRemoveFile={removeFile} />

          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <Button
              variant="outline"
              className="flex-1 border-white/20 hover:bg-white/5 bg-transparent"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
              disabled={files.length === 0 || uploadingFiles.length > 0}
              onClick={handleAttach}
            >
              Attach files
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
