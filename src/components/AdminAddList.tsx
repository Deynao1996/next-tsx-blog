'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import CustomForm from './CustomForm'
import {
  addPostFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema
} from '@/lib/formSchema'
import {
  contactFieldsData,
  loginFieldsData,
  newPostFieldData,
  newUserFieldData
} from '@/store'
//!TODO CHECK TYPES
type Label = 'post' | 'user'

type FormInfo = {
  [key in Label]: {
    fieldsData: any[]
    formSchema: any
  }
}

const formInfo: FormInfo = {
  post: {
    fieldsData: newPostFieldData,
    formSchema: addPostFormSchema
  },
  user: {
    fieldsData: newUserFieldData,
    formSchema: addUserFormSchema
  }
}

const AdminAddList = ({ label }: { label: Label }) => {
  return (
    <>
      <div>
        <div className="text-2xl mb-10 capitalize">{label + 's'}</div>
        <ul className="space-y-4">
          {[...new Array(5)].map((_, i) => (
            <li className="flex justify-between items-center" key={i}>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="object-cover"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>Another Story</div>
              </div>
              <Button
                variant={'destructive'}
                aria-label={`Delete post id ${i}`}
                size={'sm'}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-2xl mb-10 capitalize">Add New {label}</div>
        <CustomForm
          btnContent="Add"
          fieldsData={formInfo[label].fieldsData}
          formSchema={formInfo[label].formSchema}
        />
      </div>
    </>
  )
}

export default AdminAddList
