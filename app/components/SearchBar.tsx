import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  returnSearchTerm: (term: string) => void;
}

const SearchBar = ({ returnSearchTerm }: Props) => {
  return (
    <TextField
      id="opportunity-search"
      label="Search opportunities..."
      variant="outlined"
      onChange={(e) => returnSearchTerm(e.target.value)}
      sx={{
        width: { xs: "100%", sm: 400 }, // Stretches out wide on desktop, adapts to mobile
      }}
    />
  );
};

export default SearchBar;
