import Image from "next/image";

export default function AboutUs () {
    return (
        <>
<section>
    <div className="container flex flex-col px-4 mx-auto mt-[100px]
    space-y-12 md:space-y-0 md:flex-row">
<div className="flex flex-col space-y-12 md:w-1/2">
<h2 className="max-w-md text-4xl font-bold text-center md:text-left text-blue-700">
About Us
</h2>
<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
We are a  multi disciplinary firm that provides professional 
technical services by offering the most Efficient Civil 
Engineering Materials 
Laboratory Testing, Geotechnical Engineering services and 
Geophysical Investigation to optimize resources on the side 
of our clients
</p>
</div>

<div className="flex flex-col space-y-12 md:w-1/2">
<Image 
src='/about.jpg'
width={600}
height={100}
className="h-[300px] object-cover"

/>
</div>
    </div>
</section>
        </>
    )
}