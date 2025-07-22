import { html } from 'wunphile'
import type { Component } from 'wunphile'
import { Layout } from '../Layout.ts'

/**
 * The homepage.
 */
export const HomePage: Component<void, void> = () => {
	return Layout(
		{
			description: 'Welcome home!',
			stylesheets: ['/css/home.css'],
			scripts: ['/js/home.js'],
		},
		html`
			<h1>Welcome</h1>
			<p>
				Why not take a look at the <a href="/example/">example page</a>?
			</p>
			<p>Check this out:</p>
			<img
				src="/asset/7-11_was_a_part_time_job.png"
				alt="7/11 was a part time job. Look into it"
			/>
		`,
	)
}
