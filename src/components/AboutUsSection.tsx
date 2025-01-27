import React from 'react'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import PeopleCard from './common/PeopleCard'

const AboutUsSection = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex justify-center w-full">
          <H2 className="!text-left !text-white">{data.heading}</H2>
        </div>
        <Paragraph className="text-white/80 text-base md:text-lg text-center">
          {data.description}
        </Paragraph>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8 xl:flex-row xl:items-stretch">
        {data.founders?.map((founder: any, index: number) => {
          return <PeopleCard key={index} {...founder} />
        })}
      </div>
    </>
  )
}

export default AboutUsSection
