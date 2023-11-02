import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Index from './page/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Booking/' element={<Index/>}/>
        <Route path='/Booking/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
