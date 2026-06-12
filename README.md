# Student Learning Dashboard

A modern learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

The goal of this project was to create a smooth and responsive student dashboard experience with a Bento-style layout, animated interactions, and server-side data fetching.

## Features

- Bento grid dashboard layout
- Server-side data fetching with Supabase
- Dynamic course cards from database
- Animated progress bars
- Framer Motion staggered animations
- Interactive sidebar navigation
- Activity heatmap section
- Loading skeletons
- Responsive design for desktop, tablet, and mobile
- Error handling for failed data requests

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Lucide React

## Project Structure

```txt
app/
├── components/
├── lib/
├── types/
├── loading.tsx
├── error.tsx
└── page.tsx
```

## Architecture Decisions

I used Next.js Server Components to fetch course data directly from Supabase. This keeps database access on the server and avoids exposing unnecessary logic to the client.

Interactive elements such as the sidebar, course cards, and animations were implemented as Client Components using Framer Motion.

The dashboard is divided into reusable components to keep the codebase organized and easier to maintain.

## Loading & Error Handling

A dedicated loading state is provided through `loading.tsx` with animated skeleton placeholders while data is being fetched.

An error boundary is also included to gracefully handle Supabase connection failures.

## Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Challenges

One of the main challenges was balancing visual animations with performance. I focused on using transform-based animations (scale, opacity, translate) to avoid layout shifts and keep interactions smooth.

Another challenge was creating a responsive Bento layout that adapts well across desktop, tablet, and mobile screen sizes.

## Deployment

The application is deployed on Vercel.
