# Cele Trail — celetrail.com

One-page pitch site advocating for the **Cele Link Connectivity Corridor** in Pflugerville's 2026 Bond Program. An 888 ft pedestrian bridge + 2.5 mi sidewalk network connecting the Cele Road neighborhoods to schools, parks, and the Pflugerville trail system.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Editing the site

**You only need to edit one file: [`src/content.ts`](src/content.ts).** All copy, links, image paths, and embed URLs live there. The components read from it; they don't need to be touched.

### Photos

Drop JPGs into `public/images/` matching these filenames (referenced from `content.ts`):

- `hero.jpg` — wide background image for the hero section
- `problem-1.jpg`, `problem-2.jpg`, `problem-3.jpg` — three "the problem" photos (sidewalk-ends-in-mud, kids walking shoulder, the creek gap)
- `phase1-altesino.jpg` — Project 1: Altesino Cv Connect (sidewalk to Vine Creek Park)
- `phase2-bridge.jpg` — Project 2: Vine Creek Bridge (the 192 ft creek crossing)
- `phase3-blackhawk.jpg` — Project 3: Finish Blackhawk Trail (past Cele Middle / Mott Elementary)
- `map-fallback.jpg` — only shown if `mapEmbedUrl` is empty
- `og-card.jpg` — 1200×630 social-share preview card

If a photo is missing, the layout still works — you'll see a "Photo: /images/foo.jpg" placeholder.

### Map (Section 3)

1. Go to [mymaps.google.com](https://mymaps.google.com) → **Create New Map**
2. Use the line tool — draw Phase 1 (888 ft bridge) in red, Phase 2 (2.5 mi corridor) in blue
3. Add markers for schools, parks, neighborhood entries
4. Title the map "Cele Trail"
5. **Share** → make it "Anyone with the link can view"
6. Click the **3-dot menu** → **Embed on my site** → copy the iframe `src` URL
7. Paste into `content.solution.mapEmbedUrl`

### Petition (Section 4)

1. Create a Google Form with fields: Name, Street Address, Email, optional comment
2. Click **Send** → the **&lt; &gt;** embed icon
3. Copy the iframe `src` URL
4. Paste into `content.action.googleFormUrl`

Submissions land in a linked Google Sheet. Export to PDF the morning of the council meeting.

### Survey deadline

The hero shows a live countdown to `content.hero.surveyDeadline`. After it passes, the urgency block automatically swaps to a "Survey closed — here's what's next" panel pointing at the council meeting and petition.

## Deploying to Railway

1. `git init && git add . && git commit -m "initial"`
2. Create a new GitHub repo, `git push`
3. In Railway: **New Project** → **Deploy from GitHub** → select repo. Railway autodetects `railway.toml` + `railpack.json`.
4. Once deployed, **Settings → Networking → Custom Domain** → add `celetrail.com`. Railway returns a CNAME target. Set both `celetrail.com` and `www.celetrail.com` at your registrar to point at it. TLS provisions automatically.

Build = `npm install && npm run build`. Serve = Caddy on `$PORT` against `dist/`.

## Stack

Vite + React + TypeScript + Tailwind + Caddy. Same shape as `~/workspace/foresight-capital/frontend/`.
