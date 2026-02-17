import Image from "next/image";
import Link from "next/link";
import "./page.css";
import "../styles/dynamic-bg.css";

import { getProjects } from "@/lib/getProjects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="home-page">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <header className="hero-profile">
            <figure className="profile-figure">
              <Image
                src="/images/image-profile.jpg"
                alt="Alex - Frontend Developer"
                width={130}
                height={130}
                priority
                className="profile-photo"
              />
            </figure>
            <div className="profile-info">
              <span className="work-tag">
                <span className="status-indicator"></span>
                Available for work
              </span>
              <h2 className="hero-name">Hi, I'm Alex.👋</h2>
            </div>
          </header>
          
          <div className="hero-content">
            <h1 className="hero-title">
              Alejandro López<br />
              Full Stack Developer
            </h1>
            <p className="hero-description">
              Passionate developer specializing in creating modern,
              accessible, and performant web applications using React,
              Next.js, and TypeScript. I love turning complex problems into
              simple, beautiful designs.
            </p>
            <nav className="hero-ctas">
              <Link href="/projects" className="cta-primary">
                View My Work
              </Link>
              <Link href="/contact" className="cta-secondary">
                Get in Touch
              </Link>
            </nav>
          </div>
        </section>

        {/* Work Section */}
        <section className="work-section">
          <h2 className="section-title">Selected Works</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                className="project-link"
              >
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>

          <footer className="work-footer">
            <Link href="/projects" className="view-all-projects">
              View All Projects →
            </Link>
          </footer>
        </section>
      </main>
    </div>
  );
}
