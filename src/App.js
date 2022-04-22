import React from 'react';
import { Routes, Route } from "react-router-dom";
import Juego from './components/Juego';
import User from './components/User'
import {CartProvider} from './context/CartContext'


function App() {
 
  return (

      <CartProvider>
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/juego" element={<Juego/>} />
        </Routes>
      </CartProvider>
      
  );
}

export default App;
