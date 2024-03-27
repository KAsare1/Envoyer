import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import Login from './pages/Authentication/Login'
// import Signup from './pages/Authentication/Signup'
import CustomerRegisteration from './pages/Authentication/RegistrationPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      {/* <Route path='signup' element={<Signup/>}/> */}
      <Route path='signup' element={<CustomerRegisteration/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
