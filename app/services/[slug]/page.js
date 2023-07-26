"use client"


import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';


export default async function ServiceDetails({ params }) {
  const { slug } = params;
const service = await getServices(slug)



  if (!service) {
    return <div>Loading...</div>;
  }



  return (
   
      <div key={service._id} className="ml-8 mr-4">
          <h1 className="text-gray-700 mt-5 font-bold text-4xl">{service.name}</h1>

          <h5 className="text-gray-700 mt-5">{service?.location}</h5>

          <div className="text-lg text-gray-700 mt-5 mb-8  leading-8">
            <PortableText value={service.details} />
          </div>

          <div>
            <h3 className='justify-center md:justify-start text-cyan-900 m-5 text-3xl font-extrabold'>
              Our Work
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
  {service.images?.map((image) => (
    <div key={image._key} className="rounded-xl overflow-hidden">
      <img
        src={urlForImage(image)}
        alt={service.name} // Replace 'service.name' with the appropriate alt text for each image
        className="rounded-xl overflow-hidden w-[450px] h-[300px] object-cover mb-5"
      />
    </div>
  ))}
</div>

          </div>
        
      </div>
    
  );
}


async function getServices(slug) {
  const query = `*[_type == "services" && slug.current == '${slug}'][0]`;
  const service = await client.fetch(query);
  return service;
  }