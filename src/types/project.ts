
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  category: string;
  images: {
    cover: string;
    gallery: string[];
  };
  links?: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  createdAt: string;
}
