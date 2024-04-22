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
