const portfolio = {
  site: {
    title: "Tarunna Sen",
    role: "Full-Stack Developer",
    location: { city: "Chattogram", countryCode: "BD", country: "Bangladesh" },
    year: 2026,
  },

  nav: [
    { label: "Home", href: "#", current: true, icon: "star" },
    { label: "About", href: "#about", icon: "person" },
    { label: "Case Study", href: "#work", icon: "grid" },
  ],

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tarunna-sen/",
      color: "var(--ca-yellow)",
      ink: "#fff",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      label: "GitHub",
      href: "https://github.com/T4RUNN4",
      color: "var(--ca-ink)",
      ink: "#fff",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      label: "Email",
      href: "mailto:tarunnasen@gmail.com",
      color: "var(--ca-green)",
      ink: "#fff",
      path: "M2 4h20v16H2V4zm2 2v.5l8 5.5 8-5.5V6H4zm16 12V10.2l-8 5.5-8-5.5V18h16z",
    },
  ],

  splash: {
    hello: "Oh, hello!",
    found: "You found me!",
  },

  hero: {
    label: "my name is",
    name: "TARUNNA",
    notes: [
      { text: "Made things", color: "var(--ca-purple)", rotate: -4 },
      {
        text: "Sweat the details",
        lines: ["Sweat the", "details"],
        color: "var(--ca-yellow)",
        ink: "#fff",
        rotate: 4,
      },
    ],
    status: "Open to new work and good problems",
    role: "Full-Stack Developer",
    location: { city: "Chattogram", countryCode: "BD", country: "Bangladesh" },
    headline: ["I", "develop", "websites", "that", "feels", "like", "it", "understand", "your", "needs."],
    headlineAccentIndex: 4,
    cta: { label: "Contact me", href: "mailto:tarunnasen@gmail.com" },
    floats: [
      {
        src: "/Tarunna-web.jpg",
        className: "left-[12%] top-[52%] -rotate-6",
      },
      {
        src: "/Tarunna-web.jpg",
        className: "right-[12%] top-[56%] rotate-6",
      },
    ],
  },

  about: {
    label: "about me!",
    title: "what's up",
    body: "I'm a Full-Stack Developer who loves to make websites that just feels right. ✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier. 🎨",
    photos: [
      {
        src: "/Tarunna-web.jpg",
        caption: "2026",
        rotate: "-rotate-3",
      },
    ],
    skills: [
      {
        label: "MERN Stack",
        logos: [
          "/logos/mongodb.svg",
          "/logos/express.svg",
          "/logos/react.svg",
          "/logos/nodejs.svg",
        ],
      },
      { label: "TypeScript", logos: ["/logos/typescript.svg"] },
      { label: "Node.js", logos: ["/logos/nodejs.svg"] },
      { label: "Git", logos: ["/logos/git.svg"] },
      { label: "GitHub", logos: ["/logos/github.svg"] },
      { label: "Postman", logos: ["/logos/postman.svg"] },
      { label: "Vercel", logos: ["/logos/vercel.svg"] },
      { label: "BetterAuth", logos: ["/logos/betterauth.svg"] },
    ],
  },

  works: {
    label: "explore my work!",
    title: "FEATURED WORKS",
    blurb: "A few products I helped make simpler, calmer, and easier to trust.",
    projects: [
      {
        id: "olabu",
        number: "01",
        date: "Completed",
        title: "OLABU",
        description:
          "OLABU is a customized wallboards brand from Bangladesh that provides PVC wallboards in different size and design as per customers requirements. This website fulfils OLABU's purpose of showing their products and customer review",
        href: "https://the-olabu.vercel.app/",
        tags: ["TypeScript", "NextJS", "Mongodb"],
        image: "/projects/olabu.png",
        theme: "blue",
      },
      {
        id: "legal-ease",
        number: "02",
        date: "Completed",
        title: "Legal Ease",
        description:
          "Legal Ease is a marketplace for lawyers and clients similar to Fiverr and upwork. Here lawyers can come and registed their profile as well as clients can browse and hire lawyer for their legal process. A one stop solution for both lawyer and clients",
        href: "https://legal-ease-tarunna.vercel.app/",
        tags: ["NextJS", "ExpressJS", "Mongodb"],
        image: "/projects/legal-ease.jpeg",
        theme: "ink",
      },
    ],
  },

  contact: {
    title: "Let's talk",
    description:
      "Got a project, a hard problem, or just want to say hi? Send it over. I read every message.",
    comment: {
      author: "Tarunna Sen",
      avatar: "/Tarunna-web.jpg",
      note: "Open to freelance, contract work, and interesting conversations about annoying bugs.",
      reactions: 1,
    },
    card: {
      eyebrow: "let's make something together",
      title: "CONTACT",
      hint: "drop a line",
      href: "mailto:tarunnasen@gmail.com",
    },
  },

  footer: {
    name: "Tarunna Sen",
    role: "Full-Stack Developer",
    links: [
      { label: "About", href: "#about" },
      { label: "Case Study", href: "#work" },
    ],
    copyright: "© 2026 Tarunna Sen",
    credit: {
      label: "Inspired from",
      href: "https://portfoliofy.io/preview/creative-artsy",
    },
  },
};

export const projectThemes = {
  blue: {
    bg: "var(--ca-blue)",
    text: "text-white",
    muted: "text-white/90",
    tag: "bg-white text-[var(--ca-ink)]",
  },
  ink: {
    bg: "var(--ca-ink)",
    text: "text-white",
    muted: "text-white/90",
    tag: "bg-white text-[var(--ca-ink)]",
  },
  yellow: {
    bg: "var(--ca-yellow)",
    text: "text-white",
    muted: "text-white/90",
    tag: "bg-white text-[var(--ca-ink)]",
  },
  magenta: {
    bg: "var(--ca-magenta)",
    text: "text-[var(--ca-ink)]",
    muted: "text-[var(--ca-ink)]/85",
    tag: "bg-[var(--ca-ink)] text-white",
  },
};

export default portfolio;
