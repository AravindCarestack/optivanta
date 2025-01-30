import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import AboutUsSection from './AboutUsSection'
import Section from './structure/Section'
import Container from './structure/Container'
import { cn } from '~/lib/utils'
import GridPattern from './ui/grid-pattern'

const Content = (props: any) => {
  const {
    homeSettings,
    siteSettings,
    founderDetails,
    comparisonTableData,
    comparisonLegend,
  } = props

  if (!homeSettings && !siteSettings) return <></>

  const cta = {
    url: siteSettings.demoBtnUrl,
    name: homeSettings.bookBtnContent,
  }

  const heroSectionData = {
    strip: homeSettings.heroStrip,
    header: {
      static: homeSettings.heroTitleStatic,
      dynamic: homeSettings.heroTitleStaticDynamic,
    },
    description: homeSettings.heroDescription,
    cta,
  }

  const featureSectionData = {
    strip: 'Services',
    header: homeSettings.featureHeader,
    featuresByCategory: homeSettings.selectedFeatures,
    cta,
  }


  const benefitSectionData = {
    strip: 'BENEFITS',
    header: homeSettings.benefitHeader,
    benefits: homeSettings.selectedBenefits,
    cta: 'Become A Member',
  }

  const membershipData = {
    strip: 'MEMBERSHIP',
    header: homeSettings.testimonialHeader,
    testimonials: homeSettings.selectedTestimonials,
    customers: homeSettings.selectedPartners,
    cta,
    memberShip: homeSettings.selectedTestimonials,
  }

  const aboutSectionData = {
    heading: 'About Us',
    description: homeSettings.aboutDescription,
    image: homeSettings?.aboutSectionImageUrl,
    founders: founderDetails,
  }

  const comparisonSectionData = {
    strip: 'COMPARISON',
    header: 'How OSDental Compares',
    columnDimensionName: 'Features',
    table: comparisonTableData,
    comparisonLegend,
    cta,
  }

  return (
    <div className="flex flex-col">
      <Section
        id="hero-section"
        className="relative hero-section bg-hero-gradient bg-cover"
      >
        <GridPattern
          key={Math.random()}
          width={40}
          height={40}
          x={-1}
          y={-1}
          stroke="currentColor"
          className={cn(
            '[mask-image:linear-gradient(to_top_left,yellow,transparent,transparent)]',
            'absolute inset-0 w-full h-full',
          )}
        />

        <Container className="relative pt-20 pb-24 md:pb-44">
          <HeroSection data={heroSectionData} />
        </Container>
      </Section>

      <Section
        id="service-section"
        className="features-section pb-16 pt-16 md:pt-48 md:pb-24 z-10 !bg-gray-50"
      >
        <Container className="flex flex-col">
          <FeatureSection data={featureSectionData} />
        </Container>
      </Section>
      <Section
        id="benefits-section"
        className="py-16 md:py-24 bg-black-gradient"
      >
        <Container className="flex flex-col items-center gap-16">
          {benefitSectionData && <BenefitsSection data={benefitSectionData} />}
        </Container>
      </Section>
      <Section
        id="membership-section"
        className="relative py-16 md:py-24 bg-[#FFC72C] text-[#694D00]  "
      >
        <GridPattern
          key={Math.random() + 98}
          width={40}
          height={40}
          x={10}
          y={10}
          stroke="currentColor"
          className={cn(
            '[mask-image:linear-gradient(to_top_right,yellow,transparent,transparent)]',
            'absolute inset-0 w-full h-full',
          )}
        />

        <Container className="relative flex flex-col items-center gap-16">
          {membershipData && <TestimonialSection data={membershipData} />}
        </Container>
      </Section>

      <Section
        id="about-us-section"
        className="py-16 md:py-24 bg-contain bg-no-repeat bg-right"
      >
        <Container className="flex flex-col items-center gap-10 w-full ">
          {aboutSectionData && <AboutUsSection data={aboutSectionData} />}
        </Container>
      </Section>
    </div>
  )
}

export default Content
