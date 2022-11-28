import React from 'react';
import UseTitle from '../../../../hooks/UseTitle';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import MakeUs from '../MakeUS/MakeUs';
import Products from '../Products/Products';

const Home = () => {
	UseTitle('Home | Woods Stocks');
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<AdvertiseProduct></AdvertiseProduct>
			<MakeUs></MakeUs>
		</div>
	);
};

export default Home;
