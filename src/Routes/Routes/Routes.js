import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Main from '../../Layouts/Main/Main';
import Buyer from '../../pages/Dashboard/Admin/Buyer/Buyer';
import Seller from '../../pages/Dashboard/Admin/Seller/Seller';
import MyOrders from '../../pages/Dashboard/Buyer/MyOrders/MyOrders';
import Dashboard from '../../pages/Dashboard/Dashboard';
import AddProduct from '../../pages/Dashboard/Seller/AddProduct/AddProduct';
import MyProducts from '../../pages/Dashboard/Seller/MyProducts/MyProducts';
import Home from '../../pages/Home/Home/Home/Home';
import CategoryProducts from '../../pages/Shared/CategoryProducts/CategoryProducts';
import Login from '../../pages/Shared/Login/Login';
import SignUp from '../../pages/Shared/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/products/:category_id',
				element: (
					<PrivateRoute>
						<CategoryProducts></CategoryProducts>
					</PrivateRoute>
				),
			},

			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						<Dashboard></Dashboard>
					</PrivateRoute>
				),
			},
			{
				path: '/dashboard/myorders',
				element: <MyOrders></MyOrders>,
			},
			{
				path: '/dashboard/myproducts',
				element: <MyProducts></MyProducts>,
			},
			{
				path: '/dashboard/addproduct',
				element: <AddProduct></AddProduct>,
			},
			{
				path: '/dashboard/sellers',
				element: <Seller></Seller>,
			},
			{
				path: '/dashboard/buyers',
				element: <Buyer></Buyer>,
			},
		],
	},
]);
