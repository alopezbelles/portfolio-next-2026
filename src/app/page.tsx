import { getProjects } from "@/lib/getProjects";
import HomePage from "@/components/HomePage/HomePage";
import "./page.css";
import "../styles/dynamic-bg.css";

export default async function Home() {
  const projects = await getProjects();

  return <HomePage projects={projects} />;
}
