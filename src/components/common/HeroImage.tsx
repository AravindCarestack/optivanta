import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
  <div className=" flex-col justify-center items-center flex relative hidden lg:block top-[113px] max-w-[680px] z-50">
    <img className=" w-full h-[611px] object-cover object-center" src="/heroImage.png"/>
  </div>
  )
}

export default HeroImage
