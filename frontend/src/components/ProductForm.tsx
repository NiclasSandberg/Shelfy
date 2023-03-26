import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { IProduct } from '../interfaces';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, TextField } from '@mui/material';

interface ProductFormAttrs {
  product: Partial<IProduct>;
  onSubmit: (updatedProduct: IProduct) => any;
}

const ProductForm = ({ product, onSubmit }: ProductFormAttrs) => {

  const [name, setName] = useState<string>(product.name || "");
  const [description, setDescription] = useState<string>(product.description || "");
  const [dateOpened, setDateOpened] = useState<Dayjs>(dayjs(product.dateOpened || new Date()));
  const [months, setMonths] = useState<string>("0");
  // const [category, setCategory] = useState<string>(product.categoryId || "");

  const calculateExpiryDate = () => {
    const newDate: Date = structuredClone(dateOpened.toDate())
    newDate.setMonth(newDate.getMonth() + +months)
    return newDate;
  }

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    const expiryDate = calculateExpiryDate();
    const updatedProduct: IProduct = { ...product, name, description, dateOpened, expiryDate, months, category: { categoryId: 1 } } as IProduct;
    onSubmit(updatedProduct);
  }

  console.log(AdapterDayjs, dateOpened)

  return (
    <>
      its not finished yet! :D
      <Grid container>
        <Grid item>
          <TextField
            label="Product name"
            defaultValue={name}
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Description"
            defaultValue={description}
            multiline
            rows={4}
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            label="PAO in months"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            defaultValue={months}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker value={dateOpened} label="Set opening date" onChange={(newValue: any) => setDateOpened(newValue)} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item>

        </Grid>
        <Button type='submit'>Save</Button>
      </Grid>
    </>
  )
}


export default ProductForm
