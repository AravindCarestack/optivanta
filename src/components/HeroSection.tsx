import CTAButton from './common/CTAbutton'
import H1 from './typography/H1'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import HeroFloater from './common/HeroFloater'
import HeroImage from './common/HeroImage'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full backdrop-blur-sm border-[1px] border-white/15 bg-white/10 text-base ',
        props.className,
      )}
    >
      <AnimatedShinyText className=" px-5 py-2 text-white transition ease-out  ">
        <span className="items-center">{props.content}</span>
      </AnimatedShinyText>
    </div>
  )
}
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
}

const HeroContent = ({ className = null, content }) => {
  return (
    <div className={cn(className)}>
      <div className="w-full flex flex-col items-center md:items-start gap-3">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-[10px] md:text-sm font-normal text-center"
          content={content?.strip}
        />
        <H1 className=" text-white flex flex-wrap justify-center md:justify-start gap-2">
          {content?.header?.dynamic?.map((e: string, i: number) => {
            return (
              <span
                key={i}
                className="text-[#FFD400] max-w-96 md:max-w-none flex items-center"
              >
                {e}
              </span>
            )
          })}
        </H1>

        {/* Description */}
        <PortableText value={content?.description} components={components} />

        {/* Buttons */}
        <div
          className="w-full flex justify-center md:justify-start gap-3 mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CTAButton
            url={content.cta.url}
            className="px-6 py-3  !border-0 text-black bg-yellow-gradient"
            name={content.cta.name}
          />
        </div>
      </div>
    </div>
  )
}

const HeroSection = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-row justify-between items-center">
      {data && (
        <>
          <HeroContent
            className="flex items-center w-full lg:w-1/2 md:pt-20"
            content={data}
          />
          <HeroImage />
        </>
      )}
      <div className="hidden lg:block absolute top-60 xl:top-36 right-0  2xl:-right-20 items-center "></div>
      <div className="flex w-full absolute justify-center left-0 -bottom-[44px] md:-bottom-[56px] z-20 px-4">
        <HeroFloater />
      </div>
    </div>
  )
}

export default HeroSection
