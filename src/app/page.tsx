import { getProjects } from "@/lib/getProjects";
import HomePage from "@/components/HomePage/HomePage";
import "./page.css";

export default async function Home() {
  const projects = await getProjects();

  return <HomePage projects={projects} />;
}
