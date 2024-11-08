import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';
import Collections from './pages/Collections';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/searchPage" element={<SearchPage />} />
       <Route path="/SearchResultPage" element={<SearchResultPage />} />
       <Route path="/" element={<Collections />} />

     </Routes>
  </Router>
  )
}

export default App
