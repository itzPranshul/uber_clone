// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <header className="ride-header">
    <h1 className="logo">Uber</h1>
    <nav className="ride-nav">
      <Link to="/">Home</Link>
      <Link to="/ride">Ride</Link>
      <Link to="/drive">Drive</Link>
      <Link to="/faqs">FAQs</Link>
    </nav>
  </header>
)

export default Navbar
