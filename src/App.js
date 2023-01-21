import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'

function App() {

  return (
    <div className="App" >
      
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
