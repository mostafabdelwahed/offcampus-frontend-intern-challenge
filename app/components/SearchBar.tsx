import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    returnSearchTerm: (term: string) => void;
}

const SearchBar = ({ returnSearchTerm }: Props) => {
  return (
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
        onChange={(e) => returnSearchTerm(e.target.value)}
      />
  )
}

export default SearchBar