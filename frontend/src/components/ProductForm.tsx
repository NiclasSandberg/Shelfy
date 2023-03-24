import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { title } from 'process';
import React, { useState } from 'react'
import { IProduct } from '../interfaces';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SelectChangeEvent } from '@mui/material';

interface ProductFormAttrs {
  product: Partial<IProduct>;
  onSubmit: (updatedProduct: IProduct) => any;
}

const ProductForm = ({ product, onSubmit }: ProductFormAttrs) => {

  const [name, setName] = useState<string>(product.name || "");
  const [description, setDescription] = useState<string>(product.description || "");
  const [dateOpened, setDateOpened] = useState<Date | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  // const [daysUntilExpiry, setDaysUntilExpiry] = useState<string>(product.daysUntilExpiry || "");
  const [category, setCategory] = useState<string>(product.category || "");
  const [months, setMonths] = useState<string>("");

  
  //expiryDate = months + dateOpened
  const calculateExpiryDate = () => {
  
  console.log(dateOpened);
  //console.log(new Date(dateOpened?.getMilliseconds + ((1000 * 60 * 60 * 24)*(parseInt(months) * 30))));
  // return new Date(dateOpened.getTime() + ((1000 * 60 * 60 * 24)*(parseInt(months) * 30)));
  //return new Date(dateOpened.getTime() + ((1000 * 60 * 60 * 24)*(parseInt(months) * 30)));;
  return null;
  }

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    setExpiryDate(calculateExpiryDate());

    const updatedProduct: IProduct = { ...product, name, description, dateOpened, expiryDate, category } as IProduct;
    onSubmit(updatedProduct);

  }


  return (
    <>
      <div className="form-box">
        <form onSubmit={onFormSubmit} className="product-form">
          <label>Product name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
          <label>Description: </label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} /><br />
          {/* <label>Days until expiry: </label>
          <input type="text" value={daysUntilExpiry} onChange={e => setDaysUntilExpiry(e.target.value)} /> */}
          <label>How many months is this product good for? </label>
          <input type="number" value={months} onChange={e => setMonths(e.target.value)} /> <br />
          
          <label>Set opening date </label><br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         
          <DemoContainer components={['DatePicker']}>
            <DatePicker value={dateOpened} onChange={(newValue: any) => setDateOpened(newValue)} />
          </DemoContainer>
        </LocalizationProvider>

          <div className="form-submit-button">
            <button type='submit'>Submit changes</button>
          </div>
        </form>

      </div>
    </>

  )
}

export default ProductForm

function valueOf(months: string) {
  throw new Error('Function not implemented.');
}
