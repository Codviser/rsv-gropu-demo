import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
    <h1  className="max-w-md text-4xl font-bold text-center md:text-left text-cyan-300 pt-20 ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-10">
        <div className="rounded-xl hover:scale-100">
          <div className="p-8 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/lab.jpg" width={650} height={300} />
            </div>
          </div>
        </div>
        <div className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/pic1.jpg" width={650} height={300} />
            </div>
          </div>
        </div>
        <div className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/pic2.jpg" width={650} height={300} />
            </div>
          </div>
        </div>
        <div className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/pic3.jpg" width={650} height={300} />
            </div>
          </div>
        </div>

        <div className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/pic4.jpg" width={650} height={300} />
            </div>
          </div>
        </div>

        <div className="rounded-xl">
          <div className="p-2 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <Image src="/pic5.jpg" width={650} height={300} />
            </div>
          </div>
        </div>
       
        <Link href='/' className=' p-2 px-4 pt-2 mb-10 text-white bg-cyan-300 rounded-xl text-center hover:bg-cyan-900 mt-3 font-semibold'> View All Products</Link>
      </div>
    </>
  );
}
