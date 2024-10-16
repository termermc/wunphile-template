import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Regex that blog post files must match.
 * The first capture group is the unix epoch timestamp.
 * The second capture group is the slug.
 *
 * @example
 * ```js
 * '1729086187482_hello-world.md'.match(blogFileRegex)
 * // => ['1729086187482_hello-world.md', '1729086187482', 'hello-world']
 * ```
 */
const blogFileRegex = /^(\d+)_([a-z0-9-]+)\.md$/i

/**
 * Regex that blog posts must match.
 * The first capture group is the header title.
 *
 * @example
 * ```js
 * `# Hello World
 *
 * This is a blog post.`.match(blogHeaderRegex)
 * // => ['# Hello World', 'Hello World']
 * ```
 */
const blogHeaderRegex = /^#\s+(.+)/

/**
 * A blog post.
 */
export type BlogPost = {
	/**
	 * The blog post's title.
	 */
	title: string

	/**
	 * The timestamp when the post was first published.
	 */
	timestamp: Date

	/**
	 * The blog post's slug.
	 */
	slug: string

	/**
	 * The blog post's markdown content.
	 */
	content: string

	/**
	 * The first paragraph in the post's content, or undefined if none.
	 */
	firstParagraph: string | undefined
}

/**
 * Reads a blog post from a file.
 * @param path The path to the blog post file.
 * @returns The blog post.
 * @throws {Error} If the file is not a valid blog post.
 */
export async function readBlogPost(path: string): Promise<BlogPost> {
	const slashIdx = path.lastIndexOf('/')
	let filename: string
	if (slashIdx === -1) {
		filename = path
	} else {
		filename = path.slice(slashIdx + 1)
	}

	const filenameMatch = filename.match(blogFileRegex)
	if (!filenameMatch) {
		throw new Error(`Invalid blog post file name: ${filename}`)
	}

	const [, timestamp, slug] = filenameMatch

	// Read the file
	let content = await readFile(path, 'utf8')

	// Check if it starts with a header
	const headerMatch = content.match(blogHeaderRegex)
	if (!headerMatch) {
		throw new Error(`Blog post ${filename} does not have a header. The first line must be a level 1 heading. Example:\n\n# Hello World`)
	}

	const [, title] = headerMatch

	content = content
		.substring(headerMatch[0].length)
		.trim()

	// Try to find the first paragraph.
	const nlIdx = content.indexOf('\n')
	let firstParagraph: string | undefined
	if (nlIdx !== -1) {
		firstParagraph = content.substring(0, nlIdx)
	}

	return {
		title,
		timestamp: new Date(parseInt(timestamp)),
		slug,
		content,
		firstParagraph,
	}
}

/**
 * Reads all blog posts in a directory.
 * @param path The directory to read from.
 * @returns The blog posts.
 * @throws {Error} If any of the files in the directory are not valid blog posts.
 */
export async function readBlogPostsFromDir(path: string): Promise<BlogPost[]> {
	const res: BlogPost[] = []

	for (const file of await readdir(path)) {
		res.push(await readBlogPost(join(path, file)))
	}

	return res
}
