import React, { useEffect, useRef, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext
} from 'react-hook-form'
import { Button } from './ui/button'
import { useSendFile } from '@/hooks/useSendMediaFile'
import { useToast } from './ui/use-toast'
import { Progress } from './ui/progress'
import { Check } from 'lucide-react'

type FileInputProps = {
  label: string
  field: ControllerRenderProps<FieldValues, string>
}

type Media = {
  file: File | null
  url: string | null
}

export default function FileInput({ label, field }: FileInputProps) {
  const { toast } = useToast()
  const [media, setMedia] = useState<Media>({ file: null, url: null })
  const { sendFileToFB, isFileUploading, progress } = useSendFile()
  const {
    setValue,
    formState: { isSubmitSuccessful }
  } = useFormContext()
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setMedia((prevState) => ({
        ...prevState,
        file
      }))
    }
  }

  async function handleClick() {
    if (!media.file) return
    try {
      const res = await sendFileToFB(media.file)
      if (res)
        toast({
          title: 'Media uploaded',
          variant: 'default'
        })
      setValue(field.name, res)
      setMedia((prevState) => ({ ...prevState, url: res }))
    } catch (error) {
      toast({
        title: 'Something went wrong while uploading media',
        description: 'Please try again later',
        variant: 'destructive'
      })
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
      setMedia({ file: null, url: null })
    }
  }, [isSubmitSuccessful])

  return (
    <>
      <div className={`fixed inset-0 ${isFileUploading ? 'block' : 'hidden'}`}>
        <Progress value={progress} className="rounded-none" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor={label} className="pl-2">
          {label}
        </Label>
        <div className="flex gap-2">
          <Input
            id={label}
            type="file"
            accept="image/*, video/*, audio/*"
            multiple={false}
            ref={inputRef}
            aria-label="Upload Media"
            className="h-12 pt-3"
            onChange={handleFileChange}
          />
          <input
            type="text"
            hidden
            {...(field as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          <Button
            variant={'outline'}
            className="h-12 gap-2"
            type="button"
            disabled={isFileUploading}
            onClick={handleClick}
          >
            {media.url ? (
              <>
                Uploaded
                <Check />
              </>
            ) : (
              'Send'
            )}
          </Button>
        </div>
      </div>
    </>
  )
}
