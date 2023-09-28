// "use client"

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function Projects({ projects }) {
  return (
    <div className=" text-gray-700">
      <h1 className="max-w-md text-4xl font-bold text-center md:text-left text-cyan-900 mb-10 mt-20 ml-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/project-details/${project.slug.current}`} key={project._id}>
            <div  className="rounded-xl mx-4">
              <div className="p-2 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <div className="rounded-xl overflow-hidden w-[450px] h-[300px] object-contain relative">
                    <Image
                      src={urlForImage(project.image[0]).url()}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold">{project.name}</h3>
                <h5>{project?.location}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 mb-20 ml-4">
        <Link
          href="/allProjects"
          className=" p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700  font-semibold"
        >
          {" "}
          View All Projects
        </Link>
      </div>
    </div>
  );
}
