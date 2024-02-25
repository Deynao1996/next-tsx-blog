import { useToast } from '@/components/ui/use-toast'
import { responseSchema } from '@/lib/formSchema'
import { SafeAction } from 'next-safe-action'
import { useAction } from 'next-safe-action/hooks'
import { ZodType, z } from 'zod'

const useHandleAction = (
  action: SafeAction<ZodType, any>,
  reset?: () => void,
  cb?: (data: any) => void
) => {
  const { toast } = useToast()
  const { execute, status } = useAction(action, {
    onSuccess: (data) => {
      const result = responseSchema.safeParse(data)

      if (result.success) {
        handleParseValidationSuccess(result.data)
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

  function handleParseValidationSuccess(data: z.infer<typeof responseSchema>) {
    if (data.successMessage) {
      reset?.()
      toast({
        title: data.successMessage,
        variant: 'default'
      })
    }
    if (data.error) {
      toast({
        title: data.error,
        variant: 'destructive'
      })
    }
    if (data.data && cb) {
      cb(data.data)
    }
  }

  return {
    execute,
    status
  }
}

export { useHandleAction }
