import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>App</div>} />
        <Route path='/error/:errorId?' element={<div>Error Occoured</div>} />
        <Route path='*' element={<div>Error 404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
