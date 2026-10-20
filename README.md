# Yixuan Lu — Portfolio

Personal portfolio site for Yixuan Lu, 3D character performance animator.
Plain HTML, CSS and JavaScript, so it needs no build step.

## Folder guide

| File / folder | What it is |
|---|---|
| `index.html` | Homepage |
| `about.html`, `resume.html` | About and Resume pages (placeholders for now) |
| `projects/` | One page per project (placeholders for now) |
| `css/style.css` | All the styling. Colors are at the very top. |
| `js/main.js` | The demo reel link lives at the very top. |
| `images/` | All images |

## Common edits

- **Add your demo reel:** open `js/main.js` and paste your YouTube link between the quotes in `const DEMO_REEL_URL = "";`.
- **Add your email:** in each `.html` file, replace `[EMAIL]` in `mailto:[EMAIL]` with your address.
- **Change a color:** edit the values at the top of `css/style.css`.

## Publishing for free on GitHub Pages

1. Sign up at github.com (free).
2. Click **+** (top right) → **New repository**. Name it exactly `yourusername.github.io`, using your own GitHub username. Set it to **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in *everything inside* this folder, not the folder itself, so `index.html` sits at the top level. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. After a minute or two, your site is live at `https://yourusername.github.io`.

To update the site later, upload the changed files the same way. GitHub republishes the site automatically.
