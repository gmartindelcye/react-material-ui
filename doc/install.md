---
title: "React/Vite Materual UI App"
---

# React/Vite Materual UI App

## Create from Scratch

1. Create a new folder project

   ```bash
   mkdir material-ui-app
   cd material-ui-app
   ```

2. Install React from Vite

   ```bash
   npm init vite@latest .
   ```

   Select options: React and Javascript

3. Install dependencies

   ```bash
   npm install
   ```

4. Install Material UI

   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

5. Modify `package.json` dependencies as follow:

   ```json
        "peerDependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        },
        "dependencies": {
            "@emotion/react": "^11.11.4",
            "@emotion/styled": "^11.11.5",
            "@mui/material": "^5.15.15",
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        },
   ```

6. Install Roboto font

   ```bash
   npm install @fontsource/roboto
   ```

7. Install Material Icons

   ```bash
   npm install @mui/icons-material
   ```

8. Clean unnecessary or initialize files

   ```bash
   rm -rf src/App.css public/logo.svg src/assets/react.svg
   ```

9. Clear content of `src/App.js` and change it to:
   ```js
   export default function App() {
     return (
       <>
         <h1>Hello World</h1>
       </>
     );
   }
   ```
