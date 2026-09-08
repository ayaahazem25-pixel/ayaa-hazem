# Aya Hazem Shawky — Personal Portfolio Website
### Junior Full Stack .NET Web Developer | MIS Student

A modern, responsive, bilingual single-page portfolio website designed and built with **React**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Features & Architecture

- **Color Palette & Design**:
  - Primary mint green accents (`#10B981` / `#34D399`).
  - Crisp white background for light mode, `#F9FAFB` off-white section cards.
  - Dark Slate / Zinc (`#0F172A` / `#0B0F19`) for sleek dark mode.
- **Floating Glassmorphism Navbar**:
  - Horizontally centered floating pill container (`backdrop-blur-md`).
  - Smooth-scroll section navigation.
  - Integrated Dark/Light mode switcher with localStorage persistence.
  - Bilingual switcher (English ↔ Arabic) with automatic LTR/RTL document alignment.
- **Animated Hero Section**:
  - Modern tech-focused profile card with live C# class specification code snippet.
  - Active hiring status indicator badge.
  - Quick action buttons: "Download CV", "Contact Me", "LinkedIn", "GitHub".
  - Contact micro-badges (Cairo, Egypt, Phone, Email).
- **Interactive Architecture & Skills Section**:
  - Categorized tab filtering:
    1. **Backend & Core** (C#, .NET, OOP, RESTful Web APIs, LINQ, Entity Framework).
    2. **Frontend & UI** (React, JavaScript ES6+, HTML5, CSS3, Responsive Design, Tailwind CSS).
    3. **Database & Analytics** (SQL Server, Relational Database Design, Power BI, Tableau, SPSS).
    4. **QA, BA & Tools** (Software Testing, Bug Tracking & Severity/Priority metrics, Business Analysis, Git/GitHub, Visual Studio, VMware).
  - Visual proficiency progress bars and architectural takeaways.
- **Projects Showcase**:
  - Interactive expandable case study cards highlighting:
    - Multi-tier system architecture (`React ➔ .NET API ➔ SQL Server`).
    - Database relational schemas & ER design.
    - Software Testing scopes (120+ test cases, boundary value analysis, bug severity matrices).
- **Career Experience & Timeline**:
  - *Sales Representative* (Limitless & Future Supplies) — Negotiation, client management, data tracking.
  - *Solar Energy Installation Assistant* — Technical troubleshooting, safety compliance, teamwork.
- **Education & Intensive Training Tracks**:
  - Helwan University — B.Com in Management Information Systems (Graduation: 2027, Grade: Very Good).
  - Information Technology Institute (ITI) — C# / .NET & React Track.
  - Digital Egypt Pioneers Initiative (DEPI) — Full Stack Web Development Track.
  - MCIT Training — Data Analysis (Power BI, SPSS), Testing, and BA.
  - Cybersecurity — Penetration Testing Fundamentals.
- **Recognized Certifications**:
  - DEPI | ITI | MCIT | CIB Bank Training | Bank of Egypt Training | Egyptian Exchange (EGX) Training.
- **Dynamic Contact Form & Direct Channels**:
  - Interactive form with validation and simulated submission state.
  - Direct communication cards for Email, Phone, WhatsApp, and LinkedIn.

---

## 🚀 How to Run

### Option 1: Instant Standalone Preview (No installation required)
Simply double-click or open `preview.html` in Google Chrome, Microsoft Edge, or any modern web browser!
```bash
# Or via PowerShell / Command Prompt:
start preview.html
```

### Option 2: Run via Node.js / Vite
```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📂 Project Structure

```text
Aya Portfolio/
├── index.html                   # Main Vite HTML entry
├── preview.html                 # Zero-install standalone browser preview
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler config
├── tailwind.config.js           # Tailwind configuration (mint palette & dark mode)
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Documentation
└── src/
    ├── main.jsx                 # Application mount
    ├── App.jsx                  # Root layout component
    ├── index.css                # Global CSS & Tailwind directives
    ├── context/
    │   └── PortfolioContext.jsx # Theme (Dark/Light) & Language (EN/AR RTL) Context
    ├── data/
    │   └── portfolioData.js     # Comprehensive bilingual dataset (English & Arabic)
    └── components/
        ├── Navbar.jsx           # Floating glassmorphism navbar
        ├── Hero.jsx             # Hero section with interactive developer card
        ├── Skills.jsx           # Categorized skills & architecture tabs
        ├── Projects.jsx         # Expandable project case studies
        ├── Experience.jsx       # Career journey timeline
        ├── Education.jsx        # Academic degree & ITI/DEPI/MCIT tracks
        ├── Certifications.jsx   # Recognized credentials badge grid
        ├── Contact.jsx          # Interactive contact form & direct links
        └── Footer.jsx           # Back-to-top & copyright footer
```
