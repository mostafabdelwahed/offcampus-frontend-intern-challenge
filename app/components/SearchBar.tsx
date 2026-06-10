import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    setSearchTerm: (term: string) => void;
}

const SearchBar = ({ setSearchTerm }: Props) => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider'
    }}>
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  )
}

export default SearchBar