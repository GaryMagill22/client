import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import Detail from './views/Detail';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
