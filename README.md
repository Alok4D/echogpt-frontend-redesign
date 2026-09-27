# EchoGPT Ecosystem - Frontend Redesign

> **Supercharge Your Workflow with a Unified Multi-AI Workspace & Chrome Extension**  
> Practical Assignment Submission for **Software Engineering Internship (Frontend)** at **AppifyDevs**.

Live Demo: [https://echogpt-frontend-redesign.vercel.app](https://echogpt-frontend-redesign.vercel.app) *(Deployment Link)*  
Original EchoGPT Platform: [https://echogpt.live/](https://echogpt.live/)  
EchoGPT Chrome Extension: [Chrome Web Store](https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj)

---

## 🌟 Executive Summary & Key Highlights

This repository contains a full-scale frontend redesign and re-architecture of the **EchoGPT Ecosystem**, delivering an ultra-modern, high-performance, and responsive user experience across both web and browser extension interfaces.

### 🎯 Key Accomplishments
1. **Modern Single-Page Landing Page (`/`):**
   - **Hero Section:** Dynamic value proposition, interactive live multi-model test sandbox, and high-converting CTAs.
   - **Interactive Side-by-Side Model Arena (`/compare` Preview):** Send one prompt simultaneously to Claude 3.5 Sonnet and GPT-4o to benchmark response quality and latency.
   - **Model Matrix:** Interactive showcase of flagship engines (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, DeepSeek R1, Llama 3.3 70B, Mistral Large 2) with context window & speed meters.
   - **Interactive Chrome Extension Sandbox:** Live in-browser simulation of floating highlight actions (*Explain*, *Summarize*, *Generate Code*) and persistent sidebar chat.
   - **Interactive Pricing Matrix:** Dynamic Monthly / Yearly billing toggle with tier comparisons (*Starter Explorer*, *Pro Multi-AI*, *Team & Power User*).
   - **FAQ & Support Accordion:** Category-filtered questions with instant expand/collapse.

2. **Web App Experience Suite (`/chat`, `/compare`, `/image-studio`, etc.):**
   - Multi-AI parallel chat interface with streaming typewriter effect and syntax-highlighted code blocks with 1-click copy.
   - Collapsible glassmorphic navigation sidebar with chat history, pinned chats, and quick model presets.
   - Full dark/light mode support with system preference detection and persistent local storage state.

---

## 🛠️ Technology Stack & Architecture

- **Core Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Widgets)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode, full type safety)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design tokens, glassmorphism utilities & CSS variables
- **Icons & UI:** [Lucide Icons](https://lucide.dev/)
- **State Management:** React Context API (`ThemeContext`, `ChatContext`) + LocalStorage persistence

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx                # Root layout with ThemeProvider, SEO Metadata & Fonts
│   ├── page.tsx                  # 🌟 High-Converting Single-Page Landing Page
│   └── globals.css               # Design system tokens, Glassmorphism, Theme CSS variables
├── components/
│   └── landing/                  # Modular Landing Page Sections
│       ├── Navbar.tsx            # Sticky glassmorphic navbar with theme switcher & mobile drawer
│       ├── HeroSection.tsx       # Bold hero with live interactive AI prompt sandbox
│       ├── FeatureGrid.tsx       # 6 core ecosystem features (Dual Battle, Sidebar, Studios)
│       ├── ModelMatrix.tsx       # Filterable flagship AI models showcase & specs
│       ├── ProductPreview.tsx    # Live Side-by-Side Dual AI Battle Arena preview
│       ├── WhyEchoGPT.tsx        # Comparative value table vs fragmented subscriptions
│       ├── ExtensionShowcase.tsx # Simulated browser window with highlight action bar
│       ├── PricingTiers.tsx      # Monthly/Yearly toggle with transparent tier cards
│       ├── FAQSection.tsx        # Searchable and categorized accordion FAQ
│       ├── CTASection.tsx        # Premium gradient conversion banner
│       └── Footer.tsx            # Ecosystem links, model directory & legal footer
├── context/
│   └── ThemeContext.tsx          # Global Dark/Light mode theme provider
├── data/
│   └── landingData.ts            # AI models data, pricing tiers, FAQs, and testimonials
└── types/
    └── index.ts                  # TypeScript interface definitions
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Alok4D/echogpt-frontend-redesign.git
cd echogpt-frontend-redesign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 👨‍💻 Author & Contact
- **Candidate:** Alok
- **Company:** [AppifyDevs](https://appifydevs.com/)
- **Position:** Software Engineering Internship (Frontend) — Onsite
