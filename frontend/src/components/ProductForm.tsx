import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { IProduct } from '../interfaces';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

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
      <div className="form-box">
        <form onSubmit={onFormSubmit} className="product-form">
          <label>Product name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />

          <label>Description: </label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} /><br />

          <label>How many months is this product good for? </label>
          <input type="number" value={months} onChange={e => setMonths(e.target.value)} /> <br />

          <label>Set opening date: </label><br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker value={dateOpened} onChange={(newValue: any) => setDateOpened(newValue)} />
            </DemoContainer>
          </LocalizationProvider>

          The current expiry date is: {product.expiryDate}



          <div className="form-submit-button">
            <button type='submit'>Submit changes</button>
          </div>
        </form>

      </div>

      {/* include text and little picture about period after opening date symbol here  */}
    </>

  )
}

export default ProductForm
