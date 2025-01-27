import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'
import CustomerCard from './common/CustomerCard'
import ImageLoader from './common/imageLoader/imageLoader'

const TestimonialSection = ({ data }) => {
  const customers = [
    // {
    //   url: '/passion-dental.png',
    //   companyName: 'Passion Dental',
    //   locationCount: '52',
    //   importantFigure: 'Patrick Assioun, CEO',
      // bgColor: 'bg-gradient-to-bl from-[#D78EF5] to-[#AB42D6]',
      // bgGradient: 'bg-gradient-to-t from-[#7B319E]/75 to-[#771AA4]/0',
    // },
    {
      url: '/simply-dental.png',
      companyName: 'Simply Dental',
      locationCount: '42',
      importantFigure: 'Dr. Sam Alkhoury, Founder',
      bgColor: 'bg-gradient-to-bl from-[#C097FF] to-[#6D2ECE]',
      bgGradient: 'bg-gradient-to-t from-[#5819AF]/75 to-[#5B1BB3]/0',
    },
    {
      url: '/progressive-dental.png',
      companyName: 'Progressive Dental',
      locationCount: '17',
      importantFigure: 'Dmitry Burshteyn, CEO',
      bgColor: 'bg-gradient-to-bl from-[#D78EF5] to-[#AB42D6]',
      bgGradient: 'bg-gradient-to-t from-[#7B319E]/75 to-[#771AA4]/0',
    },
  ]

  return (
    <>
      <div className="flex flex-col w-full items-center gap-2">
        <Subtext>{data.strip}</Subtext>
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
        <TestimonialCarousel testimonials={data.testimonials} />
        {/* <div className="flex flex-col md:flex-row w-full justify-center md:max-w-5xl gap-6">
          {customers.map((customer, index) => {
            const subtext = `${customer.locationCount} locations`
            return (
              <CustomerCard
                key={index}
                imageUrl={customer.url}
                topText={customer.companyName}
                topSubText={subtext}
                bottomText={customer.importantFigure}
                bgColor={customer.bgColor}
                bgOverlay={customer.bgGradient}
              />
            )
          })}
        </div> */}
      </div>
      <CTAButton
        url={data.cta.url ?? '/'}
        className="px-6 py-3"
        name={data.cta.name ?? ''}
      />
    </>
  )
}

export default TestimonialSection
