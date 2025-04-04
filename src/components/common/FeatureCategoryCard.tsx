import React, { useEffect, useRef } from 'react'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'
import CTAButton from './CTAbutton'

const FeatureCategoryCard = ({
  image,
  activeImage,
  heading,
  features,
  cta,
  setActiveImage,
  setOpacity,
}) => {
  const contentRef: any = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpacity(0)
          setTimeout(() => {
            setActiveImage(image)
            setOpacity(10)
          }, 10)
          setActiveImage(image)
        }
      },
      { root: null, threshold: 0.9 },
    )

    if (contentRef) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveImage,setOpacity,image])
  return (
    <div ref={contentRef} className="flex md:h-[64vh] w-full items-center z-10">
      <div className="hidden md:block md:w-1/2 "></div>
      <div className="w-full  md:w-1/2 flex flex-col gap-8 md:pl-8 ">
        <div className="flex flex-col gap-12 ">
          <div className="md:hidden h-[250px] w-full md:w-[350px]  rounded-2xl  overflow-hidden"
          style={{background: 'linear-gradient(180deg, #FFFFFF -27.83%, #FFD053 36.45%, #B98700 81.38%)'}}
          >
            <ImageLoader image={image} />
          </div>
          <div className="flex flex-col gap-6">
            <H3>{heading}</H3>
            <List
              className="flex flex-col gap-3"
              items={features?.map((feature: any) => feature?.featureHeading)}
            />
          </div>
        </div>
        <div className="">
          <CTAButton
            className="w-auto bg-black text-white px-6 py-3"
            name={cta.name ?? ''}
            url={cta.url}
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureCategoryCard
