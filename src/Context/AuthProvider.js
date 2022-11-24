import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
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
	//*update user name
	const userUpdate = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};
	const info = {user, createUser, LoginUser, userUpdate};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
