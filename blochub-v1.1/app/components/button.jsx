
import React from 'react'

const Button = ({}) => {
    const svg=   <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
    </svg>
  return (
    <div>
    <button      
    className={`  text-white mix-blend-difference  overflow-hidden   flex flex-col items-center justify-center group/perr`}>
        <div className="relative z-10 group-hover/perr:-translate-y-[110%] group-hover/perr:translate-x-[110%] transition-all duration-300  ease-out">
        <div className="">{svg}</div>
        <div className="absolute -left-[110%] top-[110%]">{svg}</div>
        </div>


      </button></div>
  )
}

export default Button