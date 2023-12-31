'useclient'
import React, { useEffect, useRef } from 'react'
import pic from '../../public/pic.gif'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const About = () => {
  const refs=useRef([])
  const container=useRef(null)
  const phrase='At BlocHub, We are on a mission to shape the future of web3 development through collaboration, learning, and innovation. As an inclusive and dynamic community, we bring together blockchain enthusiasts and developers from all walks of life to create groundbreaking solutions that redefine the decentralized landscape.'
  const splitwords=()=>{
    let body=[]
    phrase.split(" ").forEach((word,index)=>{
      const letters=splitletters(word)
      if (index==1 ) {
        body.push(<p key={index} className='text-bigclamp  sm:text-smallclamp  lg:text-[5.3rem] font-medium mb-4 ml-2 mr-[23%] sm:mr-[62.5%]  lg:mr-[50%] lg:mb-12'>{letters}<br /></p>
        )
      }else if (["At", "BlocHub"].includes(word) && index!=1) {
          body.push(<p key={index} className='text-bigclamp sm:text-smallclamp lg:text-[5.3rem] font-medium mr-2 mb-4 lg:mb-12'>{letters}</p>)
        }else{
          body.push(<p key={index} className='mr-2 '>{letters}</p>)
        }
      
{/* else  if (index==2 || index==19) {
          body.push(<><p key={index} className='text-[3rem] lg:text-[5.3rem] font-medium'>{letters}</p>
          <br /></>
          )
        }*/}
    
    })
    return body
  }
  const splitletters=(word)=>{
    let letters=[]
    word.split("").forEach((x,index)=>{
      letters.push(<span ref={e=>refs.current.push(e)}  key={`letter_${index}`} >{x}</span>)
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
        scrub:true,
        trigger:container.current,
        start:'15% 70%',
        end:'80% 60%',

      }
    })
  },[])
  return (
    <div className=' z-50 bg-white text-black py-[3.2rem] ' ref={container} id='about'>
        <div className="lg:w-[1200px] mx-auto flex flex-col gap-28 lg:gap-4">
                <div className="flex-1 px-4 lg:px-12">
                    {/* <div className="text-[3rem] leading-0 lg:text-[5.3rem] font-medium">At BlocHub,</div> */}
                    <div className="lg:text-[1.8rem] text-[1.3rem] leading-8 lg:w-[950px] font-medium text-[#B0B0B0] flex flex-wrap items-center mt-12"> 
                    {splitwords()}
                    </div>
                    </div>
                <div className="relative lg:flex-1 w-full flex justify-between self-center lg:self-auto">
                    <div className="flex items-end">
                    <div className="hidden lg:flex gap-4 items-center">
                        <div className="text-[1.7rem] font-semibold ">Unlock the future with BlocHub</div>
                         <div className="bg-secondary w-8 h-8">
                        </div>
                    </div>
                   
                        </div>
                        <div className="sm:w-[50%] sm:h-[50vw]  w-[90vw] h-[90vw] lg:w-[20rem]   mx-auto lg:mx-0  lg:h-[20.5rem] pt-3 pl-2 bg-secondary   clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0]"><Image src={pic} priority={true}   alt='a video explaining what we do' className='object-cover w-[77.5%] h-[79%] '  /></div>
        </div>
                     
                </div>
     
    </div>
  )
}

export default About

//