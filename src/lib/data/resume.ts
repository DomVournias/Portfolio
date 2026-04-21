import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from "lucide-svelte";

import GithubDarkSvg from "$lib/imgs/github-dark.svg";
import GithubSvg from "$lib/imgs/github.svg";
import GmailDarkSvg from "$lib/imgs/gmail-dark.svg";
import GmailSvg from "$lib/imgs/gmail.svg";
import LinkedinDarkSvg from "$lib/imgs/linkedin-dark.svg";
import LinkedinSvg from "$lib/imgs/linkedin.svg";
import TwitterDarkSvg from "$lib/imgs/x-dark.svg";
import TwitterSvg from "$lib/imgs/x.svg";

export let DATA = {
  name: "Dom Vournias",
  initials: "DV",
  url: "https://domvournias.dev",
  location: "Greece",
  locationLink: "https://www.google.com/maps/place/Greece",
  description:
    "Full-stack developer and indie hacker. Studied Fine Arts, ended up building for the web.",
  img: "/images/avatar.png",
  summary:
    "At 15, I was building Tumblr themes in HTML and CSS just for fun, sneaking in JavaScript here and there. I went on to study Fine Arts and Film Production, but code kept pulling me back. In 2017 I made it official.",
  avatarUrl: "/images/avatar.png",
  skills: [
    "Next.js",
    "React",
    "Astro",
    "Gatsby",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "Hono",
    "Stripe",
    "Tailwind CSS",
    "Cloudinary",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "domvournias@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DomVournias",
        icon: GithubSvg,
        navbar: true,
        dark_icon: GithubDarkSvg,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://gr.linkedin.com/in/domvournias",
        icon: LinkedinSvg,
        navbar: true,
        dark_icon: LinkedinDarkSvg,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Dom_Vournias",
        icon: TwitterSvg,
        navbar: true,
        dark_icon: TwitterDarkSvg,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01f64995dbf453a3c6?s=1044578476142100494",
        icon: GmailSvg,
        navbar: false,
        dark_icon: GmailDarkSvg,
      },
      email: {
        name: "Send Email",
        url: "mailto:domvournias@gmail.com",
        icon: GmailSvg,
        navbar: false,
        dark_icon: GmailDarkSvg,
      },
    },
  },
  work: [
    {
      company: "Doulitsa",
      href: "https://doulitsa.gr",
      badges: ["Freelance"],
      location: "Remote",
      title: "Full-time - Full-stack Developer",
      logoUrl: "/images/doulitsa_logo.jpg",
      start: "January 2024",
      end: "March 2026",
      description:
        "Greek freelancer marketplace platform. Built with Next.js and Strapi CMS.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Part-time - Freelancer",
      logoUrl: "/images/upwork_logo.png",
      start: "September 2018",
      end: "January 2024",
      description:
        "Full-stack development for various clients. Technologies include React.js, Next.js, and modern web technologies.",
    },
    {
      company: "Geon Hellas IKE",
      href: "https://geonhellas.gr/",
      badges: ["Contract"],
      location: "Remote",
      title: "Contract - Full-stack Developer",
      logoUrl: "/images/geon_logo.jpg",
      start: "November 2022",
      end: "November 2023",
      description:
        "Full-stack development using Next.js, GraphQL, and related technologies.",
    },
    {
      company: "Papaki.com",
      href: "https://www.papaki.com/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Contract - Podcast Host",
      logoUrl: "/images/papaki_logo.png",
      start: "May 2022",
      end: "February 2023",
      description:
        'Hosted "Devotion" podcast on Spotify covering front-end development and podcasting topics.',
    },
    {
      company: "Hellenic Institute of Cultural Diplomacy - USA",
      href: "https://www.hicd-usa.com/",
      badges: ["Contract"],
      location: "Remote",
      title: "Internship - Web Developer",
      logoUrl: "/images/hicd_logo.png",
      start: "April 2021",
      end: "June 2021",
      description:
        "Web development using CSS, HTML, and related technologies for Nashville-based organization.",
    },
    {
      company: "Hellenic Institute of Cultural Diplomacy",
      href: "https://helleniculturaldiplomacy.com/",
      badges: ["Internship"],
      location: "Remote",
      title: "Internship - Web Developer",
      logoUrl: "/images/hicd_logo.png",
      start: "January 2021",
      end: "July 2021",
      description:
        "Web development focusing on CSS, HTML, and front-end technologies.",
    },
    {
      company: "Hellasfon Networks SA",
      href: "https://hellasfon.com/",
      badges: ["Full-time"],
      location: "Remote",
      title: "Full-time - Frontend Developer",
      logoUrl: "/images/hellasfon_logo.jpg",
      start: "October 2018",
      end: "October 2019",
      description:
        "Frontend development using CSS, HTML, and related web technologies.",
    },
  ],
  education: [
    {
      school: "freeCodeCamp",
      href: "https://www.freecodecamp.org/",
      degree: "Frontend Development Libraries",
      logoUrl: "/images/free_code_camp_logo.jpg",
      start: "Feb 2023",
      end: "Feb 2023",
    },
    {
      school: "University of Central Lancashire",
      href: "https://www.uclan.ac.uk/",
      degree: "Bachelor's degree, Cinematography and Film/Video Production",
      logoUrl: "/images/university_of_central_lancashire_logo.jpg",
      start: "Sep 2014",
      end: "Jun 2015",
    },
    {
      school: "Fine Arts",
      href: "",
      degree:
        "Bachelor of Fine Arts – BFA, Digital Communication and Media/Multimedia",
      logoUrl: "/images/eetf_logo.png",
      start: "Sep 2011",
      end: "Jun 2013",
    },
  ],
  projects: [
    {
      title: "VidRepair",
      href: "https://vidrepair.com",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "Desktop and web application for repairing corrupted video files (MP4, MOV, MKV, AVI). Privacy-first approach - all processing happens locally on the user's machine using FFmpeg. No uploads, no account, no internet required. Features both desktop (Tauri + Rust) and web (Next.js) versions.",
      technologies: [
        "Tauri",
        "Rust",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FFmpeg",
        "shadcn/ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://vidrepair.com",
          icon: Globe,
        },
        {
          type: "GitHub",
          href: "https://github.com/DomVournias/vidrepair",
          icon: Github,
        },
      ],
      image: "/images/vidrepair_landing.png",
      video: "",
    },
    {
      title: "Doulitsa",
      href: "https://doulitsa.gr",
      dates: "January 2024 - March 2026",
      active: true,
      description:
        "Greek freelancer marketplace platform connecting professionals, companies, and service consumers. Features job postings, in-platform messaging, payment processing, and rating systems.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Tailwind CSS",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://doulitsa.gr",
          icon: Globe,
        },
      ],
      image: "/images/doulitsa_landing.png",
      video: "",
    },
  ],
  hackathons: [],
};
