import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'
import ImageLoader from './common/imageLoader/imageLoader'
import { cn } from '~/lib/utils'
import GridPattern from './ui/grid-pattern'

const TestimonialSection = ({ data }) => {
  return (
    <>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_top_left,transparent,transparent,transparent)]',
        )}
      />
      <div className="flex flex-col w-full items-center gap-2">
        <Subtext className="text-black">{data.strip}</Subtext>
        <div className="max-w-2xl w-full flex justify-center">
          <H2>{data.header}</H2>
        </div>
      </div>
      <div className="w-full flex flex-wrap max-w-5xl  justify-center gap-x-6 md:gap-8">
        {data.customers?.map((customer, index) => {
          return (
            <div key={'customer' + index}>
              <ImageLoader
                key={index}
                image={customer.image}
                fixed={false}
                imageClassName="!h-20 w-auto "
              />
            </div>
          )
        })}
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <TestimonialCarousel membershipData={data.memberShip} />
      </div>
      <CTAButton
        url={data.cta.url ?? '/'}
        className="px-6 py-3 bg-black text-white"
        name={data.cta.name ?? ''}
      />
    </>
  )
}

export default TestimonialSection
