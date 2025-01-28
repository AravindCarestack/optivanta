import React, { ReactElement, useMemo } from 'react'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import H2 from '../typography/H2'

const components: any = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-white/80 text-base md:text-xl font-normal text-center md:text-start md:pr-8 ">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc text-white ml-6">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal text-white ml-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="text-white/90 text-lg font-normal leading-7">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="text-white/90">{children}</li>
    ),
  },
}
const TestimonialCarousel = ({ membershipData }) => {
  const MemberShipCard = (card: any) => {
    return card?.map((e,i) => {
      return (
        <div className="w-[328px] h-[500px] bg-black-gradient rounded-md" key={i}>
          <div className="h-[126px] w-[328px] underline-offset-2 border-b border-gray-500 p-8 flex-col flex gap-6 pt-4 px-8 pb-8">
            <div className="flex flex-row justify-between">
              <div className="border-yellow-500 w-6 h-6">
                <Image src={e?.icon} alt={''} width={50} height={50} />
              </div>
              <p className="text-yellow-600 text-base text-sm ">
                {!e?.isFutureFeature ? 'Coming Soon*' : ''}
              </p>
            </div>
            <div className="text-white text-2xl font-semibold">
              {e.membershipHeading}
            </div>
          </div>
          <div className="p-8">
            <PortableText
              value={e?.membershipDescription}
              components={components}
            />
          </div>
        </div>
      )
    })
  }
  const MembershipCards = useMemo(
    () => MemberShipCard(membershipData),
    [membershipData],
  )

  return (
    <div className="w-full flex-col md:flex-row  rounded-md max-w-7xl px-4 flex items-center gap-16">
      {MembershipCards}
    </div>
  )
}

export default TestimonialCarousel
