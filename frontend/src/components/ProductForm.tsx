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

const ProductForm = ({ product, onSubmit}: ProductFormAttrs) => {

  const [name, setName] = useState<string>(product.name || "");
  const [description, setDescription] = useState<string>(product.description || "");
  const [dateOpened, setdateOpened] = useState<string>(product.dateOpened || "");
  const [daysUntilExpiry, setDaysUntilExpiry] = useState<string>(product.daysUntilExpiry || "");
  const [category, setCategory] = useState<string>(product.category || "");
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [months, setMonths] = useState("");


  const onFormSubmit = async (e: any) => {
      e.preventDefault();

      const updatedProduct: IProduct = { ...product, name, description, dateOpened, daysUntilExpiry, category} as IProduct;
      onSubmit(updatedProduct);

  }

  const handleChange = (event: SelectChangeEvent) => {
    setMonths(event.target.value);
  };
  return (
    <>
    <div className="form-box">
        <form onSubmit={onFormSubmit} className="product-form">
            <label>Product name: </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <label>Description: </label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        
            <label>Product name: </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <label>Product name: </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />


            <div className="form-submit-button">
                <button type='submit'>Submit changes</button>
            </div>
        </form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
        
    </div>
</>

  )
}

export default ProductForm