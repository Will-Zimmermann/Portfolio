/**
 * Scholar Pages — primary configuration
 *
 * Start here for identity, profile, links, and page introductions.
 * Publications, CV records, projects, courses, and posts live in src/data
 * and src/content so this file stays quick to scan.
 */
import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	// Required: the four values most sites should personalize first.
	author: "William R. Zimmermann",
	siteUrl: "https://astro-theme-scholars.pages.dev",
	hero: {
		headline:
			"Will Zimmermann",
		subheadline:
			"Hello! I am a student at the University of Georgia, pursuing a degree in Electrical Engineering. Born and raised in Athens GA, I have always been passionate about building and fixing things, and I am excited to continue learning and tackling new challenges in this field.",
		//statusBadge: "Open to collaboration",
	},

	// Common profile and discovery settings.
	description:
		"Academic portfolio of William R. Zimmermann, a student at the University of Georgia pursuing a degree in Electrical Engineering.",
	keywords: [
		"academic portfolio",
		"electrical engineering",
		"william zimmermann",
		"university of georgia",
	],
	// Optional social-preview overrides:
	// language: "en",
	// locale: "en_US",
	// ogImage: "/social-card.png", // Prefer a 1200 × 630 raster image.
	// ogImageAlt: "Your Name — academic portfolio",
	// ogImageWidth: 1200,
	// ogImageHeight: 630,
	affiliations: [
		{
			role: "Student",
			department: "School of Electrical and Computer Engineering",
			institution: "University of Georgia",
			url: "https://engineering.uga.edu/schools/sece/",
		},
	],
	researchInterests: [
		"Robotics",
		"Embedded Systems",
		"Signal Processing",
		"PCB Design",
	],
	socialLinks: [
		{
			label: "GitHub",
			href: "https://github.com/your-handle",
			icon: "i-mdi:github",
		},
		{
			label: "Email",
			href: "mailto:you@example.edu",
			icon: "i-mdi:email-outline",
		},
	],

	// Optional: omit any entry to use the concise academic default copy.
	pageTitles: {
		about: {
			description:
				"A brief introduction to my academic and professional background, research interests, and personal pursuits.",
		},
		/*
		researches: {
			description:
				"Peer-reviewed publications, working papers, and essays on learning analytics, open scholarship, and civic technology.",
		},
		*/
		projects: {
			description:
				"Open-source tools and research infrastructure projects for the academic community.",
		},
		/*
		teaching: {
			description:
				"Courses designed to bridge technical skills with critical inquiry in learning sciences and information studies.",
		},
		
		posts: {
			description:
				"Thoughts on academia, research methods, technology, and the spaces in between.",
		},
		*/
	},

	// Homepage composition: switch off any block you do not want to display.
	homeBlocks: {
		hero: { enabled: true },
		publications: { enabled: false},
		posts: { enabled: false },
	},
});

export default siteConfig;
