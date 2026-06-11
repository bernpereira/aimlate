# AI and Media Literacy — Erasmus+ Landing Page (static export)

A standalone static version of the project's landing page — ready to upload to GitHub Pages or any static host.

**Erasmus+ Small-scale partnerships in school education (KA210-SCH-5B5F9374)** between Italy 🇮🇹, Serbia 🇷🇸 and Portugal 🇵🇹.

## Folder structure

```
.
├── index.html        # Full landing page markup
├── css/
│   └── styles.css    # Design tokens, theme + utility classes
├── js/
│   └── main.js       # Smooth scroll, mobile menu, contact form, toast
└── images/
    ├── project-logo.png
    ├── erasmus-logo.png
    ├── italy.jpg
    ├── serbia.jpg
    ├── portugal.webp
    └── classroom.jpg
```

External dependencies (loaded from CDN, no install required):
- Tailwind CSS Play CDN — utility classes
- Google Fonts — Cormorant Garamond + Outfit

The page works fully offline once the CDN assets are cached by the browser.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .
```

Then visit http://localhost:8080.

## Deploy to GitHub Pages

1. Create a new repository, e.g. `aimlate-website`.
2. Copy the **contents** of this folder (index.html, css/, js/, images/) into the repository root.
3. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin git@github.com:<your-user>/aimlate-website.git
   git push -u origin main
   ```

4. On GitHub → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Save.
5. Wait ~1 min — site will be live at `https://<your-user>.github.io/aimlate-website/`.

For a custom domain (e.g. `aimlate.eu`), add a `CNAME` file at the repo root with the domain, and create a DNS `A` or `CNAME` record at your registrar pointing to GitHub Pages.

## Notes

- The contact form is **static** — it shows a confirmation toast but does not submit anywhere. When the project is ready for a real mailing list, wire the form to a service like Formspree, Resend or SendGrid.
- All images are stored locally in `images/` so the site has no external image dependencies.
- The page is in English with `<html lang="en">` set, so any modern browser will automatically offer translation to the user's language.
