import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton,Typography } from '@mui/material';
// components
import { MHidden } from '../../components/comman-component';
// import { CommonHeading} from '../../components/comman-component/Heading'
//
// import CurrencySelect from './CurrencySelect';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
// import LogOut from './LogOut';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 261;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 115;

const RootStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#F3F3F3',
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 4)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle className="header-bottom-border">
        <MHidden width="lgUp">
        {/* onClick={onOpenSidebar} */}
          <IconButton sx={{ mr: 1, color: 'text.primary' }} onClick={onOpenSidebar}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="header-flex"
        >
          <Typography sx={{color:'#248e38',fontSize:'40px'}}>DASHBOARD FOR ADMIN</Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <CurrencySelect/> */}
          <Searchbar />

          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <NotificationsPopover />
            <AccountPopover />
            {/* <LogOut /> */}
          </Stack>
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}
