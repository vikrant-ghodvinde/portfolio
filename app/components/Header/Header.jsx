import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='relative w-full'>
        <Link href="/">
            <Image src="/images/logo.png" alt='' width={200} height={200} className='w-36' />
        </Link>
    </div>
  )
}

export default Header