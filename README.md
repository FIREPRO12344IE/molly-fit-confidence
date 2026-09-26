# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deploying to Cloudflare

The site runs as a Cloudflare Worker (Nitro `cloudflare-module` preset). Config lives in `wrangler.jsonc`.

```sh
npm run deploy            # build + deploy to Cloudflare Workers
npm run preview:cloudflare  # run the built site on Cloudflare's local runtime
```

First deploy asks you to log in (`wrangler login`) or uses the `CLOUDFLARE_API_TOKEN` environment variable in CI.

### Deploying from CI (e.g. GitHub Actions)

1. Create an API token in the Cloudflare dashboard with "Edit Cloudflare Workers" permission.
2. Store it as the `CLOUDFLARE_API_TOKEN` secret, then run `npm run deploy` in your workflow.

Netlify static hosting remains supported via `netlify.toml` / `public/_redirects` (static `dist`-style builds), but the full SSR app deploys as a Cloudflare Worker.

