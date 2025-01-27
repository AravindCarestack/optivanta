import Image from 'next/image'
import Pinpoint from './Pinpoint'
import { cn } from '~/lib/utils'

const CustomerCard = ({
  imageUrl,
  topText,
  topSubText,
  bottomText,
  bgColor = null,
  bgOverlay = null,
}) => {
  const bottom = bottomText.trim().split(',')
  return (
    <div
      className={cn(
        'w-full relative flex flex-col overflow-hidden rounded-3xl gap-4 items-center md:flex-row text-white',
        bgColor,
      )}
    >
      <div className="absolute bottom-0 h-full w-full z-0 bg-noise-pattern bg-contain"></div>
      <div
        className={cn('absolute bottom-0 h-1/4 w-full z-20', bgOverlay)}
      ></div>
      <div className="w-full pt-10 pl-10">
        <div className="flex justify-end">
          <Image
            className="relative  z-15"
            src={imageUrl}
            width={300}
            height={300}
            alt={'customer image'}
          />
        </div>
        <div className="absolute top-0 left-0 pl-7 pt-6">
          <p className="text-white text-lg font-semibold ">{topText}</p>
          <p className=" flex flex-row gap-2 items-center">
            {/* <Pinpoint /> */}
            <span className="text-white text-base font-normal">
              {topSubText}
            </span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 pl-7 pb-6 z-50">
          <p className="text-white text-lg font-medium">
            {`${bottom[0]},${bottom[1]}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
