"use client"

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
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

  return (
    <>
      <section>
        <div
          key={aboutUs._id}
          className="container ml-5 mb-5 px-4 mx-auto mt-[100px]  md:space-y-0 md:flex-row text-gray-700"
        >
          
            <h1 className="mb-12 max-w-md text-4xl font-bold text-center md:text-left text-blue-700">
              About Us
            </h1>
            <div className="rounded-xl overflow-hidden">
              <img
                src={urlForImage(aboutUs.image)}
                alt={aboutUs.name}
                className="rounded-xl overflow-hidden w-[60vw] h-[80vh] object-cover mb-5"
              />
            </div>
            
            <div
          className="w-[70vw] mt-20 leading-8"
            >
              <PortableText value={aboutUs.details} />
            </div>
          

          <div
            className="flex flex-col space-y-12 md:w-1/2"
            
          >
          
          </div>
        </div>
        <div className="mt-10 mb-20">
     <button type="button" className=' p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700  font-semibold'>
     <Link 
     download
     href='/profile.pdf'
     > Company Profile</Link>
     </button>
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
