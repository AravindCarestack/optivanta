import React from 'react'

const H2 = (props) => {
  return <h2 className={`md:text-4xl text-[28px] text-gray-900 font-semibold text-center md:whitespace-nowrap leading-tight md:leading-none ${props.className}`}>{props.children}</h2>
}


export default H2
