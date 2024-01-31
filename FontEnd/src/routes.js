import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Data1 from './pages/Data'
import Customer from './pages/Admin/company/Customer';
import Product from './pages/Admin/company/Product';
import Licence from './pages/Admin/company/Licence';
import AR from './pages/Admin/company/assignRoles'
import Supllier from './pages/Admin/company/Supplier';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Reg from './pages/Register';
import Report from './pages/Report';
import BU from './pages/Admin/company/bu';
import Loc from './pages/Admin/company/location';
import User from './pages/Admin/company/userMaster';
import GSTIN from './pages/Admin/company/gstIn';
import DashboardApp from './pages/Dashboard';
import CompnaySetup from './pages/Admin/company';
import NotFound from './pages/Page404';
import UserMaster from './pages/Dashboard/bu';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'company', element: <CompnaySetup /> },
        { path: 'user', element: <UserMaster/> }
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/bu',
      element:<DashboardLayout/>,
      children:[
        {element:<BU/>}
      ]
    },
    {
      path: '/gstin',
      element:<DashboardLayout/>,
      children:[
        {element:<GSTIN/>}
      ]
    },
    {
      path: '/location',
      element:<DashboardLayout/>,
      children:[
        {element:<Loc/>}
      ]
    },
    {
      path: '/user',
      element:<DashboardLayout/>,
      children:[
        {element:<User/>}
      ]
    },
    {
      path: '/profile',
      element:<DashboardLayout/>,
      children:[
        {element:<Profile/>}
      ]
    },
    {
      path: '/reg',
      element:<DashboardLayout/>,
      children:[
        {element:<Reg/>}
      ]
    },
    {
      path: '/reports',
      element:<DashboardLayout/>,
      children:[
        {element:<Report/>}
      ]
    },
    {
      path: '/upload',
      element:<DashboardLayout/>,
      children:[
        {element:<Upload/>}
      ]
    },
    {
      path: '/customer',
      element:<DashboardLayout/>,
      children:[
        {element:<Customer/>}
      ]
    },
    {
      path: '/product',
      element:<DashboardLayout/>,
      children:[
        {element:<Product/>}
      ]
    },
    {
      path: '/licence',
      element:<DashboardLayout/>,
      children:[
        {element:<Licence/>}
      ]
    },
    {
      path: '/supplier',
      element:<DashboardLayout/>,
      children:[
        {element:<Supllier/>}
      ]
    },
    {
      path: '/assignrole',
      element:<DashboardLayout/>,
      children:[
        {element:<AR/>}
      ]
    },
    {
      path: '/data1',
      element:<DashboardLayout/>,
      children:[
        {element:<Data1/>}
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
