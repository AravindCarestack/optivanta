import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import AboutUsSection from './AboutUsSection'
import Section from './structure/Section'
import Container from './structure/Container'

const Content = (props: any) => {
  const {
    homeSettings,
    siteSettings,
    founderDetails,
    comparisonTableData,
    allPMS,
    comparisonLegend,
    memberShip,
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

  const integrationsSectionData = {
    strip: 'Integrations',
    header: homeSettings.integrationHeader,
    integrations: homeSettings.selectedIntegrations,
    pms: allPMS,
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
    memberShip,
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
        className="hero-section bg-hero-gradient bg-cover"
      >
        <Container className="relative pt-20 pb-24 md:pb-44 ">
          <HeroSection data={heroSectionData} />
        </Container>
      </Section>
      <Section
        id="features-section"
        className="features-section pb-16 pt-24 md:pt-48 md:pb-24 z-10 !bg-gray-50"
      >
        <Container className="flex flex-col">
          <FeatureSection data={featureSectionData} />
        </Container>
      </Section>
      <Section id="integrations-section" className="py-16 md:py-24">
        {/* <Container className="flex flex-col items-center gap-16">
          <IntegrationSection data={integrationsSectionData} />
        </Container> */}
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
        id="testimonials-section"
        className="py-16 md:py-24 bg-yellow-gradient "
      >
        <Container className="flex flex-col items-center gap-16 bg-grid-pattern">
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
