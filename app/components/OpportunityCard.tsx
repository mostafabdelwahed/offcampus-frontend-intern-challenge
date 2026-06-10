import {Opportunity} from '../data/opportunities';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  opportunity: Opportunity;
}

function OpportunityCard({ opportunity }: Props) {
  return (
    <Card key={opportunity.id} sx={{ width: '100%' }}>
        <CardContent 
            sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on desktop
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2 
            }}
        >
            <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {opportunity.company}
                </Typography>
                <Typography variant="h6" component="div">
                    {opportunity.title} 
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {opportunity.description}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Typography variant="caption" sx={{ bgcolor: 'action.hover', p: 1, borderRadius: 1 }}>
                {opportunity.category}
            </Typography>
            <Typography variant="caption" sx={{ bgcolor: 'action.hover', p: 1, borderRadius: 1 }}>
                {opportunity.location}
            </Typography>
            <Typography variant="caption" sx={{ bgcolor: 'action.hover', p: 1, borderRadius: 1 }}>
                {opportunity.isPaid ? 'Paid' : 'Unpaid'}
            </Typography>
            </Box>
        </CardContent>
    </Card>
  );
}

export default OpportunityCard;