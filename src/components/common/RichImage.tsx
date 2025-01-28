import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'

const Richness = ({ item }: any) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col gap-6">
      <H3>{item.benefitHeading}</H3>
      <List
        className="flex flex-col"
        items={item?.benefitPoints}
        isRichText={true}
      />
    </div>
  )
}

export const Picture = (props) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden w-full">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          className={`object-cover w-full h-[${props.height ? props.height : 400}px]`}
        />
      </div>
    </div>
  )
}

const RichImage = (props: any) => {
  if (props.index % 2 == 0) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24  w-full">
        <div className="md:w-1/2 rounded-xl overflow-hidden">
          <ImageLoader image={props?.item?.benifitSectionImage} fixed={false} />
        </div>
        <Richness className="w-1/2 " item={props?.item} />
      </div>
    )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24  w-full">
      <Richness className="w-1/2" item={props?.item} />
      <div className="md:w-1/2 rounded-xl overflow-hidden ">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          fixed={false}
        />
      </div>
    </div>
  )
}

export default RichImage
