# Prasashan Setu: Civic Reporting PWA

**Live Demo:** https://potens-intern-frontend-atharva-bhos.vercel.app/

---

## Project Description

Prasashan Setu is a **mobile-first, offline-capable Progressive Web App (PWA)** designed to help citizens quickly report local civic issues such as potholes, streetlight failures, water leakage, garbage collection problems, power outages, and other public infrastructure issues.

The application generates a unique reference ID for every complaint and provides a **multilingual interface** with **voice dictation** support, making it easier for citizens from different linguistic backgrounds to submit complaints.

This project was developed as part of the **Potens IT Services Frontend Internship Take-Home Evaluation**, with a strong focus on:

- Mobile-first responsive design
- Offline functionality
- Performance on Slow 3G networks
- Simple and maintainable architecture
- Accessibility and ease of use

---

# Live Demo

https://potens-intern-frontend-atharva-bhos.vercel.app/

---

# Features

- Report multiple civic issues
- Offline-first Progressive Web App
- Unique complaint reference ID generation
- Voice-to-text complaint description
- Local complaint persistence
- Responsive mobile-first UI
- Neubrutalist design system
- Multi-language support
- Fast loading even on Slow 3G

---

# Supported Languages

The application currently supports:

- 🇬🇧 English
- 🇮🇳 Hindi
- 🇮🇳 Marathi
- 🇮🇳 Haryanvi
- 🇮🇳 Assamese

The lightweight translation architecture allows additional languages to be added easily without using external libraries.

---

# Tech Stack

- **React** – Component-based UI and state management
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast development server and build tool
- **Web Speech API** – Native browser voice-to-text dictation
- **Service Workers** – Offline caching and PWA functionality
- **localStorage** – Offline complaint persistence

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

# Getting Started

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

## 5. Build & Preview (Recommended for PWA Testing)

```bash
npm run build
npm run preview
```

---

# Slow 3G & Offline Optimization

The application was designed to remain responsive under Chrome DevTools **Slow 3G** network throttling.

## Service Worker Caching

A custom `sw.js` caches the application shell including:

- index.html
- JavaScript assets
- CSS assets

After the initial load, subsequent launches are served directly from cache, significantly improving perceived performance.

---

## Instant Local Persistence

Instead of waiting for a backend response, complaints are immediately stored using **localStorage**.

Benefits include:

- Instant reference ID generation
- Offline complaint submission
- Zero network dependency
- Immediate user feedback

---

# What Makes This Project Different

## Neubrutalist UI

Rather than following a conventional corporate dashboard aesthetic, the application adopts a **Neubrutalist** design language featuring:

- Bold borders
- Thick shadows
- Sharp corners
- Strong visual hierarchy
- High contrast interface

This creates a tactile, accessible, and authoritative user experience.

---

## Lightweight Multilingual Support

Instead of using heavyweight internationalization libraries such as **react-i18next**, the project relies on a centralized translation dictionary located at:

```text
src/utils/translations.js
```

Benefits include:

- Instant language switching
- Minimal bundle size
- Zero runtime overhead
- No external dependencies
- Easy addition of new languages

---

## Voice Dictation

Using the browser's native **Web Speech API**, users can dictate complaint descriptions instead of typing.

Advantages:

- Improved accessibility
- Faster complaint submission
- Lightweight implementation
- No third-party speech libraries

---

# AI Use Log

| Tool | Approx. Messages | Purpose |
|------|------------------|---------|
| Gemini Pro | ~10 | Generated the initial Service Worker (`sw.js`) boilerplate and assisted in debugging offline caching strategies for Slow 3G and PWA requirements. |
| ChatGPT (GPT-5.5) | ~6 | Assisted in expanding multilingual support, refining translation structure, improving README documentation, and polishing project presentation. |

---

# Future Improvements

- Backend integration
- User authentication
- Complaint tracking dashboard
- Push notifications
- Image upload support
- Geolocation-based complaint reporting
- Admin dashboard
- Complaint analytics

---

