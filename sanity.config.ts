/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, defineField } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { documentInternationalization } from '@sanity/document-internationalization'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schema } from '~/schemas'
import { media } from 'sanity-plugin-media'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
    requiresSlug: ['post'],
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,

  //edit schemas in './src/schemas'
  schema,
  form: {
    components: {
      input: (props: any) => {
        if (Array.isArray(props.groups) && props.groups.length > 0) {
          if (props.groups[0].name === 'all-fields') {
            props.groups.shift()
          }
        }
        return props.renderDefault(props)
      },
    },
  },
  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext
      if (type === 'structure' && schemaType == 'siteSettings') {
        return []
      }
      return prev
    },
  },
  plugins: [
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'US English' },
        { id: 'en-GB', title: 'UK English' },
      ],
      schemaTypes: [
        'homeSettings',
        'siteSettings',
        'feature',
        'layout',
        'featureCategory',
        'integration',
        'testimonial',
        // 'person',
        // 'legal',
        // 'partner',
        // 'comparisonValue',
      ],
      weakReferences: true,
      languageField: 'language',
      metadataFields: [defineField({ name: 'slug', type: 'slug' })],
      allowCreateMetaDoc: true,
    }),
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          // Default form view
          S.view.form(),
          // Preview
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      },
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Home Page')
              .child(
                S.document()
                  .schemaType('homeSettings')
                  .documentId('homeSettings'),
              ),

            S.listItem()
              .title('Site Configuration')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
            S.listItem()
              .title('Comparison Table')
              .child(
                S.document()
                  .schemaType('comparisonTable')
                  .documentId('comparisonTable'),
              ),
            S.documentTypeListItem('testimonial').title('Testimonial'),
            S.documentTypeListItem('featureCategory').title('FeatureCategory'),
            S.documentTypeListItem('feature').title('Feature'),
            S.documentTypeListItem('integration').title('Integration'),
            S.documentTypeListItem('benefit').title('Benefit'),

          ]),
    }),

    media({
      creditLine: {
        enabled: true,
        // boolean - enables an optional "Credit Line" field in the plugin.
        // Used to store credits e.g. photographer, licence information
        excludeSources: ['unsplash'],
        // string | string[] - when used with 3rd party asset sources, you may
        // wish to prevent users overwriting the creditLine based on the `source.name`
      },
      maximumUploadSize: 10000000,
      // number - maximum file size (in bytes) that can be uploaded through the plugin interface
    }),
    previewUrl({
      base: '/api/draft',
      requiresSlug: ['post'],
      urlSecretId: previewSecretId,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
