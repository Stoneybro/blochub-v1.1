'use client'
import React, { useEffect,useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Services = () => {
    const container1=useRef(null)
    const container2=useRef(null)
    const container3=useRef(null)
    const bigtext1=useRef(null)
    const bigtext2=useRef(null)
    const bigtext3=useRef(null)
    const refs1=useRef([])
    const refs2=useRef([])
    const refs3=useRef([])
    const bigtext='Connect'
    const smalltext1='Connect with a diverse network of blockchain developers, designers, and enthusiasts from around the globe'
    const smalltext2='Experience the true spirit of collaboration at Blochub, where blockchain enthusiasts and developers unite to create groundbreaking innovations together.'
    const smalltext3='Embark on an exciting journey of learning, as we empower you with the knowledge and tools to master web3 development and decentralized technologies.'
    const text=[[],[],[]]
    smalltext1.split(" ").forEach((word,index)=>{
        text[0].push(<div key={index} className='pl-2 overflow-hidden'><div className=' translate-y-full' ref={e=>refs1.current.push(e)}>{word}</div></div>)
      })
      smalltext2.split(" ").forEach((word,index)=>{
        text[1].push(<div key={index} className='pl-2 overflow-hidden'><div className=' translate-y-full' ref={e=>refs2.current.push(e)}>{word}</div></div>)
      })
      smalltext3.split(" ").forEach((word,index)=>{
        text[2].push(<div key={index} className='pl-2 overflow-hidden'><div className=' translate-y-full' ref={e=>refs3.current.push(e)}>{word}</div></div>)
      })
      useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(bigtext1.current,{
          translateY:0,
          ease:'ease',
          scrollTrigger:{
        
            trigger:container1.current,
            start:'15% 90%' ,
           
    
          },duration:1
        }
        
        )
        gsap.to(bigtext2.current,{
          translateY:0,
          ease:'ease',
          scrollTrigger:{
        
            trigger:container2.current,
            start:'15% 80%' 
           
    
          },duration:1
        })
        gsap.to(bigtext3.current,{
          translateY:0,
          ease:'ease',
          scrollTrigger:{
        
            trigger:container3.current,
            start:'15% 85%' ,
            
    
            
    
          },duration:1
        })
        gsap.to(refs1.current,{
         translateY:0,
          ease:'ease',
    
          scrollTrigger:{
        
            trigger:container1.current,
    
              start:'15% 85%',
              end:'80% 50%',
    
          },
          duration:1
        })
        gsap.to(refs2.current,{
          translateY:0,
           ease:'ease',
     
           scrollTrigger:{
         
             trigger:container2.current,
    
               start:'15% 70%',
               end:'80% 50%',
     
           },
           duration:1
         })
         gsap.to(refs3.current,{
          translateY:0,
           ease:'ease',
     
           scrollTrigger:{
         
             trigger:container3.current,
    
               start:'15% 70%',
               end:'80% 50%',
     
           },
           duration:1
         })
      },[])
  return (
    <div className="bg-black pt-28 pb-16  text-white" id='services'>
        <div className="gap-24 lg:gap-8 flex flex-col lg:w-[1110px] mx-auto lg:px-0 px-4">
   <div ref={container1} className="">
   <div className="flex flex-col  relative h-[18rem] lg:w-[850px] z-[0] lg:gap-4 ">
            <div className="text-[4rem] mt-3 overflow-hidden"><div ref={bigtext1} className=" -translate-y-full">Connect</div></div>
        <div className="w-[17rem]  h-[17rem] lg:w-[18rem]  lg:h-[18rem] absolute top-0 bg-secondary clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] lg:left-[5.5rem] left-[2rem]"></div>
        <div className="lg:text-[1.6rem] text-[1.3rem] font-light leading-6 lg:leading-8 ml-20 lg:mt-0  lg:ml-56 lg:mr-16"><div className="break-word w-full lg:break-keep flex max-w-[30rem] flex-wrap">{text[0]}</div></div>
        </div>
    </div>  
   <div  ref={container2} className="sm:flex sm:justify-end lg:justify-center">
   <div className="flex flex-col lg:justify-center relative h-[18rem] lg:w-[850px] z-[0] lg:gap-4">
            <div className="text-[4rem] overflow-hidden  mt-3 lg:mt-0 lg:ml-24"><div ref={bigtext2} className=" -translate-y-full">Collaborate</div></div>
        <div className="w-[17rem]  h-[17rem] lg:w-[18rem]  lg:h-[18rem] absolute top-0 lg:left-[273px] lg:right-[273px]  bg-red clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] left-[2rem] "></div>
        <div className="lg:text-[1.6rem] text-[1.3rem] font-light leading-6 lg:leading-8 ml-20 lg:mt-0 lg:ml-[25rem] lg:-mr-32 "><div className="break-all w-full lg:break-keep max-w-[30rem] flex flex-wrap">{text[1]}</div>
        </div>
        </div>
    </div>    
   <div  ref={container3} className="">
   <div className="flex flex-col justify-center relative h-[18rem] lg:w-[850px] z-[0] lg:gap-4 gap-10">
            <div className="text-[4rem]  -mt-8 lg:mt-3 overflow-hidden"><div ref={bigtext3} className=" -translate-y-full">Learn</div></div>
        <div className="w-[17rem]  h-[17rem] lg:w-[18rem]  lg:h-[18rem] absolute top-0 bg-green clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] left-[2rem]"></div>
        <div className="lg:text-[1.6rem] text-[1.3rem] font-light leading-6 lg:leading-8 ml-20 -mt-8 lg:mt-0 lg:ml-40 lg:mr-16"><div className="break-all w-full lg:break-keep max-w-[30rem] flex flex-wrap">{text[2]}</div></div>
        </div>
    </div>    
        </div>
     
    </div>
  )
}

export default Services