import React from 'react'


import Image from 'next/image'
import pic1 from '../../public/pic1.webp'
import pic2 from '../../public/pic2.webp'
import pic3 from '../../public/pic3.webp'
import pic4 from '../../public/pic4.webp'
import pic5 from '../../public/pic5.webp'


const Events = () => {
  return (
    <div className="text-white bg-black pt-12 pb-20 lg:pb-0 lg:pt-24 h-[90vh] lg:h-[142.5vh] flex gap-10 lg:gap-16 flex-col" data-scroll-section>

        <div className="flex flex-col lg:w-[1110px] mx-auto px-4">
            <div className=" text-[5.3rem] font-medium ">
            Events
            </div>
            <div className=" self-end lg:w-[480px] text-xl ml-10 lg:mx-0">
            Our virtual events feature the top talent in the blockchain and web3 development and design space
            </div>
        </div>


        {/* second section */}
        <div className=" h-[60.5%] lg:h-[57%] bg-black overflow-hidden  ">
        <div className="flex w-[450vw] lg:w-[150vw] h-full overflow-hidden">


          <div className=" px-6 py-5 z-0 border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between">
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              <div className=" border-white border-2  px-4 py-1 rounded-ss-[1rem]">Design</div>
            </div>

            <div className="h-full w-full z-[-1]  absolute top-0 left-0 grayscale   hover:grayscale-0   group/large"><Image src={pic1} alt='pic1'  className='w-full object-cover h-full scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



          <div className=" px-6 py-5 z-0 border-white border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative flex flex-col justify-between">




            <div className="flex justify-between">
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              <div className=" border-white border-2  px-4 py-1  rounded-t-2xl">Design</div>
            </div>

            <div className="h-full w-full  absolute top-0 left-0  z-[-1]"><Image src={pic2}  className='w-full object-cover h-full' /></div>

            <div className="flex justify-between">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>


          <div className=" px-6 py-5 z-0 border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative">

            <div className="flex justify-between">
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              <div className=" border-white border-2  px-4 py-1  rounded-t-2xl">Design</div>
            </div>

            <div className="h-full w-full z-[-1]  absolute top-0 left-0"><Image src={pic3}  className='w-full object-cover h-full' /></div>

            <div className="flex justify-between">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



          <div className=" px-6 py-5 z-0 border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative">

            <div className="flex justify-between">
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              <div className=" border-white border-2  px-4 py-1  rounded-t-2xl">Design</div>
            </div>

            <div className="h-full w-full z-[-1]  absolute top-0 left-0"><Image src={pic4}  className='w-full object-cover h-full' /></div>

            <div className="flex justify-between">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>




          <div className=" px-6 py-5 z-0 border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative">

            <div className="flex justify-between">
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              <div className=" border-white border-2  px-4 py-1  rounded-t-2xl">Design</div>
            </div>

            <div className="h-full w-full z-[-1]  absolute top-0 left-0"><Image src={pic5}  className='w-full object-cover h-full' /></div>

            <div className="flex justify-between">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className=""><svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                                          </svg>
          </div>
            </div>

          </div>



        </div>
        </div>

    </div>
  )
}

export default Events