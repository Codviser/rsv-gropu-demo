"use client"


import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function AboutUsDetails({ aboutUs }) {
  if (!aboutUs) {
    return <div>Loading...</div>;
  }


  const handleDownload = () => {
    // Replace "/profile.pdf" with the actual URL of the PDF file you want to download
    const downloadUrl = "/profile.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = "Company_Profile.pdf"; // Specify the desired name for the downloaded file
    link.click();
  };

  return (
    <>
      {aboutUs.map((about) => (
        <div
          key={about._id}
          className="container ml-5 mb-5 px-4 mx-auto mt-[100px]  md:space-y-0 md:flex-row text-gray-700"
        >
          <h1 className="mb-12 max-w-md text-4xl font-bold text-center md:text-left text-blue-700">
            About Us
          </h1>
          <div className="rounded-xl overflow-hidden">
            <img
              src={urlForImage(about.image)}
              alt={about.name} // Use `about.name` instead of `aboutUs.name`
              className="rounded-xl overflow-hidden w-[60vw] h-[80vh] object-cover mb-5"
            />
          </div>

          <div className="w-[70vw] mt-20 leading-8">
            <PortableText value={about.details} />
          </div>

          <div className="flex flex-col space-y-12 md:w-1/2"></div>
        </div>
      ))}
      <div className="mt-10 mb-20">
      <button
          type="button"
          className="p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 font-semibold"
          onClick={handleDownload}
        >
          Download Company Profile
        </button>
      </div>
    </>
  );
}
