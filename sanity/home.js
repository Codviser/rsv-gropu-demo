export default {
    name: 'home',
    title: 'Home',
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
     
  
     
    
    ],
  }
  
  