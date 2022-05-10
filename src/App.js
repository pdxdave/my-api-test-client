
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/single-product/:id" element={<SingleProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
