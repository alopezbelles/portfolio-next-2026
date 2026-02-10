import Image from "next/image";
import Link from "next/link";
import "./page.css";

import { getProjects } from "@/lib/getProjects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="home-page">
      <main className="main-content">
        {/* About Me Section */}
        <section className="hero-container">
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-image">
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
                <div>
                  <h2 className="hero-name">Alejandro López</h2>
                  <h2 className="hero-subtitle">Frontend Developer | Product Engineer</h2>
                </div>
              </div>
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Alex.👋</span>
                </h1>
                <p className="hero-description">
                  Passionate developer specializing in creating modern,
                  accessible, and performant web applications using React,
                  Next.js, and TypeScript. I love turning complex problems into
                  simple, beautiful designs.
                </p>
                <div className="hero-ctas">
                  <Link href="/projects" className="cta-primary">
                    View My Work
                  </Link>
                  <Link href="/contact" className="cta-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-multimedia">
            <h1>Lastest Projects:</h1>
            <Image
              src="/cover.png"
              alt="Hero Image - Web Development"
              width={500}
              height={300}
              className="hero-illustration"
            />
            <Image
              src="/cover-2.png"
              alt="Hero Image - Web Development"
              width={500}
              height={300}
              className="hero-illustration"
            />
           
          </div>
        </section>

        {/* My Work Section */}
        <section id="work-section" className="work-section">
          <div className="section-header">
            <h2 className="section-title">My Work</h2>
            <p className="section-subtitle">
              A selection of recent projects that showcase my skills and
              creativity
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>

          <div className="work-footer">
            <Link href="/projects" className="view-all-projects">
              View All Projects →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
