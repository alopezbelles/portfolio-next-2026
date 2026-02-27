"use client";
import { motion, Variants } from "framer-motion";
import ProjectsFilter from "@/components/ProjectsFilter/ProjectsFilter";
import type { Project } from "@/types/project";
import "./ProjectsPage.css";

interface ProjectsPageProps {
  projects: Project[];
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

function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div className="projects-page">
      <main className="main-content-projects">
        <motion.header 
          className="projects-header"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="projects-header-titles"
            variants={fadeUp}
          >
            <h1 className="page-title">Projects</h1>
            <h2 className="">(2022-2026)</h2>
          </motion.div>

          <motion.p 
            className="page-description"
            variants={fadeUp}
          >
            A curated collection of projects. Thoughtful, bold,<br></br> and designed to
            make an impact.
          </motion.p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <ProjectsFilter projects={projects} />
        </motion.div>
      </main>
    </div>
  );
}

export default ProjectsPage;