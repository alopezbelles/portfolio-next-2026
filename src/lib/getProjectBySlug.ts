
import clientPromise from "@/lib/mongo";
import { Project } from "@/types/project";

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const client = await clientPromise;
  const db = client.db("portfolio");

  const project = await db.collection<Project>("projects").findOne({ slug });
  if (!project) return null;

  return { ...project, _id: project._id.toString() };
}