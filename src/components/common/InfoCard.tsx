import React from 'react'
import Pinpoint from './Pinpoint'

function InfoCard({ mainText, subTextOne, subTextTwo }) {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
      <div className="flex flex-col ">
        <p className="text-white text-base md:text-lg font-semibold">{mainText}</p>
        <p className="text-white/75 text-base">{subTextOne}</p>
      </div>
      <div className="relative flex flex-row items-end gap-2 text-white">
        <div className="-translate-y-0.5"><Pinpoint className="w-3 md:w-4" /></div>
        <p className="text-base font-medium">{subTextTwo}</p>
      </div>
    </div>
  )
}

export default InfoCard
