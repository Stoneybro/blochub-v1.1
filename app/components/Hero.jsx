import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black text-white  h-[calc(100vh)] -z-10 flex items-center lg:pt-32 justify-center   sticky top-0' >
     
        <div className="lg:w-[1110px] w-full flex flex-col justify-center items-center ">
        <div className="relative z-[0]">
        <div className=" text-[4rem]  md:text-6rem  lg:text-[6rem] xl:text-[6.785rem] text-center  leading-none px-6 mb-8  ">Discover the power of unity in Blockchain</div>
        <div className="text-2xl font-light text-center px-2 lg:px-0 ">Unlock the future with BlocHub. Join our vibrant community of blockchain enthusiasts and developers, and become part of the decentralized revolution.</div>
        {/* <div className=" w-[17rem]  h-[17rem] bg-secondary absolute -left-16 -top-10 z-[-1] clip-path-polygon-[20%_0%,_80%_0%,_100%_20%,_100%_100%,_80%_100%,_20%_100%,_0_83%,_0_0]"></div> */}
        </div>




        </div>
          </div>
  )
}
export default Hero