"use client"
import { FileItem } from "./fileItem"

interface UploadedFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "completed" | "error"
  type: "pdf" | "image" | "other"
}

interface FileListProps {
  uploadingFiles: UploadedFile[]
  completedFiles: UploadedFile[]
  onRemoveFile: (fileId: string) => void
}

export function FileList({ uploadingFiles, completedFiles, onRemoveFile }: FileListProps) {
  if (uploadingFiles.length === 0 && completedFiles.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {uploadingFiles.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-300">
            {uploadingFiles.length} file{uploadingFiles.length > 1 ? "s" : ""} uploading...
          </p>

          {uploadingFiles.map((file) => (
            <FileItem key={file.id} file={file} onRemove={onRemoveFile} />
          ))}
        </div>
      )}

      {completedFiles.length > 0 && (
        <div className="space-y-4">
          {completedFiles.map((file) => (
            <FileItem key={file.id} file={file} onRemove={onRemoveFile} />
          ))}
        </div>
      )}
    </div>
  )
}
