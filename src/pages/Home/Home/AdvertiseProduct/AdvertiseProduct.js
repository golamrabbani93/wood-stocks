
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import SingleCategoryProduct from '../../../Shared/CategoryProducts/SingleCategoryProduct';



const AdvertiseProduct = () => {
	const [advertises,SetAdvertises]=useState()
	useEffect(()=>{
		axios.get('https://sitpad-server.vercel.app/product/advertise')
			.then((data)=>SetAdvertises(data.data))
	},[])
	const [buyProduct, setBuyProduct] = useState(null);
	console.log("🚀🚀: AdvertiseProduct -> buyProduct", buyProduct)
	return (
		<div className="mt-14">
			<h2 className="text-primary text-4xl font-semibold">Advertise Product</h2>
			<div className="mt-6 md:ml-5 grid md:grid-cols-2 lg:grid-cols-3 ">
			{
				advertises?.map(ad=><SingleCategoryProduct setBuyProduct={setBuyProduct} key={ad._id} product={ad} ></SingleCategoryProduct>)
			}
			</div>
		
		</div>
	);
};

export default AdvertiseProduct;
