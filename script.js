"use strict";

/* All views and portfolio entries live here. Hash routing works on static hosts. */
const icons = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  northeast: '<path d="M6 18 18 6M6 6h12v12"/>',
  ai: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/><path d="M20 2v4M18 4h4"/>',
  marketing: '<path d="M4 18 10 12l4 3 6-10M14 5h6v6M4 22h16"/>',
  design: '<path d="m12 3 9 9-9 9-9-9 9-9ZM3 12h18M12 3v18"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18m-14 5 2 2-2 2m5 0h4M7 6.5h.01M10 6.5h.01"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  social:
    '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10 8-3 7m7-7 3 7M8 18h8"/>',
  automation: '<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
  content:
    '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M8 13h8m-8 4h5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 6 9 7 9-7"/>',
  phone:
    '<path d="M7 3H4a1 1 0 0 0-1 1c0 10 7 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a16 16 0 0 1-7-7l2-2-2-5Z"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
};
const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.ai}</svg>`;
const arrow = '<span aria-hidden="true">↗</span>';
const categories = [
  {
    id: "ai",
    label: "AI",
    title: "AI Services",
    icon: "ai",
    number: "01",
    tagline: "Work smarter. Go further.",
    description:
      "Turn the potential of AI into practical systems that make everyday work simpler.",
    short: "Intelligent systems. Real possibilities.",
    offerings: [
      "AI Strategy",
      "AI Automation",
      "AI Chatbot Solutions",
      "AI Content Workflow",
      "AI Business Solutions",
    ],
    headline: "AI solutions for<br> <em>smarter businesses.</em>",
    intro:
      "Less repetitive work. More room for what matters. Purposeful AI solutions built around the way your business actually works.",
    detailServices: [
      "AI Strategy",
      "AI Automation",
      "AI Chatbot",
      "AI Content Systems",
      "AI Workflow Automation",
      "AI Business Solutions",
    ],
    descriptions: [
      "Find practical opportunities for AI with a focused roadmap, clear priorities, and responsible guardrails.",
      "Connect the tools you use and simplify repetitive tasks with human oversight built in.",
      "Help customers find answers through guided, knowledge-based conversational experiences.",
      "Build a repeatable content workflow, from the first brief to an editor-approved draft.",
      "Create connected workflows that route information, trigger actions, and keep your team in control.",
      "Shape a custom AI solution around a specific operational need, not a passing trend.",
    ],
    processTitle: "How it works",
    process: ["Discover", "Plan", "Build", "Automate", "Optimize"],
    cta: "Discuss Your AI Project",
    accent: "violet",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    title: "Digital Marketing",
    icon: "marketing",
    number: "02",
    tagline: "Make every connection count.",
    description:
      "Bring the right message to the right people with a thoughtful, connected growth strategy.",
    short: "The right message. The right audience.",
    offerings: [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Digital Advertising",
      "Lead Generation",
      "Conversion Optimization",
    ],
    headline:
      "Digital marketing that connects<br> <em>strategy with growth.</em>",
    intro:
      "Good marketing is more than being seen. Connect your audience, message, and channels with a strategy that gives every action a purpose.",
    detailServices: [
      "SEO",
      "Social Media Marketing",
      "Content Marketing",
      "Digital Advertising",
      "Lead Generation",
      "Marketing Funnels",
      "Conversion Optimization",
    ],
    descriptions: [
      "Build a search-friendly foundation with keyword research, on-page improvements, and a useful content plan.",
      "Develop a clear social presence with platform-specific content, consistent messaging, and an intentional publishing rhythm.",
      "Create helpful, relevant content that supports your audience at each stage of their decision.",
      "Plan paid campaigns with audience hypotheses, creative variations, and a structured testing approach.",
      "Design relevant offers and friction-light journeys that help interested visitors take the next step.",
      "Connect discovery, consideration, and action through a cohesive customer journey.",
      "Find friction in the experience and prioritize measurable, testable improvements.",
    ],
    processTitle: "The marketing process",
    process: ["Research", "Strategy", "Content", "Campaign", "Optimization"],
    cta: "Plan Your Marketing Strategy",
    accent: "cyan",
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    title: "Graphic Design",
    icon: "design",
    number: "03",
    tagline: "Distinctive by design.",
    description:
      "Give your ideas a visual language that feels unmistakably yours, everywhere your brand shows up.",
    short: "Make your first impression count.",
    offerings: [
      "Brand Identity",
      "Social Media Design",
      "Marketing Creatives",
      "Banner Design",
      "Presentation Design",
    ],
    headline: "Visual design that makes<br> <em>brands memorable.</em>",
    intro:
      "A clear idea deserves a strong visual identity. Thoughtful typography, expressive color, and considered details bring your brand into focus.",
    detailServices: [
      "Brand Identity",
      "Social Media Graphics",
      "Marketing Creatives",
      "Banner Design",
      "Presentation Design",
      "Promotional Graphics",
    ],
    descriptions: [
      "A cohesive visual foundation: logo direction, typography, color, and practical brand guidelines.",
      "Flexible, on-brand social visuals designed to feel consistent without becoming repetitive.",
      "Campaign visuals that pair clear messaging with a distinctive creative direction.",
      "Purpose-built banners that communicate one clear idea across the formats you need.",
      "Turn complex information into a compelling, well-paced visual story.",
      "Give product launches, special offers, and brand moments a considered creative treatment.",
    ],
    processTitle: "From idea to identity",
    process: ["Discover", "Direction", "Design", "Refine", "Deliver"],
    cta: "Bring Your Brand to Life",
    accent: "peach",
  },
  {
    id: "web-design",
    label: "Web Design",
    title: "Web Design",
    icon: "web",
    number: "04",
    tagline: "Built to feel different.",
    description:
      "Beautiful, intuitive websites that balance a memorable first impression with everyday usability.",
    short: "Beautiful outside. Intelligent inside.",
    offerings: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce UI",
      "Conversion-Focused Websites",
    ],
    headline:
      "Modern websites designed for<br> <em>people and performance.</em>",
    intro:
      "Your website should do more than look good. Create a clear, accessible digital experience that helps people understand your value and take action.",
    detailServices: [
      "Business Website",
      "Portfolio Website",
      "Landing Page",
      "E-commerce UI",
      "SaaS Website",
      "Conversion-Focused Website",
    ],
    descriptions: [
      "An intentional digital home that communicates your offer, builds clarity, and makes contacting you easy.",
      "Showcase your work through a distinctive visual identity and clear, compelling project stories.",
      "A focused page built around one audience, one offer, and one meaningful next step.",
      "Thoughtful browsing and product page interfaces that help shoppers make confident decisions.",
      "Explain a complex product simply with strong hierarchy, clear use cases, and thoughtful interaction.",
      "Reduce friction with a well-structured journey, accessible design, and purposeful calls to action.",
    ],
    processTitle: "The web design process",
    process: ["Research", "UX Strategy", "UI Design", "Development", "Launch"],
    cta: "Start Your Website Project",
    accent: "blue",
  },
];
const projects = [
  {
    id: 1,
    category: "ai",
    title: "AI Customer Support Assistant",
    subtitle: "A more human way to get answers.",
    art: "assistant",
    tags: ["Conversational AI", "UX Design"],
    brief:
      "Explore how a knowledge-based assistant could help customers find product information without navigating a complex help center.",
    solution:
      "A calm conversation interface, suggested questions, source-aware responses, and a clear handoff to a human when an answer needs review.",
    deliverables: [
      "Conversation flow",
      "Support interface concept",
      "Human handoff pattern",
    ],
  },
  {
    id: 2,
    category: "ai",
    title: "AI Business Automation System",
    subtitle: "Less busywork. More possibility.",
    art: "workflow",
    tags: ["Automation", "Workflow Design"],
    brief:
      "Imagine a simpler way for a small team to sort incoming inquiries and keep its tools in sync.",
    solution:
      "A sample intake flow that organizes an inquiry, checks required information, and routes it for human approval before any external action.",
    deliverables: ["Workflow map", "Approval logic", "Dashboard concept"],
  },
  {
    id: 3,
    category: "ai",
    title: "AI Content Workflow",
    subtitle: "From a blank page to a better process.",
    art: "content",
    tags: ["AI Systems", "Content Strategy"],
    brief:
      "Create a repeatable framework for developing helpful content while keeping a human editor at the center.",
    solution:
      "A connected brief, outline, draft, and review board with explicit editorial checkpoints and reusable brand guidance.",
    deliverables: [
      "Editorial workflow",
      "Prompt framework",
      "Review board concept",
    ],
  },
  {
    id: 4,
    category: "digital-marketing",
    title: "E-commerce Growth Campaign",
    subtitle: "One story. Every touchpoint.",
    art: "growth",
    tags: ["Campaign Strategy", "E-commerce"],
    brief:
      "Explore a coordinated campaign for an imagined everyday essentials store, from discovery through purchase consideration.",
    solution:
      "An audience hypothesis, channel plan, creative test matrix, and sample measurement dashboard. Charts are illustrative, not campaign results.",
    deliverables: ["Campaign concept", "Channel strategy", "Measurement plan"],
  },
  {
    id: 5,
    category: "digital-marketing",
    title: "Social Media Marketing Strategy",
    subtitle: "A thoughtful presence, not just posts.",
    art: "social",
    tags: ["Social Strategy", "Content Planning"],
    brief:
      "Develop a consistent social presence for a fictional creative lifestyle brand without relying on disconnected one-off posts.",
    solution:
      "A set of content pillars, a sample publishing calendar, and a visual system that balances useful, community-focused, and promotional content.",
    deliverables: [
      "Audience outline",
      "Content pillars",
      "Sample content calendar",
    ],
  },
  {
    id: 6,
    category: "digital-marketing",
    title: "SEO Content Strategy",
    subtitle: "Helpful content. A clearer path.",
    art: "seo",
    tags: ["SEO", "Content Architecture"],
    brief:
      "Plan a search-focused content structure for a sample service business, centered on questions real visitors might ask.",
    solution:
      "An illustrative topic cluster, keyword-intent mapping, and an editorial roadmap. No search rankings or traffic outcomes are claimed.",
    deliverables: [
      "Topic cluster map",
      "Sample content briefs",
      "On-page checklist",
    ],
  },
  {
    id: 7,
    category: "graphic-design",
    title: "Brand Identity Concept",
    subtitle: "A bold identity with a quiet confidence.",
    art: "brand",
    tags: ["Brand Identity", "Art Direction"],
    brief:
      "Build an expressive identity concept for FORMA, a fictional design studio with a love of simple, purposeful objects.",
    solution:
      "A modular wordmark direction, warm vermilion palette, oversized type, and a flexible grid that carries across sample brand touchpoints.",
    deliverables: ["Logo concept", "Color & typography", "Stationery mockups"],
  },
  {
    id: 8,
    category: "graphic-design",
    title: "Social Media Campaign",
    subtitle: "Made to stop the scroll.",
    art: "poster",
    tags: ["Visual Design", "Social Creative"],
    brief:
      "Explore an optimistic social campaign for a fictional creative event, with a recognizable look across multiple formats.",
    solution:
      "High-contrast typography, playful shapes, and a consistent design system adapted to feed posts, stories, and promotional graphics.",
    deliverables: [
      "Campaign art direction",
      "Social post concepts",
      "Story templates",
    ],
  },
  {
    id: 9,
    category: "graphic-design",
    title: "Product Marketing Creative",
    subtitle: "Less noise. More character.",
    art: "product",
    tags: ["Product Design", "Marketing Creative"],
    brief:
      "Create a minimal product campaign concept for an imaginary everyday skincare label called STILL.",
    solution:
      "A warm neutral visual direction, sculptural packaging mockups, and clear, restrained messaging across a sample campaign.",
    deliverables: [
      "Product visual concept",
      "Campaign layout",
      "Promotional graphics",
    ],
  },
  {
    id: 10,
    category: "web-design",
    title: "Premium Business Website",
    subtitle: "A digital space with a point of view.",
    art: "business",
    tags: ["UI / UX Design", "Business Website"],
    brief:
      "Imagine the digital home of a fictional architecture practice, making room for both its work and its philosophy.",
    solution:
      "An editorial layout with generous spacing, architectural illustration, clear project navigation, and a straightforward contact journey.",
    deliverables: [
      "Homepage concept",
      "Responsive layout direction",
      "Visual UI system",
    ],
  },
  {
    id: 11,
    category: "web-design",
    title: "SaaS Landing Page",
    subtitle: "Complex product. Effortless clarity.",
    art: "saas",
    tags: ["Web Design", "SaaS"],
    brief:
      "Explain the value of a fictional productivity tool through an approachable landing page and a focused product preview.",
    solution:
      "A clear promise, a readable feature hierarchy, and a lightweight dashboard visual with one primary call to action.",
    deliverables: [
      "Landing page concept",
      "Product UI preview",
      "Responsive design direction",
    ],
  },
  {
    id: 12,
    category: "web-design",
    title: "E-commerce Website Concept",
    subtitle: "A considered shopping experience.",
    art: "shop",
    tags: ["E-commerce", "UI Design"],
    brief:
      "Design a calm shopping experience for a fictional homeware store with a small, thoughtfully curated collection.",
    solution:
      "A warm editorial storefront, clear product hierarchy, easy-to-scan details, and generous visual space around each object.",
    deliverables: [
      "Storefront concept",
      "Product card system",
      "Shopping UX direction",
    ],
  },
];
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const categoryOf = (id) => categories.find((category) => category.id === id);
const tag = (text, dot = false) =>
  `<span class="eyebrow">${dot ? '<i class="tiny-dot"></i>' : '<span class="section-tick"></span>'}${text}</span>`;
const sectionHead = (kicker, title, aside = "") =>
  `<div class="section-heading reveal"><div>${tag(kicker)}<h2>${title}</h2></div>${aside}</div>`;
const ctaBanner = (
  title = "Good things start with<br> <em>a conversation.</em>",
  text = "Have an idea, a challenge, or a “what if”? Let’s explore it together.",
  label = "Let's Work Together",
) =>
  `<section class="cta-banner reveal"><div class="cta-orb" aria-hidden="true"></div><div>${tag("YOUR NEXT CHAPTER")}<h2>${title}</h2><p>${text}</p></div><a class="button button-light magnetic" href="#/contact">${label} ${arrow}</a></section>`;
const pageHero = (eyebrow, heading, description, extra = "", cls = "") =>
  `<section class="page-hero ${cls}"><div class="page-hero-top">${tag(eyebrow)}<span class="page-coordinate">INDEPENDENT MIND. CONNECTED THINKING.</span></div><h1>${heading}</h1><p class="page-intro">${description}</p>${extra}</section>`;

function orbitVisual(compact = false) {
  let lines = "";
  // Orthographic wireframe: the lines form a real tilted sphere, rather than a flat grid.
  const project = (lat, lon) => {
    const r = 156,
      tilt = -0.38;
    let x = r * Math.cos(lat) * Math.cos(lon),
      y = r * Math.sin(lat),
      z = r * Math.cos(lat) * Math.sin(lon);
    const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
    const xx = x * Math.cos(0.3) - yy * Math.sin(0.3);
    return [270 + xx, 252 + x * Math.sin(0.3) + yy * Math.cos(0.3)];
  };
  for (let i = -7; i <= 7; i++) {
    let d = "";
    for (let k = 0; k <= 100; k++) {
      const p = project((i * Math.PI) / 16, (k / 100) * Math.PI * 2);
      d += `${k ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)} `;
    }
    lines += `<path d="${d}"/>`;
  }
  for (let i = 0; i < 20; i++) {
    let d = "";
    for (let k = 0; k <= 60; k++) {
      const p = project(
        -Math.PI / 2 + (k / 60) * Math.PI,
        (i / 20) * Math.PI * 2,
      );
      d += `${k ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)} `;
    }
    lines += `<path d="${d}"/>`;
  }
  const prefix = compact ? "compact" : "hero";
  return `<div class="orbit-visual ${compact ? "compact-orbit" : ""}"><div class="visual-grid"></div><span class="visual-label">THE INTERSECTION OF<br>INTELLIGENCE & CREATIVITY</span><span class="visual-cross cross-one">+</span><span class="visual-cross cross-two">+</span><svg class="orb-svg" viewBox="0 0 540 510" role="img" aria-label="An illuminated violet wireframe globe with orbiting points, connecting intelligence and creativity"><defs><radialGradient id="${prefix}-glow"><stop offset="0" stop-color="#aaa3ff" stop-opacity=".85"/><stop offset=".4" stop-color="#6951d9" stop-opacity=".32"/><stop offset="1" stop-color="#30224e" stop-opacity="0"/></radialGradient><linearGradient id="${prefix}-line" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b7a3ff"/><stop offset=".5" stop-color="#7561c0"/><stop offset="1" stop-color="#383652"/></linearGradient><radialGradient id="${prefix}-core"><stop stop-color="#e5dcff"/><stop offset=".3" stop-color="#a390ff"/><stop offset="1" stop-color="#6250b5" stop-opacity="0"/></radialGradient><filter id="${prefix}-blur"><feGaussianBlur stdDeviation="8"/></filter></defs><circle cx="270" cy="252" r="242" fill="url(#${prefix}-glow)"/><g fill="none" stroke="url(#${prefix}-line)" stroke-width=".65" opacity=".66">${lines}</g><g class="orb-orbits" fill="none" stroke="#9182c1" stroke-width=".8"><ellipse cx="270" cy="252" rx="243" ry="82" transform="rotate(-29 270 252)"/><ellipse cx="270" cy="252" rx="222" ry="100" transform="rotate(38 270 252)" opacity=".45"/><ellipse cx="270" cy="252" rx="200" ry="193" stroke-dasharray="2 9" opacity=".32"/></g><circle cx="270" cy="252" r="80" fill="url(#${prefix}-core)" filter="url(#${prefix}-blur)"/><path d="M270 213c8 27 12 31 39 39-27 8-31 12-39 39-8-27-12-31-39-39 27-8 31-12 39-39Z" fill="#e3d9ff"/><g fill="#cfbdff"><circle cx="80" cy="337" r="4"/><circle cx="453" cy="147" r="4"/><circle cx="371" cy="409" r="2.5"/><circle cx="144" cy="146" r="3"/></g><g stroke="#c8b9ed" fill="none" opacity=".5"><circle cx="80" cy="337" r="9"/><circle cx="453" cy="147" r="9"/></g></svg><div class="floating-chip chip-ai"><span class="chip-icon">${icon("ai")}</span><div><small>POWERED BY POSSIBILITY</small><strong>Intelligence, applied.</strong></div><span class="chip-live"></span></div><div class="floating-chip chip-design"><span class="chip-icon">${icon("layers")}</span><div><small>THOUGHTFULLY CONNECTED</small><strong>Strategy meets creativity.</strong></div></div><div class="visual-bottom"><span><i class="tiny-dot"></i> HUMAN-LED. AI-POWERED.</span><span>01 — ∞</span></div></div>`;
}

function art(project) {
  const a = project.art;
  let inner = "";
  if (a === "assistant")
    inner = `<div class="mock-chat"><div class="mock-top"><span class="app-symbol">✳</span><b>Clarity<span>AI ASSISTANT</span></b><i class="mock-online"></i></div><div class="chat-question">Hey, can you help me get started?</div><div class="chat-response"><span>✳</span><p>Of course. Let's find exactly<br>what you're looking for.</p></div><div class="chat-options"><span>Explore the products ↗</span><span>Talk to the team ↗</span></div><div class="mock-input">Ask a question…<span>↑</span></div></div><span class="art-caption">INTELLIGENCE, WITH A HUMAN TOUCH.</span>`;
  if (a === "workflow")
    inner = `<div class="flow-art"><div class="flow-node">${icon("mail")}<b>New inquiry</b><small>Listen for the right signal</small></div><div class="flow-line"></div><div class="flow-node purple">${icon("ai")}<b>Understand & organize</b><small>Intelligence in the middle</small></div><div class="flow-split"><div>${icon("check")}<span>Human review</span></div><div>${icon("layers")}<span>Connected tools</span></div></div></div>`;
  if (a === "content")
    inner = `<div class="content-art"><div class="content-heading"><span>the content studio.</span><b>✳</b></div><p>Ideas, meet momentum.</p><div class="mini-board"><div><small>IDEATE</small><span>Find your angle<i></i><i></i></span><span>Audience insights<i></i></span></div><div><small>CREATE</small><span class="purple-note">Draft with AI<i></i><i></i><b>✳ In progress</b></span></div><div><small>REFINE</small><span>Human touch<i></i><i></i><b>↗ Ready for review</b></span></div></div></div>`;
  if (a === "growth")
    inner = `<div class="growth-art"><div class="growth-top"><span>the bigger picture.</span>${icon("marketing")}</div><small>CAMPAIGN PLANNING / SAMPLE VIEW</small><h4>Built for the<br><i>next chapter.</i></h4><div class="bar-chart">${[23, 39, 34, 55, 49, 67, 62, 80, 75, 96].map((v, i) => `<span class="bar bar-${i}"></span>`).join("")}</div><div class="chart-label"><span>DISCOVER</span><span>CONNECT</span><span>CONVERT</span></div></div>`;
  if (a === "social")
    inner = `<div class="social-art"><div class="social-title">A presence.<br>With purpose<span>↗</span></div><div class="calendar-art">${["M", "T", "W", "T", "F", "S", "S"].map((d, i) => `<div><small>${d}</small><span class="calendar-slot slot-${i}">${["✳", "", "↗", "◒", "", "◎", ""][i]}</span><span class="calendar-slot alt-${i}"></span></div>`).join("")}</div><span class="social-foot">THE SOCIAL PLAYBOOK — CONCEPT</span></div>`;
  if (a === "seo")
    inner = `<div class="seo-art"><span class="seo-kicker">SEARCH, WITH INTENTION.</span><div class="search-mock">${icon("search")}<span>What is your audience looking for?</span><span>↵</span></div><div class="seo-core">Useful content.</div><div class="seo-branches"><span>Discover</span><span>Understand</span><span>Decide</span></div><small>RELEVANCE OVER NOISE</small></div>`;
  if (a === "brand")
    inner = `<div class="brand-art"><div class="brand-paper"><span>INDEPENDENT DESIGN STUDIO</span><strong>for<span>m</span>a<span class="brand-star">✳</span></strong><div>GOOD FORM.<br>GREAT THINKING.</div><small>BRAND EXPLORATION / 01</small></div><div class="brand-card"><span>f.</span><small>forma studio<br>Objects. Ideas. Identities.</small></div><div class="brand-disc">f.</div></div>`;
  if (a === "poster")
    inner = `<div class="poster-art"><div class="poster-one"><small>THE CREATIVE COLLECTIVE</small><b>Make<br>some<br><i>noise.</i></b><span>↗</span></div><div class="poster-two"><span>✳</span><b>Ideas<br>come<br>alive.</b><small>CREATE SOMETHING DIFFERENT.</small></div></div>`;
  if (a === "product")
    inner = `<div class="product-art"><div class="product-copy"><small>EVERYDAY, CONSIDERED.</small><b>Less.<br>But better.</b><span>still.</span></div><div class="product-pedestal"></div><div class="bottle"><div class="bottle-cap"></div><span>still.</span><small>THE DAILY<br>ESSENTIAL</small><i>SIMPLY CONSIDERED.</i></div><div class="bottle bottle-two"><div class="bottle-cap"></div><span>still.</span><small>A LITTLE<br>MORE CALM</small></div></div>`;
  if (a === "business")
    inner = `<div class="browser-art architecture"><div class="browser-top"><i></i><i></i><i></i><span>formandfield.studio</span></div><div class="browser-page"><div class="mock-nav"><b>form & field.</b><span>Work &nbsp; Studio &nbsp; Contact ↗</span></div><small>SPACES FOR A BETTER EVERYDAY</small><h4>Architecture.<br>With intention.</h4><div class="building-art"><div></div><div></div><div></div><span></span></div><span class="mock-page-link">Explore our approach ↗</span></div></div>`;
  if (a === "saas")
    inner = `<div class="browser-art saas"><div class="browser-top"><i></i><i></i><i></i><span>orbit.workspace</span></div><div class="browser-page"><div class="mock-nav"><b>◒ orbit</b><span>Product &nbsp; Solutions &nbsp; <i>Get started ↗</i></span></div><small>A LITTLE LESS BUSY. A LOT MORE FOCUS.</small><h4>Your best work.<br> <em>All in one orbit.</em></h4><span class="mock-cta">Find your flow ↗</span><div class="saas-dashboard"><div><span>WORKSPACE</span><i></i><i></i><i></i></div><div><b>Your space to make progress.</b><div class="dashboard-tiles"><span>Focus mode<br>◒</span><span>In the pipeline<br>↗</span><span>On your radar<br>✳</span></div></div></div></div></div>`;
  if (a === "shop")
    inner = `<div class="browser-art shop"><div class="browser-top"><i></i><i></i><i></i><span>gather.home</span></div><div class="browser-page"><div class="mock-nav"><b>gather.</b><span>Living &nbsp; Objects &nbsp; Bag (0)</span></div><div class="shop-layout"><div><small>THOUGHTFULLY CHOSEN.</small><h4>A slower<br>kind of living.</h4><span class="shop-cta">Explore the collection ↗</span></div><div class="vase-scene"><div class="stem stem-one"></div><div class="stem stem-two"></div><div class="vase"></div><div class="vase-small"></div></div></div><div class="shop-caption">FEWER THINGS. BETTER THINGS.<span>01 / 03 →</span></div></div></div>`;
  return `<div class="project-art art-${a}" role="img" aria-label="${escapeHTML(project.title)}: illustrative ${escapeHTML(categoryOf(project.category).label)} concept mockup">${inner}</div>`;
}
function projectCard(p, index = 0) {
  return `<article class="project-card reveal" data-category="${p.category}"><button class="project-preview" data-project="${p.id}" aria-label="View ${escapeHTML(p.title)} concept project">${art(p)}<span class="concept-badge">CONCEPT PROJECT</span><span class="preview-arrow">${arrow}</span></button><div class="project-meta"><span>${categoryOf(p.category).label}</span><span>EXPLORATION ${String(index + 1).padStart(2, "0")}</span></div><h3><button data-project="${p.id}">${p.title} ${arrow}</button></h3><p>${p.subtitle}</p></article>`;
}
function serviceCard(category, detailed = false) {
  return `<article class="service-card ${category.accent} reveal"><div class="service-card-top"><span class="service-icon">${icon(category.icon)}</span><span class="service-number">/${category.number}</span></div><h3>${category.title}</h3><p>${detailed ? category.description : category.short}</p>${detailed ? `<ul>${category.offerings.map((item) => `<li>${icon("check")}${item}</li>`).join("")}</ul>` : ""}<a class="service-link" href="#/services/${category.id}">${detailed ? "Explore " + category.title : "Explore service"} ${arrow}</a></article>`;
}

function homePage() {
  return `<div class="home-page"><section class="home-hero"><div class="hero-copy"><div class="hero-eyebrows"><span class="availability"><i></i> Open for collaborations</span><span class="hero-edition">PORTFOLIO / 2026</span></div>${tag("AI • DIGITAL MARKETING • WEB DESIGN")}<h1>Building digital<br>experiences that<br>move businesses<br> <em>forward.</em><span class="headline-spark" aria-hidden="true">✳</span></h1><p class="hero-description">I bring AI, strategy, and design together to help ambitious businesses think bigger, work smarter, and stand out in a digital-first world.</p><div class="hero-actions"><a class="button button-primary magnetic" href="#/projects">View My Work ${arrow}</a><a class="button button-outline magnetic" href="#/contact">Let's Work Together ${icon("arrow")}</a></div><div class="hero-identity"><div class="identity-monogram">jh<span>.</span></div><div><strong>Jahid Hasan</strong><span>AI Expert <i>•</i> Digital Marketing Expert <i>•</i> Web Design Expert</span></div></div></div>${orbitVisual()}</section><div class="hero-bottom"><span>STRATEGY MEETS CREATIVITY. POSSIBILITIES BECOME REAL.</span><a href="#/services">Explore Services ${icon("arrow")}</a><span class="scroll-note">SCROLL TO EXPLORE <span>↓</span></span></div><section class="section home-services">${sectionHead("ONE MIND. MULTIPLE POSSIBILITIES.", "Different disciplines.<br> <em>One connected vision.</em>", "<p>From the first idea to the final interaction,<br>every piece is designed to work together.</p>")}<div class="service-grid">${categories.map((c) => serviceCard(c)).join("")}</div></section><section class="section selected-work">${sectionHead("SELECTED EXPLORATIONS", "Ideas, brought to life.", '<a class="text-link" href="#/projects">Explore all projects ' + arrow + "</a>")}<div class="project-grid home-project-grid">${[projects[0], projects[10], projects[6]].map(projectCard).join("")}</div><p class="concept-note">Independent concept projects. Built to explore possibilities, not to imply client work.</p></section><section class="home-about reveal"><div>${tag("THE MIND BEHIND THE WORK")}<h2>A creative thinker.<br> <em>A practical problem solver.</em></h2></div><div><p>I’m Jahid — an independent digital creative connecting emerging technology with thoughtful strategy and purposeful design. I believe the best solutions don’t just look impressive. They make things better.</p><a class="text-link" href="#/about">A little more about me ${arrow}</a></div></section>${ctaBanner()}</div>`;
}
function aboutPage() {
  return `<div class="inner-page about-page">${pageHero("01 / THE PERSON BEHIND THE PIXELS", "About <em>Jahid Hasan.</em>", "Curious by nature. Creative by choice. Focused on making digital work better for people and businesses.")}<section class="about-editorial"><div class="about-poster reveal"><span class="poster-eyebrow">INTELLIGENCE × INTENTION</span><div class="huge-monogram">jh<span>.</span></div><div class="poster-bottom"><span>JAHID HASAN<small>INDEPENDENT DIGITAL CREATIVE</small></span>${icon("northeast")}</div><div class="poster-orbit" aria-hidden="true"></div></div><div class="editorial-copy reveal">${tag("WHO I AM")}<h2>At the intersection of<br> <em>ideas and execution.</em></h2><p>I’m Jahid Hasan, an AI expert, digital marketer, web designer, and graphic designer. I help businesses bring clarity to their digital presence by connecting the right strategy with the right tools.</p><p>My work spans intelligent workflows, meaningful brand experiences, and websites that feel as good as they function. Rather than treating each discipline as a separate piece, I look at how they can work together.</p><p>I value clear communication, thoughtful details, and solutions built around a real business need. The goal is simple: make useful things, and make them well.</p><a class="text-link" href="#/contact">Let’s get to know each other ${arrow}</a></div></section><section class="section">${sectionHead("WHAT I DO", "A connected set of capabilities.")}<div class="capabilities-grid">${[
    ["ai", "AI", "Practical intelligence, built around real needs."],
    [
      "marketing",
      "Digital Marketing",
      "Strategy that connects your offer with your audience.",
    ],
    ["web", "Web Design", "Clear, thoughtful digital experiences."],
    ["design", "Graphic Design", "A distinct visual voice for your brand."],
    [
      "automation",
      "Automation",
      "Less repetition, more room for meaningful work.",
    ],
    [
      "target",
      "Digital Strategy",
      "A clear direction for everything that comes next.",
    ],
  ]
    .map(
      ([i, t, d]) =>
        `<div class="capability reveal">${icon(i)}<h3>${t}</h3><p>${d}</p></div>`,
    )
    .join(
      "",
    )}</div></section><section class="section process-section">${sectionHead("MY APPROACH", "Intentional at every step.")}<div class="process-grid">${["Discover", "Strategize", "Create", "Optimize", "Grow"].map((s, i) => `<div class="process-step reveal"><span>0${i + 1}<i>→</i></span><h3>${s}</h3><p>${["Ask better questions. Understand the business, people, and problem.", "Connect insights to a practical plan and a shared direction.", "Turn the direction into a thoughtful, useful experience.", "Review, refine, and improve the details that make a difference.", "Build a foundation that can evolve alongside your business."][i]}</p></div>`).join("")}</div></section><section class="section">${sectionHead("WHY WORK WITH ME", "More than a deliverable.<br> <em>A considered partnership.</em>")}<div class="reasons-grid">${[
    [
      "ai",
      "AI-Powered Thinking",
      "Using emerging tools intentionally, with human judgment at the center.",
    ],
    [
      "design",
      "Creative Problem Solving",
      "Looking beyond the obvious to find a useful, distinctive solution.",
    ],
    [
      "marketing",
      "Data-Driven Strategy",
      "Grounding decisions in research, context, and measurable objectives.",
    ],
    [
      "web",
      "Modern Design",
      "Balancing a fresh visual perspective with enduring usability.",
    ],
    [
      "target",
      "Business-Focused Solutions",
      "Keeping the real purpose of your project in view, from start to finish.",
    ],
  ]
    .map(
      ([i, t, d]) =>
        `<article class="reason-card reveal">${icon(i)}<h3>${t}</h3><p>${d}</p></article>`,
    )
    .join("")}</div></section>${ctaBanner()}</div>`;
}
const skillData = [
  [
    "ai",
    "Artificial Intelligence",
    "Applying AI to research, ideation, and purposeful business solutions.",
    "Strategy · Applied AI · Prompt Design",
    "Core focus",
    5,
  ],
  [
    "marketing",
    "Digital Marketing",
    "Connecting audience insights, channel strategy, and a clear message.",
    "Campaigns · Funnels · Analytics",
    "Core focus",
    5,
  ],
  [
    "web",
    "Web Design",
    "Crafting responsive, accessible experiences with strong visual hierarchy.",
    "UI / UX · Responsive · Frontend",
    "Core focus",
    5,
  ],
  [
    "design",
    "Graphic Design",
    "Building consistent visual identities and purposeful marketing creatives.",
    "Identity · Typography · Composition",
    "Core focus",
    5,
  ],
  [
    "search",
    "SEO",
    "Structuring useful content so people and search engines can understand it.",
    "On-page · Research · Content SEO",
    "Applied capability",
    4,
  ],
  [
    "social",
    "Social Media Marketing",
    "Developing cohesive social content around people, platforms, and purpose.",
    "Content Pillars · Planning · Creative",
    "Applied capability",
    4,
  ],
  [
    "automation",
    "AI Automation",
    "Mapping repeatable processes and connecting tools with thoughtful logic.",
    "Workflows · Integrations · Oversight",
    "Applied capability",
    4,
  ],
  [
    "content",
    "Content Strategy",
    "Giving every piece of content a place in the bigger brand story.",
    "Research · Editorial · Messaging",
    "Applied capability",
    4,
  ],
];
function skillsPage() {
  return `<div class="inner-page skills-page">${pageHero("02 / THE CREATIVE TOOLKIT", "Many capabilities.<br> <em>One thoughtful approach.</em>", "A multidisciplinary skill set that connects intelligent technology, clear strategy, and purposeful visual design.")}<div class="skills-summary reveal"><div class="skills-summary-symbol">✳</div><div><span>THE BIGGER PICTURE</span><h2>Technology + strategy + creativity</h2></div><p>Stronger together.<br>Designed to work as one.</p></div><section class="skills-grid" aria-label="Skills dashboard">${skillData
    .map(
      ([i, t, d, tags, level, n], index) =>
        `<article class="skill-card reveal"><div class="skill-top"><span class="service-icon">${icon(i)}</span><span>0${index + 1}</span></div><h2>${t}</h2><p>${d}</p><div class="skill-tags">${tags
          .split(" · ")
          .map((s) => `<span>${s}</span>`)
          .join(
            "",
          )}</div><div class="skill-focus"><span>${level}</span><div class="skill-bars" role="img" aria-label="${level}; self-described focus indicator, not a tested score">${Array.from({ length: 6 }, (_, j) => `<i class="${j < n ? "filled" : ""}"></i>`).join("")}</div></div></article>`,
    )
    .join(
      "",
    )}</section><p class="concept-note">Indicators reflect relative working focus, not certifications, benchmark scores, or verified proficiency ratings.</p><section class="skill-philosophy reveal"><span class="large-asterisk">✳</span><div>${tag("ALWAYS EVOLVING")}<h2>The tools change.<br> <em>The curiosity stays.</em></h2><p>I approach new tools with a simple question: does this help solve the problem better? Learning is part of the process, not a finish line.</p></div><a class="button button-outline" href="#/services">Explore My Services ${arrow}</a></section>${ctaBanner()}</div>`;
}
function servicesPage() {
  return `<div class="inner-page services-page">${pageHero("03 / HOW I CAN HELP", "Your next idea.<br> <em>My next focus.</em>", "From a smarter workflow to a stronger digital presence — thoughtful, connected services built around what your business needs.", '<a class="button button-primary" href="#/contact">Find Your Starting Point ' + arrow + "</a>")}<section class="services-overview-grid" aria-label="Service categories">${categories.map((c) => serviceCard(c, true)).join("")}</section><section class="services-principle reveal"><span>NOT SURE WHERE TO START?</span><h2>Start with the challenge.<br> <em>We’ll find the right combination.</em></h2><p>You don’t need a perfect brief. Tell me what you’re working toward, and we can explore the most useful next step together.</p><a class="text-link" href="#/contact">Let’s figure it out ${arrow}</a></section>${ctaBanner()}</div>`;
}
function serviceDetailPage(c) {
  const examples = projects.filter((p) => p.category === c.id);
  const processDescriptions = {
    ai: [
      "Understand the work and identify useful opportunities.",
      "Define the scope, tools, and human checkpoints.",
      "Develop the workflow and test the core logic.",
      "Connect the pieces with clear controls and fallbacks.",
      "Review behavior and refine what matters.",
    ],
    "digital-marketing": [
      "Understand your audience and current landscape.",
      "Set a clear direction and meaningful objectives.",
      "Create messages and assets with a specific purpose.",
      "Connect the channels and plan a measured rollout.",
      "Review what the evidence says and adapt.",
    ],
    "graphic-design": [
      "Understand the brand, audience, and context.",
      "Explore a visual direction with a clear rationale.",
      "Build a cohesive, expressive design system.",
      "Fine-tune the details through considered feedback.",
      "Prepare organized, ready-to-use creative assets.",
    ],
    "web-design": [
      "Understand your users, goals, and content.",
      "Plan an intuitive structure and user journey.",
      "Give the experience a clear visual language.",
      "Build responsive, accessible interactions.",
      "Test the experience and prepare a careful handoff.",
    ],
  };
  return `<div class="inner-page service-detail ${c.accent}"><a class="back-link" href="#/services">← All services</a><section class="service-detail-hero"><div>${tag(c.number + " / " + c.title.toUpperCase())}<h1>${c.headline}</h1><p>${c.intro}</p><a class="button button-primary magnetic" href="#/contact?service=${c.id}">${c.cta} ${arrow}</a></div><div class="service-emblem" aria-hidden="true"><div class="emblem-ring ring-a"></div><div class="emblem-ring ring-b"></div><div class="emblem-ring ring-c"></div><span>${icon(c.icon)}</span><small>${c.tagline}</small><i>0${categories.indexOf(c) + 1} / DIGITAL POSSIBILITIES</i></div></section><section class="section detail-offerings">${sectionHead("PURPOSEFUL SOLUTIONS", "What we can build together.", "<p>No one-size-fits-all packages.<br>A direction shaped around your needs.</p>")}<div class="detail-service-grid">${c.detailServices.map((s, i) => `<article class="detail-service-card reveal"><span class="detail-number">${String(i + 1).padStart(2, "0")} /</span>${icon([c.icon, "automation", "social", "content", "layers", "target", "marketing"][i])}<h3>${s}</h3><p>${c.descriptions[i]}</p></article>`).join("")}</div></section><section class="section process-section">${sectionHead("A CLEAR PATH FORWARD", c.processTitle)}<div class="process-grid">${c.process.map((s, i) => `<div class="process-step reveal"><span>0${i + 1}<i>${c.id === "ai" ? "↓" : "→"}</i></span><h3>${s}</h3><p>${processDescriptions[c.id][i]}</p></div>`).join("")}</div></section><section class="section">${sectionHead(c.id === "graphic-design" ? "THE DESIGN SHOWCASE" : "POSSIBILITIES IN PRACTICE", "A few ideas to make it real.", '<a class="text-link" href="#/projects">View all explorations ' + arrow + "</a>")}<div class="project-grid">${examples.map(projectCard).join("")}</div><p class="concept-note">Concept / sample projects only. These explorations do not represent commissioned client work or verified results.</p></section>${ctaBanner("Let’s make your next<br> <em>move a meaningful one.</em>", c.tagline + " Tell me what you have in mind.", c.cta)}</div>`;
}
function projectsPage() {
  return `<div class="inner-page portfolio-page">${pageHero("04 / SELECTED EXPLORATIONS", "A little vision.<br> <em>A world of possibilities.</em>", "A collection of self-initiated concepts exploring what happens when intelligence, strategy, and design come together.")}<div class="portfolio-toolbar"><div class="project-filters" role="group" aria-label="Filter projects"><button class="filter-button active" data-filter="all" aria-pressed="true">All <span>12</span></button>${categories.map((c) => `<button class="filter-button" data-filter="${c.id}" aria-pressed="false">${c.label}<span>3</span></button>`).join("")}</div><span class="project-count" aria-live="polite">12 explorations</span></div><div class="portfolio-notice">${icon("ai")}<p>Made to explore, not to overclaim. <span>All projects below are independent concepts or samples — not client commissions.</span></p></div><section class="project-grid portfolio-grid" aria-label="Portfolio projects">${projects.map(projectCard).join("")}</section>${ctaBanner("Your project could be<br> <em>the next conversation.</em>", "See a direction you like? Let’s turn the inspiration into something uniquely yours.")}</div>`;
}
function contactPage(query) {
  const selected = query.get("service") || "";
  return `<div class="inner-page contact-page">${pageHero("05 / LET’S MAKE SOMETHING MATTER", "Let’s build something<br> <em>remarkable together.</em>", "Big idea or first thought, I’d love to hear it. Tell me a little about your project, and let’s explore what’s possible.")}<div class="contact-layout"><section class="contact-info reveal"><span class="availability"><i></i> Open for collaborations</span><h2>A good conversation<br>is a great place to start.</h2><p>No pressure. No complicated process. Just a clear, thoughtful conversation about what you need.</p><a class="contact-method" href="https://wa.me/8801870888668" target="_blank" rel="noopener noreferrer"><span class="contact-icon">${icon("phone")}</span><span><small>WHATSAPP</small><strong>+8801870888668</strong><em>Chat on WhatsApp ↗</em></span></a><a class="contact-method" href="mailto:jahidhasn.marketer@gmail.com"><span class="contact-icon">${icon("mail")}</span><span><small>EMAIL</small><strong>jahidhasn.marketer@gmail.com</strong><em>Send an Email ↗</em></span></a><div class="contact-note">${icon("globe")}<p>Based in Bangladesh.<br><span>Open to working with you, wherever you are.</span></p></div></section><section class="contact-form-panel reveal" aria-labelledby="form-heading"><div class="form-heading"><h2 id="form-heading">Tell me about your project</h2><span>LET’S GET STARTED ↗</span></div><p class="form-subtext">A few details to get the conversation going. <span>* Required</span></p><form id="contact-form" novalidate><div class="form-grid"><div class="form-field"><label for="name">Your name <span>*</span></label><input id="name" name="name" autocomplete="name" placeholder="What should I call you?" required maxlength="100" aria-describedby="name-error"><span class="field-error" id="name-error"></span></div><div class="form-field"><label for="email">Email address <span>*</span></label><input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="254" aria-describedby="email-error"><span class="field-error" id="email-error"></span></div><div class="form-field"><label for="phone">Phone <small>(optional)</small></label><input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="+880 …" maxlength="30" aria-describedby="phone-error"><span class="field-error" id="phone-error"></span></div><div class="form-field"><label for="service">I’m interested in <span>*</span></label><select id="service" name="service" required aria-describedby="service-error"><option value="">Select a service</option>${categories.map((c) => `<option value="${c.id}" ${selected === c.id ? "selected" : ""}>${c.title}</option>`).join("")}<option value="combined">A combination / Let's discuss</option></select><span class="field-error" id="service-error"></span></div><div class="form-field full-width"><label for="message">A little about your project <span>*</span></label><textarea id="message" name="message" rows="5" placeholder="What are you working on? What would you like to achieve?" required minlength="10" maxlength="4000" aria-describedby="message-error"></textarea><span class="field-error" id="message-error"></span></div></div><div class="form-actions"><button type="submit" class="button button-primary magnetic">Prepare My Inquiry ${arrow}</button><button type="reset" class="reset-button">Reset form</button></div><p class="form-disclaimer">${icon("mail")}<span>No data is sent or stored by this site. This form prepares your message so you can send it through your own email app or WhatsApp.</span></p></form><div id="inquiry-result" class="inquiry-result" hidden aria-live="polite"></div></section></div></div>`;
}
function notFoundPage() {
  return `<div class="inner-page not-found">${tag("404 / A SMALL DETOUR")}<h1>This page went<br> <em>off the grid.</em></h1><p>Let’s get you back to something worth exploring.</p><a class="button button-primary" href="#/">Back to Home ${arrow}</a></div>`;
}

const page = document.getElementById("page");
const header = document.getElementById("site-header");
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.getElementById("services-dropdown");
const modal = document.getElementById("project-modal");
let lastProjectTrigger = null;
let firstRender = true;
let revealObserver;
let toastTimeout;

const routeInfo = {
  "/": [
    "Jahid Hasan | AI Expert & Digital Creative",
    "Jahid Hasan connects AI, digital marketing, web design and graphic design to create purposeful digital experiences for businesses.",
  ],
  "/about": [
    "Jahid Hasan | About Me",
    "Meet Jahid Hasan: an independent AI expert, digital marketer, web designer and graphic designer with a connected, business-focused approach.",
  ],
  "/skills": [
    "Jahid Hasan | Skills & Capabilities",
    "Explore capabilities in AI, digital marketing, web design, graphic design, SEO, social media, automation and content strategy.",
  ],
  "/services": [
    "Jahid Hasan | Digital & Creative Services",
    "Explore connected AI, digital marketing, graphic design and web design services by Jahid Hasan.",
  ],
  "/projects": [
    "Jahid Hasan | Concept Projects & Portfolio",
    "Explore 12 independent concept projects in AI, marketing, graphic design and web design. All work is clearly labeled as conceptual.",
  ],
  "/contact": [
    "Jahid Hasan | Contact & Collaborate",
    "Discuss an AI, marketing, design or website project with Jahid Hasan. Contact via WhatsApp at +8801870888668 or email.",
  ],
};
categories.forEach((c) => {
  routeInfo["/services/" + c.id] = [
    `Jahid Hasan | ${c.title}${c.id === "ai" ? "" : " Services"}`,
    c.intro,
  ];
});
function parseRoute() {
  const raw = location.hash.slice(1) || "/";
  const [path, query = ""] = raw.split("?");
  return {
    path: path.length > 1 ? path.replace(/\/+$/, "") : path,
    query: new URLSearchParams(query),
  };
}
function setDropdown(open) {
  dropdownToggle.setAttribute("aria-expanded", String(open));
  dropdown.inert = !open;
  dropdown.classList.toggle("open", open);
}
function setMobile(open) {
  mobileToggle.setAttribute("aria-expanded", String(open));
  mobileToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  mobileNav.inert = !open;
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("nav-open", open);
}
function updateMetadata(path) {
  const [title, description] = routeInfo[path] || [
    "Page Not Found | Jahid Hasan",
    "Find your way back to the portfolio of Jahid Hasan.",
  ];
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content =
    description;
}
function renderRoute() {
  const { path, query } = parseRoute();
  if (location.hash === "#main") {
    document.getElementById("main").focus();
    return;
  }
  setMobile(false);
  setDropdown(false);
  if (modal.open) modal.close();
  if (revealObserver) revealObserver.disconnect();
  let html;
  if (path === "/") html = homePage();
  else if (path === "/about") html = aboutPage();
  else if (path === "/skills") html = skillsPage();
  else if (path === "/services") html = servicesPage();
  else if (path === "/projects") html = projectsPage();
  else if (path === "/contact") html = contactPage(query);
  else if (categories.some((c) => path === "/services/" + c.id))
    html = serviceDetailPage(categoryOf(path.split("/")[2]));
  else html = notFoundPage();
  page.innerHTML = html;
  page.classList.remove("page-enter");
  void page.offsetWidth;
  page.classList.add("page-enter");
  updateMetadata(path);
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active =
      link.dataset.nav === "/"
        ? path === "/"
        : path === link.dataset.nav ||
          (link.dataset.nav === "/services" && path.startsWith("/services/"));
    link.classList.toggle("active", active);
    if (active)
      link.setAttribute(
        "aria-current",
        path === link.dataset.nav ? "page" : "location",
      );
    else link.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "instant" });
  if (!firstRender)
    document.getElementById("main").focus({ preventScroll: true });
  firstRender = false;
  initReveals();
  initMagneticButtons();
  const form = document.getElementById("contact-form");
  if (form) initForm(form);
}
function initReveals() {
  if (
    !("IntersectionObserver" in window) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px 35px 0px" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));
}
function initMagneticButtons() {
  if (
    !matchMedia("(pointer: fine)").matches ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  page.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--mx",
        `${(e.clientX - r.left - r.width / 2) * 0.055}px`,
      );
      el.style.setProperty(
        "--my",
        `${(e.clientY - r.top - r.height / 2) * 0.1}px`,
      );
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    });
  });
}
function filterProjects(filter, button) {
  document.querySelectorAll(".filter-button").forEach((el) => {
    const active = el === button;
    el.classList.toggle("active", active);
    el.setAttribute("aria-pressed", String(active));
  });
  const grid = page.querySelector(".portfolio-grid");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  grid.innerHTML = filtered.map(projectCard).join("");
  grid.classList.remove("filter-enter");
  void grid.offsetWidth;
  grid.classList.add("filter-enter");
  grid
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("is-visible"));
  page.querySelector(".project-count").textContent =
    `${filtered.length} explorations`;
}
function openProject(id, trigger) {
  const p = projects.find((project) => project.id === Number(id));
  if (!p) return;
  lastProjectTrigger = trigger;
  document.getElementById("modal-content").innerHTML =
    `${art(p)}<div class="modal-copy"><div class="modal-labels"><span>CONCEPT / SAMPLE PROJECT</span><span>${categoryOf(p.category).label}</span></div><h2 id="modal-title">${p.title}</h2><p class="modal-subtitle">${p.subtitle}</p><div class="modal-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div><div class="modal-section"><h3>The idea</h3><p>${p.brief}</p></div><div class="modal-section"><h3>The approach</h3><p>${p.solution}</p></div><div class="modal-section"><h3>Exploration scope</h3><ul>${p.deliverables.map((d) => `<li>${icon("check")}${d}</li>`).join("")}</ul></div><p class="modal-disclaimer">This is an independent concept, not a commissioned project or live product. Any brand names and interfaces shown are fictional. No client affiliation or measured results are implied.</p><a class="button button-primary" href="#/contact?service=${p.category}">Let’s Build Something Like This ${arrow}</a></div>`;
  modal.showModal();
  document.body.classList.add("modal-open");
  modal.scrollTop = 0;
  modal.querySelector(".modal-close").focus();
}
function toast(message) {
  const el = document.getElementById("toast");
  clearTimeout(toastTimeout);
  el.textContent = message;
  el.classList.add("visible");
  toastTimeout = setTimeout(() => el.classList.remove("visible"), 6000);
}
function initForm(form) {
  const fields = ["name", "email", "phone", "service", "message"];
  const validate = (field) => {
    const el = form.elements[field],
      value = el.value.trim();
    let error = "";
    if (field === "name" && !value) error = "Please enter your name.";
    if (
      field === "email" &&
      (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    )
      error = "Please enter a valid email address.";
    if (
      field === "phone" &&
      value &&
      (!/^[+\d\s().-]+$/.test(value) || value.replace(/\D/g, "").length < 7)
    )
      error = "Please enter a valid phone number, or leave this blank.";
    if (field === "service" && !value) error = "Please select a service.";
    if (field === "message" && value.length < 10)
      error = "Please share at least 10 characters about your project.";
    el.setAttribute("aria-invalid", String(Boolean(error)));
    document.getElementById(field + "-error").textContent = error;
    return !error;
  };
  fields.forEach((field) => {
    form.elements[field].addEventListener("blur", () => {
      if (form.elements[field].value || form.dataset.submitted) validate(field);
    });
    form.elements[field].addEventListener("input", () => {
      if (form.elements[field].getAttribute("aria-invalid") === "true")
        validate(field);
      document.getElementById("inquiry-result").hidden = true;
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.dataset.submitted = "true";
    const results = fields.map(validate);
    if (results.includes(false)) {
      form.elements[fields[results.indexOf(false)]].focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    const service =
      categoryOf(data.service)?.title || "A combination of services";
    const body = `Hi Jahid,\n\nI'd like to discuss a project.\n\nName: ${data.name.trim()}\nEmail: ${data.email.trim()}\nPhone: ${data.phone.trim() || "Not provided"}\nService: ${service}\n\n${data.message.trim()}\n\nThank you!`;
    const result = document.getElementById("inquiry-result");
    result.innerHTML = `<span class="result-icon">${icon("check")}</span><h3>Your inquiry is ready.</h3><p>Nothing has been sent yet. Choose how to send your prepared message, then review and send it in your own app.</p><div class="result-actions"><a class="button button-primary" href="mailto:jahidhasn.marketer@gmail.com?subject=${encodeURIComponent("Project inquiry — " + service)}&body=${encodeURIComponent(body)}">Open Email App ${arrow}</a><a class="button button-outline" href="https://wa.me/8801870888668?text=${encodeURIComponent(body)}" target="_blank" rel="noopener noreferrer">Open WhatsApp ${arrow}</a></div><details><summary>View / copy my message</summary><pre>${escapeHTML(body)}</pre><button type="button" class="text-link copy-inquiry">Copy message ${icon("content")}</button></details>`;
    result.hidden = false;
    result
      .querySelector(".copy-inquiry")
      .addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(body);
          toast("Message copied. Paste it into your preferred app.");
        } catch {
          toast("Select the message above and copy it manually.");
        }
      });
    toast("Inquiry prepared — nothing has been sent yet.");
    result.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "nearest",
    });
  });
  form.addEventListener("reset", () => {
    delete form.dataset.submitted;
    fields.forEach((field) => {
      form.elements[field].removeAttribute("aria-invalid");
      document.getElementById(field + "-error").textContent = "";
    });
    document.getElementById("inquiry-result").hidden = true;
    requestAnimationFrame(() => {
      form.elements.service.value = "";
      form.elements.name.focus();
    });
  });
}

page.addEventListener("click", (e) => {
  const project = e.target.closest("[data-project]");
  if (project) openProject(project.dataset.project, project);
  const filter = e.target.closest("[data-filter]");
  if (filter) filterProjects(filter.dataset.filter, filter);
});
dropdownToggle.addEventListener("click", () =>
  setDropdown(dropdownToggle.getAttribute("aria-expanded") !== "true"),
);
const servicesNav = document.querySelector(".nav-services");
servicesNav.addEventListener("pointerenter", (e) => {
  if (e.pointerType === "mouse") setDropdown(true);
});
servicesNav.addEventListener("pointerleave", () => {
  if (!servicesNav.contains(document.activeElement)) setDropdown(false);
});
servicesNav.addEventListener("focusout", () => {
  setTimeout(() => {
    if (!servicesNav.contains(document.activeElement)) setDropdown(false);
  }, 0);
});
mobileToggle.addEventListener("click", () =>
  setMobile(mobileToggle.getAttribute("aria-expanded") !== "true"),
);
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-services")) setDropdown(false);
  if (e.target.closest('a[href^="#/"]')) {
    setMobile(false);
    setDropdown(false);
    if (modal.open) modal.close();
  }
  if (header.classList.contains("menu-open") && !header.contains(e.target))
    setMobile(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (dropdownToggle.getAttribute("aria-expanded") === "true") {
      setDropdown(false);
      dropdownToggle.focus();
    }
    if (header.classList.contains("menu-open")) {
      setMobile(false);
      mobileToggle.focus();
    }
  }
  if (e.key === "Tab" && header.classList.contains("menu-open")) {
    const links = mobileNav.querySelectorAll("a");
    const last = links[links.length - 1];
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      mobileToggle.focus();
    }
    if (e.shiftKey && document.activeElement === mobileToggle) {
      e.preventDefault();
      last.focus();
    }
  }
});
modal
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      modal.close();
  }
});
modal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  if (lastProjectTrigger?.isConnected)
    lastProjectTrigger.focus({ preventScroll: true });
});
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("hashchange", renderRoute);
window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 1000 && header.classList.contains("menu-open"))
      setMobile(false);
  },
  { passive: true },
);
document.getElementById("back-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  document.querySelector(".wordmark").focus({ preventScroll: true });
});
document.querySelector(".skip-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("main").focus();
});
document.getElementById("year").textContent = new Date().getFullYear();
const personSchema = document.createElement("script");
personSchema.type = "application/ld+json";
personSchema.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jahid Hasan",
  jobTitle: [
    "AI Expert",
    "Digital Marketing Expert",
    "Web Design Expert",
    "Graphic Design Expert",
  ],
  email: "jahidhasn.marketer@gmail.com",
  telephone: "+8801870888668",
  knowsAbout: [
    "Artificial Intelligence",
    "Digital Marketing",
    "Web Design",
    "Graphic Design",
    "Search Engine Optimization",
    "AI Automation",
    "Content Strategy",
  ],
  sameAs: ["https://wa.me/8801870888668"],
});
document.head.appendChild(personSchema);
onScroll();
renderRoute();
