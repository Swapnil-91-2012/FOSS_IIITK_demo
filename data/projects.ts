/**
 * Featured projects will be added here when the club has projects to showcase.
 * `icon` must be a key from components/Projects.tsx -> iconMap.
 */
import { social } from "./social";

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: "globe" | "brain" | "terminal" | "layers";
  githubUrl: string;
  stars: number;
  forks: number;
};

/** Until a club repository exists, the projects CTA links to GitHub's homepage. */
export const projectsAllUrl = social.github;
export const projects: Project[] = [];
