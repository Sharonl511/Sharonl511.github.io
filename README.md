# Yixuan Lu — Portfolio

Personal portfolio site for Yixuan Lu, 3D character performance animator.
Plain HTML, CSS and JavaScript, so it needs no build step.

## Folder guide

| File / folder | What it is |
|---|---|
| `index.html` | Homepage |
| `about.html`, `resume.html` | About and Resume pages |
| `files/` | Downloadable files (the resume PDF) |
| `projects/` | One page per project (Drama Queen, Gecko Mail) |
| `css/style.css` | All the styling. Colors are at the very top. |
| `js/main.js` | Your email address, About photo and all video links, at the very top. |
| `images/` | All images (pipeline icons are in `images/icons/`) |

## Common edits

- **Email address:** open `js/main.js` and replace `[EMAIL]` in `const EMAIL_ADDRESS = "[EMAIL]";`. Every Email link on the site uses it.
- **Videos:** open `js/main.js` and paste each YouTube link between its quotes in `VIDEO_LINKS` (demo reel, plus the short film and supporting video for each project).
- **About page photo:** put your photo in `images/` (e.g. `images/photo.jpg`), then in `js/main.js` type its name between the quotes in `const PHOTO_FILE = "";`.
- **Resume PDF:** replace `files/Yixuan_Lu_Resume.pdf` with your final PDF, using exactly the same file name. The Download PDF button will then serve the new file.
- **About and Resume text:** each block sits between `START` and `END` comments in `about.html` and `resume.html`.
- **Project description text:** in each file in `projects/`, replace the paragraphs between `DESCRIPTION TEXT START` and `DESCRIPTION TEXT END`.
- **Page backgrounds:** in `css/style.css`, see the `PAGE BACKGROUNDS` section; change the image file name on the line for that page.
- **Colors and fonts:** edit the values at the top of `css/style.css`.

## Publishing for free on GitHub Pages

1. Sign up at github.com (free).
2. Click **+** (top right) → **New repository**. Name it exactly `yourusername.github.io`, using your own GitHub username. Set it to **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in *everything inside* this folder, not the folder itself, so `index.html` sits at the top level. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. After a minute or two, your site is live at `https://yourusername.github.io`.

To update the site later, upload the changed files the same way. GitHub republishes the site automatically.
