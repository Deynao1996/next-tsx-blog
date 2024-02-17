'use client'

import {
  ControllerRenderProps,
  Path,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { SubmitBtn } from './ui/submitBtn'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDefaultValueFromFields } from '@/lib/utils'
import { type CustomFormProps, type FieldData } from '@/lib/types'
import { z } from 'zod'

export default function CustomForm({
  fieldsData,
  btnContent,
  formSchema
}: CustomFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValueFromFields(fieldsData)
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    console.log('User form data:', data)
    // Handle form submission for user form
  }

  function renderInput(
    input: FieldData,
    field: ControllerRenderProps<
      z.infer<typeof formSchema>,
      Path<z.infer<typeof formSchema>>
    >
  ) {
    switch (input.type) {
      case 'textarea':
        return (
          <Textarea
            placeholder={input.label}
            className="h-24 resize-none"
            {...field}
          />
        )
      case 'select':
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={input.label} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {input.selectVariants.map((variant) => (
                <SelectItem
                  key={variant}
                  value={variant}
                  className="capitalize"
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      default:
        return (
          <Input
            placeholder={input.label}
            className="h-12"
            type={input.type}
            {...field}
          />
        )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        {fieldsData.map((item) => (
          <FormField
            key={item.fieldName}
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <FormItem>
                <FormControl>{renderInput(item, field)}</FormControl>
                <FormMessage className="h-4"> </FormMessage>
              </FormItem>
            )}
          />
        ))}
        <SubmitBtn>{btnContent ? btnContent : 'Submit'}</SubmitBtn>
      </form>
    </Form>
  )
}
