
Shyam Traders — Modern Single-Page Website
==========================================

Files:
- index.html
- assets/css/styles.css
- assets/js/script.js
- assets/images/ (placeholders)

Highlights:
- Modern electric blue & white theme
- Single-page layout: Home, Products, Why Us, Testimonials, Contact
- Floating WhatsApp button linked to temporary number +91 8960916361
  -> Clicking opens WhatsApp web or mobile app to chat with that number.
- Contact form is local/demo (no backend). Connect to Formspree/Netlify Forms for real emails.

How to preview locally:
1. Unzip and open index.html in browser, or run a local static server:
   python -m http.server 8000
   then visit http://localhost:8000

How to publish (GitHub Pages):
1. Create a new repo and upload files at repository root.
2. In GitHub, go to Settings -> Pages and enable the branch (main) + root directory.
3. Wait a minute and your site will be live at https://<username>.github.io/<repo>/

Privacy note about WhatsApp:
- The WhatsApp link will open WhatsApp and allow visitors to message the temporary number directly.
- The number is not displayed in raw text except where you wanted it shown in Contact section; you can remove visible numbers if privacy is preferred.
