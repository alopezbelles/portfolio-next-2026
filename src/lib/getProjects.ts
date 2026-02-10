
import clientPromise from "@/lib/mongo";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const projects = await db
      .collection<Project>("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return projects.map((project) => ({
      ...project,
      _id: project._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
