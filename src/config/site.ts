const site = {
  // --- Site Metadata ---
  meta: {
    title: "Dusan Plavak",
    description: "Personal space for dumping my brain",
    author: "Dusan Plavak",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "About", subtitle: "Me", href: "/" },
    { name: "Blog", subtitle: "Posts", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/ddeath", icon: "mdi:github" },
    { name: "Email", href: "mailto:dusan.plavak@gmail.com", icon: "mdi:email" },
  ],

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: false,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Posts",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Some are experiments for learning, some might become serious stuff",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
