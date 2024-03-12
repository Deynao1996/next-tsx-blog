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
import { formInfo } from '@/store'
import { useHandleAction } from '@/hooks/useHandleAction'
import FileInput from './FileInput'

export default function CustomForm({
  btnContent,
  label,
  successCb
}: CustomFormProps) {
  const { fieldsData, formSchema, action } = formInfo[label]
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValueFromFields(fieldsData)
  })
  const { execute, status } = useHandleAction(action, form.reset, successCb)

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    execute(data)
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
      case 'file':
        return <FileInput label={input.label} field={field} />
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
                <FormMessage className="h-4 p-0 !mt-0.5 text-[0.7rem]">
                  {' '}
                </FormMessage>
              </FormItem>
            )}
          />
        ))}
        <SubmitBtn disabled={status === 'executing'} className="capitalize">
          {btnContent ? btnContent : 'Submit'}
        </SubmitBtn>
      </form>
    </Form>
  )
}
