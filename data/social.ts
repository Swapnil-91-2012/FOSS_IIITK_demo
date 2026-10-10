/**
 * Central place for all external links.
 * Replace placeholder club handles when the official accounts are ready.
 */
export const social = {
  github: "https://github.com",
  instagram: "https://www.instagram.com/fossiiitkalyani/",
  linkedin: "https://linkedin.com/company/free-and-open-source-software-club-iiit-kalyani",
  telegram: "https://t.me/fossclubiiitkalyani",
  x: "https://x.com/iiitkalyanifoss",
  /** Where the "Join Community" buttons point. */
  join: "https://t.me/fossclubiiitkalyani",
} as const;

export type SocialKey = keyof typeof social;
