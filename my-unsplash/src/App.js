import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/searchPage" element={<SearchPage />} />
       <Route path="/" element={<SearchResultPage />} />
     </Routes>
  </Router>
  )
}

export default App
