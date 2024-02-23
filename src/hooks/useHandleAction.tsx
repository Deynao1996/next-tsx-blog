import { useToast } from '@/components/ui/use-toast'
import { responseSchema } from '@/lib/formSchema'
import { SafeAction } from 'next-safe-action'
import { useAction } from 'next-safe-action/hooks'
import { ZodType } from 'zod'

const useHandleAction = (
  action: SafeAction<ZodType, any>,
  cb?: (data: any) => void
) => {
  const { toast } = useToast()
  const { execute, status, reset } = useAction(action, {
    onSuccess: (data) => {
      const result = responseSchema.safeParse(data)

      if (result.success) {
        if (result.data.successMessage) {
          toast({
            title: result.data.successMessage,
            variant: 'default'
          })
          reset()
        }
        if (result.data.error) {
          toast({
            title: result.data.error,
            variant: 'destructive'
          })
        }
        if (result.data.data && cb) {
          cb(result.data.data)
        }
      } else {
        toast({
          title: 'Validation error',
          variant: 'destructive'
        })
      }
    },
    onError: (error) => {
      let errorMsg = 'Something went wrong'
      if (error.fetchError) errorMsg = 'Failed to fetch'
      if (error.serverError) errorMsg = 'Server error'
      if (error.validationErrors) errorMsg = 'Validation error'
      toast({
        title: errorMsg,
        variant: 'destructive'
      })
    }
  })

  return {
    execute,
    status
  }
}

export { useHandleAction }
