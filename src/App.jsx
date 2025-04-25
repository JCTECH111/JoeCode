import { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import AppRoutes from "./routes/routes";
import './App.css'

function App() {

  return (
    <>
      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>
    </>
  )
}

export default App
