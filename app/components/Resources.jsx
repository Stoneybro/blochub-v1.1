import React from 'react'
import Button from './button'
const Resources = () => {
  return (
    <div className="bg-black text-white flex flex-col gap-12" data-scroll-section id='resources'>
        <div className="flex flex-col lg:w-[1110px] mx-auto px-4 lg:px-0 ">
            <div className="lg:text-[5.3rem] text-[4rem] font-medium">
            Resources
            </div>
            <div className=" self-end lg:w-[480px] ml-12 text-xl">
            Explore our curated collection of tutorials, articles, and tools for web3 development.            </div>
        </div>

        <div className="flex flex-col">
            <div className="border-gray-400 border-y-2 px-4 lg:px-20 flex  group/perr items-center  gap-4 justify-between py-[1.6rem]">
                    <div className="lg:text-[2rem] text-[1.7rem] overflow-hidden"><div className="relative z-10 lg:group-hover/perr:-translate-y-[145%] transition-all duration-200 ease-out">
        <div className="">Cryptocurrency & Tokenomics Explained</div>
        <div className="absolute left-0 top-[130%]">Cryptocurrency & Tokenomics Explained</div>
        </div></div>
                    <div className="">
                  <Button />
                    </div>
            </div>
            <div className="border-gray-400 border-b-2 px-4 lg:px-20 flex  group/perr items-center  gap-4 justify-between py-[1.6rem]">
                    <div className="lg:text-[2rem] text-[1.7rem] overflow-hidden">        <div className="relative z-10 lg:group-hover/perr:-translate-y-[145%] transition-all duration-200 ease-out">
        <div className="">Open-Source Tools for Developers</div>
        <div className="absolute left-0 top-[130%]">Open-Source Tools for Developers</div>
        </div></div>
                    <div className="">
                  <Button />
                    </div>
             </div>
            <div className="border-gray-400 border-b-2 px-4 lg:px-20 flex  group/perr items-center  gap-4 justify-between py-[1.6rem]">
                    <div className="lg:text-[2rem] text-[1.7rem] overflow-hidden">        <div className="relative z-10 lg:group-hover/perr:-translate-y-[145%] transition-all duration-200 ease-out">
        <div className="">Decentralized Applications (DApps) Showcase</div>
        <div className="absolute left-0 top-[130%]">Decentralized Applications (DApps) Showcase</div>
        </div></div>
                    <div className="">
                  <Button />
                    </div>
            </div>
            <div className="border-gray-400 border-b-2 px-4 lg:px-20 flex  group/perr items-center  gap-4 justify-between py-[1.6rem]">
                    <div className="lg:text-[2rem] text-[1.7rem] overflow-hidden">        <div className="relative z-10 lg:group-hover/perr:-translate-y-[145%] transition-all duration-200 ease-out">
        <div className="">Blockchain Whitepapers and Guides</div>
        <div className="absolute left-0 top-[130%]">Blockchain Whitepapers and Guides</div>
        </div></div>
                    <div className="">
                 <Button />
                    </div>
            </div>
        </div>
        <button      
    className={`border rounded-3xl  border-white  text-white mix-blend-difference self-center mt-12  font-light w-[309.99px] h-[33.5px] overflow-hidden   flex flex-col items-center justify-center group/perr`}>
        <div className="relative z-10 lg:group-hover/perr:-translate-y-full transition-all duration-200 ease-out">
        <div className="">REGISTER TO GET MORE RESOURCES</div>
        <div className="absolute left-0 top-full">REGISTER TO GET MORE RESOURCES</div>
        </div>
      </button>
    </div>
  )
}

export default Resources