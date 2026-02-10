
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  images: {
    cover: string;
  };
}
