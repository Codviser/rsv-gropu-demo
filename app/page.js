import { client } from '@/sanity/lib/client';
import { AboutUs, HeroSection, Navbar, Projects, ServicesOffered } from '@/components'

export default async function Home() {

  const services = await getServices()
  const aboutUs = await getAbout()
  const projects = await getProjects();


  return (
    
       <>
     
       <HeroSection />
       <ServicesOffered services= {services} />
       <AboutUs aboutUs={aboutUs}/>
       <Projects projects={projects} />
       </>
  )
}



async function getServices() {
  const query = '*[_type == "services"]';
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