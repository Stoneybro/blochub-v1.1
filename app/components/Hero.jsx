'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '../hooks/useMouse'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'
import Image from 'next/image'
import hicon1 from '../../public/hicon1.svg'
import hicon2 from '../../public/hicon2.svg'
import hicon3 from '../../public/hicon3.svg'
import hicon4 from '../../public/hicon4.svg'

const Hero = () => {
  const useMouse=useMousePosition()
  const loader=useRef()
  const blocno=useRef()
  const bloc=useRef()
  const [size,setSize]=useState({width:'',height:''})
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(()=>{

    const items = document.querySelectorAll(".images");
    items.forEach((item)=>{
      const itemw = item.getBoundingClientRect().x;
      const itemh = item.getBoundingClientRect().y;
        setSize({width:itemw,height:itemh})
    })
  },[])
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(()=>{
    const item =document.querySelectorAll(".image");
    const {x,y,e}=useMouse
    if (delayPassed) {
      item.forEach((items)=>{
        const newX = (x-window.innerWidth/size.width)/50*-1; 
        const newY = (y-window.innerHeight/size.height)/50; 
        items.style.transform=`translate(${newX}px , ${newY}px)` 
      })
      items.forEach((items)=>{
        const newX = (x-window.innerWidth/size.width)/50*-1; 
        const newY = (y-window.innerHeight/size.height)/50; 
        items.style.transform=`translate(${newX}px , ${newY}px)` 
      })
    }
    
   
     
  },[useMouse])
  useEffect(()=>{
    gsap.registerPlugin(CustomEase)
    const items = document.querySelectorAll(".mark");
    



    const tl=gsap.timeline()
      tl.to(
        blocno.current,{
          textContent:100,
          duration:4,
          onUpdate:function() {
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
          },ease: CustomEase.create("custom", "M0,0 C0.102,0.518 0.056,0.304 0.11,0.578 0.129,0.675 0.5,0.692 1,1 ")
        },
      )
      tl.to(
        bloc.current,{
          opacity:0,
          duration:1
        }
      )
      tl.to(
        loader.current,{
          height:0,
          duration:0.5
        },
        
      )
      tl.fromTo(
        items,{
          y:1000,
         
        },{
          y:0,
          ease:'easeOut',
          duration:1,
          stagger:0.2,
        }
      )
  },[])
  return (
    <>
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-black flex items-center pointer-events-none justify-center" ref={loader}>
    <div ref={bloc}  className="w-[14rem]  h-[14rem] lg:w-[14rem]  lg:h-[14rem]  bg-white text-black clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] flex items-end justify-end px-4 py-4 text-3xl font-semibold"><span ref={blocno}>0</span>%</div>

    </div>
    <div className='bg-black text-white lg:h-screen py-[32%] lg:py-0   -z-10 flex items-center lg:pt-32 justify-center   sticky top-0' >
       
        <div className="lg:w-[1110px] w-full flex flex-col justify-center items-center  relative">
          <div className="absolute images mark transition-all duration-75 ease-linear lg:top-[-35%] top-[-8%] left-[3%] lg:left-[5%]  lg:w-28 md:w-28 w-20"> <Image src={hicon1} alt='icon' className='' /></div>
       
        <Image src={hicon2} alt='icon' className='absolute mark transition-all duration-75 ease-linear  image lg:top-[-20%] top-[-10%] lg:right-[3.5%] right-[2.5%]  lg:w-28 md:w-28  w-20' />
        <Image src={hicon3} alt='icon' className='absolute mark transition-all duration-75 ease-linear  images lg:bottom-[-22%] bottom-[-10%] lg:left-[-4.5%] left-[-2%]  lg:w-28 md:w-28 w-20' />
        <Image src={hicon4} alt='icon' className='absolute mark transition-all duration-75 ease-linear  image lg:bottom-[-33%] bottom-[-20%] lg:right-[5%] right-[4%]  lg:w-28 md:w-28 w-20' />
        <div className="relative z-[0]">
        <div className=" text-mediumclamp sm:text-bigclamp md:text-bigclamp lg:text-bigclamp min-[500px]:text-[4.5rem] text-center    leading-none px-6 mb-8  ">Discover the power  of unity in Blockchain</div>
        <div className="text-smallclamp sm:text-tinyclamp lg:text-[1.5rem] min-[500px]:text-[1.5rem] md:text-tinyclamp font-light text-center px-2 lg:px-0 ">Unlock the future with BlocHub. Join our vibrant community of blockchain enthusiasts and developers, and become part of the decentralized revolution.</div>

        </div>
        </div>
          </div>
          </>
  )
}
export default Hero