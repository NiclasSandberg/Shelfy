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
      <h1>YO!!</h1>
      {/*products.length === 0 && "Loading ..."*/}
      {products?.map(prod => <ProductCard product={prod} key={prod.id} />)}
    </>

  );
}

export default App;
