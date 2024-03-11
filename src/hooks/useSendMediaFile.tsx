import { useToast } from '@/components/ui/use-toast'
import app from '@/lib/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { useState } from 'react'

export const useSendFile = () => {
  const { toast } = useToast()
  const [isFileUploading, setIsFileUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  function showErrorMessage(msg: string) {
    toast({
      title: msg,
      variant: 'destructive'
    })
  }

  function sendFileToFB(file: File): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setIsFileUploading(true)
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
          }
        },
        (error) => {
          showErrorMessage('Something went wrong')
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              return resolve(downloadURL)
            })
            .then((obj) => {
              setIsFileUploading(false)
            })
            .catch((_e) => showErrorMessage('Something went wrong'))
        }
      )
    })
  }

  return {
    sendFileToFB,
    isFileUploading,
    progress
  }
}
