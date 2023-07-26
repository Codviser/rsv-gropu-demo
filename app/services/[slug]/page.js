


import { client } from '@/sanity/lib/client';
import { SingleServiceDetails } from '@/components';


export default async function ServiceDetails({ params }) {
  const { slug } = params;
const service = await getServices(slug)







  return (
   
 <SingleServiceDetails service={service} />
    
  );
}


async function getServices(slug) {
  const query = `*[_type == "services" && slug.current == '${slug}'][0]`;
  const service = await client.fetch(query);
  return service;
  }