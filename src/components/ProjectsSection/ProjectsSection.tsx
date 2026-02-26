"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import type { Project } from "@/types/project";
import "./ProjectsSection.css";

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  showFeaturedOnly?: boolean;
  showViewAllLink?: boolean;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projectsStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectCardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectsSection({
  projects,
  title = "Selected Works",
  showFeaturedOnly = false,
  showViewAllLink = false,
}: ProjectsSectionProps) {
  const filteredProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <motion.section
      className="work-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 className="section-title" variants={fadeUp}>
        {title}
      </motion.h2>

      <motion.div className="projects-grid" variants={projectsStagger}>
        {filteredProjects.map((project) => (
          <motion.div
            key={project._id}
            variants={projectCardVariant}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/projects/${project.slug}`} className="project-link">
              <ProjectCard project={project} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {showViewAllLink && (
        <footer className="work-footer">
          <Link href="/projects" className="view-all-projects">
            View All Projects →
          </Link>
        </footer>
      )}
    </motion.section>
  );
}

export default ProjectsSection;
