import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full py-6 bg-black text-center border-t border-secondary-dark'>
        &copy; {new Date().getFullYear()} All Rights Reserved by Vikrant Ghodvinde.
    </div>
  )
}

export default Footer