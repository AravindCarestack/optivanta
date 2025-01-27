import Image from 'next/image'
import React from 'react'

function HeroFloater() {
  return (
    <div className="w-full lg:w-auto relative flex lg:p-8 py-4 hero-gradient rounded-lg shadow-2xl justify-center items-center gap-3">
      <div className=" justify-center items-center flex flex-col gap-1 lg:flex-row  lg:px-16 lg:gap-2.5">
        <div className="w-8 h-8 lg:w-14 lg:h-14 relative">
          <Image
            src={'/Savings.svg'}
            height={100}
            width={100}
            alt={'Exclusive Savings'}
          />
        </div>
        <div className="text-gray-900  text-[10px] lg:text-lg font-medium  text-center lg:text-start  leading-tight">
          Quality
          <br /> Assurance
        </div>
      </div>
      <div className="w-10 h-0 border-[1px] border-zinc-900/20 rotate-90"></div>
      <div className="justify-center items-center flex flex-col gap-1 lg:flex-row  lg:px-16 lg:gap-2.5">
        <div className="w-8 h-8 lg:w-14 lg:h-14 relative">
          <Image
            src={'/TickIcon.svg'}
            height={100}
            width={100}
            alt={'Streamline Operations'}
          />
        </div>
        <div className="text-gray-900  text-[10px] lg:text-lg font-medium  text-center lg:text-start  leading-tight">
          Seamless
          <br /> Support
        </div>
      </div>
      <div className="w-10 h-0 border-[1px] border-zinc-900/20 rotate-90"></div>
      <div className="justify-center items-center flex flex-col gap-1 lg:flex-row  lg:px-16 lg:gap-2.5">
        <div className="w-8 h-8 lg:w-14 lg:h-14">
          <Image
            src={'/UserIcon.svg'}
            height={100}
            width={100}
            alt={'Improve Clinical Growth Icon'}
          />
        </div>
        <div className="text-gray-900  text-[10px] lg:text-lg font-medium  text-center lg:text-start  leading-tight">
          Improve <br /> Clinical Growth
        </div>
      </div>
    </div>
  )
}

export default HeroFloater
