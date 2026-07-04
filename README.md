# personal-site

Static React portfolio: projects, a markdown blog, resume and about/contact. No backend — deploys straight to Netlify.

## Structure

- `src/data/site.js` — your name, bio, links, stack. Start here.
- `src/data/projects.js` — your projects, shown as "releases" with a version and status badge.
- `src/content/blog/*.md` — blog posts. Add a new `.md` file with the same frontmatter shape to publish a post, no code changes needed.
- `public/resume.pdf` — drop your real resume here; the Resume page links to it.

## Local setup (Arch Linux)

```bash
sudo pacman -S nodejs npm
cd personal-site
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # sanity-check the production build locally
```

## Deploy to Netlify

Easiest path is connecting the git repo in the Netlify dashboard (build command `npm run build`, publish directory `dist` — already set in `netlify.toml`, so it should autodetect). To push a repo from Arch:

```bash
git init
git add .
git commit -m "initial commit"
gh repo create personal-site --public --source=. --push   # if you use the GitHub CLI
```

Or deploy directly from the CLI without connecting git:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Contact form

The About page form uses Netlify Forms — no backend needed, it only works once the site is actually deployed on Netlify (not in local dev). Submissions show up under Site settings → Forms in the Netlify dashboard. There's a hidden duplicate of the form in `index.html`; that's required for Netlify to detect a form that only gets rendered by React — don't remove it.

## If you outgrow "static only"

If you later want dynamic content, an admin panel to edit projects without a redeploy, or real contact-form persistence, that's when it's worth reaching for Supabase + an ASP.NET Core API on Azure. Nothing here blocks that — you'd add an API layer and swap the static data files for fetch calls.
