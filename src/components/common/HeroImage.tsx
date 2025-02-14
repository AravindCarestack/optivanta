import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
  <div className=" flex-col justify-center items-center flex relative hidden lg:block top-[113px] max-w-[680px] z-50">
    <Image className="w-full h-[611px] " src="/heroImage.png" alt={'AceDSN '}
    width={500} height={500} loading="lazy"
    />
  </div>
  )
}

export default HeroImage
