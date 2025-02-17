import React from 'react'
import { cn } from '~/lib/utils'

const CTAButton = ({ className = null, name, url }) => {
  return (
    <a
      className={cn(
        'cursor-pointer text-black rounded-md px-4 py-2 border-none border-[1px]  justify-center items-center gap-2.5 inline-flex text-sm md:text-base font-medium',
        className,
      )}
      href={url || 'https://share.hsforms.com/15ry1-xBdSdaA_yhY0sR-KQ2vkpl'}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  )
}

export default CTAButton
