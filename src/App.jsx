import React from 'react'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Forgotpassword from './components/Forgotpassword'
import { Route, Routes,useNavigate} from 'react-router-dom'
import Createpage from './components/Createpage'
import Passwordcreatepage from './components/Passwordcreatepage'
import Checkmail from './components/Checkmail'
import { useState } from 'react'
import Homepage from './components/Homepage'
function App() {
 
  let [resetToken, setResetToken] = useState("");
  const navigate = useNavigate("");

   


  return (
    <>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup 
                   
        />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
        <Route path="/createpage" element={<Createpage/>}></Route>
        <Route path="/passwordcreatepage" element={<Passwordcreatepage/>}></Route>
        <Route path="/checkmail" element={<Checkmail/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>





      </Routes>
    </>
  )
}

export default App
