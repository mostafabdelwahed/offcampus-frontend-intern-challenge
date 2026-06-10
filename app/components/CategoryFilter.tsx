import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    returnCategory: (category: string) => void
}

export default function CategoryFilter({ returnCategory }: Props) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    returnCategory(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Category"
        onChange={handleChange}
    >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Internship"}>Internship</MenuItem>
        <MenuItem value={"Student Club"}>Student Club</MenuItem>
        <MenuItem value={"Part-time"}>Part-time</MenuItem>
    </Select>
    </FormControl>
  );
}