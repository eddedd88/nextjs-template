'use client'

import {
  FileArchiveIcon,
  FileImageIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  UploadCloudIcon,
  XIcon,
} from 'lucide-react'
import { useCallback, useId, useState } from 'react'
import { type Accept, type FileRejection, useDropzone } from 'react-dropzone'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { cn } from '@/lib/utils'

const MAX_FILE_COUNT = 5
const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024
const ACCEPTED_FILE_TYPES: Accept = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'text/csv': ['.csv'],
}
const ACCEPTED_FILE_TYPE_SET = new Set(Object.keys(ACCEPTED_FILE_TYPES))

const UploadFileSchema = z
  .custom<File>(
    value => typeof File !== 'undefined' && value instanceof File,
    'Choose a valid file.',
  )
  .refine(file => file.size > 0, 'Files must not be empty.')
  .refine(
    file => file.size <= MAX_FILE_SIZE_BYTES,
    'Each file must be 8 MB or smaller.',
  )
  .refine(
    file => ACCEPTED_FILE_TYPE_SET.has(file.type),
    'Use PNG, JPG, PDF, or CSV files.',
  )

type UploadItem = {
  id: string
  file: File
}

export function SampleUpload() {
  const inputId = useId()
  const [items, setItems] = useState<UploadItem[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setError(null)

      if (fileRejections.length) {
        setError(getFileRejectionMessage(fileRejections[0]))
      }

      if (!acceptedFiles.length) {
        return
      }

      const remainingSlots = MAX_FILE_COUNT - items.length

      if (remainingSlots <= 0) {
        setError(`You can queue up to ${MAX_FILE_COUNT} files.`)
        return
      }

      const currentIds = new Set(items.map(item => item.id))
      const acceptedItems: UploadItem[] = []
      const rejectedMessages: string[] = []

      for (const file of acceptedFiles.slice(0, remainingSlots)) {
        const result = UploadFileSchema.safeParse(file)
        const id = getFileId(file)

        if (!result.success) {
          rejectedMessages.push(
            `${file.name}: ${result.error.issues[0].message}`,
          )
          continue
        }

        if (currentIds.has(id)) {
          rejectedMessages.push(`${file.name}: This file is already queued.`)
          continue
        }

        currentIds.add(id)
        acceptedItems.push({
          id,
          file,
        })
      }

      if (acceptedFiles.length > remainingSlots) {
        rejectedMessages.push(
          `Only ${remainingSlots} more file(s) can be added.`,
        )
      }

      if (rejectedMessages.length) {
        setError(rejectedMessages[0])
      }

      setItems([...items, ...acceptedItems])
    },
    [items],
  )

  const { getInputProps, getRootProps, isDragActive, isDragReject, open } =
    useDropzone({
      accept: ACCEPTED_FILE_TYPES,
      maxFiles: MAX_FILE_COUNT,
      maxSize: MAX_FILE_SIZE_BYTES,
      multiple: true,
      noClick: true,
      onDrop: handleDrop,
    })

  const handleRemove = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
    setError(null)
  }

  const handleClear = () => {
    setItems([])
    setError(null)
  }

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor={inputId}>Files</FieldLabel>
        <div
          {...getRootProps({
            className: cn(
              'flex min-h-52 flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center transition-colors',
              isDragActive && 'border-primary bg-primary/5',
              isDragReject && 'border-destructive bg-destructive/5',
            ),
          })}
        >
          <div className='flex size-12 items-center justify-center rounded-md bg-background shadow-xs ring-1 ring-border'>
            <UploadCloudIcon className='size-6 text-muted-foreground' />
          </div>
          <div className='space-y-1'>
            <p className='text-base font-medium'>Drop files here</p>
            <p className='max-w-sm text-sm text-muted-foreground'>
              Select up to {MAX_FILE_COUNT} PNG, JPG, PDF, or CSV files. Each
              file must be 8 MB or smaller.
            </p>
          </div>
          <Button type='button' variant='secondary' onClick={open}>
            <UploadCloudIcon />
            Choose files
          </Button>
          <Input {...getInputProps({ id: inputId })} className='sr-only' />
        </div>
        <FieldDescription>
          This demo stores files in browser state and never uploads them.
        </FieldDescription>
        <FieldError>{error}</FieldError>
      </Field>

      <div className='space-y-3'>
        <div className='flex h-8 items-center justify-between gap-3'>
          <h2 className='text-sm font-medium'>Selected files</h2>
          {items.length > 0 && (
            <Button
              type='button'
              variant='ghost'
              size='sm'
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
        </div>

        {items.length ? (
          <ul className='space-y-2'>
            {items.map(item => (
              <li key={item.id} className='animate-fade-in'>
                <Item>
                  <ItemMedia>
                    <div className='flex size-10 items-center justify-center rounded-md bg-muted'>
                      <FileTypeIcon fileType={item.file.type} />
                    </div>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{item.file.name}</ItemTitle>
                    <ItemDescription>
                      {formatFileSize(item.file.size)}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button
                      type='button'
                      variant='ghost'
                      // size='icon-sm'
                      onClick={() => handleRemove(item.id)}
                      aria-label={`Remove ${item.file.name}`}
                    >
                      <XIcon />
                    </Button>
                  </ItemActions>
                </Item>
              </li>
            ))}
          </ul>
        ) : (
          <div className='rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground'>
            No files selected
          </div>
        )}
      </div>
    </FieldGroup>
  )
}

function FileTypeIcon({ fileType }: { fileType: string }) {
  if (fileType.startsWith('image/')) {
    return <FileImageIcon className='size-5 text-muted-foreground' />
  }

  if (fileType === 'text/csv') {
    return <FileSpreadsheetIcon className='size-5 text-muted-foreground' />
  }

  if (fileType === 'application/pdf') {
    return <FileTextIcon className='size-5 text-muted-foreground' />
  }

  return <FileArchiveIcon className='size-5 text-muted-foreground' />
}

function getFileId(file: File) {
  return `${file.name}-${file.size}-${file.lastModified}`
}

function getFileRejectionMessage(fileRejection: FileRejection) {
  const error = fileRejection.errors[0]

  if (error?.code === 'file-invalid-type') {
    return `${fileRejection.file.name}: Use PNG, JPG, PDF, or CSV files.`
  }

  if (error?.code === 'file-too-large') {
    return `${fileRejection.file.name}: Each file must be 8 MB or smaller.`
  }

  if (error?.code === 'too-many-files') {
    return `You can queue up to ${MAX_FILE_COUNT} files.`
  }

  return `${fileRejection.file.name}: ${error?.message ?? 'This file could not be added.'}`
}

function formatFileSize(size: number) {
  if (size === 0) {
    return '0 B'
  }

  const units = ['B', 'KB', 'MB', 'GB']
  const unitIndex = Math.min(
    Math.floor(Math.log(size) / Math.log(1024)),
    units.length - 1,
  )
  const value = size / 1024 ** unitIndex

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}
