"use client"

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText, toPlainText } from "@portabletext/react";
import Link from "next/link";

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const result = await getAbout();
        setAboutUs(result[0]); // Assuming there's only one "about" document
      } catch (error) {
        console.error("Error fetching about:", error);
      }
    }

    fetchAbout();
  }, []);

  if (!aboutUs) {
    return <div>Loading...</div>;
  }
  const plainText = toPlainText(<PortableText value={aboutUs.details} />)
  return (
    <>
      <section>
        <div
          key={aboutUs._id}
          className=" ml-5 container gap-10 flex flex-col px-4 mx-auto mt-[100px]  md:space-y-0 md:flex-row"
        >
         

          <div
            className="flex flex-col space-y-12 md:w-1/2"
            
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={urlForImage(aboutUs.image)}
                alt={aboutUs.name}
                className="rounded-xl overflow-hidden h-[420px] object-cover mb-5"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1 md:w-1/2">
            <h1 className="mb-12 max-w-md text-4xl font-bold text-center md:text-left text-blue-700">
              About Us
            </h1>
            <h3 className="max-w-m text-2xl font-bold text-center md:text-left text-gray-700">
              Who we are
            </h3>
            <div 
          className=" text-center text-gray-700 md:text-left leading-8"
            >
              {aboutUs.description}
            </div>
            <div className="flex justify-center md:justify-start">
<Link href='/about-us' className=' p-2 px-4 pt-2 text-white  bg-blue-900 rounded-full mt-10
baseline hover:bg-red-500'> Learn More</Link>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

async function getAbout() {
  const query = '*[_type == "about"]';
  const about = await client.fetch(query);
  return about;
}
