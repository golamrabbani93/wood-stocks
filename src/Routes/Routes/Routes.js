import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Main from '../../Layouts/Main/Main';
import Dashboard from '../../pages/Dashboard/Dashboard';
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
				loader: ({params}) => fetch(`http://localhost:5000/products/${params.category_id}`),
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
		],
	},
]);
