import { html, text, type RenderFragments } from 'wunphile'
import type { Component } from 'wunphile'

import hljs from 'highlight.js'

type CodeProps = {
	/**
	 * The code block language.
	 * Optional.
	 */
	lang?: string

	/**
	 * Whether to trim surrounding whitespace.
	 * Optional, defaults to true.
	 */
	trim?: boolean
}

/**
 * Component that shows styled code of some kind wrapped inside a <code> element.
 */
export const Code: Component<CodeProps, string> = (
	{ lang, trim },
	children,
) => {
	let code: string
	if (trim ?? true) {
		code = children.trim()
	} else {
		code = children
	}

	let body: RenderFragments
	if (lang == null) {
		body = text(children)
	} else {
		body = html(hljs.highlight(code, { language: lang }).value)
	}

	return html`<pre class="code ${lang ? `code-${lang}` : ''}">${body}</pre>`
}
