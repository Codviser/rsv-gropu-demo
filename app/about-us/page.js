import { client } from "@/sanity/lib/client";
import { AboutUsDetails } from "@/components";


export default async function AboutUs() {

  const aboutUs = await getAbout()

  return (
  <AboutUsDetails aboutUs={aboutUs} />
  );
}

async function getAbout() {
  const query = '*[_type == "about"]';
  const aboutUs = await client.fetch(query);
  return aboutUs;
}
