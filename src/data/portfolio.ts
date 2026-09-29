/**
 * Datos del portfolio en un único sitio.
 * Para actualizar el contenido de la web, edita SOLO este archivo.
 */

export interface Skill {
	name: string;
	/** Clases de Tailwind para el degradado, borde y texto de la tarjeta. */
	accent: string;
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	demo: string;
	github: string;
	image?: string;
	images?: string[];
	video?: string;
}

export interface SocialLink {
	id: 'email' | 'github' | 'linkedin';
	label: string;
	href: string;
	/** Texto corto que se muestra bajo la etiqueta. */
	handle: string;
}

export const profile = {
	name: 'Juan Antonio Vidal López',
	initials: 'JAVL',
	role: 'Desarrollo de Aplicaciones Web y Móviles (Técnico Superior DAW)',
	summary:
		'Desarrollador orientado a aplicaciones web y móviles con experiencia sólida en Flutter, Laravel, PHP, Dart, Firebase y Astro. Enfocado en código limpio, arquitecturas escalables, pruebas unitarias y desarrollo asistido por IA (Claude, Cursor Pro).',
	location: 'Cádiz, España',
} as const;

export const navigation = [
	{ label: 'Skills', href: '#skills' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Contacto', href: '#contacto' },
] as const;

export const skills: Skill[] = [
	{ name: 'Astro', accent: 'from-orange-500/20 to-orange-600/5 border-orange-500/30 text-orange-200' },
	{ name: 'Tailwind CSS', accent: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-200' },
	{ name: 'Flutter', accent: 'from-sky-500/20 to-sky-600/5 border-sky-500/30 text-sky-200' },
	{ name: 'Dart', accent: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-200' },
	{ name: 'Laravel', accent: 'from-red-500/20 to-red-600/5 border-red-500/30 text-red-200' },
	{ name: 'PHP', accent: 'from-indigo-500/20 to-indigo-750/5 border-indigo-500/30 text-indigo-200' },
	{ name: 'MySQL', accent: 'from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-200' },
	{ name: 'Firebase', accent: 'from-yellow-500/20 to-yellow-600/5 border-yellow-500/30 text-yellow-200' },
	{ name: 'WordPress', accent: 'from-blue-600/20 to-blue-700/5 border-blue-600/30 text-blue-200' },
	{ name: 'Git & GitHub', accent: 'from-orange-600/20 to-orange-700/5 border-orange-600/30 text-orange-100' },
	{ name: 'Vercel', accent: 'from-zinc-400/20 to-zinc-500/5 border-zinc-400/30 text-zinc-200' },
	{ name: 'Claude Code', accent: 'from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-200' },
];

export const projects: Project[] = [
	{
		title: 'Panel de Métricas',
		description:
			'Sistema avanzado de análisis y recopilación de datos de todos los centros registrados. Permite comparar en tiempo real qué funcionalidades se utilizan con mayor y menor frecuencia para optimizar el rendimiento y la toma de decisiones.',
		tags: ['Flutter', 'Dart', 'Firebase', 'Analytics', 'Dashboard'],
		demo: '#',
		github: 'https://github.com/juanvidal02',
		video: 'Grabación de pantalla 2026-07-06 142117.mp4',
	},
	{
		title: 'Cajasol x Kids and Clouds',
		description:
			'Landing page promocional e interactiva desarrollada en colaboración, optimizada para alto rendimiento, diseño responsive y desplegada con Astro y Tailwind CSS.',
		tags: ['Astro', 'Tailwind', 'Vercel'],
		demo: '#',
		github: 'https://github.com/juanvidal02',
		video: 'Cajasol.mp4',
	},
];

export const socials: SocialLink[] = [
	{ id: 'email', label: 'Email', href: 'mailto:vidaljuan341@gmail.com', handle: 'vidaljuan341@gmail.com' },
	{ id: 'github', label: 'GitHub', href: 'https://github.com/juanvidal02', handle: '@juanvidal02' },
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/juan-antonio-vidal-lopez',
		handle: 'Perfil profesional',
	},
];
