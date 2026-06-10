import { Opportunity, MOCK_DATA } from "../data/opportunities";
import OpportunityCard from "./OpportunityCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const OpportunityGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {MOCK_DATA.map((item: Opportunity) => (
          <Grid size={12} key={item.id}>
            <OpportunityCard opportunity={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OpportunityGrid;
