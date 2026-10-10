/**
 * PLACEHOLDER team. Replace name / role / links / image.
 * Put real photos in /public/images/team/ and set `image` to e.g. "/images/team/aditi.jpg".
 * Leave `image` undefined to use the neutral placeholder avatar.
 */
export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  { name: "Team Member 1", role: "Core Team", image: "/images/placeholders/member1.png", github: "https://github.com", linkedin: "https://linkedin.com" },
  { name: "Team Member 2", role: "Core Team", image: "/images/placeholders/member2.png", github: "https://github.com", linkedin: "https://linkedin.com" },
  { name: "Team Member 3", role: "Core Team", image: "/images/placeholders/member3.png", github: "https://github.com", linkedin: "https://linkedin.com" },
  { name: "Team Member 4", role: "Core Team", image: "/images/placeholders/member4.png", github: "https://github.com", linkedin: "https://linkedin.com" },
];
