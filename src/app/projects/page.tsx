import type { Metadata } from 'next';
import ProjectsFilter from "@/components/ProjectsFilter/ProjectsFilter";
import { getProjects } from "@/lib/getProjects";
import "./page.css";

export const metadata: Metadata = {
  title: 'Projects | Portfolio - Alejandro López',
  description: 'Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="projects-page">
      <main className="main-content-projects">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-description">
            A collection of web applications and projects I've built using modern technologies 
            like React, Next.js, TypeScript, and more. Each project represents a unique challenge 
            and learning experience.
          </p>
        </header>

        <ProjectsFilter projects={projects} />
      </main>
    </div>
  );
}