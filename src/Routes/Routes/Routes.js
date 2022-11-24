import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Home from '../../pages/Home/Home/Home/Home';
import CategoryProducts from '../../pages/Shared/CategoryProducts/CategoryProducts';

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
				loader: (params) => fetch(`http://localhost:5000/products/${params.category_id}`),
				element: <CategoryProducts></CategoryProducts>,
			},
		],
	},
]);
