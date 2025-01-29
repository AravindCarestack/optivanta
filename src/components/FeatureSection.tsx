import React from 'react'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import StickyImageSection from './StickyImageSection'
import { isEmpty } from 'lodash'

const FeatureSection = ({ data }) => {
  if (isEmpty(data)) return <></>
  const { strip, header, featuresByCategory, cta } = data

  return (
    <>
      <div className="flex flex-col w-full items-center gap-2 pb-12 md:pb-20">
        <Subtext>{strip ?? ''}</Subtext>
        <div className="w-full flex flex-col justify-center gap-2">
          <H2 className="md:text-4xl md:font-semibold">{header ?? ''}</H2>
          <p className="flex justify-center">
            <span className="text-center text-base md:text-lg font-normal text-gray-700">
            Simplify and optimize your dental group with a unified enterprise
            <br></br>
             business management system.
            </span>
          </p>
        </div>
      </div>
      <StickyImageSection data={{ featuresByCategory, cta }} />
    </>
  )
}

export default FeatureSection
