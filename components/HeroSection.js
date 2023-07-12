import Image from "next/image"
import Link from "next/link"



export default function Navbar() {
    return (
<>
  <section>
    <div className="container flex flex-col md:flex-row
    items-center px-6 mx-auto mt-8 space-y-0 md:space-y-0">
<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-blue-700">
Welcome to RSV Group
</h1>
<p className="max-w-sw text-center text-darkGrayishBlue md:text-left">
Material Testing, Civil Engineers, Construction and Geotechnical 
Engineering Services ‘‘What do buildings and great companies have 
in common? It’s the synergy from all individual parts that make them
up coming together to create something much bigger and greater 
than themselves”
</p>

<div className="flex justify-center md:justify-start">
<Link href='/' className=' p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Learn More</Link>
</div>
</div>

<div className="md:w-1/2">
<Image 
src='/excavation.jpg'
width={700}
height={600}
// objectFit="cover"

/>
</div>

    </div>

    <h2 className="justify-center md:justify-start text-blue-700 m-5 text-3xl font-extrabold">
    Our Services
</h2>

<div className="flex items-center justify-center min-h-screen container mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-10">
<div className="rounded-xl shadow-lg">
<div className="p-8 flex flex-col">
<div className="rounded-xl overflow-hidden">
    <Image
    src='/lab.jpg'
    width={450}
    height={300}
    />
</div>
<h5 className="text-2xl md:text-3xl font-medium mt-3">Laboratory Testing</h5>
<p className="text-slate-500 text-lg mt-3">
RSV Civil Engineering Materials Laboratory operates a 
fully- fledged laboratory (i.e.,RSV Materials Laboratory) 
situated on Plot 1038, UCB Zone, Bukoto within Kampala City.
The Laboratory offers geotechnical investigations, 
comprehensive Materials Testing of soils..
</p>
<Link href='/' className=' p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 mt-3 font-semibold'> Learn More</Link>
</div>

</div>

<div className="rounded-xl shadow-lg">
<div className="p-8 flex flex-col">
<div className="rounded-xl overflow-hidden">
    <Image
    src='/investigate.jpg'
    width={450}
    height={300}
    />
</div>
<h5 className="text-2xl md:text-3xl font-medium mt-3">Geotechnical Investigation</h5>
<p className="text-slate-500 text-lg mt-3">
Our company offers geotechnical investigation services to our clients for 
the proposed construction sites such as, Supervision of drilling works 
including logging of strata, Geotechnical Report writing (factual and interpretative), Borehole drilling

</p>
<Link href='/' className=' p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 mt-3 font-semibold'> Learn More</Link>
</div>

</div>

<div className="rounded-xl shadow-lg">
<div className="p-8 flex flex-col">
<div className="rounded-xl overflow-hidden">
    <Image
    src='/survey.jpg'
    width={450}
    height={300}
    />
</div>
<h5 className="text-2xl md:text-3xl font-medium mt-3">Geotechnical Engineering</h5>
<p className="text-slate-500 text-lg mt-3">
Geotechnical Engineering services offered by our company are divided into 
Five Divisions, mainly; Geotechnical investigations, Geotechnical Designs, 
Geophysical Surveys, Geotechnical Construction and Laboratory Testing
</p>
<Link href='/' className=' p-2 px-4 pt-2 text-white bg-cyan-900 rounded-xl text-center hover:bg-blue-700 mt-3 font-semibold'> Learn More</Link>
</div>

</div>
</div>
</div>

    </section>  
</>
    )
}