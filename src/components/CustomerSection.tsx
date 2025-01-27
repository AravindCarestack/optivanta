import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'
import Section from './structure/Section'
import Container from './structure/Container'

export default function CustomerSection({ data }) {
  return (
    <Section id="partners-section" className="pt-16 pb-20  gap-6 ">
      <Container>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {data.customers?.map((customer, index) => {
            return (
              <div key={"customer" + index}>
                <ImageLoader
                  key={index}
                  image={customer.image}
                  fixed={false}
                  imageClassName="!h-24 w-auto "
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
