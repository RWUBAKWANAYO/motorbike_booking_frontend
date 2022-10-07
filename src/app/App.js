import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Categories from '../features/categories/Categories';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
        <div className="border">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path="/brands" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
