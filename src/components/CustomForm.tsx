import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { FieldNameType, FormComponentProps, IInputField } from '@/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

type RenderInputType = {
  type: string
  label: string
  variants?: string[]
}

export default function CustomForm({
  onSubmit,
  form,
  fieldsData,
  isSpacing,
  btnContent
}: FormComponentProps) {
  function renderInput(
    { type, label, variants }: RenderInputType,
    field: ControllerRenderProps<FieldValues, FieldNameType>
  ) {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            placeholder={label}
            className="h-24 resize-none"
            {...field}
          />
        )
      case 'select':
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={label} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {variants?.map((variant) => (
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
        return <Input placeholder={label} className="h-12" {...field} />
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-${isSpacing ? 1 : 4}`}
      >
        {fieldsData.map(({ fieldName, defaultValue, ...item }) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormControl>{renderInput(item, field)}</FormControl>
                <FormMessage>{isSpacing ? '\u00A0' : ''}</FormMessage>
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full" aria-label="Send form info">
          {btnContent ? btnContent : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}
