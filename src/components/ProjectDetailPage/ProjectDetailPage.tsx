"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import "./ProjectDetailPage.css";

interface ProjectDetailPageProps {
  project: Project;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const galleryStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const galleryItemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const techTagVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <article className="project-detail-page">
      <main className="main-content-project">
        <motion.nav 
          className="project-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="back-link">
            ← Back
          </Link>
        </motion.nav>
        
        <motion.section 
          className="project-info"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <header className="project-header">
            <motion.h1 
              className="project-title"
              variants={fadeUp}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="project-description"
              variants={fadeUp}
            >
              {project.description}
            </motion.p>
          </header>
          
          <motion.aside 
            className="project-meta"
            variants={fadeUp}
          >
            {/* Technologies */}
            <div className="project-tech-container">
              <motion.ul 
                className="project-tech"
                variants={staggerContainer}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.li 
                    key={idx} 
                    className="tech-tag"
                    variants={techTagVariant}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Project Links */}
            {project.links &&
              (project.links.demo || project.links.github) && (
                <motion.div 
                  className="project-actions"
                  variants={fadeUp}
                >
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
                </motion.div>
              )}
          </motion.aside>
        </motion.section>

        {project.images.gallery && project.images.gallery.length > 0 && (
          <motion.section 
            className="project-gallery"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="gallery-alternating"
              variants={galleryStagger}
            >
              {project.images.gallery.map((img, idx) => {
                const rowIndex = Math.floor(idx / 3); // 3 imágenes por ciclo: 1 + 2
                const positionInRow = idx % 3;

                const isFullWidth = positionInRow === 0;
                const className = isFullWidth
                  ? "gallery-item-full"
                  : "gallery-item-half";

                return (
                  <motion.figure 
                    key={idx} 
                    className={`gallery-item ${className}`}
                    variants={galleryItemVariant}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} image ${idx + 1}`}
                      width={isFullWidth ? 800 : 400}
                      height={isFullWidth ? 450 : 300}
                      className="gallery-image"
                    />
                  </motion.figure>
                );
              })}
            </motion.div>
          </motion.section>
        )}
      </main>
    </article>
  );
}

export default ProjectDetailPage;