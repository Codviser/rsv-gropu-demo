"use client"


import Image from "next/image";
import Link from "next/link";



export default async function HeroSection() {


return (
<>
<section>
<div className="container flex flex-col md:flex-row
items-center px-6 mx-auto mt-4 space-y-0 md:space-y-0">
<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-cyan-900">
Welcome to RSV Engineering Group LTD
</h1>
<p className="max-w-sw text-center text-darkGrayishBlue md:text-left">
Material Testing, Civil Engineers, Construction and Geotechnical
Engineering Services ‘‘What do buildings and great companies have
in common? It’s the synergy from all individual parts that make them
up coming together to create something much bigger and greater
than themselves”
</p>

<div className="flex justify-center md:justify-start">
<Link href='/about-us' className=' p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Learn More</Link>
</div>
</div>

<div className="md:w-1/2 object-cover">
<Image
alt="home pic"
src='/main.jpg'
width={700}
height={500}
// objectFit="cover"
className="rounded-xl"
/>
</div>

</div>



{/* <ServicesOffered /> */}

</section>  
</>
)
}

// async function getServices() {
//     const query = '*[_type == "services"]' ;
//     const services = await client.fetch(query);
//     return services;
//     }