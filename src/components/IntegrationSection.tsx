import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Subtext from './typography/Subtext'
import CTAButton from './common/CTAbutton'
import IntegrationLogoCard from './IntegrationLogoCard'
import DataCloud from './DataCloud'
import LeftCloudArrow from './LeftCloudArrow'
import RightCloudArrow from './RightCloudArrow'
import { cn } from '~/lib/utils'
import PMSLogoCloud from './common/PMSLogoCloud'
import H2 from './typography/H2'
import DownArrow from './DownArrow'
import useWindowSize from '~/hooks/useWindowSize'
import Image from 'next/image'

function FluffyCloud() {
  return (
    <div className="w-full xl:w-1/3 flex flex-col xl:flex-row xl:gap-1 items-center justify-between">
      <div className="rotate-90 xl:rotate-0 flex items-center h-[140px] pl-3">
        <LeftCloudArrow />
      </div>
      <div className="flex flex-col justify-center">
        <DataCloud />
        {/* <div className="text-center text-gray-400">DATA NORMALIZATION</div> */}
      </div>
      <div className="flex rotate-90 xl:rotate-0">
        <RightCloudArrow />
      </div>
    </div>
  )
}

function IntegrationCloud({ className = null, integrations }) {
  return (
    <div
      className={cn(
        ' flex flex-wrap items-center justify-center gap-x-6 gap-y-1 xl:gap-x-8 xl:gap-y-3 w-full border border-[#E5E7EB] p-6 rounded-lg overflow-hidden',
        className,
      )}
    >
      {integrations?.map((integration: any, index: number) => {
        return <IntegrationLogoCard key={index} image={integration.image} />
      })}
    </div>
  )
}

function PMSCloud({ className = null, integrations }) {
  return (
    <div
      className={cn(
        ' flex flex-wrap items-center justify-center gap-x-8 gap-y-1 xl:gap-x-16 xl:gap-y-4 w-full border border-[#E5E7EB] p-6 rounded-lg overflow-hidden',
        className,
      )}
    >
      {integrations?.map((integration: any, index: number) => {
        return <PMSLogoCloud key={index} image={integration.image} />
      })}
    </div>
  )
}

function UtilBox() {
  const utils = [
    'Unified Performance Analytics',
    'CFO Support',
    'Growth Consulting',
  ]

  return (
    <div className="flex flex-col rounded-lg gap-10  w-full sm:w-[440px] pl-2">
      {utils.map((util, index) => (
        <div
          key={index}
          className=" h-24 px-8 py-4 bg-[#F3E8FF] rounded-lg justify-center items-center  inline-flex"
        >
          <span className="text-center text-gray-900 text-base font-medium">
            {util}
          </span>
        </div>
      ))}
    </div>
  )
}

function IntegrationMobileImage() {
  return (
    <div className="w-full flex justify-center py-3">
      <Image
        src="/integration.svg"
        width={500}
        height={700}
        alt={'Integration section image'}
      />
    </div>
  )
}

function IntegrationSection({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <div className="flex flex-col w-full items-center gap-2">
        <Subtext>{data.strip ?? ''}</Subtext>
        <div className="w-full flex flex-col justify-center gap-2">
          <H2>{data.header ?? ''}</H2>
        </div>
      </div>
      {width > 1280 ? (
        <div className="w-full flex flex-col gap-20">
          <IntegrationCloud integrations={data.integrations} />
          <div className="w-full relative flex flex-col xl:flex-row gap-2 justify-center items-center">
            <div className="hidden xl:block absolute -top-11">
              <DownArrow />
            </div>
            <PMSCloud
              className="h-[400px] sm:h-96 sm:w-[440px]"
              integrations={data.pms}
            />
            <FluffyCloud />
            <UtilBox />
          </div>
        </div>
      ) : (
        <IntegrationMobileImage />
      )}
      <CTAButton
        url={data.cta.url}
        className="px-6 py-3"
        name={data.cta.name ?? ''}
      />
    </>
  )
}

export default IntegrationSection
