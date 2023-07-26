import { client } from '@/sanity/lib/client';
import { SingleProjectDetails } from '@/components';



export default async function ProjectDetails({ params }) {
  const { slug } = params;
  const project = await getProjects(slug)

  return (
   <SingleProjectDetails project={project} />
  );
}

async function getProjects(slug) {
  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
  const projects = await client.fetch(query);
  return projects;
  }


