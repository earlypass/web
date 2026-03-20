# earlypass-web

Marketing site and documentation for [EarlyPass](https://github.com/acroca/earlypass) — a drop-in viral waitlist widget.

**Live site:** [www.earlypass.app](https://www.earlypass.app)
**App / API:** [api.earlypass.app](https://api.earlypass.app)

## Stack

- [Astro](https://astro.build) — static site generator
- Deployed to GitHub Pages via GitHub Actions
- Custom domain: `www.earlypass.app`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Marketing landing page |
| `/docs/getting-started` | Getting started guide |
| `/docs/widget` | Widget reference (data attributes, theming) |
| `/docs/mcp` | MCP server setup (Claude Desktop, Cursor) |
| `/docs/api` | Interactive API reference (Scalar, points at `api.earlypass.app`) |

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build to dist/
npm run preview  # preview the built site
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.

To set up for the first time:
1. Go to repo Settings → Pages
2. Set source to **GitHub Actions**
3. Set custom domain to `www.earlypass.app`
4. Point your DNS `www` CNAME at `<github-username>.github.io`

## Related

- [earlypass](https://github.com/acroca/earlypass) — the Go API server, dashboard, and widget
