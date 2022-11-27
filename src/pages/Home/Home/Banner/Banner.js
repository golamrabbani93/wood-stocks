import React from 'react';
import bannerImgOne from '../../../../Images/Banner/silde-3.jpg';
const Banner = () => {
	// const bannerStyle = {
	// 	background: `url(${bannerImgOne})`,
	// 	width: '100%',
	// 	height: '100vh',
	// 	backgroundSize: 'cover',
	// };
	return (
		<div className="">
			<div className=" grid md:grid-cols-2 gap-6 h-screen justify-center items-center">
				<div className="flex flex-col justify-center items-center h-full">
					<h2 className="text-primary font-bold text-4xl mt-4 md:mt-0  xl:text-5xl uppercase">
						Best Design of Furniture
						<span className="block md:mt-3">Collection</span>
					</h2>
					<h3 className="text-secondary font-bold text-xl mt-5">ITEMS AVAILABLE</h3>
				</div>
				<div className="images mx-4 md:mr-5">
					<img src={bannerImgOne} alt="" className="rounded-3xl" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
