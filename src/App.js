import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import OurStore from './Components/OurStore';
import CompareProduct from './Components/CompareProduct';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/OurStore' element={<OurStore/>}/>
        <Route path='/compare-product' element={<CompareProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
