<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment

- Cloudflare is the primary deploy target: `wrangler.jsonc` + `npm run deploy` (Nitro `cloudflare-module` output in `dist/`, Worker entry `dist/server/index.mjs`, static assets `dist/client` with `ASSETS` binding). Keep the output paths in sync if the Nitro preset changes.
- `netlify.toml` / `public/_redirects` stay for optional static Netlify hosting; don't remove them.
