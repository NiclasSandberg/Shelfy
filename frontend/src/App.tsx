import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts } from './api';
import { IProduct } from './interfaces';
import ProductCard from './components/ProductCard';
import CircularProgress from '@mui/joy/CircularProgress';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
