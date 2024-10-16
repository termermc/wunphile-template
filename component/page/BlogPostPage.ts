import { html } from 'wunphile'
import type { Component, RenderFragments } from 'wunphile'
import type { BlogPost } from '../../util/blog.ts'
import { Layout } from '../Layout.ts'
import { marked } from 'marked'

type BlogPostPageProps = {
	/**
	 * The blog post to render.
	 */
	post: BlogPost
}

/**
 * A blog post.
 */
export const BlogPostPage: Component<BlogPostPageProps, void> = ({ post }) => {
	// Render markdown with marked library.
	const contentHtml = marked.parse(post.content, { async: false })

	return Layout({
		title: post.title,
		description: post.firstParagraph,
		stylesheets: [
			'/css/blog.css',
		],
	}, html`
		<h1 class="blog-post-title">${post.title}</h1>
		<div class="blog-post-meta">
			<span class="blog-post-meta-date">Posted on ${post.timestamp.toLocaleDateString()}</span>
		</div>
		<div class="blog-post-content">
			${html(contentHtml)}
		</div>
		<hr/>
		<i><a href="/blog/">Back to index.</a></i>
	`)
}
