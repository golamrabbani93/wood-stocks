import React from 'react';
import UseTitle from '../../../../hooks/UseTitle';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
	UseTitle('Home | Woods Stocks');
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
		</div>
	);
};

export default Home;
