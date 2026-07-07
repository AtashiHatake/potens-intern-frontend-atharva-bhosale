# Prasashan Setu: Civic Reporting PWA

## Project Description

Prasashan Setu is a **mobile-first, offline-capable Progressive Web App (PWA)** designed to help citizens quickly report local civic issues such as potholes, streetlight failures, water leakage, garbage collection problems, and power outages.

The application generates a unique reference ID for every complaint and provides a fully **bilingual (English + Marathi)** interface with **voice dictation** support for accessibility.

This project was developed as part of the **Potens IT Services Frontend Internship Take-Home Evaluation**, with a strong focus on:

- Mobile-first responsive design
- Offline functionality
- Performance on Slow 3G networks
- Simple and maintainable architecture
- Accessibility and ease of use

---

# Tech Stack

- **React** – Component-based UI and state management
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast development server and build tool
- **Web Speech API** – Native browser voice-to-text dictation
- **Service Workers** – Offline caching and PWA functionality

---

# Folder Structure

```text
potens-intern-frontend-atharva-bhosale/
├── public/
│   ├── manifest.json       
│   └── sw.js               
├── src/
│   ├── components/
│   │   ├── CategorySelection.jsx
│   │   ├── Confirmation.jsx
│   │   └── DetailsInput.jsx
│   ├── utils/
│   │   └── translations.js 
│   ├── App.jsx             
│   ├── index.css           
│   └── main.jsx            
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

# How to setup on your machine

## 1. Clone the repository

```bash
git clone https://github.com/AtashiHatake/potens-intern-frontend-atharva-bhosale.git
```

## 2. Navigate into the project

```bash
cd potens-intern-frontend-atharva-bhosale
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

## 5. Build and preview (Recommended for testing PWA features)

```bash
npm run build
npm run preview
```

---

# Slow 3G & Offline Optimization

The application was designed to remain responsive even under Chrome DevTools **Slow 3G** network throttling.

### Service Worker Caching

A custom `sw.js` caches the application shell, including:

- `index.html`
- Compiled JavaScript
- CSS assets

After the first successful load, the application launches directly from cache, significantly reducing loading time.

### Instant Local Persistence

Rather than waiting for a backend response, submitted complaints are immediately stored in the browser using `localStorage`.

This enables:

- Instant reference ID generation
- Offline usability
- Zero network dependency during submission

---

# What Makes This Project Different

## Neubrutalist UI 

Instead of a conventional corporate interface, the application follows a **Neubrutalist** design language featuring:

- Bold borders
- High-contrast shadows
- Sharp corners
- Strong visual hierarchy

This approach creates a tactile, accessible, and authoritative user experience.

---

## Lightweight Bilingual Support

Instead of introducing heavyweight internationalization libraries such as `react-i18next`, the project uses a centralized translation dictionary:

```text
src/utils/translations.js
```

Benefits include:

- Instant language switching
- Minimal bundle size
- No runtime overhead
- No additional dependencies

---

## Voice Dictation

Using the browser's native **Web Speech API**, users can dictate complaint descriptions instead of typing.

This improves accessibility while keeping the application lightweight by avoiding third-party speech recognition libraries.

---

# AI Use Log

| Tool | Approx. Messages | Purpose |
|------|------------------|---------|
| Gemini Pro | ~10 | Generated the initial Service Worker (`sw.js`) boilerplate and assisted in debugging offline caching strategies for Slow 3G and PWA requirements. |
