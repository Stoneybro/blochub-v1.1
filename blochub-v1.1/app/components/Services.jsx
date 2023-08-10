import React from 'react'

const Services = () => {
  return (
    <div className="bg-black py-28  text-white" data-scroll-section>
        <div className="gap-8 flex flex-col w-[1110px] mx-auto">
   <div className="">
   <div className="flex flex-col  relative h-[18rem] w-[850px] z-[0] gap-10 ">
            <div className="text-[4rem] mt-3">Connect</div>
        <div className=" w-[18rem]  h-[18rem] absolute top-0 bg-secondary clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] left-[5.5rem]"></div>
        <div className=" text-[1.5rem] ml-56 mr-16">Connect with a diverse network of blockchain developers, designers, and enthusiasts from around the globe</div>
        </div>
    </div>  
   <div className="flex justify-center">
   <div className="flex flex-col justify-center relative h-[18rem] w-[850px] z-[0] gap-10">
            <div className="text-[4rem] mt-3 ml-24">Collaborate</div>
        <div className=" w-[18rem]  h-[18rem] absolute top-0 left-[273px] right-[273px]  bg-red clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] "></div>
        <div className=" text-[1.5rem] ml-[25rem] -mr-32 ">Experience the true spirit of collaboration at Blochub, where blockchain enthusiasts and developers unite to create 
        groundbreaking innovations together.</div>
        </div>
    </div>    
   <div className="">
   <div className="flex flex-col justify-center relative h-[18rem] w-[850px] z-[0] gap-4">
            <div className="text-[4rem] mt-3">Learn</div>
        <div className=" w-[18rem]  h-[18rem] absolute top-0 bg-green clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0] z-[-1] left-[5.5rem]"></div>
        <div className=" text-[1.5rem] ml-56 mr-16">Embark on an exciting journey of learning, as we empower you with the knowledge and tools to master web3 development and decentralized technologies.</div>
        </div>
    </div>    
        </div>
     
    </div>
  )
}

export default Services