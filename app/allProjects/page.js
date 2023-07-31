import { client } from "@/sanity/lib/client";
import { AllProjects } from "@/components";

export default async function Projects() {

  const projects = await getProjects();

  return (
<AllProjects projects={projects} />
  );
}

async function getProjects() {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);
  return projects;
  }