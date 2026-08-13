Marketing site for Ada Psychiatry, built with [Next.js](https://nextjs.org) (App Router).

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the reasoning behind the folder structure and current architectural decisions.

## Getting started

1. **Prerequisites**: Node.js 20.9+ and npm (the repo is committed with `package-lock.json`, so use npm rather than yarn/pnpm to keep the lockfile consistent).
2. **Clone and install**:
   ```bash
   git clone https://github.com/hitesh11gohel/ada-psychiatry-web.git
   cd ada-psychiatry-web
   npm install
   ```
3. **Run the dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the site. Pages hot-reload as you edit files under `src/`.
4. **No environment variables are required** — this is a fully static marketing site with no backend/API to configure.

### Other scripts

| Command                | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run build`        | Production build                               |
| `npm run start`        | Serve the production build (run `build` first) |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format the repo with Prettier                  |
| `npm run format:check` | Check formatting without writing changes       |

Linting and formatting also run automatically on staged files via Husky + lint-staged on commit.

## Features

- **Home page** composed of: Hero carousel, Meet the Founder, Treatment Focus, Quote Banner, Our Services, Why Choose Us, Testimonials, Get Started (4-step process), Accepting States, and FAQ.
- **Global navbar and footer**, wired so every link (including "Book an Appointment" and the footer's Quick Links/Resources/Legal columns) navigates somewhere real — see [ARCHITECTURE.md](./ARCHITECTURE.md#why-appslugpagetsx-exists-with-no-real-content) for how not-yet-designed destinations are handled.
- **Responsive layout** tuned across mobile, tablet, and desktop breakpoints (e.g. the navbar, the "Get Started" 4-step row, and the footer's link columns each have their own tablet-specific layout).
- **Social links** in the footer point to each platform's real login page.
- **Custom favicon/app icon** using the Ada Psychiatry logo mark.
- Fonts: [Work Sans](https://fonts.google.com/specimen/Work+Sans) (body) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings, standing in for a licensed display face — see the `TODO` in `src/app/layout.tsx`), both loaded via `next/font/google`.

## Where things live

A reviewer looking for a specific piece of UI:

| Looking for...                                     | Look in...                      |
| -------------------------------------------------- | ------------------------------- |
| A specific home page section (Hero, FAQ, ...)      | `src/components/sections/home/` |
| Navbar / Footer                                    | `src/components/layout/`        |
| Reusable primitives (Button, Card, Accordion, ...) | `src/components/ui/`            |
| Icons                                              | `src/components/icons/`         |
| Route definitions (URLs → pages)                   | `src/app/`                      |
| Global styles / Tailwind theme tokens              | `src/app/globals.css`           |

For the _why_ behind this layout (not just the _what_), see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Learn more

- [Next.js Documentation](https://nextjs.org/docs) — Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js — see the [deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
