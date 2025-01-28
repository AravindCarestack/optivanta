import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
  <div className=" flex-col justify-center items-center flex relative hidden lg:block top-[170px] ">
    <img className=" w-full h-[500px] object-cover object-center" src="/heroImage.png"/>
  </div>
  )
}

export default HeroImage
