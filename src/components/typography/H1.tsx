import React from 'react'
import { cn } from '~/lib/utils'

const H1 = (props) => {
  return <h1 className={cn("md:text-5xl text-3xl font-semibold max-w-4xl mt-4 lead", props.className)}>{props.children}</h1>
}

export default H1
