import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/elements/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/error/:errorId?' element={<div>Error Occoured</div>} />
          <Route path='*' element={<div>Error 404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
