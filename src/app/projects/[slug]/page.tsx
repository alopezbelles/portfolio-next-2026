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
    <div className="project-detail-page">
         <nav className="project-nav">
          <Link href="/" className="back-link">
            ← Volver al inicio
          </Link>
        </nav>
      <main className="main-content-project">
        {/* Back Navigation */}
       

        {/* Text, urls and technologies */}
        <div className="text-section">
          {/* Project Hero Section */}
          <section className="project-hero">
            <div className="project-header">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="project-tech-container">
              <p className="tech-title">Tecnologías utilizadas</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Project Links */}
          {project.links && (project.links.demo || project.links.github) && (
            <section className="project-actions">
              <div className="project-links">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary"
                  >
                     Demo →
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary"
                  >
                    Github →
                  </a>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Carrusel images */}
        <div className="multimedia-section">
          {/* Project Showcase */}
          <section className="project-showcase">
            <figure className="project-main-image">
              <Image
                src={project.images.cover}
                alt={project.title}
                width={1200}
                height={600}
                className="showcase-image"
                priority
              />
            </figure>
          </section>

          {/* Image Gallery */}
          {project.images.gallery && project.images.gallery.length > 0 && (
            <section className="project-gallery">
              <div className="gallery-header"></div>

              <div className="gallery-grid">
                {project.images.gallery.map((img, idx) => (
                  <figure key={idx} className="gallery-item">
                    <Image
                      src={img}
                      alt={`${project.title} imagen ${idx + 1}`}
                      width={500}
                      height={300}
                      className="gallery-image"
                    />
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
