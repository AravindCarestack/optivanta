import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'

const TestimonialSection = ({ data }) => {
  return (
    <>
      <div className="flex flex-col w-full items-center gap-2">
        <Subtext className="text-black">{data.strip}</Subtext>
        <div className="max-w-2xl w-full flex justify-center">
          <H2>{data.header}</H2>
        </div>
        <p className="text-center text-gray-700 text-lg font-normal pt-2">
          Streamline and enhance your dental group with a comprehensive<br></br>
          enterprise business management system.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <TestimonialCarousel membershipData={data.memberShip} />
      </div>
      <CTAButton
        url={data.cta.url ?? ''}
        className="px-6 py-3 bg-black text-white"
        name={data.cta.name ?? ''}
      />
    </>
  )
}

export default TestimonialSection
