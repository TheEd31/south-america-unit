# Before & After Cortés — A History of Latin America

A single-page educational website covering the Maya, Aztec, and Inca civilizations, the Spanish conquest, three centuries of colonial rule, the independence movements, and the legacies that shape Latin America today.

## Hosting on GitHub Pages

1. Create a new public GitHub repository.
2. Upload all four files (`index.html`, `styles.css`, `script.js`, `README.md`) to the root.
3. Go to **Settings → Pages**.
4. Under "Source," select branch `main`, folder `/ (root)`. Save.
5. Wait about a minute. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

## File Structure

```
index.html    — page content (Maya, Aztec, Inca, Conquest, Colonial, Independence, Legacy)
styles.css    — all styling, including per-section color palettes
script.js     — mobile menu and scroll-reveal animations
README.md     — this file
```

## Notes on Images

Images are loaded from external sources (Wikimedia Commons and Unsplash) via direct URLs — no local image files needed.

**If any image fails to load**, it falls back to a styled placeholder card with the subject's name on a dark gradient. The site stays visually intact regardless.

If you want to swap any image, just edit the `src` attribute on that `<img>` tag in `index.html`.

## Customizing

- **Section colors**: edit the CSS variables at the top of `styles.css` (`--maya-jade`, `--aztec-blood`, `--inca-terra`, etc.) to recolor entire sections.
- **Content**: all text lives in `index.html` — no template syntax, just edit directly.
- **Fonts**: served from Google Fonts (Playfair Display + Inter + JetBrains Mono). No setup needed.
