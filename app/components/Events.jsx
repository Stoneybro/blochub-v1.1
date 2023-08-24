'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import pic1 from '../../public/pic1.webp'
import pic2 from '../../public/pic2.webp'
import pic3 from '../../public/pic3.webp'
import pic4 from '../../public/pic4.webp'
import pic5 from '../../public/pic5.webp'


const Events = () => {
  const container=useRef(null)
  const wrapper=useRef(null)
  useEffect(()=>{

  },[])
  const svg2=<svg width="164" height="38" viewBox="0 0 164 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 29.8885V1H155.993L163 7.14184V36.704H8.77561L1 29.8885Z" stroke="white" stroke-width="2"/>
  <text x="22.5" y="25" font-size="20" fill="white">Development</text>
  </svg>
  
  const svg1=<svg xmlns="http://www.w3.org/2000/svg" width="106" height="38" viewBox="0 0 106 38" fill="none">
  <path d="M1 29.8885V1H97.993L105 7.14185V36.704H8.77561L1 29.8885Z" stroke="white" stroke-width="2"/>
  <text x="22.5" y="25" font-size="20" fill="white">Design</text>
  
</svg>
  return (
    <div  className="text-white bg-black pb-20 lg:pb-0  h-[120vh] lg:h-[142.5vh] flex gap-10 lg:gap-16 flex-col"  >

        <div className="flex flex-col lg:w-[1110px] mx-auto px-4">
            <div className=" text-[5.3rem] font-medium ">
            Events
            </div>
            <div className=" self-end lg:w-[480px] text-xl ml-10 lg:mx-0">
            Our virtual events feature the top talent in the blockchain and web3 development and design space
            </div>
        </div>


        {/* second section */}
        <div className="h-[60.5%] lg:h-[57%] relative overflow-hidden cursor-none"  id='events'>
        <motion.div className="  bg-black   absolute  top-0 h-full w-full   z-[0] cursor-none"  ref={container}  id='events' >
        <motion.div
          drag='x'
          dragConstraints={container}
        className="flex w-[450vw] lg:w-[150vw] absolute top-0 h-full overflow-hidden  z-[0] cursor-none"  id='events' ref={wrapper}>


          <div  id='events' className="  px-6 py-5 z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative  ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0      group/large"><Image src={pic1} alt='speaker David Hin'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105  transition-all duration-[2500ms] ease-out  ' /></div>

            <div className="flex justify-between  pointer-events-none">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



          <div  id='events' className="  px-6 py-5 z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">ANDREW JONES <br /> <div className="text-sm -m-1">02 AUG 23</div> </div>
                {svg2}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic3} alt='speaker Andrew Jones'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between items-end gap-4  pointer-events-none">
            <div className="text-3xl font-semibold">The Complete Guide to Full Stack Solana Development</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>


          <div  id='events' className="  px-6 py-5 z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">KELVIN AYO<br /> <div className="text-sm -m-1">6 JUL 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic2} alt='speaker Kevin Ayo'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between gap-4  pointer-events-none">
            <div className="text-3xl font-semibold">The Ethereum Merge</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



          <div  id='events' className="  px-6 py-5 z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">DERIC GRIF<br /> <div className="text-sm -m-1">30 SEP 23</div> </div>
              {svg2}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic4} alt='speaker Deric Griff'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between  pointer-events-none">
            <div className="text-3xl font-semibold">Web3 Frontend with React</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>




          <div  id='events' className="  px-6 py-5 z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">Steven Fawne<br /> <div className="text-sm -m-1">3 NOV 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic5} alt='speaker Steven Fawne'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between  pointer-events-none">
            <div className="text-3xl font-semibold">Branding in web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



        </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default Events