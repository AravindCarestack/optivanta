import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'membershipHeading',
      title: 'Membership Heading',
      type: 'string',
    }),

    defineField({
      name: 'membershipDescription',
      title: 'Membership Points',
      type: 'blockContent',
    }),

    defineField({
      name: 'membershipIcon',
      title: 'Membership Icon',
      type: 'image',
    }),
    defineField({
      name: 'isFutureFeature',
      title: 'Is Future Feature',
      type: 'boolean',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),

  ],
})
