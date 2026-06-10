import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import Box from "@mui/material/Box";

interface Props {
    returnSearchTerm: (term: string) => void;
    returnCategory: (category: string) => void;
}

const FilterBar = ({ returnSearchTerm, returnCategory }: Props) => {
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
        <SearchBar returnSearchTerm={returnSearchTerm} />
        <CategoryFilter returnCategory={returnCategory} />
    </Box>
  )
}

export default FilterBar