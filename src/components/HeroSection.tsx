import CTAButton from './common/CTAbutton'
import H1 from './typography/H1'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import HeroFloater from './common/HeroFloater'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full backdrop-blur-sm border-[1px] border-white/15 bg-white/10 text-base ',
        props.className,
      )}
    >
      <AnimatedShinyText className=" px-5 py-2 text-white transition ease-out  ">
        <span className="items-center">
          {props.content}
        </span>
        {/* <ArrowRightIcon className="ml-1 size-3 md:size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
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
    // <div className={cn(className)}>
    //   <div className="w-full flex flex-col items-center gap-3">
    //     {/* Title and Subtitle */}
    //     <AnimatedShinyTextDemo
    //       className="text-sm font-normal"
    //       content={content?.strip}
    //     />
    //     <div className="flex flex-col items-center">
    //       <H1 className="text-center text-white font-medium ">
    //         {content?.header.static}
    //         <span className="md:text-5xl text-4xl text-ellipsis font-semibold text-[#f768d1] text-center max-w-96 md:max-w-none">
    //           {' '}
    //           {content?.header.dynamic[0]}
    //         </span>
    //       </H1>
    //     </div>

    //     {/* Description */}
    //     <PortableText value={content?.description} components={components} />

    //     {/* Buttons */}
    //     <div
    //       className="flex justify-center md:justify-start items-center gap-3 mt-12"
    //       data-aos="fade-up"
    //       data-aos-delay="200"
    //       data-aos-duration="1000"
    //     >
    //       <CTAButton
    //         url={content.cta.url}
    //         className="px-6 py-3"
    //         name={content.cta.name}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className={cn(className)}>
      <div className="w-full flex flex-col items-center md:items-start gap-3">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-[10px] md:text-sm font-normal text-center"
          content={content?.strip}
        />
        <H1 className=" text-white flex flex-wrap justify-center md:justify-start gap-2">
          {console.log(content?.header)}
          {
            content?.header?.dynamic?.map((e:string)=>{
             return( <span className="text-[#FFD400] max-w-96 md:max-w-none flex items-center">
              {e}
            </span>
             )
            })
          }
     
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
            className="px-6 py-3  !border-0"
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
        <HeroContent
          className="flex items-center w-full lg:w-1/2 md:pt-20"
          content={data}
        />
      )}
      <div className="hidden lg:block absolute top-60 xl:top-36 right-0  2xl:-right-20 items-center ">
        {/* <Image
          className="w-[560px] h-[350px] xl:w-[640px] xl:h-[400px] 2xl:w-[720px] 2xl:h-[450px]"
          width={720}
          height={450}
          src={'/hero-creative.png'}
          alt="hero-left"
        /> */}
      </div>
      <div className="flex w-full absolute  justify-center left-0 -bottom-[44px] md:-bottom-[56px] z-20 px-4">
        <HeroFloater />
      </div>
    </div>
  )
}

export default HeroSection

{
  /* {data && (
          <HeroContent
            className="absolute lg:top-56 left-0 w-full h-full lg:h-auto bg-transparent flex justify-center items-center z-20 px-4"
            content={data}
          />
        )} */
}

{
  /* {windowWidth > 1280 && (
          <div className={`absolute bottom-0 left-[-50px]  z-15`}>
            <Image
              width={550}
              height={579.939}
              src={'/hero-left.svg'}
              alt="hero-left"
            />
          </div>
        )} */
}
{
  /* {windowWidth > 1280 && (
          <div className={`absolute bottom-5 right-[-50px] z-15`}>
            <Image
              width={500}
              height={579.939}
              src={'/hero-right.svg'}
              alt="hero-left"
            />
          </div>
        )} */
}
