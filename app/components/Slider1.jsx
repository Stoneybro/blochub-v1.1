'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Slider = () => {
    const container=useRef(null)
    const element=useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(element.current,{
            scrollTrigger:{
              trigger:element.current,
              start:'top 80%',
              
              scrub:true,          
            },
            
            x:"90%",
     
        })
    },[])

  return (
    <div className=' bg-black   overflow-hidden' ref={container}  >
    <div className="w-full " >
<Image src={logo} alt='slider' className='xl:w-[250rem] lg:w-[200rem] md:w-[200rem] w-[150rem] -translate-x-[95%]  py-16' ref={element} />

</div>

    </div>
  )
}

export default Slider