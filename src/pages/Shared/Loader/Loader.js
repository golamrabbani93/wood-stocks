import React from 'react';
import {ScaleLoader} from 'react-spinners';
const Loader = () => {
	return (
		<div className="flex justify-center items-center h-96">
			<ScaleLoader color="#D94A38"></ScaleLoader>
		</div>
	);
};

export default Loader;
