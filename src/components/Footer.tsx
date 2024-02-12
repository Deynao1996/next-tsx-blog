import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-between items-center text-xs opacity-70">
      <p className="hidden sm:block">Agencydev</p>
      <span className="flex gap-2">
        <p className="hidden sm:block">Agency creative thoughts agency. </p>
        <span>&#9400; All rights reserved.</span>
      </span>
    </div>
  )
}
