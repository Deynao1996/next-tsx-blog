import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

interface AdminDashboardProps {
  renderForm: () => React.ReactElement
  label: string
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  renderForm,
  label
}) => {
  return (
    <>
      <div>
        <div className="text-2xl mb-10">{label + 's'}</div>
        <ul className="space-y-4">
          {[...new Array(5)].map((_, i) => (
            <li className="flex justify-between items-center" key={i}>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
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
        <div className="text-2xl mb-10">Add New {label}</div>
        {renderForm()}
      </div>
    </>
  )
}

export default AdminDashboard
