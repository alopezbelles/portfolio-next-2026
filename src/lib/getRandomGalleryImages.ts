import { getProjects } from './getProjects';
import type { Project } from '@/types/project';

export interface GalleryImage {
  src: string;
  projectTitle: string;
  projectSlug: string;
}

export async function getRandomGalleryImages(count: number = 20): Promise<GalleryImage[]> {
  try {
    const projects = await getProjects();
    const allGalleryImages: GalleryImage[] = [];

    projects.forEach((project: Project) => {
      if (project.images?.gallery && project.images.gallery.length > 0) {
        project.images.gallery.forEach((imagePath: string) => {
          allGalleryImages.push({
            src: imagePath, 
            projectTitle: project.title,
            projectSlug: project.slug
          });
        });
      }
    });

    const shuffled = allGalleryImages.sort(() => Math.random() - 0.5);
    
    return shuffled.slice(0, Math.min(count, shuffled.length));
  } catch (error) {
    console.error('Error fetching random gallery images:', error);
    return [];
  }
}