import { client } from '@/sanity/lib/client';
import { AboutUs, HeroSection,  Projects, ServicesOffered } from '@/components'

export default async function Home() {

  const services = await getServices()
  const aboutUs = await getAbout()
  const projects = await getProjects();
  const home = await getHome();


  return (
    
       <>
     
       <HeroSection home={home} />
       <ServicesOffered services= {services} />
       <AboutUs aboutUs={aboutUs}/>
       <Projects projects={projects} />
       </>
  )
}



async function getServices() {
  const query = '*[_type == "services"][0...6] | order(priority desc, _updatedAt desc) ';
  const services = await client.fetch(query);
  return services;
}

async function getAbout() {
  const query = '*[_type == "about"]';
  const aboutUs = await client.fetch(query);
  return aboutUs;
}

async function getProjects() {
  const query = `*[_type == "project"][0...6]`;
  const projects = await client.fetch(query);
  return projects;
  }

  async function getHome() {
    const query = `*[_type == "home"]`;
    const home = await client.fetch(query);
    return home;
    }