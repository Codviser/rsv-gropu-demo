export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
  
  ],
}

