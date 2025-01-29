import React from 'react'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import PeopleCard from './common/PeopleCard'
import Image from 'next/image'

const AboutUsSection = ({ data }) => {
  return (
    <div className="max-w-7xl flex flex-row md:gap-16">
      <div>
        <H2 className=" text-gray-900  !text-left pb-3">{data.heading}</H2>
        <Paragraph className="text-gray-900 text-base md:text-lg ">
          {data.description}
        </Paragraph>
      </div>
      <div className="hidden md:block">
        <Image src={data?.image.url} alt={''} width={620} height={350} />
      </div>
    </div>
  )
}

export default AboutUsSection
