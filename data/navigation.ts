export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
