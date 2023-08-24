'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import {BiMenu} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className=" text-white py-[22px] fixed w-full top-0 z-40 mix-blend-difference" id='nav'>
        <div className="xl:w-[1110px] mx-auto flex items-center justify-between px-4 md:px-8  xl:px-0">
            <div className="lg:flex-1  mix-blend-difference"><Image src={logo} alt='logo' className=' mix-blend-difference' /></div>
            <div className="  lg:flex-1 flex justify-center"><BiMenu size={37} color='white' className=' mix-blend-darken' /></div>
            <div className=" flex-1 hidden lg:flex justify-end">
            <div>
    <button      
    className={`border rounded-full  border-white  text-white mix-blend-difference  font-light w-[119px] h-[33.5px] overflow-hidden   flex flex-col items-center justify-center group/perr`}>
        <div className="relative z-10 lg:group-hover/perr:-translate-y-full transition-all duration-200 ease-out">
        <div className="">REGISTER</div>
        <div className="absolute left-0 top-full">REGISTER</div>
        </div>

      </button></div>
            </div>
        </div>
    </div>
  )
}

export default Nav