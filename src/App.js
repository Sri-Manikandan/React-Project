import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import CustomizedProducts from './components/CutomizedProducts/CustomizedProducts';
import Signup from './components/SignUp/SignUp';
import Products from './components/Products/Products';
import { Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/filtered_products' element={<CustomizedProducts/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
