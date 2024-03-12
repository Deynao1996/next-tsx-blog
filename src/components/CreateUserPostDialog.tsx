import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import CustomForm from './CustomForm'

export default function CreateUserPostDialog() {
  //TODO Fix userId input
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create a blog post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-10">Add new post</DialogTitle>
          <DialogDescription>
            <CustomForm btnContent="Add" label={'post'} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
