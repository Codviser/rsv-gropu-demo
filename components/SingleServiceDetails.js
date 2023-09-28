import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function ServiceDetails({ service }) {
  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div key={service._id} className="ml-8 mr-4 mb-5">
      <h1 className="text-gray-700 mt-5 font-bold text-4xl">{service.name}</h1>

      <h5 className="text-gray-700 mt-5">{service?.location}</h5>

      <div className="text-lg text-gray-700 mt-5 mb-8  leading-8">
        <PortableText value={service.details} />
      </div>

      <div>
        <h3 className="justify-center md:justify-start text-cyan-900 m-5 text-3xl font-extrabold">
          Our Work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.images?.map((image) => (
            <div key={image._key} className="rounded-xl overflow-hidden">
              <div className="rounded-xl overflow-hidden w-[450px] h-[300px] object-cover relative">
                <Image
                  src={urlForImage(image).url()}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
