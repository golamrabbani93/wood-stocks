import React from 'react';

import img1 from '../../../../Images/ourservice1.png';
import img2 from '../../../../Images/ourservice2.png';
import img3 from '../../../../Images/ourservice3.png';
import img4 from '../../../../Images/ourservice4.png';
const MakeUs = () => {
	return (
		<div className="my-20  bg-[#]">
			<h2 className="text-primary text-4xl font-semibold">What Make Us Different</h2>
			<div className="container mx-auto mt-14">
				<div className="mt-6 md:ml-5 grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
					<div className="w-72 item flex flex-col justify-center items-center">
						<img src={img1} alt="" />
						<h3 className="text-2xl mt-1 font-bold">Exclusive Designs</h3>
						<p>Choose from our huge collections</p>
					</div>
					<div className="w-72 item flex flex-col justify-center items-center">
						<img src={img2} alt="" />
						<h3 className="text-2xl mt-1 font-bold">Customer Care</h3>
						<p>We are 24/7 open just to improve your lifestyle</p>
					</div>
					<div className="w-72 item flex flex-col justify-center items-center">
						<img src={img3} alt="" />
						<h3 className="text-2xl mt-1 font-bold">Do Customization</h3>
						<p>Customize your own furniture according to your taste & budget</p>
					</div>
					<div className="w-72 item flex flex-col justify-center items-center">
						<img src={img4} alt="" />
						<h3 className="text-2xl mt-1 font-bold">Quality & Brand Value</h3>
						<p>Get the best quality & brand value of Partex Furniture</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakeUs;
