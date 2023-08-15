import React from 'react'
import pic from '../../public/pic.webp'
import Image from 'next/image'
const About = () => {
  return (
    <div className=' z-50 bg-white text-black py-[3.2rem] ' data-scroll-section>
        <div className="lg:w-[1200px] mx-auto flex flex-col gap-28 lg:gap-4">
                <div className="flex-1 px-4 lg:px-12">
                    <div className="text-[3rem] leading-0 lg:text-[5.3rem] font-medium">At BlocHub,</div>
                    <div className="lg:text-[1.8rem] text-[1.3rem] leading-8 lg:w-[950px] font-medium"> <div className="mb-4">We are on a mission to shape the future of web3 development through collaboration, learning, and innovation. </div> 
                    As an inclusive and dynamic community, we bring together blockchain enthusiasts and developers from all walks of life to create groundbreaking solutions that redefine the decentralized landscape.</div>
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