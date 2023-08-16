'use client'
import React from 'react'
import Image from 'next/image'
import hicon1 from '../../public/hicon1.svg'
import hicon2 from '../../public/hicon2.svg'
import hicon3 from '../../public/hicon3.svg'
import hicon4 from '../../public/hicon4.svg'

const Hero = () => {
  return (
    <div className='bg-black text-white  h-[calc(100vh)] -z-10 flex items-center lg:pt-32 justify-center   sticky top-0' >
       
        <div className="lg:w-[1110px] w-full flex flex-col justify-center items-center  relative">
        <Image src={hicon1} alt='icon' className='absolute top-[-35%] left-[5%]  w-28' />
        <Image src={hicon2} alt='icon' className='absolute top-[-20%] right-[3.5%]  w-28' />
        <Image src={hicon3} alt='icon' className='absolute bottom-[-22%] left-[-4.5%]  w-28' />
        <Image src={hicon4} alt='icon' className='absolute  bottom-[-33%] right-[5%]  w-28' />
        <div className="relative z-[0]">
        <div className=" text-[4rem]  md:text-6rem  lg:text-[6rem] xl:text-[6.785rem] text-center  leading-none px-6 mb-8  ">Discover the power of unity in Blockchain</div>
        <div className="text-2xl font-light text-center px-2 lg:px-0 ">Unlock the future with BlocHub. Join our vibrant community of blockchain enthusiasts and developers, and become part of the decentralized revolution.</div>

        </div>
        </div>
          </div>
  )
}
export default Hero