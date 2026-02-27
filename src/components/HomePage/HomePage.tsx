"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import type { Project } from "@/types/project";
import "./HomePage.css";

interface HomePageProps {
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

function HomePage({ projects }: HomePageProps) {
  return (
    <div className="home-page">
      <main className="main-content">
        {/* Hero Section */}
        <motion.section
          className="hero-section"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <header className="hero-profile">
            <motion.figure className="profile-figure" variants={fadeUp}>
              <Image
                src="/images/image-profile.jpg"
                alt="Alex - Frontend Developer"
                width={130}
                height={130}
                priority
                className="profile-photo"
              />
            </motion.figure>
            <motion.div className="profile-info" variants={fadeUp}>
              <span className="work-tag">
                <span className="status-indicator"></span>
                Available for work
              </span>
              <h2 className="hero-name">Hi, I'm Alex.👋</h2>
            </motion.div>
          </header>

          <div className="hero-content">
            <motion.h1 variants={fadeUp} className="hero-title">
              Alejandro López
              <br />
              Full Stack Developer
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-description">
              Passionate developer specializing in creating modern, accessible,
              and performant web applications using React, Next.js, and
              TypeScript. I love turning complex problems into simple, beautiful
              designs.
            </motion.p>
            <motion.nav variants={fadeUp} className="hero-ctas">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1, display: "flex" }}
              >
                <Link
                  href="/projects"
                  className="cta-primary"
                  style={{ flex: 1 }}
                >
                  View My Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1, display: "flex" }}
              >
                <Link
                  href="/contact"
                  className="cta-secondary"
                  style={{ flex: 1 }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.nav>
          </div>
        </motion.section>

        {/* Work Section */}
        <ProjectsSection
          projects={projects}
          showFeaturedOnly={true}
          showViewAllLink={true}
        />
      </main>

      <AboutSection />
    </div>
  );
}

export default HomePage;
