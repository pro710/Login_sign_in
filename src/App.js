import React from 'react'
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
// import Welcome from './Welcome';
import SingleProduct from './SingleProduct';
import Product from './Product';
import Payment from './Payment';
const App = () => {
  return (
   <div>
     <Router>
      <Routes>
       <Route path="/"  element={<Login />}  exact/>
       <Route path="/signup"  element={<Signup/>}  exact/>
       {/* <Route path="/welcome"  element={<Welcome/>}  exact/> */}
       <Route path='/welcome' element={<Product/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />

        <Route path="/payment"  element={<Payment />}  exact/>
       </Routes>
    </Router>
   </div>
  )
}

export default App;