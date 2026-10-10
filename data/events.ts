/**
 * Event placeholders. Replace the TBA fields with confirmed details when available.
 * `mode`: "online" | "offline" (shown as an indicator + text, not colour only).
 */
import { social } from "./social";

export type EventItem = {
  month: string;
  day: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  time: string;
  location: string;
  mode: "online" | "offline" | "tba";
};

/** The View All Events button points to the club's Instagram handle. */
export const eventsAllUrl = social.instagram;

export const events: EventItem[] = [
  { month: "TBA", day: "TBA", title: "TBA", subtitle: "Details coming soon", category: "TBA", description: "Event details will be announced soon.", time: "TBA", location: "TBA", mode: "tba" },
  { month: "TBA", day: "TBA", title: "TBA", subtitle: "Details coming soon", category: "TBA", description: "Event details will be announced soon.", time: "TBA", location: "TBA", mode: "tba" },
  { month: "TBA", day: "TBA", title: "TBA", subtitle: "Details coming soon", category: "TBA", description: "Event details will be announced soon.", time: "TBA", location: "TBA", mode: "tba" },
  { month: "TBA", day: "TBA", title: "TBA", subtitle: "Details coming soon", category: "TBA", description: "Event details will be announced soon.", time: "TBA", location: "TBA", mode: "tba" },
];
