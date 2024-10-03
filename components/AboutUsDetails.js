"use client";

import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function AboutUsDetails({ aboutUs }) {
  if (!aboutUs) {
    return <div>Loading...</div>;
  }

  // const handleDownload = () => {
  //   // Replace "/profile.pdf" with the actual URL of the PDF file you want to download
  //   const downloadUrl = "/rsv-profile.pdf";
  //   const link = document.createElement("a");
  //   link.href = downloadUrl;
  //   link.target = "_blank";
  //   link.download = "Company_Profile.pdf"; // Specify the desired name for the downloaded file
  //   link.click();
  // };

  return (
    <>
      {aboutUs.map((about) => (
        <div
          key={about._id}
          className="container  mb-5 px-2 mx-auto mt-[50px]  md:space-y-0 md:flex-row text-gray-700"
        >
          <h1 className="mb-8 max-w-md text-4xl font-bold text-center md:text-left text-blue-700">
            About Us
          </h1>
          <div className="rounded-xl overflow-hidden">
            <div className="rounded-xl overflow-hidden w-full h-[300px] object-cover  relative md:h-[500px]">
              <Image
                src={urlForImage(about.image).url()}
                alt={about.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-[70vw] mt-10 leading-8">
            <PortableText value={about.details} />
          </div>

          <div className="flex flex-col space-y-12 md:w-1/2"></div>
        </div>
      ))}
      <div className="mt-10 mb-20">
        {/* <button
          type="button"
          className="p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 font-semibold ml-5"
          onClick={handleDownload}
        >
          Download Company Profile
        </button> */}
      </div>
    </>
  );
}
