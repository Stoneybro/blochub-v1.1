'use client'
import React, { useEffect, useRef } from 'react'
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
    

    const MathUtil = {
      lerp: (a, b, n) => (1 - n) * a + n * b
  };

  let winsize;
  const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
  calcWinsize();
  window.addEventListener('resize', calcWinsize);

  class GalleriaItem {
      constructor(el, parent) {
          this.el = el;
      }
  }

  class Galleria {
      constructor(el) {
          this.el = el;
          this.inner = this.el.querySelector('.galleria__inner');
          this.innerWidth = 0;
          this.items = [];
          [...this.el.querySelectorAll('.galleria__item')].forEach(item => {
              this.items.push(new GalleriaItem(item))
              this.innerWidth += item.getBoundingClientRect().width;
          });
          this.isDragged = false;
          this.currentX = 0;
          this.initialX = 0;
          this.xOffset = 0;
          this.pervPosition = 0;
          this.maxDrag = this.innerWidth - winsize.width;
          this.intervalId = undefined;
          this.init();
          this.initEvents();
      }

      init() {
          this.inner.style.width = this.innerWidth + 'px';
          this.render = () => {
              this.intervalId = undefined;

              this.pervPosition = MathUtil.lerp(this.pervPosition, this.currentX, 0.1);
              this.inner.style.transform = 'matrix(1, 0, 0, 1, ' + this.pervPosition + ', 0)';

              if (!this.intervalId) {
                  this.intervalId = requestAnimationFrame(() => this.render());
              }
          };
          this.intervalId = requestAnimationFrame(() => this.render());
      }

      onDragStart(e) {
          this.isDragged = true;
          this.initialX = this.unify(e).clientX - this.xOffset;
      }

      onDragMove(e) {
          if (!this.isDragged) return;
          e.preventDefault();
          this.currentX = this.unify(e).clientX - this.initialX;
      }

      onDragEnd() {
          if (this.currentX > 0) {
              this.currentX = 0;
          }
          if (this.currentX < -1 * this.maxDrag) {
              this.currentX = -1 * this.maxDrag;
          }

          this.isDragged = false;
          this.xOffset = this.currentX;
      }

      initEvents() {
          if(window.PointerEvent){
              // Pointer events
              this.inner.addEventListener('pointerdown', (e) => {
                  this.onDragStart(e);
              });
              this.inner.addEventListener('pointermove', (e) => {
                  this.onDragMove(e);
              });
              this.inner.addEventListener('pointerup', (e) => {
                  this.onDragEnd();
              });
          }else{
              // Mouse events
              this.inner.addEventListener('mousedown', (e) => {
                  this.onDragStart(e);
              });
              this.inner.addEventListener('mouseleave', (e) => {
                  this.onDragEnd();
              });
              this.inner.addEventListener('mouseup', (e) => {
                  this.onDragEnd();
              });
              this.inner.addEventListener('mousemove', (e) => {
                  this.onDragMove(e);
              });

              // Touch events
              this.inner.addEventListener('touchstart', (e) => {
                  this.onDragStart(e);
              });
              this.inner.addEventListener('touchmove', (e) => {
                  this.onDragMove(e);
              });
              this.inner.addEventListener('touchend', (e) => {
                  this.onDragEnd();
              });
          }
          // Unifying touch and click
          this.unify = (e) => {
              return e.changedTouches ? e.changedTouches[0] : e
          };
      }
  }

  var galleria = document.querySelectorAll('.galleria');
  if (galleria.length > 0) {
      for (let i = 0; i < galleria.length; i++) {
        new Galleria(galleria[i]);
      }
  }

  },[])
  const svg2=<svg width="164" height="38" viewBox="0 0 164 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 29.8885V1H155.993L163 7.14184V36.704H8.77561L1 29.8885Z" stroke="white" stroke-width="2"/>
  <text x="22.5" y="25" font-size="20" fill="white">Development</text>
  </svg>
  
  const svg1=<svg xmlns="http://www.w3.org/2000/svg" width="106" height="38" viewBox="0 0 106 38" fill="none">
  <path d="M1 29.8885V1H97.993L105 7.14185V36.704H8.77561L1 29.8885Z" stroke="white" stroke-width="2"/>
  <text x="22.5" y="25" font-size="20" fill="white">Design</text>
  </svg>
  const svg=<svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
  </svg>
  const button=  <button      
  className={`  text-white   overflow-hidden   flex flex-col items-center justify-center`}>
      <div className="relative z-10 group-hover/card:-translate-y-[110%] group-hover/card:translate-x-[110%] transition-all duration-[350ms] ease-out">
      <div className="">{svg}</div>
      <div className="absolute -left-[110%] top-[110%]">{svg}</div>
      </div>


    </button>
 

  return (
    <div  className="text-white bg-black pb-20 lg:pb-0  h-[120vh] min-h-[50rem] lg:h-[142.5vh] flex gap-10 lg:gap-16 flex-col"  id='event'>

        <div className="flex flex-col lg:w-[1110px] mx-auto px-4">
            <div className=" text-[5.3rem] font-medium ">
            Events
            </div>
            <div className=" self-end lg:w-[480px] text-xl ml-10 lg:mx-0">
            Our virtual events feature the top talent in the blockchain and web3 development and design space
            </div>
        </div>


        {/* second section */}
        <div className="h-[60.5%]  lg:h-[57%] relative overflow-hidden cursor-none"  id='events'>
        <div className="  bg-black   absolute  top-0 h-full w-full   z-[0] cursor-none galleria"   ref={container}  id='events' >
        <div
        className="flex w-[450vw] lg:w-[150vw] absolute top-0 h-full overflow-hidden touch-none galleria__inner   z-[0] cursor-none"  id='events' ref={wrapper}>


          <div  id='events' className="  px-6 py-5 galleria__item z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative  ">

            <div className="flex justify-between  
            pointer-events-none" >
              <div className="leading-2">DAVID HIN <br /> <div className="text-sm -m-1">18 AUG 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0      group/large"><Image src={pic1} placeholder='blur' alt='speaker David Hin'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105  transition-all duration-[2500ms] ease-out  ' /></div>

            <div className="flex justify-between items-end  pointer-events-none">
            <div className="text-3xl font-semibold">Designing for web3</div>
            <div className="">
          {button}</div>
            </div>

          </div>



          <div  id='events' className="  px-6 py-5 galleria__item z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">ANDREW JONES <br /> <div className="text-sm -m-1">02 AUG 23</div> </div>
                {svg2}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic3} placeholder='blur' alt='speaker Andrew Jones'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between items-end gap-4  pointer-events-none">
            <div className="text-3xl font-semibold">The Complete Guide to Full Stack Solana Development</div>
            <div className="">
          {button}</div>
            </div>

          </div>


          <div  id='events' className="  px-6 py-5 galleria__item z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">KELVIN AYO<br /> <div className="text-sm -m-1">6 JUL 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic2} placeholder='blur' alt='speaker Kevin Ayo'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between gap-4 items-end  pointer-events-none">
            <div className="text-3xl font-semibold">The Ethereum Merge</div>
            <div className="">
          {button}</div>
            </div>

          </div>



          <div  id='events' className="  px-6 py-5 galleria__item z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">DERIC GRIF<br /> <div className="text-sm -m-1">30 SEP 23</div> </div>
              {svg2}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic4} placeholder='blur' alt='speaker Deric Griff'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between items-end  pointer-events-none">
            <div className="text-3xl font-semibold">Web3 Frontend with React</div>
            <div className="">
          {button}</div>
            </div>

          </div>




          <div  id='events' className="  px-6 py-5 galleria__item z-0 group/card border-white flex flex-col justify-between border-4 border-r-0 overflow-hidden h-full w-[90vw] lg:w-[calc(150vw/5)] relative ">

            <div className="flex justify-between  pointer-events-none" >
              <div className="leading-2">Steven Fawne<br /> <div className="text-sm -m-1">3 NOV 23</div> </div>
              {svg1}
            </div>

            <div  className="  h-full w-full z-[-1] pointer-events-none absolute top-0 left-0   group/large"><Image src={pic5} placeholder='blur' alt='speaker Steven Fawne'  className='w-full object-cover h-full group-hover/card:scale-100 grayscale  group-hover/card:grayscale-0  scale-105 transition-all duration-[2500ms] ease-out  hover:scale-100 ' /></div>

            <div className="flex justify-between items-end pointer-events-none">
            <div className="text-3xl font-semibold">Branding in web3</div>
            <div className="">
          {button}</div>
            </div>

          </div>



        </div>
        </div>
      </div>
    </div>
  )
}

export default Events