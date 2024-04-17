import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import Login from './pages/Authentication/Login'
// import Signup from './pages/Authentication/Signup'
import CustomerRegisteration from './pages/Authentication/RegistrationPage'
import Otp from './pages/Authentication/OTP'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      {/* <Route path='signup' element={<Signup/>}/> */}
      <Route path='signup' element={<CustomerRegisteration/>}/>
      <Route path='otp-verification' element={<Otp/>}/>
      <Route path='otp-verification/signup' element={<CustomerRegisteration/>}/>
      <Route path='login/signup' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
