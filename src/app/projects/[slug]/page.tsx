import { getProjectBySlug } from "@/lib/getProjectBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "./page.css";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  console.log({ slug });

  if (!project) {
    return notFound();
  }

  return (
    <article className="project-detail-page">
      <nav className="project-nav">
        <Link href="/" className="back-link">
          ← Back
        </Link>
      </nav>
      
      <main className="main-content-project">
        <section className="project-info">
          <header className="project-header">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </header>
          
          <aside className="project-meta">
            {/* Technologies */}
            <div className="project-tech-container">
              <ul className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="tech-tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Project Links */}
            {project.links &&
              (project.links.demo || project.links.github) && (
                <div className="project-actions">
                  <nav className="project-links">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-primary"
                      >
                        VIEW LIVE SITE →
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-secondary"
                      >
                        GITHUB →
                      </a>
                    )}
                  </nav>
                </div>
              )}
          </aside>
        </section>

        {project.images.gallery && project.images.gallery.length > 0 && (
          <section className="project-gallery">
            <div className="gallery-alternating">
              {project.images.gallery.map((img, idx) => {
                const rowIndex = Math.floor(idx / 3); // 3 imágenes por ciclo: 1 + 2
                const positionInRow = idx % 3;

                const isFullWidth = positionInRow === 0;
                const className = isFullWidth
                  ? "gallery-item-full"
                  : "gallery-item-half";

                return (
                  <figure key={idx} className={`gallery-item ${className}`}>
                    <Image
                      src={img}
                      alt={`${project.title} imagen ${idx + 1}`}
                      width={isFullWidth ? 800 : 400}
                      height={isFullWidth ? 450 : 300}
                      className="gallery-image"
                    />
                  </figure>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </article>
  );
}
