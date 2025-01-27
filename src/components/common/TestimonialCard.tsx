import H3 from '../typography/H3'
import Paragraph from '../typography/Paragraph'
import InfoCard from './InfoCard'
import Quote from './Quote'

const TestimonialCard = ({ props }) => {

  return (
    <div
      className="bg-testimonial-gradient rounded-2xl overflow-hidden max-w-5xl"
    >
      <div className="flex flex-col  gap-4 items-center md:flex-row">
        <div className="flex flex-col gap-8 p-6 md:p-12">
          <Quote className="w-14 text-gray-200/30"/> 
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <H3 className="md:!text-2xl font-semibold text-white">
                {props?.testimonialheading}
              </H3>
            </div>
            <div>
              <Paragraph className="text-white text-base md:text-lg font-normal  text-ellipsis md:line-clamp-4">
                {props.testimonialDescription}
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
            <InfoCard
              mainText={props.authorname}
              subTextOne={props.authordesignation}
              subTextTwo={`${props.numberOflocation} Locations`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
