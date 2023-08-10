import React from 'react'
import pic from '../../public/pic.webp'
import Image from 'next/image'
const About = () => {
  return (
    <div className=' z-50 bg-white text-black py-[3.2rem]' data-scroll-section>
        <div className="w-[1200px] mx-auto flex flex-col gap-4">
                <div className="flex-1 px-12">
                    <div className="text-[5.3rem] font-medium">At BlocHub,</div>
                    <div className="text-[1.8rem] leading-8 w-[950px] font-medium"> <div className="mb-4">We are on a mission to shape the future of web3 development through collaboration, learning, and innovation. </div> 
                    As an inclusive and dynamic community, we bring together blockchain enthusiasts and developers from all walks of life to create groundbreaking solutions that redefine the decentralized landscape.</div>
                    </div>
                <div className="relative flex-1 flex justify-between">
                    <div className="flex items-end">
                    <div className="flex gap-4 items-center">
                        <div className="text-[1.7rem] font-semibold ">Unlock the future with BlocHub</div>
                         <div className="bg-secondary rounded-full w-8 h-8">
                        </div>
                    </div>
                   
                        </div>
                        <div className=" w-[20.5rem]  h-[20.5rem] bg-secondary   clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0]"><Image src={pic} className='ml-2 mt-2' width={250} height={250} /></div>
                                        </div>
                </div>
     
    </div>
  )
}

export default About

//