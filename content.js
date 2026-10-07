/*
  EDIT THIS FILE TO CHANGE THE WEBSITE.
  - Photos: put image files in the "images" folder, then write the filename here, e.g. "images/me.jpg".
  - Leave an image as "" and the site shows a clean placeholder instead.
  - To add a brand: copy one block inside "brands", give it a new unique "slug", and change the text.
    Each brand automatically gets its own page at brand.html?b=<slug>.
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
  photo: "images/gwen.jpg",

  about: [
    "I create content and SEO for software, service, and personal brands. My work runs from content and keyword research and site audits to scheduling, publishing, and reporting.",
    "I have managed cross-functional teams of technical writers, designers, and social media managers. Before marketing, I worked in research and taught at university, which is why I understand the importance of explaining topics and content clearly."
  ],

  stats: [
    { value: "7+", label: "Years in content and SEO" },
    { value: "5", label: "Brands featured below" },
    { value: "9", label: "Platforms managed, from Google to TikTok" }
  ],

  /* Scrolling strip of platforms. */
  platforms: ["Google", "YouTube", "Instagram", "TikTok", "Amazon", "Pinterest", "Twitter / X", "LinkedIn", "Facebook"],

  services: [
    { title: "SEO Strategy", text: "Keyword research, on-page and off-page optimization, and full site audits across Google, YouTube, Pinterest, and Amazon." },
    { title: "Content Management", text: "Blogs, website copy, and email sequences, from concept to publishing and performance review." },
    { title: "Social Media", text: "Content calendars and trend-led, platform-native content for Instagram, TikTok, Facebook, X, and LinkedIn, plus scripts for short and long form video." },
    { title: "Website Management", text: "WordPress publishing, internal linking, metadata, indexing, and site health." },
    { title: "Ecommerce", text: "Amazon listings, keyword work, and brand content that stays compliant and converts." },
    { title: "Automation", text: "Notion and Zapier workflows for proposals, messages, and repeat processes." }
  ],

  brands: [
    {
      slug: "epazz",
      name: "Epazz, Inc.",
      category: "Software",
      years: "2019 to 2026",
      role: "Freelance Technical Writer, then Technical and SEO Content Manager",
      image: "", // e.g. "images/epazz.jpg"
      link: "",
      links: [],
      summary: "Software brand. I started as a freelance technical writer and grew into leading the content team.",
      overview: "I wrote and managed content for Epazz's software products, moving from freelance technical writing into managing content strategy and delivery across the brand.",
      did: [
        "Blogs, guest posts, and web content for SEO and product discoverability",
        "Social media content, including LinkedIn",
        "Conversion copy for funnels, email sequences, paid ads, and landing pages",
        "Product documentation written with product managers, engineers, and QA",
        "Led a team of technical writers, graphic designers, and social media managers"
      ],
      tools: ["SEMrush", "Ahrefs", "WordPress", "HubSpot", "Google Analytics", "Search Console", "Jira", "Canva"],
      platforms: ["Google", "LinkedIn"],
      results: [], // add real numbers, e.g. "Grew organic traffic 120% in 6 months"
      gallery: []  // e.g. ["images/epazz-1.jpg"]
    },
    {
      slug: "zenatech",
      name: "Zenatech, Inc.",
      category: "Software",
      years: "2019 to 2026",
      role: "Freelance Technical Writer, then Technical and SEO Content Manager",
      image: "",
      link: "",
      links: [],
      summary: "Software brand. Blogs, social media, and LinkedIn content alongside technical documentation.",
      overview: "I created content for Zenatech's software products and kept voice and structure consistent across blogs, social, and documentation.",
      did: [
        "Blogs and web content for SEO",
        "Social media content, including LinkedIn",
        "Standardized documentation structure and tone",
        "Maintained accuracy and version control in CMS and documentation tools"
      ],
      tools: ["SEMrush", "WordPress", "Google Analytics", "Search Console", "Canva"],
      platforms: ["Google", "LinkedIn"],
      results: [],
      gallery: []
    },
    {
      slug: "happy-media-press",
      name: "Happy Media Press, Inc.",
      category: "Personal Brand",
      years: "2025 to 2026",
      role: "Content Specialist, leading content management",
      image: "",
      link: "https://sciencespirithappy.com/",
      links: [
        { label: "Website: sciencespirithappy.com", url: "https://sciencespirithappy.com/" },
        { label: "YouTube channel", url: "https://www.youtube.com/channel/UCKkHuce2JgfpeN87Xu-TWrQ" }
      ],
      summary: "Self-help YouTuber and podcaster. I led her content management team across SEO, website, and repurposed content.",
      overview: "Happy Media Press is the company behind a self-help YouTuber and podcaster. I led the content management team and ran SEO across her website and channels.",
      did: [
        "Led the content management team",
        "SEO strategy: keyword research and on-page and off-page optimization on Google, YouTube, and Pinterest",
        "WordPress publishing, formatting, updates, and performance work",
        "Full website audits covering technical SEO, content gaps, UX, and site health",
        "Turned podcast and video transcripts into SEO-optimized blogs",
        "Tracked trends and viral topics and turned them into content briefs"
      ],
      tools: ["WordPress", "Google Analytics", "Search Console", "vidIQ", "YouTube Studio", "SEMrush"],
      platforms: ["Google", "YouTube", "Pinterest"],
      results: [],
      gallery: []
    },
    {
      slug: "tempus-media",
      name: "Tempus Media",
      category: "Video Production",
      years: "",
      role: "SEO and Automation",
      image: "",
      link: "https://www.tempusmedia.com.au/",
      links: [{ label: "tempusmedia.com.au", url: "https://www.tempusmedia.com.au/" }],
      summary: "Video production company. SEO for their website and blogs, plus Notion and Zapier automation for their process and proposals.",
      overview: "I helped a video production company get found online and run smoother behind the scenes, with SEO on the front end and automation on the back end.",
      did: [
        "SEO for the website and blog content",
        "Built Notion systems for their process and proposals",
        "Automated proposals, messages, and repeat tasks with Zapier"
      ],
      tools: ["Notion", "Zapier", "WordPress", "Google Analytics", "Search Console"],
      platforms: ["Google"],
      results: [],
      gallery: []
    },
    {
      slug: "sc-solutions",
      name: "SC Solutions Inc.",
      category: "Logistics",
      years: "",
      role: "SEO and Blog Content",
      image: "",
      link: "https://scsolutionsinc.com/",
      links: [{ label: "scsolutionsinc.com", url: "https://scsolutionsinc.com/" }],
      summary: "Logistics company. SEO for their website and blog content.",
      overview: "SC Solutions provides logistics solutions for growing businesses. I worked on their search visibility and blog content.",
      did: [
        "SEO for the website",
        "Blog content built around logistics search topics"
      ],
      tools: ["SEMrush", "Google Analytics", "Search Console", "WordPress"],
      platforms: ["Google"],
      results: [],
      gallery: []
    },
    {
      slug: "kranis",
      name: "Kranis BV",
      category: "Ecommerce",
      years: "",
      role: "Amazon SEO and Brand Content",
      image: "",
      link: "",
      links: [],
      summary: "Ecommerce home brands sold on Amazon across Europe. SEO, brand content, images, and keyword work.",
      overview: "Kranis BV sells home brands on Amazon in Europe. I handled listing SEO and brand content so the products rank and convert.",
      did: [
        "Amazon listing SEO and keyword research",
        "Brand content for listings and storefronts",
        "Image content for listings",
        "Keyword classification and placement with Data Dive"
      ],
      tools: ["Data Dive", "Claude AI", "Amazon Seller Central", "Canva"],
      platforms: ["Amazon"],
      results: [],
      gallery: []
    }
  ],

  experience: [
    { role: "Founder, Black Ink Digital (a content studio in its early stage)", org: "Independent", when: "Apr 2026 to Present" },
    { role: "Content Specialist (Freelance)", org: "Happy Media Press, Inc.", when: "Aug 2025 to Apr 2026" },
    { role: "Technical and SEO Content Manager", org: "Epazz, Inc. / Zenatech, Inc.", when: "Aug 2024 to Apr 2026" },
    { role: "Lecturer (Part-time)", org: "Mapua Malayan Colleges Mindanao", when: "Aug 2023 to Jun 2024" },
    { role: "Project Technical Assistant V", org: "Department of Science and Technology", when: "Feb 2023 to Jun 2024" },
    { role: "Science Research Assistant", org: "Department of Science and Technology", when: "Apr 2022 to Feb 2023" },
    { role: "Technical Writer (Freelance)", org: "Epazz, Inc. / Zenatech, Inc.", when: "Jun 2019 to Aug 2024" }
  ],

  tools: ["Claude Code", "Claude AI", "Zapier", "Data Dive", "SEMrush", "Ahrefs", "vidIQ", "Google Analytics", "Google Search Console", "WordPress", "YouTube Studio", "HubSpot", "Klaviyo", "Canva", "Instagram", "TikTok", "Facebook", "Buffer", "Jira", "Asana", "Trello", "Notion", "Slack", "Video Editing"],

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

  publicationsIntro: "Scopus-indexed publications and international conference papers presented in Japan, the Czech Republic, Spain, and the Philippines.",
  publications: [
    { title: "Evaluation of surface sediments of mining silted river-marine ecosystems in Banaybanay, Davao Oriental: Initial step towards regenerative mining", venue: "Environmental Science and Engineering, Springer Nature Singapore, 2025", url: "https://doi.org/10.1007/978-981-96-6657-7_3" },
    { title: "Application of Ethaline Deep Eutectic Solvent for Dissolution of Gold in Sulfidic Refractory Ore Under Varying pH", venue: "METAL International Conference on Metallurgy and Materials, 2024", url: "https://doi.org/10.37904/metal.2024.4911" },
    { title: "Gold Metal Dissolution from Refractory Ore through Calcium Hypochlorite and Sodium Chloride Leaching Process", venue: "METAL International Conference on Metallurgy and Materials, 2024", url: "https://doi.org/10.37904/metal.2024.4912" },
    { title: "Thermodynamic stability and density functional theory simulations of gold complexes in Ethaline DES leaching of refractory ores at varied temperatures", venue: "Materials Science Forum, 1153, 2025", url: "https://doi.org/10.4028/p-ebm0rl" }
  ]
};
