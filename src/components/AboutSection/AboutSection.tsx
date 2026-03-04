"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import DataContact from "../DataContact/DataContact";
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
          className=""
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
                Hey there!<br></br> I’m Alejandro López, a Frontend-focused Full
                Stack Developer based in Spain. I blend technical precision with
                creative thinking to build digital products that balance
                usability, scalability, and long-term maintainability. I develop
                end-to-end solutions — from UX strategy and visual systems to
                clean, production-ready implementations — bringing strong
                attention to system coherence and product quality.
              </motion.p>               
              <motion.div className="about-stats" variants={fadeUp}>
                <motion.div variants={fadeUp}>
                  <h2>+8 Years</h2>
                  <p>Creating Digital Products</p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h2>+3 Years</h2>
                  <p>Developing Full Stack Software</p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h2>End-to-end product development:</h2>
                  <p>Design, Dev & AI</p>
                </motion.div>
              </motion.div>
              <DataContact fadeUp={fadeUp} />
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
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default AboutSection;
