import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import FullMail from './components/FullMail'

function App() {

  return (
    <div className="App" >
      
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} >
          </Route>
          <Route path="/full-mail/:id" element={<FullMail />} />
        </Routes>
    </div>
  )
}

export default App
