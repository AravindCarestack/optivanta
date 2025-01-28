import React from 'react'
import { cn } from '~/lib/utils'

const CTAButton = ({ className = null, name, url }) => {
  return (
    <div
     
      className={cn(
        'cursor-pointer text-black rounded-md px-4 py-2 border-none border-[1px] ]rounded-md justify-center items-center gap-2.5 inline-flex  text-sm md:text-base',
        className,
      )}
    >
      <a
        className="text-white font-medium"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  )
}

export default CTAButton
