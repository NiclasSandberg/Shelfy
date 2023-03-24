import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductView from './components/ProductView';
import CreateProduct from './components/CreateProduct';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [months, setMonths] = useState("");
  
  useEffect(() => {
    getData();
  }, [months]) 

  const getData = async () => {
    const products = await getProducts();
    console.log({products});
    setProducts(products);
  }
  
  const handleChange = (event: SelectChangeEvent) => {
    setMonths(event.target.value);
  };

  
  return (
    <>
    <h1>Shelfy</h1> 
    {/*products.length === 0 && "Loading ..."*/}
    {products?.map((prod,index) => 
    <div>
       <ProductCard product={prod} key={prod.id} /> 
       <CircularProgress key={prod.name} size="lg" determinate value={66.67}>
       {prod.daysUntilExpiry}
     </CircularProgress>
     </div>
       )}
       <div style={{paddingTop:"1rem"}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Months left</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={months}
          label="Months left"
          onChange={handleChange}
        >
         
          <MenuItem value={1}>1M</MenuItem>
          <MenuItem value={6}>6M</MenuItem>
          <MenuItem value={12}>12M</MenuItem>
        </Select>
      </FormControl>
     {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>*/}
    {months}M
    </div>
    </>

  );
}

export default App;
