"use client";
import { useState, useMemo } from "react";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import type { Project } from "@/types/project";
import "./ProjectsFilter.css";

interface ProjectsFilterProps {
  projects: Project[];
}

type FilterType = 'all' | 'development' | 'design';

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
];

function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    
    return projects.filter(project => 
      project.category === activeFilter
    );
  }, [projects, activeFilter]);

  return (
    <div className="projects-filter">
      {/* Filter Pills */}
      <nav className="filter-pills" aria-label="Filter projects by category">
        {FILTER_OPTIONS.map(option => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={`filter-pill ${activeFilter === option.value ? 'active' : ''}`}
            aria-pressed={activeFilter === option.value}
          >
            {option.label}
          </button>
        ))}
      </nav>

      {/* Projects Section */}
      <ProjectsSection 
        key={`projects-${activeFilter}-${filteredProjects.length}`}
        projects={filteredProjects}
        title=""
        showFeaturedOnly={false}
        showViewAllLink={false}
      />
    </div>
  );
}

export default ProjectsFilter;