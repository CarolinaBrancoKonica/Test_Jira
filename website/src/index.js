import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Pricing from './components/Pricing';
import Information from './components/Information';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/info' element={<Information/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

