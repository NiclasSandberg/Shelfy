import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import { ICategory } from '../interfaces';

interface FilterAttrs {
  categories: ICategory[];
  filterValue: number | undefined;
  setFilterValue: (filterValue: number | undefined) => any;
}

const Filter = ({ categories, filterValue, setFilterValue }: FilterAttrs) => {
  const handleFilterChange = (e: any) => {
    e.preventDefault();
    setFilterValue(e.target.value);
  }

  return (
    <>
      <FormControl fullWidth sx={{ mt: 2 }}>
        {/* <InputLabel>ALL</InputLabel> */}
        <Select
          value={filterValue}
          variant="filled"
          label="Category"
          onChange={handleFilterChange}
        >
          {/* <MenuItem value={0} disabled>
                    Please select 
                  </MenuItem> */}
          {categories.map((c) => (
            <MenuItem value={c.id} key={c.id}>{c.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default Filter