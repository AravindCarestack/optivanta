import React from 'react'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import PeopleCard from './common/PeopleCard'
import Image from 'next/image'

const AboutUsSection = ({ data }) => {
  return (
    <div className="max-w-7xl">
      <H2 className=" text-black !text-left pb-3">{data.heading}</H2>
      <div className="flex flex-row md:gap-16">
        <Paragraph className="text-black text-base md:text-lg ">
          {data.description}
        </Paragraph>
        <div className="hidden md:block">
          <Image src={data?.image.url} alt={''} width={620} height={350} />
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
