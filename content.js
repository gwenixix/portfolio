/*
  EDIT THIS FILE TO CHANGE THE WEBSITE.
  - Photos: put image files in the "images" folder, then write the filename here, e.g. "images/me.jpg".
  - Leave an image as "" and the site shows a clean placeholder instead.
  - To add a brand: copy one block inside "brands" and change the text.
*/
window.SITE = {
  name: "Black Ink by Z.",
  owner: "Zyrah Gwen I. Suaybaguio",
  tagline: "I write content that makes sense of complexity.",
  role: "SEO Strategist and Content Manager",
  location: "Davao City, Philippines",
  email: "gwensuaybaguioofficial@gmail.com",
  phone: "+63 946 334 9092",
  linkedin: "https://www.linkedin.com/in/gwenofficial/",
  blog: "https://blackinkbyz.wordpress.com/",
  photo: "images/gwen.jpg", // your photo in the images folder

  about: [
    "I lead content and SEO for software, service, and personal brands. My work runs from keyword research and site audits to scripting, publishing, and reporting.",
    "I run Black Ink Digital, a family-owned content studio, and I have managed cross-functional teams of technical writers, designers, and social media managers. Before marketing, I worked in research and taught at university, which is why I explain complex topics clearly."
  ],

  stats: [
    { value: "7+", label: "Years in content and SEO" },
    { value: "6", label: "Industries served" },
    { value: "9", label: "Platforms managed, from Google to TikTok" }
  ],

  /* Scrolling strip of platforms. Add or remove names freely. */
  platforms: ["Google", "YouTube", "Instagram", "TikTok", "Amazon", "Pinterest", "Twitter / X", "LinkedIn", "Facebook"],

  services: [
    { title: "SEO Strategy", text: "Keyword research, on-page and off-page optimization, and full site audits across Google, YouTube, Pinterest, and Amazon." },
    { title: "Content Management", text: "Blogs, website copy, and email sequences, from concept to publishing and performance review." },
    { title: "Social Media", text: "Content calendars and trend-led, platform-native content for Instagram, TikTok, Facebook, X, and LinkedIn, plus scripts for short and long form video." },
    { title: "Website Management", text: "WordPress publishing, internal linking, metadata, indexing, and site health." },
    { title: "Ecommerce", text: "Amazon account health, listings, and storefront content that stays compliant and converts." },
    { title: "Technical Writing", text: "Documentation, SOPs, and user manuals that turn complex products into clear steps." }
  ],

  /* BRANDS: category is used for the filter buttons. Add as many as you like. */
  brands: [
    {
      name: "Black Ink Digital",
      category: "Content Studio",
      years: "2026 to Present",
      image: "", // e.g. "images/black-ink.jpg"
      link: "",
      summary: "Family-owned content studio serving service-based, SaaS, and personal brand clients.",
      did: ["Strategy and production for blogs, web copy, and video", "WordPress, on-page SEO, and site health", "Amazon account and listing management"]
    },
    {
      name: "Epazz / Zenatech",
      category: "Software",
      years: "2019 to 2026",
      image: "",
      link: "",
      summary: "Multiple software brands. Started as a freelance technical writer, grew into leading the content team.",
      did: ["Led technical writers, designers, and social media managers", "Conversion copy for funnels, emails, ads, and landing pages", "SEO strategy, guest posts, and product documentation"]
    },
    {
      name: "Happy Media Press, Inc.",
      category: "Marketing",
      years: "2025 to 2026",
      image: "",
      link: "",
      summary: "Content and SEO specialist for a marketing company.",
      did: ["Full website audits and content gap analysis", "Repurposed podcasts and transcripts into SEO blogs", "Trend monitoring turned into content briefs"]
    },
    {
      name: "Video Business Brand", // replace with the real name
      category: "Video",
      years: "",
      image: "",
      link: "",
      summary: "Content and SEO for a video production business.",
      did: ["Video SEO and channel optimization", "Scripts and content planning"]
    },
    {
      name: "Logistics Company", // replace with the real name
      category: "Logistics",
      years: "",
      image: "",
      link: "",
      summary: "Website and content support for a logistics company.",
      did: ["Website copy and blog content", "On-page SEO"]
    },
    {
      name: "Self-Help YouTuber and Podcast", // replace with the real name
      category: "Personal Brand",
      years: "",
      image: "",
      link: "",
      summary: "Content strategy for a personal brand built on YouTube and a podcast.",
      did: ["Repurposed episodes into blogs and short form", "YouTube SEO and titles"]
    }
  ],

  experience: [
    { role: "Content Strategist and Brand Manager", org: "Black Ink Digital", when: "Apr 2026 to Present" },
    { role: "Content Specialist (Freelance)", org: "Happy Media Press, Inc.", when: "Aug 2025 to Apr 2026" },
    { role: "Technical and SEO Content Manager", org: "Epazz, Inc. / Zenatech, Inc.", when: "Aug 2024 to Apr 2026" },
    { role: "Lecturer (Part-time)", org: "Mapua Malayan Colleges Mindanao", when: "Aug 2023 to Jun 2024" },
    { role: "Project Technical Assistant V", org: "Department of Science and Technology", when: "Feb 2023 to Jun 2024" },
    { role: "Science Research Assistant", org: "Department of Science and Technology", when: "Apr 2022 to Feb 2023" },
    { role: "Technical Writer (Freelance)", org: "Epazz, Inc. / Zenatech, Inc.", when: "Jun 2019 to Aug 2024" }
  ],

  tools: ["SEMrush", "Ahrefs", "vidIQ", "Google Analytics", "Google Search Console", "WordPress", "YouTube Studio", "HubSpot", "Klaviyo", "Canva", "Jira", "Asana", "Trello", "Notion", "Slack", "Video Editing"],

  certs: [
    "Advanced Content Marketing with Brian Dean (Semrush)",
    "Content-Led SEO with Brian Dean (Semrush)",
    "Magnetic Content Strategy Using Semrush",
    "Social Media Marketing Crash Course (Semrush)",
    "Professional Diploma in Agile and Project Management",
    "Foundations of Project Management (Google)",
    "Custom Reports in Google Analytics (Coursera)",
    "Digital Marketing with Canva (Coursera)"
  ],

  publications: "4 Scopus-indexed publications and 6 international conference papers presented in Japan, the Czech Republic, Spain, and the Philippines."
};
