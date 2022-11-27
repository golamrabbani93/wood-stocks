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
import Page404 from '../../pages/Shared/404page/Page404';
import CategoryProducts from '../../pages/Shared/CategoryProducts/CategoryProducts';
import Login from '../../pages/Shared/Login/Login';
import SignUp from '../../pages/Shared/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

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
				element: (
					<BuyerRoute>
						<MyOrders></MyOrders>
					</BuyerRoute>
				),
			},
			{
				path: '/dashboard/myproducts',
				element: (
					<SellerRoute>
						<MyProducts></MyProducts>
					</SellerRoute>
				),
			},
			{
				path: '/dashboard/addproduct',
				element: (
					<SellerRoute>
						<AddProduct></AddProduct>
					</SellerRoute>
				),
			},
			{
				path: '/dashboard/sellers',
				element: (
					<AdminRoute>
						<Seller></Seller>
					</AdminRoute>
				),
			},
			{
				path: '/dashboard/buyers',
				element: (
					<AdminRoute>
						<Buyer></Buyer>
					</AdminRoute>
				),
			},
		],
	},
	{
		path: '*',
		element: <Page404></Page404>,
	},
]);
