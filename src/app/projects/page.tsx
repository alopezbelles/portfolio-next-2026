import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage/ProjectsPage";
import { getProjects } from "@/lib/getProjects";
import "./page.css";

export const metadata: Metadata = {
  title: "Projects | Portfolio - Alejandro López",
  description:
    "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.",
};

export default async function Page() {
  const projects = await getProjects();

  return <ProjectsPage projects={projects} />;
}
