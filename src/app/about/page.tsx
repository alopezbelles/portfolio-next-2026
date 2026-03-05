import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage/AboutPage";
import "./page.css";

export const metadata: Metadata = {
  title: "About | Portfolio - Alejandro López",
  description:
    "Learn more about Alejandro López, a Frontend-focused Full Stack Developer based in Spain, and explore his skills, experience, and projects.",
};

export default async function Page() {

  return <AboutPage />;
}
