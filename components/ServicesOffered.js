

import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';


export default function Services({services}) {



  return (
    <>
      <h2 className="justify-center md:justify-start text-cyan-900 m-5 text-3xl font-extrabold">Our Services</h2>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service._id} className="rounded-xl shadow-l">
              <div className="p-8 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <div  className="rounded-xl overflow-hidden w-[500px] h-[300px] object-cover relative">
                  <Image
                    src={urlForImage(service.image).url()}
                    alt={service.name}
                   layout='fill'
                   objectFit='cover'
                  />
                  </div>
                </div>
                <h5 className="text-1xl md:text-2xl font-bold text-cyan-900 mt-3">{service.name}</h5>
                <p className="text-gray-700 text-lg mt-3">
                 {service.description.slice(0, 100)} ....
                </p>
                <Link href={`/services/${service.slug.current}`} className="p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 mt-3 font-bold">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


