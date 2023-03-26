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
      { id: 1, name: "makeup" },
      { id: 2, name: "cream" },
      { id: 3, name: "soap" },
      { id: 4, name: "medicine" },
    ]);
  }, []);

  const getCategories = async (): Promise<ICategory[]> => {
    const response: Response = await fetch("http://localhost:8080/categories/");
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
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  value={dateOpened}
                  sx={{ width: "100%" }}
                  label="Set opening date"
                  onChange={(newValue: any) => setDateOpened(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">Save</Button>
          </Grid>
          <Grid item xs={12}>
            <Link to={"/"}>
              <Button variant="contained" color="secondary">🏠</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductForm;
