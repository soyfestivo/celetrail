// =============================================================================
// CELE TRAIL — SITE CONTENT
// =============================================================================
// This is the ONLY file you need to edit to update the site.
// Drop photos into /public/images/ matching the filenames below.
// Update text, links, and embed URLs here. The site re-renders automatically.
// =============================================================================

export const content = {
  site: {
    name: "Cele Trail",
    tagline: "Connect Pflugerville",
    domain: "celetrail.com",
    description:
      "Let's finish the CeleTrail. Three connected projects bringing the Cele Road neighborhoods into Pflugerville's Trail Capital of Texas — anchored by a 192-foot creek bridge.",
  },

  // ---------------------------------------------------------------------------
  // SECTION 1 — HERO
  // ---------------------------------------------------------------------------
  hero: {
    eyebrow: "A 2026 Bond Proposal · Pflugerville, TX",
    headline: "Let's Finish the Cele Trail.",
    subhead:
      "Three connected projects to bring the Cele Road neighborhoods — Vine Creek, Enclave at Cele, and adjacent Blackhawk — into the Trail Capital of Texas.",
    image: "/images/pf-splash1.jpeg", // drop a wide hero photo here
    stats: [
      { value: "90%", label: "Trail-access goal" },
      { value: "3", label: "Strategic projects" },
      { value: "~1,000", label: "Homes directly served (est.)" },
    ],
    primaryCta: {
      label: "Take the Bond Survey",
      // Updated automatically when the deadline passes (see Hero.tsx)
      url: "https://pflugervilletx.gov/1048/Bond-Election-2026",
    },
    secondaryCta: {
      label: "See the Plan",
      anchor: "#solution",
    },
  },

  // ---------------------------------------------------------------------------
  // TIMELINE — "Our Path to Victory"
  // ---------------------------------------------------------------------------
  // The hero countdown automatically targets the next event whose `date` is
  // in the future. As each event passes, the countdown rolls forward.
  // ---------------------------------------------------------------------------
  timeline: {
    eyebrow: "How It Happens",
    title: "Our Path to Victory",
    lede: "The bond cycle is a moving train. Here's where we are — and where we're headed.",
    statusBadge: "Status: Active Advocacy",
    events: [
      {
        date: "2026-05-11T23:59:00-05:00",
        dateLabel: "May 11, 2026",
        title: "The Survey Deadline",
        body:
          "The City's official 2026 Bond Survey closes. Our first and most important chance to flood the zone with requests for the Cele Road corridor.",
      },
      {
        date: "2026-05-18T19:00:00-05:00",
        dateLabel: "May 18, 2026",
        title: "The Bond Committee Hearing",
        body:
          "We formally present the CeleTrail Proposal and our neighborhood petition to the Capital Improvement Bond Committee. This is where projects are officially ranked for funding.",
      },
      {
        date: "2026-06-01T00:00:00-05:00",
        dateLabel: "June – August 2026",
        title: "Project Selection",
        body:
          "City Council reviews the Committee's rankings and decides which projects are essential enough to put on the November ballot.",
      },
      {
        date: "2026-11-03T20:00:00-06:00",
        dateLabel: "November 2026",
        title: "The Bond Election",
        body:
          "Pflugerville citizens go to the polls. If we're on the ballot and the bond passes, funding for the CeleTrail is secured.",
      },
      {
        date: "2027-01-01T00:00:00-06:00",
        dateLabel: "2027 & Beyond",
        title: "Breaking Ground",
        body:
          "City begins engineering, environmental surveys for the creek crossing, and construction of the 2.5-mile corridor.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SECTION 2 — THE PROBLEM
  // ---------------------------------------------------------------------------
  problem: {
    title: "The Cele Island Effect",
    lede: "Our neighborhoods are physically cut off from the rest of Pflugerville. While the city builds new trails on the west side, the Cele Road corridor remains a connectivity desert — a missing piece in the Trail Capital of Texas.",
    bullets: [
      {
        icon: "AlertTriangle",
        title: "The Critical Gap",
        body: "Just 192 feet of undeveloped creek separates the Vine Creek neighborhood from Blackhawk — and there is no way to cross it on foot.",
      },
      {
        icon: "Users",
        title: "Safety Hazard",
        body: "1,400+ students at Mott Elementary and Cele Middle have no off-street route to school — they walk shoulders, cross unmarked drives, or get driven a quarter-mile.",
      },
      {
        icon: "MapPinOff",
        title: "The 10% Left Behind",
        body: "Pflugerville's Master Mobility Plan aims to put 90% of residents within half a mile of a trail. The Cele Road corridor is squarely in the 10% it has not yet reached.",
      },
    ],
    photos: [
      { src: "/images/problem-1.jpg", caption: "Where the sidewalk ends." },
      { src: "/images/problem-2.jpg", caption: "The route kids walk to school today." },
      { src: "/images/problem-3.jpg", caption: "The 888-foot creek gap." },
    ],
  },

  // ---------------------------------------------------------------------------
  // SECTION 3 — THE SOLUTION (with embedded map)
  // ---------------------------------------------------------------------------
  solution: {
    title: "Three Projects to Finish the Trail.",
    lede: "We propose the CeleTrail be included in the 2026 Bond Program as three connected projects — each a meaningful win on its own, transformative together. Most of the corridor follows public and PfISD-owned land, keeping cost and complexity low.",

    // INSTRUCTIONS:
    // 1. Go to https://mymaps.google.com → Create New Map
    // 2. Draw each of the three projects as colored lines
    // 3. Add markers for schools, parks, neighborhood entries
    // 4. Share → "Anyone on the internet with this link can view"
    // 5. Embed on my site → copy the iframe `src` URL → paste below
    mapEmbedUrl:
      "https://www.google.com/maps/d/embed?mid=1-AX9wZydwVFG3ah8Nixpsbzaeb-4T04&ehbc=2E312F",

    // Fallback static map shown when mapEmbedUrl is empty — drop a screenshot here
    mapFallbackImage: "/images/map-fallback.jpg",

    phases: [
      {
        label: "Project 1",
        title: "Altesino Cv Connect",
        distance: "916 feet",
        status: "Neighborhood Win",
        // Color matches the route on the map (rgb 255, 82, 82)
        color: "#ff5252",
        scope:
          "Sidewalk connecting Altesino Cove to the rest of the Vine Creek neighborhood and Vine Creek Park.",
        impact:
          "Gives Altesino Cove residents direct, off-street access to the park — the easiest piece of the corridor to deliver.",
        image: "/images/proj1.jpeg",
      },
      {
        label: "Project 2",
        title: "Vine Creek Bridge",
        distance: "192 feet",
        status: "Safety Priority",
        // Color matches the route on the map (rgb 2, 136, 209)
        color: "#0288d1",
        scope:
          "A pedestrian bridge across the Vine Creek tributary connecting the Vine Creek neighborhood to Blackhawk.",
        impact:
          "The keystone crossing — 192 feet that today separate hundreds of homes from any walkable connection west. Build it, and the Cele Island ends.",
        image: "/images/proj2.jpeg",
      },
      {
        label: "Project 3",
        title: "Finish the School Link",
        distance: "0.549 miles",
        status: "Safe Routes to School",
        // Color matches the route on the map (rgb 255, 214, 0)
        color: "#ffd600",
        scope:
          "Trail expansion across public and PfISD-owned land connecting Blackhawk to Rowe Lane Estates, passing Cele Middle School and Mott Elementary.",
        impact:
          "Creates a true Safe Route to School for 1,400+ students at Mott Elementary and Cele Middle, and links the corridor to the broader Pflugerville trail network.",
        image: "/images/proj3.jpeg",
      },
    ],

    whyTitle: "Why this project wins",
    whyBullets: [
      {
        title: "Safe Routes to School",
        body: "Direct, off-street paths for 1,400+ students at Mott Elementary and Cele Middle.",
      },
      {
        title: "Trail Capital Alignment",
        body: "Helps the City hit its Master Plan goal of 150 miles of trails and 90% of residents within half a mile of one.",
      },
      {
        title: "The Trail Capital Promise",
        body: "Families along the Cele Road corridor — Vine Creek, Enclave at Cele, Altesino Cove, and the Blackhawk homes nearest the schools — moved to Pflugerville expecting the \"Trail Capital of Texas.\" For them, that promise still ends at a dead-end street. Trail-connected homes also see a 4–7% value uplift (American Trails / NRPA), strengthening the same tax base that funds the bond.",
      },
      {
        title: "Shovel-Ready",
        body: "Most of the corridor follows public and PfISD-owned land — no private acquisitions, no coordination delays.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // SECTION 4 — TAKE ACTION
  // ---------------------------------------------------------------------------
  action: {
    title: "The City Is Listening Right Now.",
    lede: "Three things you can do this week to make the Cele Trail real.",

    tiles: [
      {
        kicker: "Step 1 · 2 minutes",
        title: "Take the 2026 Bond Survey",
        body: "In the open-ended sections, name the Cele Trail and the phrase \"Pedestrian Connectivity Gaps\" — that's the language the city's Master Mobility Plan uses.",
        cta: "Open the survey",
        url: "https://pflugervilletx.gov/1048/Bond-Election-2026",
        urgent: true,
        cityBadge: true,
      },
      {
        kicker: "Step 2 · 5 minutes",
        title: "Report the Gap",
        body: "Use the city's Report-a-Problem portal. Select Sidewalks. Upload a photo of where it ends. This creates a public-works paper trail the bond committee reviews.",
        cta: "Report it",
        url: "https://www.pflugervilletx.gov/686/Report-a-Problem",
        urgent: false,
        cityBadge: false,
      },
      {
        kicker: "Step 3 · Tuesday May 12 · 7pm",
        title: "Speak at City Council",
        body: "1611 Pfennig Lane. Public comment is 3 minutes. Show up — even silent attendance signals priority to the council.",
        cta: "Add to calendar",
        url: "https://pflugerville.legistar.com",
        urgent: false,
        cityBadge: true,
      },
    ],

    blastTitle: "Tell your neighbors",
    blastIntro:
      "Copy this into Nextdoor, your HOA group, or a group text. The bond committee is ranking projects this summer — every voice the city sees counts toward making the November ballot.",
    blastText:
      "Hey neighbors — help finish the Cele Trail. Pflugerville is picking its 2026 Bond projects right now, and we have a real shot at funding three connected pedestrian projects: a 192 ft creek bridge plus safe sidewalks linking Vine Creek, Enclave at Cele, and adjacent Blackhawk into the Trail Capital of Texas. Take 2 minutes on the bond survey and mention \"Cele Trail\" in the open-ended comments.\n\nFull plan + survey link → https://celetrail.com",

    petitionTitle: "Sign the neighborhood petition",
    petitionLede:
      "Add your name and address. We'll print the list and bring it to the council meeting on May 12.",
    // INSTRUCTIONS:
    // 1. Create a Google Form: Name, Street Address, Email, optional comment
    // 2. Click Send → Embed (the < > icon)
    // 3. Copy the iframe `src` URL and paste it here
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfPfQIcDsG8JiIANelqoui4qsbkBEmb7ghxJ7t2Pk7vtBwu9Q/viewform?usp=publish-editor", // e.g. "https://docs.google.com/forms/d/e/.../viewform?embedded=true"
  },

  // ---------------------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------------------
  footer: {
    alignment:
      "This proposal directly supports the City of Pflugerville's $217M Master Mobility Plan (2025) and the Trail Capital of Texas resolution — helping reach the stated goals of 150 miles of trails and 90% of residents within half a mile of one.",
    sources: [
      { label: "Pflugerville 2026 Bond", url: "https://pflugervilletx.gov/1048/Bond-Election-2026" },
      {
        label: "Pforward Interactive Map",
        url: "https://engagekh.mysocialpinpoint.com/pflugerville-mobility-master-plan/pflugerville-pforward-interactive-map",
      },
      { label: "City Council Calendar", url: "https://pflugerville.legistar.com" },
      { label: "Public Works · 512-990-6400", url: "tel:+15129906400" },
    ],
    contact: {
      label: "Organized by neighbors of the Cele Road corridor",
      email: "", // optional: "stephen@celetrail.com"
    },
  },
} as const;

export type Content = typeof content;
