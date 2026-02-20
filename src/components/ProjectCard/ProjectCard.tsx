
import "./ProjectCard.css";
import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <figure className="project-image">
        <Image
          src={project.images.cover}
          alt={project.title}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 275px"
          priority={false}
          // quality={90}
          loading="eager"
          className="project-img"
        />
      </figure>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description-brief">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
