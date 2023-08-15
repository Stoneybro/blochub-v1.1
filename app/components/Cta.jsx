import React from 'react'
import Button from './button'
const Cta = () => {
  const svg=<svg width="205" height="29" viewBox="0 0 224 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.904 20.431C16.9783 21.5624 18.2228 23.7121 18.4114 26.3899L18.864 32.9521H15.7714L15.3188 26.5784C15.168 24.0139 13.5085 22.2036 11.0194 22.2036H3.85369V32.9521H0.647974V6.55215H10.6423C15.8468 6.55215 19.0525 9.68243 19.0525 14.2836C19.0525 17.1876 17.3931 19.2619 14.904 20.431ZM3.85369 9.41843V19.2996H10.6423C14.3383 19.2996 15.7337 16.8859 15.7337 14.2836C15.7337 11.6813 14.3383 9.41843 10.6423 9.41843H3.85369ZM25.0297 32.9521V6.55215H41.5485V9.45615H28.2354V17.8664H39.0594V20.7704H28.2354V30.0481H41.9634V32.9521H25.0297ZM56.7883 33.2539C50.2638 33.2539 44.1163 28.7659 44.1163 19.7521C44.1163 10.7384 50.3015 6.25043 56.8638 6.25043C62.8981 6.25043 67.6123 9.83329 68.2158 14.887H64.8215C64.2181 11.5304 60.8992 9.15443 56.8261 9.15443C51.3952 9.15443 47.3975 12.8881 47.3975 19.7521C47.3975 26.5784 51.3952 30.4253 56.8261 30.4253C61.1632 30.4253 65.0101 27.9739 65.0101 24.1647C65.0101 22.9579 64.2181 22.1659 62.9358 22.1659H56.9769V19.375H63.5015C65.4249 19.375 68.1781 20.8836 68.1781 23.9007V32.9521H65.1986V28.351C63.9541 31.255 60.6729 33.2539 56.7883 33.2539ZM72.8723 32.9521V6.55215H76.078V32.9521H72.8723ZM90.2359 33.2539C84.3148 33.2539 80.5433 29.7087 80.2039 24.3156H83.3719C83.7113 27.9739 86.125 30.3499 90.2359 30.3499C93.8942 30.3499 96.5342 28.9544 96.5342 25.7487C96.5342 18.9601 81.109 22.6939 81.109 13.2653C81.109 9.079 84.7673 6.25043 90.0473 6.25043C95.3273 6.25043 98.9856 9.30529 99.3628 14.0573H96.1948C95.893 11.0779 93.5925 9.15443 90.0473 9.15443C86.4645 9.15443 84.3525 10.7384 84.3525 13.2653C84.3525 20.0161 99.8908 15.8299 99.8908 25.7487C99.8908 30.5384 95.7422 33.2539 90.2359 33.2539ZM109.478 32.9521V9.45615H101.03V6.55215H121.131V9.45615H112.721V32.9521H109.478ZM124.251 32.9521V6.55215H140.77V9.45615H127.456V17.8664H138.28V20.7704H127.456V30.0481H141.184V32.9521H124.251ZM159.868 20.431C161.943 21.5624 163.187 23.7121 163.376 26.3899L163.828 32.9521H160.736L160.283 26.5784C160.132 24.0139 158.473 22.2036 155.984 22.2036H148.818V32.9521H145.612V6.55215H155.607C160.811 6.55215 164.017 9.68243 164.017 14.2836C164.017 17.1876 162.357 19.2619 159.868 20.431ZM148.818 9.41843V19.2996H155.607C159.303 19.2996 160.698 16.8859 160.698 14.2836C160.698 11.6813 159.303 9.41843 155.607 9.41843H148.818Z" fill="white"/>
  <path d="M188.81 34.7021L221.31 2.20215M221.31 2.20215V33.4021M221.31 2.20215H190.11" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
  </svg>
  return (
    <div className=" bg-black text-white  px-4 lg:px-0 " data-scroll-section>
        <div className="lg:w-[1110px] mx-auto flex flex-col items-start gap-6 lg:gap-0">
            <div className="text-[4rem] lg:text-[5.3rem] font-medium leading-[1] lg:leading-normal">Ready to Shape the Future?</div>
            <div className="lg:text-2xl text-xl mb-8">Join Blochub today and be part of the decentralized revolution!</div>

            <div>
    <button      
    className={`border rounded-full  border-white  text-white mix-blend-difference  font-light w-[275.396px] h-[67.396px] overflow-hidden   flex flex-col items-center justify-center group/perr`}>
        <div className="relative z-10 group-hover/perr:-translate-y-[200%] transition-all duration-200 ease-out">
        <div className="">{svg}</div>
        <div className="absolute left-0 top-[200%]">{svg}</div>
        </div>


      </button></div>


        </div>
    </div>
  )
}

export default Cta