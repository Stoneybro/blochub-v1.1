'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import {BiMenu,BiX} from 'react-icons/bi'

import { LiaTimesSolid} from 'react-icons/lia'

import Link from 'next/link'
const Nav = () => {
    const [nav,setNav]=useState(false)
    const [reg,setReg]=useState(false)

  return (
    <>
          <div className={`fixed top-0 lg:w-[26%] w-screen ${nav?"h-[40%] pt-12":'h-0'} transition-all duration-300  overflow-hidden  bg-white z-50 text-black left-[50%] translate-x-[-50%] px-6 `}><div className= {` w-full py-2 h-[100%] ${nav?'flex':'hidden'} flex flex-col justify-between items-center   text-black`}>
            <Link href={'#about'}><div className="">WHO WE ARE</div></Link>
            <Link href={'#services'}><div className="">WHAT WE DO</div></Link>
            <Link href={'#event'}><div className="">EVENTS</div></Link>
            <Link href={'#resources'}><div className="">RESOURCES</div></Link>
            <button onClick={()=>{setReg(true);setNav(false)}}>REGISTER</button>
            <button className="self-center" onClick={()=>setNav(false)}><LiaTimesSolid size={35} /></button>
            </div>
            </div>
            <div className={`fixed top-[81px] w-full sm:w-[80%] md:w-[80%]  lg:w-[32.5%] ${reg?"h-[70%] sm:h-[55%]  md:h-[60%] lg:h-[75%]  ":'h-0'} transition-all duration-300  overflow-hidden  bg-white z-50 text-black left-[50%] translate-x-[-50%] px-6 `}><div className= {` w-full py-10 h-[100%]  ${reg?'flex':'hidden'} flex flex-col  items-center   text-black`}>
            <button className=" px-5 py-1 border-black border rounded-full" onClick={()=>setReg(false)}>CLOSE</button>
            <div className="lg:text-[3.3rem] text-[2.7rem] font-medium">JOIN BLOCHUB</div>
            <div className=" flex flex-col w-[100%] mt-8 gap-4">
              <div className="rounded-full border w-full h-12 flex justify-center items-center"><input type="text" className='outline-none w-[90%] text-black placeholder:text-black' placeholder='FIRST NAME*' /></div>
              <div className="rounded-full border w-full h-12 flex justify-center items-center"><input type="text" className='outline-none w-[90%] text-black placeholder:text-black' placeholder='LAST NAME*' /></div>
              <div className="rounded-full border w-full h-12 flex justify-center items-center"><input type="text" className='outline-none w-[90%] text-black placeholder:text-black' placeholder='EMAIL*' /></div>

            </div>
            <button className="bg-black py-3 mt-6 text-white w-full flex justify-center items-center rounded-full">Submit</button>
            </div>
            </div>
    <div className=" text-white py-[22px] fixed w-full top-0 z-40 mix-blend-difference" id='nav'>

        <div className="xl:w-[1110px] mx-auto flex items-center justify-between px-4 md:px-8  xl:px-0">
            <div className="lg:flex-1  mix-blend-difference"><Image src={logo} alt='logo' className=' mix-blend-difference' /></div>
            <button className="  lg:flex-1 flex justify-center" onClick={()=>{setNav(true);setReg(false)}}><BiMenu size={37} color='white' className=' mix-blend-darken' /></button>
            <div className=" flex-1 hidden lg:flex justify-end">
            <div>
    <div      
    className={`border rounded-full  border-white  text-white mix-blend-difference  font-light w-[119px] h-[33.5px] overflow-hidden   flex flex-col items-center justify-center group/perr`}>
        <button className="relative z-10 lg:group-hover/perr:-translate-y-full transition-all duration-200 ease-out" onClick={()=>{setReg(true);setNav(false)}}>
        <div className="">REGISTER</div>
        <div className="absolute left-0 top-full">REGISTER</div>
        </button>

      </div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav