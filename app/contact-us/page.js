export default function ContactUs() {
    return (
        <div className="container flex flex-col md:flex-row gap-4
        items-center  mx-auto mt-4 space-y-0 md:space-y-0 mb-10">
        <div className="flex flex-col mb-32  md:w-1/2">
        <h1 className="max-w-m text-3xl font-bold text-center md:text-4xl md:text-left text-gray-700">
        Get in touch with us!
        </h1>
        <div className="max-w-sw text-center text-gray-700 md:text-left">
       <h3 className="max-w-m text-1xl font-bold text-center md:text-2xl md:text-left text-gray-700 mt-20">Management</h3>
       <ul className="m-3 pt-2">
       <li className="mt-2">Eng. Robert Tumwesige | Technical Director</li>
<li className="mt-2">Plot 1038, UCB Zone, Bukoto - Kampala</li>
<li className="mt-2">P.O. Box 10704, Kampala, Uganda</li>
<li className="mt-2">Tel: +256 782943463</li>
<li className="mt-2">Email: rtumwesige@gmail.com</li>
       </ul>

       <h3 className="max-w-m text-1xl font-bold text-center md:text-2xl md:text-left text-gray-700 mt-20">Administration</h3>
       <p className="m-3 pt-2">Email: rsv@rsvegroup.com</p>
       <p className="m-3 pt-2">Tel: +256 393236841</p>
        </div>
        
        </div>
        
        <div className="md:w-1/2 object-cover  ">
        <img
        alt="home pic"
        src='/offshore.jpg'
        
        className="rounded-xl"
        />
        </div>
        
        </div>
    )
}