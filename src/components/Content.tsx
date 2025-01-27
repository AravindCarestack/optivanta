import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSection'
import ComparisonSection from './ComparisonSection'
import CustomerSection from './CustomerSection'
import Section from './structure/Section'
import Container from './structure/Container'

/*
  Idea is to use adaptors to connect sanity data and UI components.
*/
const Content = (props: any) => {
  const {
    homeSettings,
    siteSettings,
    founderDetails,
    comparisonTableData,
    allPMS,
    comparisonLegend
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
    strip: 'FEATURES',
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
    cta,
  }

  const testimonialSectionData = {
    strip: 'testimonials',
    header: homeSettings.testimonialHeader,
    testimonials: homeSettings.selectedTestimonials,
    customers: homeSettings.selectedPartners,
    cta,
  }

  const customerSectionData = {
    strip: 'Trusted by multi-location DSOs across the US',
    customers: homeSettings.selectedPartners,
  }

  const aboutSectionData = {
    heading: 'About Us',
    description: siteSettings.ogDescription,
    image: '/about-us.png',
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
      <Section id="benefits-section" className="py-16 md:py-24 bg-gray-50">
        <Container className="flex flex-col items-center gap-16">
          {
           benefitSectionData && <BenefitsSection data={benefitSectionData} />
          }
        </Container>
      </Section>
      <Section id="testimonials-section" className="py-16 md:py-24">
        <Container className="flex flex-col items-center gap-16 ">
         {
          testimonialSectionData &&  <TestimonialSection data={testimonialSectionData} />
         }
        </Container>
      </Section>
      <Section id="comparison-section" className="py-16 md:py-24 bg-gray-50">
      </Section>
      <Section
        id="about-us-section"
        className="py-16 md:py-24 bg-[#8639f8] bg-grid-pattern bg-contain bg-no-repeat bg-right"
      >
        <Container className="flex flex-col items-center gap-10 w-full ">
          {aboutSectionData && <AboutUsSection data={aboutSectionData} />}
        </Container>
      </Section>
    </div>
  )
}

export default Content
