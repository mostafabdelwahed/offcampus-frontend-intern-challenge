import { Opportunity } from "../data/opportunities";
import OpportunityCard from "./OpportunityCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface Props {
    opportunities: Opportunity[];
}

const OpportunityGrid = ({ opportunities }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {opportunities.map((item: Opportunity) => (
          <Grid size={12} key={item.id}>
            <OpportunityCard opportunity={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OpportunityGrid;
