import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useState, useEffect } from "react";
import { IProduct, ICategory } from "../interfaces";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import '../css/ProductForm.css';

import paoSymbol from '../images/pao_symbol.png'

interface ProductFormAttrs {
  product: Partial<IProduct>;
  onSubmit: (updatedProduct: IProduct) => any;
}

const ProductForm = ({ product, onSubmit }: ProductFormAttrs) => {
  const [name, setName] = useState<string>(product.name || "");
  const [description, setDescription] = useState<string>(
    product.description || ""
  );
  const [dateOpened, setDateOpened] = useState<Dayjs>(
    dayjs(product.dateOpened || new Date())
  );
  const [months, setMonths] = useState<string>("0");
  const [categoryId, setCategoryId] = useState<number>(
    product.category?.id || 0
  );
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    // REAL code:
    // getCategories().then(setCategories);

    // FAKE code: mock data, because backend endpoint is not yet implemented
    setCategories([
      { id: 1, name: "Makeup" },
      { id: 2, name: "Skincare" },
      { id: 3, name: "Hair care" },
      { id: 4, name: "Medicine" },
      { id: 5, name: "Towels" },
      { id: 6, name: "Miscellaneous" }
    ]);
  }, []);

  const getCategories = async (): Promise<ICategory[]> => {
    const response: Response = await fetch("/api/products/categories/");
    const data: ICategory[] = await response.json();

    return data;
  };

  const calculateExpiryDate = () => {
    const newDate: Date = structuredClone(dateOpened.toDate());
    newDate.setMonth(newDate.getMonth() + +months);
    return newDate;
  };

  const onFormSubmit = async (event: any) => {
    event.preventDefault();
    const expiryDate = calculateExpiryDate();

    if (categoryId === 0) {
      alert("Please select a category");
      return;
    }

    const updatedProduct: IProduct = {
      ...product,
      name,
      description,
      dateOpened,
      expiryDate,
      periodAfterOpening: months,
      category: { id: categoryId },
    } satisfies IProduct;
    onSubmit(updatedProduct);
  };

  return (
    <>
      <div className="card-container">


        <Box component="form" onSubmit={onFormSubmit} sx={{ mt: 4, mb: 4 }}>
          <Grid container alignItems="flex-end" spacing={4}>
            <Grid item xs={6}>
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
            <Grid item xs={6} container
              direction="row"
              alignItems="center"
              justifyContent="flex-end">  <div className="product-icon-container">
                <img src={product.category?.imageUrl} alt="" className="product-icon" />
              </div></Grid>
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
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryId}
                  variant="filled"
                  label="Category"
                  onChange={(e) => setCategoryId(Number(e.target.value))}
                >
                  <MenuItem value={0} disabled>
                    Please select
                  </MenuItem>
                  {categories.map((c) => (
                    <MenuItem value={c.id}>{c.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={3} container
              direction="row"
              alignItems="center"
              justifyContent="flex-end">
              <img style={{width:"50px"}}src={paoSymbol} alt="" className="product-icon" />
            </Grid>
            <div className="poa-desc"> <p>The symbol helps you identify how long a product is safe to use after its package has been opened for the first time.</p>
     </div>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={dateOpened}
                    sx={{ width: "100%" }}
                    label="Opening date"
                    onChange={(newValue: any) => setDateOpened(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              This product expires: <br/>{product.expiryDate}
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" color="secondary" variant="contained">Save</Button>

            </Grid>
          </Grid>
        </Box>
      </div>

    </>
  );
};

export default ProductForm;
