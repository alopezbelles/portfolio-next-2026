"use client";
import { motion, Variants } from "framer-motion";
import AboutSection from "@/components/AboutSection/AboutSection";
import "./AboutPage.css";

interface AboutPageProps {}

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

function AboutPage({}: AboutPageProps) {
  return (
    <div className="about-page">
      <main className="main-content-about">
        <AboutSection />
      </main>
    </div>
  );
}

export default AboutPage;
