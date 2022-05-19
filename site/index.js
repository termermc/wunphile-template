const { page, fromTemplate, registerComponent, componentFromTemplate, setContext, staticDir } = require('./ssg')
const fs = require('fs')

// Load the site config
const config = require('./config.json')

// Static files
staticDir('./static')

// Make data available to all templates
setContext('config', config)

// Create components
fs.readdirSync('./components/')
	.forEach(file => registerComponent(file.substring(0, file.indexOf('.')), require(`./components/${file}`)))

// Create template components
fs.readdirSync('./templates/')
	.forEach(file => registerComponent(file.substring(0, file.indexOf('.')), componentFromTemplate(`./templates/${file}`)))

// Special pages
page('index.html', fromTemplate('./pages/index.html'))
page('404.html', fromTemplate('./pages/404.html'))
page('500.html', fromTemplate('./pages/500.html'))

// Normal pages
page('example/index.html', fromTemplate('./pages/example/index.html'))