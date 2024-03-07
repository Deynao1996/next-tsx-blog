'use client'

import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <Image
        alt="Hero illustration"
        src={logo}
        width={130}
        className={'dark:invert hidden dark:sm:block'}
      />
      <Image
        alt="Hero illustration"
        src={logo}
        width={130}
        className={'dark:hidden sm:block hidden'}
      />
    </>
  )
}
