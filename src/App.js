
import { logDOM } from '@testing-library/react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BikeParts from './pages/BikeParts';
import Sale from './pages/Sale';

  



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="BikeParts" element={<BikeParts />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Sale" element={<Sale />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
