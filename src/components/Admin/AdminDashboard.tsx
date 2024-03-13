import React from 'react'
import CustomForm from '../Form/CustomForm'
import AdminItemsList from './AdminItemsList'
import { type AdminDashboardProps } from '@/lib/types'

const AdminDashboard = <T,>({
  label,
  getItems,
  renderItems
}: AdminDashboardProps<T>) => {
  return (
    <>
      <div>
        <div className="text-2xl mb-10 capitalize">{label + 's'}</div>
        <AdminItemsList getItems={getItems} renderItems={renderItems} />
      </div>
      <div>
        <div className="text-2xl mb-10 capitalize">Add New {label}</div>
        <CustomForm btnContent="Add" label={label} />
      </div>
    </>
  )
}

export default AdminDashboard
