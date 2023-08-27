'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BiLeftArrow,BiRightArrow } from 'react-icons/bi'
const Mouse = () => {
      const mouse=useRef(null)
      const [event,setEvent]=useState(false)
    useEffect(()=>{
        const Mouse=mouse.current
       window.onmousemove=(e)=>{
       
        if (e.target.id=='events') {
            setEvent(true)
        }else{
            setEvent(false)
        }
        const x=e.clientX-Mouse.getBoundingClientRect().width/2
        const y=e.clientY-Mouse.getBoundingClientRect().height/2
        Mouse.style.transform=`translate(${x}px , ${y}px)`
       } 
    },[])

  return (
    <div  ref={mouse} id='mouse' className={` hidden lg:block text-black z-50 pointer-events-none opacity-0 ${!event && 'h-6 w-6 mix-blend-difference'}  fixed rounded-full  bg-white left-0 top-0  mouse transition-all ease-linear duration-75   `}>
       <div className={`${event?'flex':'hidden'} gap-2 items-center py-2 px-4 `} > <BiLeftArrow /> <div>Drag</div><BiRightArrow /></div>
    </div>
  )
}

export default Mouse