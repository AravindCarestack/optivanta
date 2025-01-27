import Image from 'next/image'
import React from 'react'
import Paragraph from '../typography/Paragraph'
import { PortableText } from '@portabletext/react'
import { cn } from '~/lib/utils'

const components: any = {
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="text-gray-700 text-base md:text-lg font-normal md:max-w-3xl pt-0.5 md:pt-0">
      {children}
    </li>
  ),
  marks: {
    highlight: ({ children }: { children: React.ReactNode }) => (
      <span style={{ backgroundColor: 'yellow', fontWeight: 'semibold' }}>
        {children}
      </span>
    ),

    em: ({ children }: { children: React.ReactNode }) => (
      <em className="text-blue-500">{children}</em>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
  },
}

const List = (props) => {
  return (
    <ul className={cn("flex gap-3 md:gap-4", props.className)}>
      {props?.items?.map((item, index) => (
        <li key={index}>
          <div className="flex flex-row items-start gap-[6px]">
            <Image
              className="mt-[3.75px] w-5 h-5"
              src="/good-tick.svg"
              width={14}
              height={14}
              alt="points"
            />
            {!props?.isRichText ? (
              <Paragraph className="pt-0.5 md:pt-0">{item}</Paragraph>
            ) : (
              <PortableText key={index} value={item} components={components} />
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
