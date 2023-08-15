import React from 'react'

const Footer = () => {
        const svg=<svg width="14" height="14" className='hidden lg:block' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.94061 14.9587L15.4037 1.49561M15.4037 1.49561V14.4202M15.4037 1.49561H2.47914" stroke="white" stroke-width="1.86988" stroke-linecap="square"/>
        </svg>
  return (
    <div className="bg-black" data-scroll-section>

    <div className="flex gap-8 justify-between py-8 px-6 lg:px-0   text-white text-xl lg:w-[1110px] mx-auto">
       
        <button      
    className={` overflow-hidden   flex  items-center  group/perr`}>
        <div className="relative z-10 group-hover/perr:-translate-y-full transition-all duration-200 ease-out">
        <div className=" flex items-center gap-2 font-light">Youtube {svg}</div>
        <div className="absolute left-0 top-full  flex items-center gap-2 font-light">Youtube {svg}</div>
        </div>
      </button>



       
       <button      
   className={` overflow-hidden   flex  items-center  group/perr`}>
       <div className="relative z-10 group-hover/perr:-translate-y-full transition-all duration-200 ease-out">
       <div className=" flex items-center gap-2 font-light">Instagram {svg}</div>
       <div className="absolute left-0 top-full  flex items-center gap-2 font-light">Instagram {svg}</div>
       </div>
     </button>


     <button      
   className={` overflow-hidden   flex  items-center  group/perr`}>
       <div className="relative z-10 group-hover/perr:-translate-y-full transition-all duration-200 ease-out">
       <div className=" flex items-center gap-2 font-light">Twitter {svg}</div>
       <div className="absolute left-0 top-full  flex items-center gap-2 font-light">Twitter {svg}</div>
       </div>
     </button>

    </div>
    </div>
  )
}

export default Footer





//     