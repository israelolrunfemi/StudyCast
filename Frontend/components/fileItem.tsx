"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, ImageIcon, X, Trash2 } from "lucide-react"

interface UploadedFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "completed" | "error"
  type: "pdf" | "image" | "other"
}

interface FileItemProps {
  file: UploadedFile
  onRemove: (fileId: string) => void
}

export function FileItem({ file, onRemove }: FileItemProps) {
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

  const isUploading = file.status === "uploading"
  const isCompleted = file.status === "completed"

  return (
    <Card className="bg-[#0A0A0B] border-white/10 p-4">
      <div className="flex items-start gap-3">
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isCompleted ? "bg-[#1E3A8A]/10" : "bg-[#8B5CF6]/10"
          }`}
        >
          {file.type === "pdf" ? (
            <FileText className={`h-5 w-5 ${isCompleted ? "text-[#1E3A8A]" : "text-[#8B5CF6]"}`} />
          ) : file.type === "image" ? (
            <ImageIcon className={`h-5 w-5 ${isCompleted ? "text-[#1E3A8A]" : "text-[#8B5CF6]"}`} />
          ) : (
            <FileText className={`h-5 w-5 ${isCompleted ? "text-[#1E3A8A]" : "text-[#8B5CF6]"}`} />
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
              {isUploading && <span className="text-xs text-gray-400">{Math.round(file.progress)}%</span>}
              <Button
                variant="ghost"
                size="icon"
                className={`h-6 w-6 text-gray-400 ${isCompleted ? "hover:text-red-400" : "hover:text-white"}`}
                onClick={() => onRemove(file.id)}
              >
                {isCompleted ? <Trash2 className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          {isUploading && <Progress value={file.progress} className="h-1.5" />}
        </div>
      </div>
    </Card>
  )
}
