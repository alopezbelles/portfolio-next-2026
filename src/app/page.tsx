import { getProjects } from "@/lib/getProjects";
import { getRandomGalleryImages } from "@/lib/getRandomGalleryImages";
import HomePage from "@/components/HomePage/HomePage";
import "./page.css";

export default async function Home() {
  const projects = await getProjects();
  const carouselImages = await getRandomGalleryImages(15);

  return <HomePage projects={projects} carouselImages={carouselImages} />;
}
