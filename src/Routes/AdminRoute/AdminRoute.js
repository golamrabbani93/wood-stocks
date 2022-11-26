import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../Context/AuthProvider';
import UseUserRole from '../../hooks/UseUserRole';
import Loader from '../../pages/Shared/Loader/Loader';

const AdminRoute = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const [userRole, isAdminLoading] = UseUserRole(user?.email);
	const location = useLocation();

	if (loader || isAdminLoading) {
		return <Loader></Loader>;
	}

	if (user && userRole.userRole === 'Admin') {
		return children;
	}

	return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
