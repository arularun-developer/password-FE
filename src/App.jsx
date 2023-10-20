import React from 'react'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Forgotpassword from './components/Forgotpassword'
import { Route, Routes} from 'react-router-dom'
import Resetpassword from './components/Resetpassword'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
        <Route path="/reset-password/:token" element={<Resetpassword/>}></Route>
      </Routes>
    </>
  )
}

export default App
