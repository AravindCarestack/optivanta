import React from 'react'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'

const BenefitsSection = ({ data }) => {
  return (
    <>
      <div className="flex text-white flex-col w-full items-center gap-2">
        <Subtext>{data.strip}</Subtext>
        <div className=" flex-col w-full flex justify-center">
          <H2 className="text-wrap text-white">{data.header}</H2>
          <div className='pt-12 items-center text-center '>
           <p> Beyond cost savings, members gain access to a centralized technology
            solution that streamlines operations. This empowers our partners
            with advanced reporting and analytics while maximizing the
            efficiency of managing everything in one place. </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-[64px] md:gap-24 w-full">
        {data?.benefits?.map((benefit: any, index: number) => (
          <RichImage key={index} index={index} item={benefit} />
        ))}
      </div> */}
      <CTAButton
        className="px-6 py-3 bg-yellow-gradient"
        name={data.cta.name ?? 'Become A Member'}
        url={data.cta.url ?? '/'}
      />
    </>
  )
}

export default BenefitsSection
