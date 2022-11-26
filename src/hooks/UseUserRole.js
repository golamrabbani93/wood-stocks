import {useEffect, useState} from 'react';

const UseUserRole = (email) => {
	const [userRole, setUserRole] = useState({});
	const [isAdminLoading, setIsAdminLoading] = useState(true);
	useEffect(() => {
		if (email) {
			fetch(`http://localhost:5000/users/userrole/${email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setUserRole(data);
					setIsAdminLoading(false);
				});
		}
	}, [email]);
	return [userRole, isAdminLoading];
};

export default UseUserRole;
