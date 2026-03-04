"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import "./DataContact.css";

interface DataContactProps {
  fadeUp: Variants;
}

function DataContact({ fadeUp }: DataContactProps) {
  return (
    <div className="data-contact" id="contact">
      <motion.h2 variants={fadeUp} className="email">
        <Link 
          href="mailto:alopezbelles@gmail.com?subject=Hi%20Alejandro&body=Hi%20Alejandro,%20I%20would%20like%20to%20get%20in%20touch%20with%20you..." 
          className="contact-link"
        >
          alopezbelles@gmail.com
        </Link>
      </motion.h2>
      <motion.h2 variants={fadeUp} className="link-item">
        <Link 
          href="https://www.linkedin.com/in/alopezbelles/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
        >
          linkedin
        </Link>
      </motion.h2>
      <motion.h2 variants={fadeUp} className="link-item">
        <Link 
          href="https://github.com/alopezbelles" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
        >
          github
        </Link>
      </motion.h2>
    </div>
  );
}

export default DataContact;