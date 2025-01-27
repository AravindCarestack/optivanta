import { cn } from '~/lib/utils'

const Paragraph = (props) => {
  return (
    <p
      className={cn(
        'text-gray-700 text-base md:text-lg font-normal md:max-w-3xl ',
        props.className,
      )}
    >
      {props.children}
    </p>
  )
}

export default Paragraph
