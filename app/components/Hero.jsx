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
  useEffect(()=>{
    const items = document.querySelectorAll(".images");
    items.forEach((item)=>{
      const itemw = item.getBoundingClientRect().x;
      const itemh = item.getBoundingClientRect().y;
        setSize({width:itemw,height:itemh})
    })
  },[])

  useEffect(()=>{
    const items = document.querySelectorAll(".images");
    const item =document.querySelectorAll(".image");
    const twidth=window.innerWidth
    const theight=window.innerHeight
    const {x,y,e}=useMouse
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
   // console.log(size.width,x,window.innerWidth);
     
      
     

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
    <div className='bg-black text-white  h-[calc(100vh)] -z-10 flex items-center lg:pt-32 justify-center   sticky top-0' >
       
        <div className="lg:w-[1110px] w-full flex flex-col justify-center items-center  relative">
          <div className="absolute images mark transition-all duration-75 ease-linear top-[-35%] left-[5%]  w-28"> <Image src={hicon1} alt='icon' className='' /></div>
       
        <Image src={hicon2} alt='icon' className='absolute mark transition-all duration-75 ease-linear  image top-[-20%] right-[3.5%]  w-28' />
        <Image src={hicon3} alt='icon' className='absolute mark transition-all duration-75 ease-linear  images bottom-[-22%] left-[-4.5%]  w-28' />
        <Image src={hicon4} alt='icon' className='absolute mark transition-all duration-75 ease-linear  image bottom-[-33%] right-[5%]  w-28' />
        <div className="relative z-[0]">
        <div className=" text-[4rem]  md:text-6rem  lg:text-[6rem] xl:text-[6.785rem] text-center  leading-none px-6 mb-8  ">Discover the power of unity in Blockchain</div>
        <div className="text-2xl font-light text-center px-2 lg:px-0 ">Unlock the future with BlocHub. Join our vibrant community of blockchain enthusiasts and developers, and become part of the decentralized revolution.</div>

        </div>
        </div>
          </div>
          </>
  )
}
export default Hero