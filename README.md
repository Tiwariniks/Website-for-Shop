
Shyam Traders — Static Website
================================

Contents:
- index.html
- assets/css/styles.css
- assets/js/script.js
- README.md

About:
This is a simple, traditional-themed static website for Shyam Traders (electrical goods shop).
It is ready to be uploaded to GitHub Pages, Netlify, or any static host.

How to preview locally:
1. Unzip the package.
2. Open index.html in your browser (double-click). For full routing, host with a static server:
   - Python 3: `python -m http.server 8000` then visit http://localhost:8000

How to publish on GitHub Pages:
1. Create a new GitHub repository (for example: shyam-traders).
2. Upload these files to the repository root (index.html should be at root).
3. Go to Settings -> Pages and select branch `main` (or `master`) and root directory.
4. Save — GitHub Pages will publish at `https://<your-username>.github.io/<repo-name>/`

Customization:
- Edit assets/css/styles.css for colors, spacing, fonts.
- Edit index.html to add product photos or an email/contact backend.
- To add images, place them under assets/images/ and reference them in HTML.

Notes:
- Contact form is a local demo (no backend). You can connect it to a service like Formspree, Netlify Forms, or an SMTP backend.
- The design follows a traditional warm color palette suited for a local family-run business.
