import { getProjectBySlug } from "@/lib/getProjectBySlug";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage/ProjectDetailPage";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  console.log({ slug });

  if (!project) {
    return notFound();
  }

  return <ProjectDetailPage project={project} />;
}
