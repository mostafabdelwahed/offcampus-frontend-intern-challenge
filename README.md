# OffCampus Opportunity Board

A micro opportunity search board built with Next.js (App Router) and Material UI, created as part of the OffCampus Frontend Intern Challenge.

## Getting Started

**Prerequisites:** Node.js 18+ and npm installed.

```bash
git clone https://github.com/mostafabdelwahed/offcampus-opportunity-board
cd offcampus-opportunity-board
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## UX & Logic Decision

Since the opportunity board is driven entirely by user interaction — search input and category selection — I made the decision to render everything on the client side using the `"use client"` directive. The displayed results change on every filter selection, so there is no meaningful benefit to server rendering here.

A hybrid approach is technically possible in Next.js App Router: keep the filter bar as a client component that pushes state into the URL as query params, then have the grid as a server component that reads those params and filters on the server. However, for this project that would have been the wrong call. The data is a local static array, not a database or external API, so the server has no privileged access to anything the client doesn't already have. On top of that, triggering a server re-render on every keystroke for six items would add latency with no real gain. Client-side filtering here means the UI responds instantly with no round trips.

## What I'd Add Next

With another week, the first thing I'd tackle is replacing the static mock data with a real API layer — and at that point I'd revisit the rendering architecture. With a real database behind the grid, the hybrid pattern is better: the filter bar stays a client component and pushes selections into the URL as query params, while the grid becomes a server component that runs the actual database query on the server and returns only the matching results. That way the client never touches raw data and the server does the heavy lifting where it actually has an advantage.

Beyond that, I'd add more filter dimensions — location type (Remote / Hybrid / On-Campus) and a paid-only toggle, since those are among the first things a student actually cares about.