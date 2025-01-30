import React, {useMemo } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

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
      <ul className="list-disc text-white">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal text-white ml-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="text-gray-300 pb-4 text-base font-normal leading-7 list-none flex gap-[6px]">
        <Image
          className="mt-[3.75px] w-5 h-5"
          src="/Tick.svg"
          width={14}
          height={14}
          alt="points"
        />
        {children}
      </li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="text-white/90">{children}</li>
    ),
  },
}
const TestimonialCarousel = ({ membershipData }) => {
  const MemberShipCard = (card: any) => {
    return card?.map((e, i) => {
      return (
        <div
          className="w-[328px] h-[580px] bg-black-gradient rounded-xl"
          key={i}
        >
          <div className="h-[155px] w-[328px] underline-offset-2 border-b border-gray-500 p-8 flex-col flex gap-6 pt-4 px-8 pb-8">
            <div className="flex flex-row justify-between">
              <div className="border-yellow-500">
                <Image src={e?.icon} alt={''} width={56} height={56} />
              </div>
              <p className="text-yellow-600 text-base">
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
    <div className="w-full lg:flex-row flex-col  rounded-md max-w-7xl px-4 flex items-center gap-16">
      {MembershipCards}
    </div>
  )
}

export default TestimonialCarousel
