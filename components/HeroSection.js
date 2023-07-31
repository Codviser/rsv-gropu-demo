"use client"


import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Link from "next/link";



export default  function HeroSection({home}) {


return (
<>
<section>
{
    home.map((home) =>(
        <div className="container flex flex-col md:flex-row gap-4
items-center  mx-auto mt-4 space-y-0 md:space-y-0">
<div className="flex flex-col mb-32  md:w-1/2">
<h1 className="max-w-m text-3xl font-bold text-center md:text-4xl md:text-left text-gray-700">
{home.name}
</h1>
<div className="max-w-sw text-center text-gray-700 md:text-left">
<PortableText value={home.details} />
</div>

<div className="flex justify-center md:justify-start mt-10">
<Link href='/about-us' className=' p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Learn More</Link>
</div>
</div>

<div className="md:w-1/2 object-cover ">
<img
alt="home pic"
src={urlForImage(home.image)}

className="rounded-xl"
/>
</div>

</div>
    ))
}

</section>  
</>
)
}

