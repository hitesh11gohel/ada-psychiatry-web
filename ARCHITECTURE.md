# Architecture

This document explains the folder structure and the reasoning behind it — including
things a reviewer coming from a different stack (e.g. a Vite SPA + Redux) might expect
to see and won't find here, and why.

## Stack

- **Next.js 16 (App Router)** — file-system routing lives in `app/`, not a manually
  wired router.
- **React 19**, **TypeScript**, **Tailwind CSS v4**.
- No backend in this repo. This is a marketing/landing site; there is currently no API
  to call and no authenticated session to track.

## Current structure

```
src/
  app/            routing only — layout.tsx, page.tsx, globals.css
  components/
    ui/           generic reusable primitives (Button, Card, Container, Accordion...)
    layout/       global chrome shared across pages (Navbar, Footer)
    sections/     composed page blocks (Hero, Faq, Testimonials...)
    icons/        inline SVG icon components
  hooks/          cross-component logic (useAutoplay)
```

## Why `components/` sits next to `app/`, not inside it

In the App Router, `app/` is reserved for routing: a folder is a route segment, and
only a small set of special files belong in it (`page.tsx`, `layout.tsx`, `loading.tsx`,
`route.ts`). Everything that isn't a route — components, hooks, shared logic — lives at
the `src/` level, alongside `app/`. This is the layout Next.js's own docs and Vercel's
templates use. Nesting shared UI inside `app/` (via a private `app/_components` folder)
only makes sense when a component belongs to exactly one route; the components here
(`Button`, `Container`, `Navbar`) are meant to be reused by every future page, so a
top-level `components/` is the correct home, not a shortcut.

## Why there's no `pages/` directory

`pages/` is the _previous_ Next.js router. `app/` and `pages/` are two different,
largely incompatible systems — projects only have both mid-migration from one to the
other. Its absence here isn't a missing piece; it's confirmation the project is on the
current router.

## Why there's no `store/` (Redux or otherwise)

A global store solves one problem: state that's read and written from many unrelated
parts of the app (auth session, a cart, notifications). This app has no state like
that yet. Every piece of interactive state — which accordion item is open, which
testimonial is showing, whether autoplay is paused — is owned locally by the one
component that needs it (`useState` in `AccordionItem`, `Carousel`, `useAutoplay`), and
nothing outside that component ever reads it.

Introducing Redux here would mean a store with nothing in it — boilerplate and a
dependency with no job. If a future page adds something genuinely cross-cutting (a
multi-step booking flow, a logged-in patient session), the plan is to reach for the
lightest tool that fits — React Context for a small shared value, or a lighter store
like Zustand for something bigger — before reaching for Redux specifically, which
mostly solved problems App Router's Server Components now handle differently.

## Why there's no `services/` or shared `constants/` yet

Right now every section owns its own content inline — `FAQS` in `Faq.tsx`, `SERVICES`
in `OurServices.tsx`, `NAV_ITEMS` in `Navbar.tsx`. Nothing is duplicated across files,
so colocating each constant with its one consumer is the correct default; pulling them
into a shared folder now would be organizing around a duplication problem that doesn't
exist yet.

`services/` (API clients / data fetching) doesn't exist because there is no API to
call yet — this site is fully static.

**These get created for real, not stubbed in advance**, the moment a concrete need
shows up:

- Multiple pages start sharing the same nav links or site metadata → `lib/constants.ts`
  (or `config/site.ts`).
- A page needs to call an API or CMS → `services/` (or `lib/api/`), likely built on
  Next.js Server Components / Route Handlers rather than a client-side fetch layer.
- Cross-cutting client state shows up (auth, a multi-step form) → Context or Zustand,
  scoped to what actually needs it.

## A worked example of this reasoning: icons

`components/icons/` used to be split two ways — some icons as inline React components,
others as static files in `public/icons/` rendered through `next/image`. That split
existed for a real reason (some icons needed `currentColor` to pick up hover states;
others were static multi-color gradients), but it meant two systems to remember. It's
since been consolidated: every icon is now an inline React SVG component, including the
ones that used to be static files, with per-instance unique gradient/clip IDs (via
`useId()`) for icons that render more than once on a page. One approach, applied
consistently, is preferred over defending two.
