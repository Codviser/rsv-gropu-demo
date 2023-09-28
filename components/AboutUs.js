import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function Services({ aboutUs }) {
  return (
    <>
      {aboutUs.map((service) => (
        <div key={service._id} className="rounded-xl">
          <div className="  container gap-10 flex flex-col px-4 mx-auto mt-[100px]  md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <div className="rounded-xl overflow-hidden w-[500px] h-[300px] object-cover relative md:h-[350px]">
                  <Image
                    src={urlForImage(service.image).url()}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1 md:w-1/2">
              <h1 className="mb-8 max-w-md text-4xl font-bold text-center md:text-left text-cyan-900">
                About Us
              </h1>
              <h3 className="max-w-m text-2xl font-bold text-center md:text-left text-gray-700">
                Who we are
              </h3>
              <div className=" text-center text-gray-700 md:text-left leading-8">
                {service.description}
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/about-us"
                  className=" p-2 px-4 pt-2 text-white  bg-blue-900 rounded-full mt-10
baseline hover:bg-red-500"
                >
                  {" "}
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
