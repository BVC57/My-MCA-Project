// material
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export const CommonHeading = ({ parentTitle }) => (
  
    <Typography sx={{ color: 'info.main' }} component="h1" className="dashboard-header-info">
      {parentTitle}
    </Typography>
  );