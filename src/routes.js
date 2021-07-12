import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import AssistantList from 'src/pages/AssistantList';
import MarketList from 'src/pages/MarketList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import Activate from 'src/pages/Activate';
import Forget from 'src/pages/Forget';
import Reset from 'src/pages/Reset';

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'assistants', element: <AssistantList /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'markets', element: <MarketList /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/users/activate/:token', element: <Activate /> },
      { path: '/users/password/forget', element: <Forget /> },
      { path: '/users/password/reset/:token', element: <Reset /> },

      { path: '/private', element: <PrivateRoute /> },
      { path: '/admin', element: <AdminRoute  /> },


      // Method using react router v5
      // <AdminRoute path="/admin" exact component={Admin} />}

      // Example Method using React Router v6
      // <Route path="users" element={<Users />} />
    ]
  }
];

export default routes;
