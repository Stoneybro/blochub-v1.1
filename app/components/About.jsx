'useclient'
import React, { useEffect, useRef } from 'react'
import pic from '../../public/pic.webp'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const About = () => {
  const refs=useRef([])
  const container=useRef(null)
  const phrase='We are on a mission to shape the future of web3 development through collaboration, learning, and innovation. As an inclusive and dynamic community, we bring together blockchain enthusiasts and developers from all walks of life to create groundbreaking solutions that redefine the decentralized landscape.'
  const splitwords=()=>{
    let body=[]
    phrase.split(" ").forEach((word,index)=>{
      const letters=splitletters(word)
      body.push(<p key={index} ref={e=>refs.current.push(e)} className='mr-2 text-[#B0B0B0]'>{letters}</p>)
    })
    return body
  }
  const splitletters=(word)=>{
    let letters=[]
    word.split(" ").forEach((word,index)=>{
      letters.push(<span key={`letter_${index}`} >{word}</span>)
    })
    return letters
  }
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(refs.current,{
      color:'black',
      ease:'none',
      stagger:1,
      scrollTrigger:{
        scrub:0.25,
        trigger:container.current,
        start:'15% 70%',
        end:'80% 60%',

      }
    })
  },[])
  return (
    <div className=' z-50 bg-white text-black py-[3.2rem] ' ref={container}>
        <div className="lg:w-[1200px] mx-auto flex flex-col gap-28 lg:gap-4">
                <div className="flex-1 px-4 lg:px-12">
                    <div className="text-[3rem] leading-0 lg:text-[5.3rem] font-medium">At BlocHub,</div>
                    <div className="lg:text-[1.8rem] text-[1.3rem] leading-8 lg:w-[950px] font-medium flex flex-wrap text-[#B0B0B0]"> 
                    {splitwords()}
                    </div>
                    </div>
                <div className="relative flex-1 flex justify-between self-center lg:self-auto">
                    <div className="flex items-end">
                    <div className="hidden md:flex gap-4 items-center">
                        <div className="text-[1.7rem] font-semibold ">Unlock the future with BlocHub</div>
                         <div className="bg-secondary rounded-full w-8 h-8">
                        </div>
                    </div>
                   
                        </div>
                        <div className="w-[18rem] h-[18rem] lg:w-[20.5rem]  lg:h-[20.5rem] bg-secondary   clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0]"><div className="ml-2 mt-2 w-[220px] h-[220px] lg:w-[250px] lg:h-[250px]"><Image src={pic} alt='a video explaining what we do' className=' '  /></div></div>
                                        </div>
                </div>
     
    </div>
  )
}

export default About

//