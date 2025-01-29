import Link from 'next/link'
import Container from '../structure/Container'
import Section from '../structure/Section'
import CTAButton from './CTAbutton'
import H2 from '../typography/H2'

const TopSection = ({ data, ctaName }) => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-14 flex">
      <div className="w-full gap-8 inline-flex flex-col ">
        <H2 className="!text-white ">Lower Expenses. Maximize Efficiency.</H2>
        <div className="flex justify-center">
          <CTAButton url={data} className="px-6 py-3 text-black bg-yellow-gradient" name={ctaName} />
        </div>
      </div>
      <div className="self-stretch h-[0px] border border-white/20"></div>
    </div>
  )
}

const BottomSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between gap-6">
      <div className="text-white/50 text-center">
        © 2023 Optivanta. All Rights Reserved.
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <Link
          className=" text-white/50 hover:text-white/90"
          href={'/'}
        >
          Terms of use
        </Link>
        <Link
          className=" text-white/50 hover:text-white/90"
          href={'/'}
        >
          Privacy policy
        </Link>
        <Link
          className=" text-white/50 hover:text-white/90"
          href={'/'}
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

const Footer = (props) => {
  const footerContent = {
    cta: {
      name: props.homeSettings.bookBtnContent,
      url: props.siteSettings.demoBtnUrl,
    },
  }
  return (
    <Section id="footer" className="bg-black-gradient">
      <Container className="max-w-auto flex justify-center py-4 text-white ">
        <div className="w-full pt-12 md:pt-24 pb-8  flex-col justify-center gap-12 inline-flex ">
          <TopSection
            ctaName={footerContent.cta.name}
            data={footerContent.cta.url}
          />
          <BottomSection />
        </div>
      </Container>
    </Section>
  )
}

export default Footer
