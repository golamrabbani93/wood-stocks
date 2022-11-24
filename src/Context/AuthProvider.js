import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const auth = getAuth(app);

	const [user, setUser] = useState([]);
	console.log('🚀🚀: AuthProvider -> user', user);

	//*create user
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*create user
	const LoginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	//* cuurent user check
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
		});
		return () => {
			unSubscribed();
		};
	}, [auth]);
	const info = {user, createUser, LoginUser};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
