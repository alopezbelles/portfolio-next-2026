"use client";
import { motion, Variants } from "framer-motion";
import "./CareerJourney.css";

interface CareerEntry {
  year: string;
  title: string;
  description: string;
  company?: string;
}

interface CareerJourneyProps {
  className?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

const careerData: CareerEntry[] = [
  {
    year: "2024-2025",
    title: "Full Stack Developer & UX/UI Designer",
    description:
      "I contributed to the evolution of a marketplace ERP by developing a key bulk product import feature that optimized product upload and management within the SaaS platform. I also improved the interface, onboarding, and overall user experience, enhancing platform adoption, reducing friction, and increasing operational efficiency.",
    company: "OCEGES (SaaS ERP for eCommerce)",
  },
  {
    year: "2023-2024",
    title: "Full Stack Developer",
    description:
      "I contributed to the design and development of a Round Robin commercial assignment system, automating the fair distribution of incoming leads to streamline processes and improve the performance of the sales department. This solution was complemented by process automations, email workflows, user dashboards, and the definition of key metrics, enabling real-time tracking and more informed, data-driven decision-making.",
    company: "FORLOPD, Data Privacy and Security",
  },
  {
    year: "2016-2022",
    title: "Project Manager | Graphic Designer and Digital Producer",
    description:
      "I lead design projects as a freelance, focused on corporate identity, branding, and digital content, specializing in interface design and user experience for digital products. During this period, I developed coherent and scalable solutions, optimizing interaction, visual consistency, and corporate guidelines, laying the foundation for robust, usability-focused interfaces within complex digital systems.",
    company: "Freelance",
  } 
];

function CareerJourney({ className = "" }: CareerJourneyProps) {
  return (
    <motion.section
      className={`career-journey ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.header className="career-header" variants={fadeUp}>
        <h1>Career Journey</h1>
        <p className="career-subtitle">
          My professional experience and growth over the years
        </p>
      </motion.header>

      <div className="timeline">
        <div className="timeline-line"></div>

        {careerData.map((entry, index) => (
          <motion.article
            key={entry.year}
            className="timeline-entry"
            variants={staggerContainer}
          >
            <motion.div className="timeline-year" variants={slideInLeft}>
              <h2 className="year">{entry.year}</h2>
            </motion.div>

            <motion.div
              className="timeline-point"
              variants={fadeUp}
              whileHover={{ scale: 1.2 }}
            >
              <div className="point-inner"></div>
            </motion.div>

            <motion.div className="timeline-content" variants={slideInRight}>
              <h3>{entry.title}</h3>
              {entry.company && (
                <span className="entry-company">{entry.company}</span>
              )}
              <p className="entry-description">{entry.description}</p>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default CareerJourney;
