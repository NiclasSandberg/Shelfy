import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductView from './components/ProductView';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const products = await getProducts();
    console.log({ products });
    setProducts(products);
  }

  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* <Route path="/articles/new" element={<ArticleCreate />} /> */}
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path='/' element={<ProductList />} />
          {/* <Route path="/articles/:articleId/edit" element={<ArticleEdit />} /> */}

        </Routes>
      </BrowserRouter>
      this is a comment

    </>

  );
}

export default App;
