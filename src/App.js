import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Pages/Login.js';
import UserGenerator from './component/Pages/UserGenerator.js';
import HttpCat from './component/Pages/HttpCat.js';
import RandomDog from './component/Pages/RandomDog.js';
import Cadastro from './component/Pages/Cadastro.js';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/UserGenerator" element={<UserGenerator/>}/>
            <Route exact path="/HttpCat" element={<HttpCat/>}/>
            <Route exact path="/RandomDog" element={<RandomDog/>}/>
            <Route exact path="/Cadastro" element={<Cadastro/>}/>
          </Routes>
    </Router>
  );
}


export default App;
