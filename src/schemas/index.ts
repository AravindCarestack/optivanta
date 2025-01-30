import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import layout from './layout'
import Features from './Features'
import FeatureCategories from './FeatureCategories'
import Integrations from './Integrations'
import SiteSettings from './SiteSettings'
import Testimonials from './Testimonials'
import Benefits from './Benefits'
import HomeSettings from './HomeSettings'
import multipleString from './multipleString'
import customBlockContent from './customBlockContent.js'


export const schemaTypes = [
  layout,
  Features,
  FeatureCategories,
  Integrations,
  SiteSettings,
  Testimonials,
  Benefits,
  HomeSettings,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    customBlockContent,
    layout,
    Features,
    FeatureCategories,
    Integrations,
    SiteSettings,
    Testimonials,
    Benefits,
    HomeSettings,
    multipleString,
  ],
}
