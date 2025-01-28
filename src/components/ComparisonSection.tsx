import React from 'react'
import CTAButton from './common/CTAbutton'
import ComparisonTable from './ComparisonTable'
import Subtext from './typography/Subtext'
import H2 from './typography/H2'
import Image from 'next/image'

function ComparisonSection({ data }) {
  return (
    <>
      <div className="flex flex-col w-full items-center gap-2">
        <Subtext>{data.strip}</Subtext>
        <div className="max-w-2xl w-full flex justify-center">
          <H2>{data.header}</H2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <ComparisonTable
            data={{
              columnDimensionName: data.columnDimensionName,
              ...data.table,
            }}
          />
        </div>
        <div className="w-full flex justify-between md:hidden px-2">
          {data.comparisonLegend.map((comparison, index) => (
            <p key={index} className="flex flex-row gap-2 justify-center items-center ">
              <Image
                className="w-[15.5px] h-[15.5px] object-contain"
                src={comparison.icon.url}
                alt={`${comparison.text} image`}
                width={400}
                height={400}
              />
              <span className="text-[10px] text-gray-600 font-normal">{comparison.text}</span>
            </p>
          ))}
        </div>
      </div>
      <CTAButton
        className="px-6 py-3"
        name={data.cta.name ?? ''}
        url={data.cta.url ?? '/'}
      />
    </>
  )
}

export default ComparisonSection
