import { useEffect, useRef, useState } from 'react'
import FeatureCategoryCard from './common/FeatureCategoryCard'
import ImageLoader from './common/imageLoader/imageLoader'
import { cn } from '~/lib/utils'

const StickyImageSection = ({ data }) => {
  const categoryImage = data.featuresByCategory[0].categoryImage
  const [activeImage, setActiveImage] = useState(categoryImage)
  const [opacity, setOpacity] = useState(100)

  return (
    <div className="relative w-full ">
      <div className="hidden md:block absolute top-0 left-0 h-full">
        <div
          id="feature-image-container"
          className="w-full sticky top-[20vh] pr-16 flex items-center md:h-[64vh] "
        >
          <div className="w-1/2">
            <ImageLoader
              image={activeImage}
              className={cn(
                'flex justify-center h-[400px] items-center rounded-2xl overflow-hidden transition-opacity duration-300 ease-in-out', `opacity-${opacity}`
              )}
              fixed={false}
            />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-20 md:gap-0">
        {data.featuresByCategory?.map((featureCategory: any, index: number) => {
          return (
            <FeatureCategoryCard
              key={index}
              image={featureCategory.categoryImage}
              activeImage={activeImage}
              heading={featureCategory.categoryHeading}
              features={featureCategory.features}
              cta={data.cta}
              setActiveImage={setActiveImage}
              setOpacity={setOpacity}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StickyImageSection
