export default {
    name: 'about',
    title: 'About',
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
    
    ],
  }
  
  