export type Post = {
	title: string
	slug: string
	description: string
	date: string
	lastModified?: string
	categories: string[]
	published: boolean
	image?: string
	author?: string
}
