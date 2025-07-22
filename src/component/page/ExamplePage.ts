import { html } from 'wunphile'
import type { Component } from 'wunphile'
import { Layout } from '../Layout.ts'
import { Code } from '../Code.ts'
import { Counter } from '../Counter.ts'

/**
 * An example page without much content.
 */
export const ExamplePage: Component<void, void> = () => {
	return Layout(
		{
			title: 'Example',
			description: 'Example page. Not much to see here.',
		},
		html`
			<h1>Example Page</h1>
			<p>This is my example page. WOW!</p>
			<div>
				Here's a code snippet:
				${Code(
					{ lang: 'js' },
					`
const a = 1
const b = 2
const c = a + b
console.log(c)
	`,
				)}
			</div>
			<br />
			${Counter({ initialText: 'Click me!' })}
			<br />
			${Counter({ initialCount: 10, initialText: 'Start from 10' })}
			<p>
				This is boring. Go read the <a href="/blog/">blog</a> instead.
			</p>
		`,
	)
}
