const { $ } = require('../ssg')

/**
 * Component that shows styled code of some kind wrapped inside a <code> element
 * @param {?string|null} lang The syntax language the code is in (used for styling)
 * @param {string} content The component content
 * @returns {string} The rendered component
 */
module.exports = function({ lang }, content) {
	return `<pre class="code${$(lang) ? ` code-${$(lang)}` : ''}">${content}</pre>`
}