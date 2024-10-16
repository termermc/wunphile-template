# Wunphile Template

Template for a site using Wunphile.

It implements a few basic pages, and a simple markdown blog.

# Dependencies
 - Node.js 22.6+ 

# Usage
To build the site, run `npm run build`.

To run the site in development mode, run `npm run dev`.

# Docker
You can also build the site using Docker:

```shell
mkdir dist
docker build -t wunphile-template .
docker run -v ./dist:/data/dist wunphile-template
```

The above also works with Podman, if you replace `docker` with `podman`.

# TypeScript
This template uses TypeScript, but takes advantage of Node.js 22.6's built-in type stripping feature
to run TypeScript code directly without a build step.

This allows hot reloading to work without resorting to a complicated prebuild system.
