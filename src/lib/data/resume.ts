import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from 'lucide-svelte';

import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

export let DATA = {
	name: 'Dom Vournias',
	initials: 'DV',
	url: 'https://domvournias.dev',
	location: 'Greece',
	locationLink: 'https://www.google.com/maps/place/Greece',
	description: 'Full-stack Developer, building digital products',
	summary:
		'7+ years of full-stack experience building production web applications. Lead developer of doulitsa.gr, a Greek freelancer marketplace serving professionals, companies, and service consumers. Proficient across the entire stack — from database design and API development to responsive frontend interfaces.',
	avatarUrl: '/images/avatar.jpg',
	skills: [
		'SvelteKit',
		'TypeScript',
		'JavaScript',
		'React',
		'Next.js',
		'Node.js',
		'Supabase',
		'PostgreSQL',
		'Prisma',
		'Stripe',
		'Tailwind CSS',
		'AWS',
		'Docker',
		'Git'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '/projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'domvournias@gmail.com',
		tel: '',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/DomVournias',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/domvournias/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/domvournias',
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:domvournias@gmail.com',
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'doulitsa.gr',
			href: 'https://doulitsa.gr',
			badges: ['Lead Developer'],
			location: 'Remote',
			title: 'Full-stack Developer',
			logoUrl: '',
			start: 'September 2018',
			end: '',
			description:
				'Lead developer of a Greek freelancer marketplace platform connecting professionals, companies, and service consumers. Built with Next.js 15, TypeScript, Supabase PostgreSQL, Prisma ORM, Stripe payments, and Cloudinary. Full product lifecycle: job postings → messaging → payments → ratings. 7+ years of active development and maintenance.'
		}
	],
	education: [
		{
			school: 'Self-taught / Online',
			href: '',
			degree: 'Full-stack Web Development',
			logoUrl: '',
			start: '2017',
			end: '2018'
		}
	],
	projects: [
		{
			title: 'doulitsa.gr',
			href: 'https://doulitsa.gr',
			dates: 'Sep 2018 - Present',
			active: true,
			description:
				'Greek freelancer marketplace platform connecting professionals, companies, and service consumers. Full-stack platform with 7+ years of active development. Features job postings, in-platform messaging, payment processing, and rating systems.',
			technologies: [
				'Next.js',
				'TypeScript',
				'Supabase',
				'PostgreSQL',
				'Prisma',
				'Stripe',
				'Tailwind CSS',
				'Cloudinary'
			],
			links: [
				{
					type: 'Website',
					href: 'https://doulitsa.gr',
					icon: Globe
				}
			],
			image: '',
			video: ''
		}
	],
	hackathons: []
};
