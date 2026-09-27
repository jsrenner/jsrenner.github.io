# Light Wilder — website

Static site. No build step. Push this folder's contents to the root of your repo.

## Files
- `index.html` — homepage (menu pages: Music, Lyrics, Story, Dawn of Ages, Contact)
- `support.js` — runtime the page needs; keep it next to index.html
- `img/` — video, poster still, logo, covers
- `audio/` — the two songs
- `lyrics-print.html` + `doc-page.js` — printable lyrics sheet (source for the PDF)

## Before going live
1. **Lyrics PDFs** — included: `Light Wilder - Dawn Lyrics.pdf` and `Light Wilder - Stone by Stone Lyrics.pdf`. Keep them at the root next to index.html; the Download Lyrics button picks the one for the selected song.
2. **Platform links** — every Spotify / Apple Music / YouTube / Bandcamp / Amazon / Instagram link is `href="#"`. Search index.html for `href="#"` and paste real URLs.
3. **Contact form** — not wired to anything yet. Use Formspree, Netlify Forms, or similar.

## Hosting
- **GitHub Pages**: repo → Settings → Pages → Deploy from branch → `main` / root.
- **Netlify / Vercel / Cloudflare Pages**: connect the repo; no build command, publish directory = root.

The page must be served over http(s); opening index.html by double-click (file://) may not load.

## Git
```
git add .
git commit -m "Light Wilder site"
git push
```
Video is ~13 MB — under GitHub's 100 MB limit, no Git LFS needed.
