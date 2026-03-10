# 🚀 Next.js UI Implementation – Technical Assessment

## 📌 Project Overview

This project is a fully functional UI implementation built using Next.js, based on the provided Figma design.

The goal of this assessment was to accurately replicate the design while maintaining clean architecture, reusable components, and proper routing.

The application includes multiple pages such as Home, Features, Pricing, Use Cases, Login, and Signup, along with a responsive navigation system and theme toggle.

---

## 🌐 Live Demo

🔗 Deployed Application: https://xpressdm-assignment.vercel.app/

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Lucide React Icons
- next-themes (Dark/Light mode)

---
## 📂 Project Structure

```
nextjs-ui-assessment
│
├── app
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   │
│   ├── features
│   │   └── page.tsx             # Features page
│   │
│   ├── pricing
│   │   └── page.tsx             # Pricing page
│   │
│   ├── use-cases
│   │   └── page.tsx             # Use Cases page
│   │
│   ├── login
│   │   └── page.tsx             # Login page
│   │
│   └── signup
│       └── page.tsx             # Signup page
│
├── components
│   ├── Navbar.tsx               # Navigation bar with routes
│   ├── HeroSection.tsx          # Landing page hero section
│   ├── PricingToggle.tsx        # Monthly / Quarterly / Yearly toggle
│   ├── ThemeToggle.tsx          # Dark / Light mode switch
│   ├── LoginForm.tsx            # Login form UI
│   ├── SignupForm.tsx           # Signup form UI
│   │
│   └── ui                       # Reusable UI components
│       ├── Button.tsx
│       ├── CapsuleButton.tsx
│       └── Input.tsx
│
├── public                      # Static assets
│   └── images
│
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```
This structure ensures:

- Clear separation of concerns
- Reusable UI components
- Scalable project organization

---
## ✨ Implemented Features
### 1️⃣ Responsive Navigation

- Capsule-style navigation menu
- Responsive layout for desktop and mobile
- Navigation links connected to all pages
- Integrated theme toggle in the navbar

---
## 🌙 Dark / Light Mode
Dark and Light themes are implemented using next-themes.

Features include:

- Smooth theme switching
- Capsule-style theme toggle button
- Background adapts based on theme
- Images adjusted for better visibility in dark mode
---
## 🔀 Routing
The application uses Next.js App Router for page navigation.

| Button    | Route        |
| --------- | ------------ |
| Home      | `/`          |
| Features  | `/features`  |
| Pricing   | `/pricing`   |
| Use Cases | `/use-cases` |
| Login     | `/login`     |
| Signup    | `/signup`    |

If a route was not clearly defined in the design, placeholder pages were implemented as allowed in the assessment instructions.

---
## 🔐 Authentication UI
Login and Signup pages include:

- Styled input fields
- Reusable form components
- Google Sign-in button (UI only)
- Form validation UI
- Redirect behavior after submission

⚠️ Authentication logic is UI-only for this assessment.

---
💰 Pricing Section

The pricing page includes a dynamic pricing toggle with options:

- Monthly
- Quarterly
- Annually

Example pricing structure:
```
Monthly
Beginner: ₹499
Pro: ₹1299
Enterprise: ₹3499
```
Reusable pricing cards allow easy updates to plans and pricing models

---

## ⭐ Features Page
The features page highlights core capabilities using interactive feature cards such as:

- AI Content Generation
- Smart Automation
- Analytics Dashboard

Cards include icons, hover effects, and responsive layouts.

---

##  🧩 Use Cases Page
The Use Cases page demonstrates potential user groups:

- Marketing Teams
- Content Creators
- Startups
- Enterprise Teams

These sections contain placeholder UI content, as permitted by the assessment.

---

## ♻️ Reusable Components
To maintain clean architecture, reusable components were created:

| Component     | Purpose                  |
| ------------- | ------------------------ |
| Button        | Standard reusable button |
| CapsuleButton | Capsule style UI buttons |
| Input         | Form input component     |
| PricingToggle | Pricing duration switch  |
| ThemeToggle   | Dark/Light theme control |


This approach improves maintainability, scalability, and consistency across the UI.

---
## 🎨 Design Implementation

The UI closely follows the provided Figma design, including:

- Layout structure
- Capsule-style UI elements
- Gradients and spacing
- Responsive behavior
- Component consistency

No major design deviations were introduced beyond necessary responsiveness adjustments.

---

## 🚀 Getting Started
Install dependencies

```
npm install
```
Run development server

```
npm run dev
```
Open the application in your browser:
```
http://localhost:3000
```

---

## 📌 Notes
- This project focuses on frontend UI implementation.
- Backend services and authentication APIs are not included, as they were not required for the assessment.
- Placeholder content is used where functionality or content was not specified.

---

## 👨‍💻 Author
Developed as part of a technical assessment to demonstrate frontend engineering skills using Next.js, modular component architecture, and responsive UI implementation.