import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const LegalSlugsQuery = groq`
*[_type == "legal" && defined(slug.current)][].slug.current
`

/*########################### QUERIES ##########################*/
export const metaDataQuery_ = groq` 
*[_type == "siteSettings"] | order(_createdAt desc)[0]{
  demoBtnUrl,
  loginBtnUrl,
  ogTitle,
  "ogFavicon":ogFavicon.asset->url,
  "ogImage" :ogImage.asset->url,
  ogUrl,
  ogDescription,

}`

export const integrationListQuery = groq`*[_type == "integration" ]{
  "image": integrationProductImage.asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      _createdAt,
      _id
    
   
  }`
export const featureSectionQuery = groq`
    *[_type == "featureCategory" && !(_id in path('drafts.**'))] {
      ..., 
      "imageUrl": categoryImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      "features": features[]->
    }
  `
export const memberShipQuery = groq`*[_type == "testimonial"]{...,"icon":membershipIcon.asset->url}`
export const heroSectionQuery_ = groq`
  *[_type == "siteSettings"][0]{
    homeSettings[0],
    "about":ogDescription
  }
`
export const AboutQuery = groq`*[_type == "siteSettings"]{"about":ogDescription
}`
export const heroSection = groq`
*[_type == "homeSettings"][0]{
  "heroDescription": heroDescription,
  "ctaName": bookBtnContent,
  "heroStrip": heroStrip,
  "heroTitleStatic": heroTitleStatic,
  "heroTitleDynamic": heroTitleStaticDynamic,
  "aboutSectionImage": aboutSectionImage.asset->url,
  "integrationHeader": integrationHeader,
  "benefitHeader": benefitHeader,
  "testimonialHeader": testimonialHeader,
  "featureHeader": featureHeader,
  "integrationList": {
    "selectedIntegrationList": integration[]->{
      "image": integrationProductImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      _createdAt,
      _id
    }
  },
  "features": {
    "selectedFeatures": selectedfeatures[]->{
      ...,
      "image": categoryImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      "features": features[]->
    }
  },
  "testimonial": {
    "selectedTestimonial": selectedTestimonial[]->{
      ...,
      "AuthorImage": authorimage.asset->url
    }
  },
  "benifits": {
    selectedBenefits[]->{
      "benefitHeading":benefitHeading,
      "benifitSectionImage": benefitImageSection.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "benefitPoints": benefitPoints
    }
  }
}
`

export const benifitQuery = groq` *[_type == "benefit"]{
  'benefitHeading':benefitHeading,
   'benifitSectionImage':benefitImageSection.asset->{
       _id,
       url,
       metadata {
         dimensions {
           width,
           height,
           aspectRatio
         }
       }
     },
'benefitPoints':benefitPoints
    
}`

export const SeoQuery = groq`*[_type == "siteSettings"]
| order(_createdAt desc)[0].seoSettings
`

/*########################### END  ##########################*/

export async function metaDataQuery(client: SanityClient): Promise<any> {
  return await client.fetch(metaDataQuery_)
}

export async function fetchIntegrationList(client: SanityClient): Promise<any> {
  return await client.fetch(integrationListQuery)
}

export async function featureSection(client: SanityClient): Promise<any> {
  return await client.fetch(featureSectionQuery)
}

export async function fetchMembership(client: SanityClient): Promise<any> {
  return await client.fetch(memberShipQuery)
}

export async function heroSectionQuery(
  client: SanityClient,
): Promise<HomeSettings | null> {
  return await client.fetch(heroSectionQuery_)
}

export async function fetchAboutSection(client: SanityClient): Promise<any> {
  return await client.fetch(AboutQuery)
}

export async function fetchHeroSectionData(client: SanityClient): Promise<any> {
  return await client.fetch(heroSection)
}
export async function fetchBenefitSectionData(
  client: SanityClient,
): Promise<any> {
  return await client.fetch(benifitQuery)
}

export async function getLegalInformation(
  client: SanityClient,
  informationType: string,
): Promise<LegalInformation> {
  const information = {
    businessAgreement: 'businessAgreement',
    privacyPolicy: 'privacyPolicy',
    termsAndCondition: 'termsAndCondition',
  }
  const informationTypeToFetch = information[informationType]
  const query = groq` *[_type == "legal"]{
   ${informationTypeToFetch}
 }`
  return await client.fetch(query)
}

export async function fetchSeoSettings(client: SanityClient): Promise<any> {
  return await client.fetch(SeoQuery)
}

export async function fetchTermsAndCondition(
  client: SanityClient,
  docType: string,
): Promise<any> {
  const query = groq`*[_type == "legal" && slug.current == $docType][0] {
    termsAndCondition,title
  }`

  return await client.fetch(query, { docType })
}

export const getALLHomeSettings = () => groq`*[_type == "homeSettings"]{
  ...,
 "selectedIntegrations": integration[]->{
      "image": integrationProductImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      _createdAt,
      _id
    },

  "aboutSectionImageUrl": aboutSectionImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
  "selectedFeatures": selectedfeatures[]->{
      ...,
      "categoryImage": categoryImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      "features": features[]->
    },
  "selectedTestimonials": selectedTestimonial[]->{
      ...,
      "icon": membershipIcon.asset->url
    },
  "selectedPartners": selectedPartner[]->{
      partnerName,
      "image": partnerLogo.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      }
    },
  "selectedBenefits": selectedBenefits[]->{
      "benefitHeading":benefitHeading,
      "benifitSectionImage": benefitImageSection.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "benefitPoints": benefitPoints
    }
}[0]`

export const getALLSiteSettings = () =>
  groq`*[_type == "siteSettings"] | order(_createdAt desc)[0]`

export const getComparisonTableData = () =>
  groq`*[_type == "comparisonTable"] {
    ..., "rowCategories": rowCategories[] { 
      ..., "rows": rows[] {
        ..., "comparisons": comparisons[] -> {
          ..., "icon": icon.asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height,
                aspectRatio
              }
            }
          }
        }
      }
    }
  } | order(_createdAt desc)[0]`

export const getAllComparisonValues = () =>
  groq`*[_type == "comparisonValue"]{
    ..., "icon": icon.asset-> {
              _id,
              url,
              metadata {
                dimensions {
                  width,
                  height,
                  aspectRatio
             }
         }
      }
  }`


/*####################################### INTERFACES    ###########################*/
export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface HomeSettings {
  buttonText?: string
  heroSectionHeader?: string
  heroDescription?: string
  heroSubHeading?: string
}

export interface LegalInformation {
  businessAgreement: string
  privacyPolicy: string
  termsAndCondition: string
}
