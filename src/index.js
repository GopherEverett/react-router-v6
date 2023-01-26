import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import BrowserRouter with { destructuring } here

const root = createRoot(document.getElementById('root'))

root.render(
  // Wrap our App component in BrowserRouter
  <App />
  // Wrap our App component in BrowserRouter
)