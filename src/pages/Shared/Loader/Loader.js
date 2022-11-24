import React from 'react';
import {ScaleLoader} from 'react-spinners';
const Loader = () => {
	return (
		<div className="flex justify-center items-center h-96">
			<ScaleLoader color="#6C4AB6"></ScaleLoader>
		</div>
	);
};

export default Loader;
