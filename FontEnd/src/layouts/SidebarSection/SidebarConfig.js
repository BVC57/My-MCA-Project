import DashboardIcon from "../../assets/svg/dashboardIcon";
import DataIcon from "../../assets/svg/dataIcon";
import ImportMonitoringIcon from "../../assets/svg/importMonitoringIcon";
import ExportMonitoringIcon from "../../assets/svg/exportMonitoringIcon";
import ReportIcon from "../../assets/svg/reportIcon";
import ReconcilliationIcon from "../../assets/svg/reconcilliationIcon";
import ReturnsIcon from "../../assets/svg/returnIcon";
import CheckListIcon from "../../assets/svg/checkListIcon";
import AdminIcon from "../../assets/svg/adminIcon";
import Lpath from '../../components/authentication/login/LoginForm';



const sidebarConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: <DashboardIcon/>
  },
  {
    title: 'UPLOAD',
    path: '/upload',
    icon: <DataIcon/>
  },
  {
    title: 'Data',
    path: '/data1',
    icon: <DataIcon/>
  },
  {
    title: 'REPORTS',
    path: '/reports',
    icon: <ReportIcon/>
  },
  {
    title: 'SETTING',
    path: '',
    icon: <ReconcilliationIcon/>,
    children:[

      {
        title: 'PROFILE',
        path: '/profile',
        icon: <AdminIcon/>,
      },
      {
        title: 'LOGOUT',
        path: '/login',
        icon: <AdminIcon/>,
      },
    ]
  }, 
  {
    title: 'Admin',
    path: '/404',
    icon: <ImportMonitoringIcon/>,
    children:[
        {
          title: 'COMPANY',
          path: '/dashboard/company',
        },
        {
          title: 'GSTIN',
          path: '/gstin',
        },
        {
          title: 'BU',
          path: '/bu',
        },
        {
          title: 'LOCATION',
          path: '/location',
        },
        {
          title: 'USER',
          path: '/user',
        },
        {
          title: 'Assign Role',
          path: '/assignrole',
        },
    ]
  },
  {
    title: 'Super Admin',
    path: '/404',
    icon: <AdminIcon/>,
    children:[
        {
          title: 'Customer',
          path: '/customer',
        },
        {
          title: 'Product',
          path: '/product',
        },
        {
          title: 'Supplier',
          path: '/supplier',
        },
        {
          title: 'Licence',
          path: '/licence',
        },
       
    ]
  }
];

export default sidebarConfig;
