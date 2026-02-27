"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
// import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
// import type { Project } from "@/types/project";
import "./AboutSection.css";

// interface HomePageProps {
//   projects: Project[];
// }

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

function AboutSection() {
  return (
    <div className="about-section">
      <main className="main-content">
        <motion.section
          className="hero-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <header className="hero-profile"></header>

          <div className="about-content">
            <div className="about-info">
              <motion.h1 variants={fadeUp} className="hero-title">
                About Me
              </motion.h1>
              <motion.p variants={fadeUp} className="about-description">
                Hey there!<br></br> I’m Alejandro López, a creative director
                based in Spain. With a passion for blending creativity and
                technical precision, I craft professional websites that
                captivate audiences and elevate online presence.
              </motion.p>
              <div className="about-stats">
                <div>
                  <h2>+40 Years</h2>
                  <p>Creating Digital Products</p>
                </div>
                <div>
                  <h2>+3 Years</h2>
                  <p>Developing Full Stack Software</p>
                </div>
                <div>
                  <h2>End-to-end product development:</h2>
                  <p>Design, Dev & AI</p>
                </div>
              </div>
            </div>

            <motion.figure className="profile-figure" variants={fadeUp}>
              <Image
                src="/images/image-profile.jpg"
                alt="Alex - Frontend Developer"
                width={400}
                height={400}
                priority
                className="profile-photo-about"
              />
            </motion.figure>
            {/* <motion.nav variants={fadeUp} className="hero-ctas">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Link href="/projects" className="cta-primary" style={{ flex: 1 }}>
                  View My Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Link href="/contact" className="cta-secondary" style={{ flex: 1 }}>
                  Get in Touch
                </Link>
              </motion.div>
            </motion.nav> */}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default AboutSection;
