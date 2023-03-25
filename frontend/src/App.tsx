import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductView from './components/ProductView';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return(
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path="/products/new" element={<CreateProduct />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;
