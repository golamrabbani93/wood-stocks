import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider';
import Loader from '../../pages/Shared/Loader/Loader';

const PrivateRoute = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const location = useLocation();
	if (loader) {
		return <Loader></Loader>;
	}
	if (!user) {
		return <Navigate to="/login" state={{from: location}} replace />;
	}
	return children;
};

export default PrivateRoute;
