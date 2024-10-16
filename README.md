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
chmod 777 dist
docker build -t wunphile-template .
docker run -v $(pwd)/dist:/data/dist wunphile-template
```

The above also works with Podman, if you replace `docker` with `podman`.
