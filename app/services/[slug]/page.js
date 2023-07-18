"use client"

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ServiceDetails({ params }) {
  const { slug } = params;
  const [service, setService] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const query = `*[_type == "services" && slug.current == '${slug}'][0]`;
        const fetchedProject = await client.fetch(query);
        setService(fetchedProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    fetchProject();
  }, [slug]);

  if (!service) {
    return <div>Loading...</div>;
  }



  return (
   
      <div key={service._id} className="ml-8 mr-4">
          <h1 className="text-gray-700 mt-5 font-bold text-4xl">{service.name}</h1>

          <h5 className="text-gray-700 mt-5">{service?.location}</h5>

          <div className="text-lg text-gray-700 mt-5 mb-8 w-3/4 leading-8">
            <PortableText value={service.details} />
          </div>
        
      </div>
    
  );
}
