// import React from 'react'
import Home from './components/Home';
import Contacts from './components/Contacts'
import About from './components/About'
import {BrowserRouter as Router ,Routes, Route} from  "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/projects"  element={<About/>}/>
          
          <Route path="/contacts"  element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App