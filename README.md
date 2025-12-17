# Tilipamodzi Engineering Group Website

A clean, professional, responsive multi-page website for Tilipamodzi Engineering Group (Malawi). Built with modern HTML, CSS, and minimal JavaScript.

## Features
- Clear sections: Hero, About, Services, Team, Projects, Disclaimer, Why Choose Us, Contact, Footer
- Mobile-friendly navigation with a temporary Font Awesome logo (hard-hat icon)
- Neutral, trustworthy color palette (blue/green/grey)
- Simple contact form (client-side only; ready for backend integration)

## Structure
- `index.html` — Home (Hero + quick links)
- `about.html` — About, Mission, Vision, Core Values
- `services.html` — Services grouped by category
- `team.html` — Team members and roles
- `projects.html` — Projects with expandable cards
- `why.html` — Why Choose Us
- `contact.html` — Contact information and form
- `disclaimer.html` — Professional & Legal Disclaimer
- `assets/css/styles.css` — Styles
- `assets/js/main.js` — Minimal JS (menu toggle, footer year, form feedback)
- `docs/` — GitHub Pages documentation site (minimal landing page)

## Preview Locally
Use any static server. Here are quick options:

### Python (if installed)
```powershell
python -m http.server 5500
```
Open http://localhost:5500 and navigate to the project folder.

### Node (http-server)
```powershell
npm install -g http-server
http-server -p 5500
```

### VS Code Extension (Live Server)
Install "Live Server" and click "Go Live" in the status bar.

## GitHub Pages
This repository includes a `docs/` folder configured for GitHub Pages publishing from the `main` branch:
- **Location**: `docs/` folder
- **Content**: Minimal static landing page with links to the main website
- **Setup**: No build process required - pure static HTML/CSS
- **Access**: Once enabled in repository settings, the site will be available at: `https://[username].github.io/[repository-name]/`

To enable GitHub Pages:
1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `main` and folder: `/docs`
4. Save and wait for deployment

## Logo Replacement
The current logo uses a Font Awesome icon in the navbar and footer:
- Look for `<span class="logo"><i class="fa-solid fa-hard-hat"></i></span>` in `index.html`.
- Replace with your logo `<img src="assets/img/logo.png" alt="Tilipamodzi Engineering Group">` and adjust styles in `assets/css/styles.css`.

## Notes
- Multi-page navigation replaces single-page anchors for better organization.
- No exaggerated claims or fake awards.
- Professional registrations are in progress; collaboration with qualified professionals emphasized.
- For contact form submissions, connect to a backend (e.g., a serverless function or email service) when ready.
