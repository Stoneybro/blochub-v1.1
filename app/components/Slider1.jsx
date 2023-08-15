'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
const Slider = () => {


  return (
    <div className=' bg-black py-8 ' >
    <div className="w-full " >
<Image src={logo} alt='slider' className='xl:w-[250rem] lg:w-[200rem] md:w-[200rem] w-[150rem] '  />

</div>

    </div>
  )
}

export default Slider