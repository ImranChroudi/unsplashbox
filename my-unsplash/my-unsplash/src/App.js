import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SearchPage />} />
       {/* <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />  */}
     </Routes>
  </Router>
  )
}

export default App
