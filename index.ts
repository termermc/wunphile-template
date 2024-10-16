import { Wunphile } from 'wunphile'
import { join } from 'node:path'
import { readdir } from 'node:fs/promises'

import { NotFoundPage } from './component/page/NotFoundPage.ts'
import { HomePage } from './component/page/HomePage.ts'
import { ExamplePage } from './component/page/ExamplePage.ts'
import { readBlogPost, readBlogPostsFromDir } from './util/blog.ts'
import type { BlogPost } from './util/blog.ts'
import { BlogPostPage } from './component/page/BlogPostPage.ts'
import { BlogIndexPage } from './component/page/BlogIndexPage.ts'

const ssg = new Wunphile(import.meta.url)

// Basic pages.
ssg.page('/index.html', HomePage)
ssg.page('/example/index.html', ExamplePage)

// Mount static files.
ssg.staticDir('/', './static')

// Read all blog posts.
const blogPosts = await readBlogPostsFromDir(ssg.toProjectPath('./blog'))

// Render blog index.
ssg.page('/blog/index.html', () => BlogIndexPage({ posts: blogPosts }))

// Render blog posts.
for (const post of blogPosts) {
	ssg.page(`/blog/${post.slug}/index.html`, () => BlogPostPage({ post }))
}

// Set the 404 page.
ssg.notFoundPage(NotFoundPage)

await ssg.cli()
