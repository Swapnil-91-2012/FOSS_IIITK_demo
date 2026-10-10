# FOSS Club IIIT Kalyani — Landing Page

A modern, responsive single-page website for FOSS Club IIIT Kalyani. The design combines a dark developer-inspired interface, restrained neon-green accents, glassmorphism, terminal visuals, and subtle animations.

Built with **Next.js 15 (App Router), React, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React**. The project is frontend-only and requires no backend, database, authentication, API keys, or environment variables. Fonts are bundled locally through Fontsource.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Official FOSS Club logo and sticky navigation.
- Smooth in-page navigation with an animated mobile menu.
- Terminal-inspired hero section.
- About, Projects, Events, Contribution, Team, Contact, and Footer sections.
- Animated backgrounds, subtle glows, and card transitions.
- Reusable UI components and centralized content configuration.
- Empty projects state until real club projects are available.
- Four event cards with `TBA` placeholders until event details are confirmed.
- Centralized social and community links in `data/social.ts`.
- Footer social links for GitHub, Instagram, LinkedIn, Telegram, and X.
- Four team profile images, currently using the same uploaded photo.
- Unique React keys for repeated event cards.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework and App Router |
| React 19 | UI components |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Styling and responsive layouts |
| Framer Motion | Animations and transitions |
| Lucide React | Interface icons |
| Fontsource | Locally bundled fonts |
| ESLint | Code linting |

## Project Structure

```text
foss-iiitkalyani/
├── app/
│   ├── globals.css                  # Global styles, theme, typography and animations
│   ├── layout.tsx                   # Root layout, metadata and font setup
│   └── page.tsx                     # Main page composition and section order
│
├── components/
│   ├── About.tsx                    # About / Who We Are section
│   ├── AnimatedBackground.tsx       # Decorative background effects
│   ├── Button.tsx                   # Reusable button and link component
│   ├── Contact.tsx                  # Contact section and social links
│   ├── Contribution.tsx             # Contribution steps and Join Community CTA
│   ├── Events.tsx                   # Event cards and View All Events CTA
│   ├── Footer.tsx                   # Footer and social icons
│   ├── GlowCard.tsx                 # Reusable glow card
│   ├── Hero.tsx                     # Main hero section
│   ├── icons.tsx                    # Inline social brand icons, including X
│   ├── Logo.tsx                     # Club logo component
│   ├── Navbar.tsx                   # Sticky navigation and mobile menu
│   ├── Projects.tsx                 # Projects section and empty state
│   ├── Providers.tsx                # Client-side providers and motion setup
│   ├── Reveal.tsx                   # Scroll reveal animation wrapper
│   ├── SectionHeading.tsx           # Reusable numbered section heading
│   ├── Team.tsx                     # Team member cards
│   └── Terminal.tsx                 # Terminal-style hero visual
│
├── data/
│   ├── events.ts                    # Four TBA event entries and Instagram CTA URL
│   ├── navigation.ts                # Navigation labels and section IDs
│   ├── projects.ts                  # Project list and GitHub CTA URL
│   ├── social.ts                    # Central social and community URLs
│   └── team.ts                      # Editable team profiles and image paths
│
├── lib/
│   └── utils.ts                     # Shared utility functions
│
├── public/
│   └── images/
│       ├── foss-logo.png            # Official FOSS Club logo
│       └── placeholders/
│           ├── member1.png          # Team member 1 photo
│           ├── member2.png          # Team member 2 photo
│           ├── member3.png          # Team member 3 photo
│           └── member4.png          # Team member 4 photo
│
├── .gitignore                       # Git exclusions
├── eslint.config.mjs                # ESLint configuration
├── next-env.d.ts                    # Next.js TypeScript declarations
├── next.config.ts                   # Next.js configuration
├── package.json                     # Dependencies and npm scripts
├── package-lock.json                # Locked npm dependencies
├── postcss.config.mjs               # PostCSS / Tailwind integration
├── README.md                        # Project documentation
└── tsconfig.json                    # TypeScript configuration
```

**Note:** `node_modules/` is generated locally when dependencies are installed and is not included in the source ZIP. Next.js and TypeScript may also generate additional files during development or builds.

## Prerequisites

- Node.js compatible with Next.js 15. A supported LTS release is recommended.
- npm, which is included with Node.js.

Check your installed versions:

```bash
node -v
npm -v
```

## Getting Started

1. Open the project in a terminal window.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server automatically refreshes the page when you modify supported source files.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server after building |
| `npm run lint` | Runs ESLint |

### Production Build

Run the lint and build checks before deployment:

```bash
npm run lint
npm run build
npm run start
```

The production server starts after a successful build.

## Customize Content

Most frequently edited content is stored in the `data/` directory.

| Content | File |
|---|---|
| Navigation labels and section IDs | `data/navigation.ts` |
| Projects | `data/projects.ts` |
| Events | `data/events.ts` |
| Team member profiles and image paths | `data/team.ts` |
| Social and community URLs | `data/social.ts` |
| Colors, fonts, effects, and responsive styles | `app/globals.css` |
| Page section order | `app/page.tsx` |
| Page title and metadata | `app/layout.tsx` |

### Social Links and Telegram Community

All primary external links are centralized in `data/social.ts`.

The configuration includes:

- `github` — GitHub profile or organization.
- `instagram` — Instagram profile used by the View All Events button.
- `linkedin` — LinkedIn profile.
- `telegram` — Telegram community link.
- `x` — X profile.
- `join` — Destination used by the Join Community buttons.

The Join Community buttons use `social.join`, and the footer's Telegram icon uses `social.telegram`.


### Projects

The projects list in `data/projects.ts` is intentionally empty until real club projects are ready to showcase.

The Projects section displays an empty state instead of fabricated project cards. The View All Projects button uses the centralized GitHub URL.

To add projects, update the data structure in `data/projects.ts` according to the existing type and component requirements.

### Events

The event data is stored in `data/events.ts`. Four placeholder event cards are currently included, with `TBA` values for the date, title, category, time, and location.

Replace these placeholders with confirmed event information when it becomes available.

The View All Events button uses the Instagram URL configured through `data/social.ts`.

Each event card must have a unique React key. The current implementation combines the event title with its index so that multiple `TBA` titles do not produce duplicate-key warnings.

### Team Members and Images

Team profiles are configured in `data/team.ts`.

The current project includes four profile image files:

```text
public/images/placeholders/member1.png
public/images/placeholders/member2.png
public/images/placeholders/member3.png
public/images/placeholders/member4.png
```

All four images currently contain the same uploaded photo. Each image is referenced by its corresponding team member entry in `data/team.ts`.

To update a team member:

1. Replace the placeholder name and role in `data/team.ts`.
2. Add or replace the corresponding image under `public/images/placeholders/`.
3. Update the `image` path in that member's data entry.
4. Replace placeholder GitHub and LinkedIn URLs with the correct profile links, where applicable.

For example, a local image can be referenced as:

```ts
image: "/images/placeholders/member1.png"
```


### Club Logo

The official club logo is stored at:

```text
public/images/foss-logo.png
```

The logo component is implemented in `components/Logo.tsx`. Preserve the logo's proportions and original artwork when replacing the image.

### Page Sections and Navigation

The landing page is composed in `app/page.tsx` in the following order:

1. Hero
2. About
3. Projects
4. Events
5. Contribution / Get Involved
6. Team
7. Contact
8. Footer

The former Activities section has been removed.

The numbered section headings are:

| Section | Number |
|---|---:|
| About | 01 |
| Projects | 02 |
| Events | 03 |
| Get Involved | 04 |
| Team | 05 |
| Contact | 06 |

Navigation labels and section IDs are maintained in `data/navigation.ts`.

## Accessibility and Responsive Design

The interface is designed to support desktop, tablet, and mobile screens. When modifying the project, preserve:

- Semantic HTML and accessible labels.
- Visible keyboard focus indicators.
- Sufficient text and interface contrast.
- Descriptive alternative text for meaningful images.
- Usable navigation at smaller screen widths.
- Appropriate reduced-motion behavior for users who prefer less animation.

Test the page at multiple viewport sizes before publishing.

## Build and Deployment

The project can be deployed to a compatible Next.js hosting platform, such as Vercel.

Before deployment, run:

```bash
npm run lint
npm run build
```

Resolve any reported issues before publishing. No backend service, database, API keys, or environment variables are required for the current frontend.

## Placeholder Content Notice

Team names, social media URLs, and event details are placeholders until replaced with verified club information. The four team images currently use the same photo. Update these details before presenting the website as the club's finalized official landing page.

