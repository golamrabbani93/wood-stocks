import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Page404 = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="mb-52 flex justify-center items-center flex-col">
				<h2 className="text-8xl text-white font-bold">404</h2>
				<h2 className="text-3xl md:text-5xl mb-5">Page Not Found</h2>
				<Link to="/">
					<button className="btn btn-primary">Go Back</button>
				</Link>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Page404;
