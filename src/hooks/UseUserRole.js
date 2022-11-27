import {useEffect, useState} from 'react';

const UseUserRole = (email) => {
	const [userRole, setUserRole] = useState({});
	const [isAdminLoading, setIsAdminLoading] = useState(true);
	useEffect(() => {
		if (email) {
			fetch(`https://sitpad-server.vercel.app/users/userrole/${email}`, {
				headers: {
					authorization: `bearer ${localStorage.getItem('token')}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setUserRole(data);
					setIsAdminLoading(false);
				});
		}
	}, [email]);
	return [userRole, isAdminLoading];
};

export default UseUserRole;
