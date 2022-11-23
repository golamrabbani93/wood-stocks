import React from 'react';
import UseTitle from '../../../../hooks/UseTitle';
import Banner from '../Banner/Banner';

const Home = () => {
	UseTitle('Home | Sitpad');
	return (
		<div>
			<Banner></Banner>
		</div>
	);
};

export default Home;
