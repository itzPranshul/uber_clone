// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Ride from './pages/Ride'
import Drive from './pages/Drive'
import FAQs from './pages/FAQs'

const App = () => {
  const location = useLocation()

  return (
    <>
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
