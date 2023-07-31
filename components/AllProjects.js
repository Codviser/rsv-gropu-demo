"use client"


import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

export default function AllProjects({projects}) {

 

  return (
    <div className="ml-10 text-gray-700">
    <h1  className="max-w-md text-4xl font-bold text-center md:text-left text-blue-700 mb-10 mt-20">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
      projects.map(project =>(
        <Link href={`/project-details/${project.slug.current}`}>
        <div key={project._id} className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
            <img
          src={urlForImage(project.image[0])}
          alt={project.name}
       className="rounded-xl overflow-hidden w-[450px] h-[300px] object-cover mb-5"
        />
            </div>
            <h3>{project.name}</h3>
            <h5>{project?.location}</h5>
          </div>
        </div>
        </Link>
      ))
      }
        
      
      </div>
     {/* <div className="mt-10 mb-20">
     <Link href='/' className=' p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700  font-semibold' > View All Projects</Link>
     </div> */}
    </div>
  );
}

async function getProjects() {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);
  return projects;
  }