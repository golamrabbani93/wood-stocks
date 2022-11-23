import React from 'react';
import bannerImgOne from '../../../../Images/Banner/silde-3.jpg';
const Banner = () => {
	const bannerStyle = {
		background: `url(${bannerImgOne})`,
		width: '100%',
		height: '100vh',
		backgroundSize: 'cover',
	};
	return (
		<div style={bannerStyle} className="absolute top-0 left-0">
			<div className="flex flex-col justify-center items-center h-full">
				<h2 className="text-white font-bold text-5xl">WE CARRY ONLY THE FINEST</h2>
				<h3 className="text-white font-bold text-xl mt-5">ITEMS AVAILABLE</h3>
			</div>
		</div>
	);
};

export default Banner;
