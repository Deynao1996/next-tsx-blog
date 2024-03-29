'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import CustomForm from './Form/CustomForm'
import Link from 'next/link'

export default function UserSelfActions() {
  //TODO Fix userId input
  return (
    <div className="flex items-center gap-5">
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
      <Button asChild variant={'outline'}>
        <Link href={'/user/settings'}>User settings</Link>
      </Button>
    </div>
  )
}
