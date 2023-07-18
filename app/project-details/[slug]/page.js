"use client"

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ProjectDetails({ params }) {
  const { slug } = params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
        const fetchedProject = await client.fetch(query);
        setProject(fetchedProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    fetchProject();
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const images = project.image.map((item) => urlForImage(item).url());

  return (
    <div className="ml-20">
      <div key={project._id} className="rounded-xl">
        <div className="p-2 flex flex-col">
          <div className="rounded-xl overflow-hidden">
            <Carousel
            className="my-carousel"
             autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={true} interval={5000} showThumbs={false}>
              {images.map((url, i) => (
                <img
                className="overflow-hidden w-full h-[90vh] object-cover"
                key={i} src={url} alt={`Image ${i}`
             
              } />
              ))}
            </Carousel>
          </div>

          <h3 className="text-gray-700 mt-5 font-bold">{project.name}</h3>
          <h5 className="text-gray-700 mt-5">{project.location}</h5>

          <div className="text-lg text-gray-700 mt-5 sm:w-full"> 
            <PortableText value={project.details} />
          </div>
        </div>
      </div>
    </div>
  );
}
