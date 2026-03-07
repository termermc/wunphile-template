# Wunphile Template

Template for a site using Wunphile.

It implements a few basic pages, and a simple markdown blog.

# Prerequisites

- Node.js 24+

# Usage

To build the site, run `npm run build`.

To run the site in development mode, run `npm run dev`.

To format all code with Prettier, run `npm run fmt`.

To check TypeScript types, run `npm run check`.

# TypeScript

This template uses TypeScript, but takes advantage of Node.js 22.6's built-in type stripping feature
to run TypeScript code directly without a build step.

This allows hot reloading to work without resorting to a complicated prebuild system.

# Docker

You can also build the site using Docker:

```bash
mkdir -p dist
docker build -t wunphile-template .
docker run -v ./dist:/data/dist wunphile-template
```

The above also works with Podman, if you replace `docker` with `podman`.

# Cloudflare Workers

To configure your project for Cloudflare Workers, add Wrangler to your project:

```bash
npm install -D wrangler@latest
```

Edit the project name in `wrangler.jsonc` to what you want, then add the following script to your `package.json`:

```json
{
	"scripts": {
		"deploy": "wrangler deploy"
	}
}
```

You can now deploy the site to Cloudflare Workers by running `npm run deploy`.

To set up automatic deployment, import your repository into Cloudflare Workers and set `npm run build` as your build command, and `npm run deploy` as your deploy command.

# IDE Integration

Wunphile uses ES6 template literals for composing HTML.
Different IDEs need different configuration to provide syntax highlighting and intellisense for HTML inside template literals.

## VS Code

Install the [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) extension.

## JetBrains IDEs (WebStorm, IntelliJ IDEA, etc.)

Recent versions of JetBrains IDEs should support syntax highlighting and intellisense for HTML inside template literals out of the box.
