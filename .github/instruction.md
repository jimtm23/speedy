# 🚀 Vite + React LPG Ordering App Guidelines

## 🎨 Color Palette
Use these colors consistently across components:
- **Primary:** #FFCC00 (Yellow)
- **Secondary:** #1A1A1A (Dark Gray/Black)
- **Accent:** #FF5733 (Orange-Red)
- **Background:** #F5F5F5 (Light Gray)
- **Success:** #28A745 (Green)
- **Error:** #DC3545 (Red)

## 📐 Design System
- **Typography:**  
  - Headings: `Inter`, weight 600  
  - Body: `Inter`, weight 400  
- **Buttons:**  
  - Primary: Yellow background, dark text, rounded corners  
  - Secondary: Dark background, white text  
- **Cards:**  
  - White background, subtle shadow, rounded edges  
- **Spacing:**  
  - Use multiples of `8px` for margin/padding  

## ⚛️ Industry Coding Standards
- **Code Style:**  
  - Follow Airbnb JavaScript Style Guide  
  - Use ESLint + Prettier for linting and formatting  
  - Enforce TypeScript for type safety  
- **React Best Practices:**  
  - Functional components with hooks (no class components)  
  - PropTypes or TypeScript interfaces for props  
  - Prefer CSS Modules or styled-components over inline styles  
- **Accessibility:**  
  - Always include ARIA labels and alt text  
  - Ensure color contrast meets WCAG AA standards  
- **Testing:**  
  - Use Jest + React Testing Library  
  - Write unit tests for components and integration tests for flows  
- **Version Control:**  
  - Follow Gitflow branching strategy  
  - Commit messages in conventional format (`feat:`, `fix:`, `chore:`)  

## 📂 Directory Structure
my-app/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level views
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React Context providers
│   ├── services/         # API calls, external services
│   ├── styles/           # Global styles, theme
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── tests/                # Unit & integration tests
├── .eslintrc.js          # ESLint config
├── tsconfig.json         # TypeScript config
├── vite.config.js        # Vite config
└── package.json

## 🛠️ Vite Setup
```bash
npm create vite@latest my-app --template react-ts
cd my-app
npm install
npm run dev
import React from 'react';

export default function Button({ label, onClick, type = 'primary' }) {
  const styles = {
    primary: {
      backgroundColor: '#FFCC00',
      color: '#1A1A1A',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <button style={styles[type]} onClick={onClick}>
      {label}
    </button>
  );
}

## 💡 Instruction for GitHub Copilot:  
- When generating new components, always:
- Apply the defined color palette.
- Follow the design system.
- Respect industry coding standards (Airbnb style, ESLint, Prettier, TypeScript).
- Place files in the correct directory structure.
- Ensure accessibility and write tests.
- When generating code, always ensure:
- ESLint rules are respected.
- Prettier formatting is applied.
- TypeScript types are enforced.
- Code is placed in the correct directory structure.

## 🧹 ESLint + Prettier Configuration

To maintain consistent code quality and formatting, use the following setup:

### Install Dependencies
```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser


