import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
import { Box } from '@mui/material';
// component
import DashboardNavbar from './HeaderSection/DashboardNavbar';
// ----------------------------------------------------------------------
const Page = forwardRef(({ children, title = '',parentTitle, ...other }, ref) => {
  const [open, setOpen] = useState(false);
  return(
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <DashboardNavbar parentTitle={parentTitle} onOpenSidebar={() => setOpen(true)}/>
    {children}
  </Box>
)})

export default Page;
