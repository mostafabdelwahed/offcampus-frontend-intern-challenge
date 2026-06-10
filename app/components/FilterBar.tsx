import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import Box from "@mui/material/Box";

interface Props {
  returnSearchTerm: (term: string) => void;
  returnCategory: (category: string) => void;
}

const FilterBar = ({ returnSearchTerm, returnCategory }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        padding: 2,
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        width: "100%",
      }}
    >
      <SearchBar returnSearchTerm={returnSearchTerm} />
      <CategoryFilter returnCategory={returnCategory} />
    </Box>
  );
};

export default FilterBar;
