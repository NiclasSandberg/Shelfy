import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { IProduct } from '../interfaces';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

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

  const onFormSubmit = async (event: any) => {
    event.preventDefault();
    const expiryDate = calculateExpiryDate();
    const updatedProduct: IProduct = { ...product, name, description, dateOpened, expiryDate, periodAfterOpening: months, category: { categoryId: 1 } } satisfies IProduct;
    onSubmit(updatedProduct);
  }

  return (
    <>
      its not finished yet! :D

      <Box component="form" onSubmit={onFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Product name"
              fullWidth
              value={name}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              fullWidth
              multiline
              minRows={2}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="PAO in months"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={months}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMonths(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker value={dateOpened} label="Set opening date" onChange={(newValue: any) => setDateOpened(newValue)} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit'>Save</Button>
          </Grid>
          <Grid item xs={12}>

            <Link to={'/'}>
              <button>🏠</button>
            </Link>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}


export default ProductForm
