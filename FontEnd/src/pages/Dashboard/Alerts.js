import React from 'react';
import { Box, Container, Typography,Stack } from '@mui/material';
import NotificationsPopover from '../../layouts/HeaderSection/NotificationsPopover';
// import 'alert.css';

const Alerts = () => {
  return (
    <Box sx={{ bgcolor: '#abdca7' }}>
      <Container maxWidth="md">
        <Typography variant="h3" mt={3} mb={3} sx={{color:'black'}}>
          New Alerts Here
        </Typography>
        <Box sx={{ bgcolor: '#fff', p: 3, mb: 3  }} borderRadius="30px">
          
        <Stack direction="row" alignItems="center" marginLeft="47rem" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
        </Stack>

        <Stack alignItems="center">
            <Typography variant="h4" mb={2}>
                New Company Added
            </Typography>
            <Typography variant="body1" mb={2}>
                Company Name: tatapower
            </Typography>
            <Typography variant="body1" mb={2}>
                Email: tatapower@gmail.com
            </Typography>
            <Typography variant="body1" mb={2}>
                Location: New Delhi
            </Typography>
        </Stack>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: 3, mb: 3  }} borderRadius="30px">
        <Stack direction="row" alignItems="center" marginLeft="47rem" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h4" mb={2}>
            New Customer Add 
          </Typography>
          <Typography variant="body1" mb={2}>
            Company Name:honda
          </Typography>
          <Typography variant="body1" mb={2}>
            Email: honda@123gmail.com
          </Typography>
          <Typography variant="body1" mb={2}>
            Location: pune,mumbai
          </Typography>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: 3, mb: 3  }} borderRadius="30px">
        <Stack direction="row" alignItems="center" marginLeft="47rem" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h4" mb={2}>
            New Product Add
          </Typography>
          <Typography variant="body1" mb={2}>
            Product Name: nokia
          </Typography>
          <Typography variant="body1" mb={2}>
            Email:nokiasell@gmail.com
          </Typography>
          <Typography variant="body1" mb={2}>
            Location: banglor,india
          </Typography>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: 3, mb: 3  }} borderRadius="30px">
        <Stack direction="row" alignItems="center" marginLeft="47rem" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h4" mb={2}>
            New User Added
          </Typography>
          <Typography variant="body1" mb={2}>
            Name: bvc
          </Typography>
          <Typography variant="body1" mb={2}>
            Email: bvc@gmail.com.com
          </Typography>
          <Typography variant="body1" mb={2}>
            Location: vallbhi,gujrat
          </Typography>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: 3, mb: 3  }} borderRadius="30px">
        <Stack direction="row" alignItems="center" marginLeft="47rem" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h4" mb={2}>
            New Supplier Added
          </Typography>
          <Typography variant="body1" mb={2}>
            Name: rakesh
          </Typography>
          <Typography variant="body1" mb={2}>
            Email: rakesh@gmail.com
          </Typography>
          <Typography variant="body1" mb={2}>
            surat,gujrat
          </Typography>
          </Stack>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Alerts;
