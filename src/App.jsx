import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// Импорты страничек
import LoginPage from './Pages/Login.jsx';

function App() {
  return (
    <div className='main'>
      {/* <Layout /> */}
      <Router>
        <Routes>
          <Route path='/admin/account/login/' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;