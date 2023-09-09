
'use client'

import Nav from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Slider from './components/Slider1'
import Events from './components/Events'
import Resources from './components/Resources'
import Strips from './components/Strips'
import Cta from './components/Cta'
import Slider2 from './components/Slider2'
import Footer from './components/Footer'
import Mouse from './components/mouse'
import MyReactComponent from './components/text'


export default function Home() {

  return (
    
    <div className='sm:h-screen lg:h-full  h-full scroll-smooth  ' >
      <Mouse />
   <Nav />
      <Hero />
      <About />
      <Services />
      <Slider />
      <Events />
      <Resources />
      <Strips />
      <Cta />
      <Slider2 />
      <Footer /> 

     {/* 


    <MyReactComponent />
           <Mouse />
   <Nav />
      <Hero />
      <About />
      <Services />
      <Slider />
      <Events />
      <Resources />
      <Strips />
      <Cta />
      <Slider2 />
      <Footer /> 



 */}

    </div>
  )
}