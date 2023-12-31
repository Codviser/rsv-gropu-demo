"use client";

import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function SingleProjectDetails({ project }) {
  if (!project) {
    return <div>Loading...</div>;
  }

  const images = project.image.map((item) => urlForImage(item).url());

  return (
    <div className=" items-center">
      <div  className="rounded-xl">
        <div className="p-2 flex flex-col">
          <div className="rounded-xl overflow-hidden">
            <Carousel
              className="my-carousel "
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              stopOnHover={true}
              interval={5000}
              showThumbs={false}
            >
              {images.map((url, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden w-[500px] h-[300px] object-cover relative md:h-[60vh] md:w-full lg:h-[85vh]"
                >
                  <Image
                  
                    fill
                    src={url}
                    alt={`Image ${i}`}
                    className="object-cover"
                  />
                </div>
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
