import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const [user, setUser] = useState([]);
	const [loader, setLoader] = useState(true);
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	//*create user
	const createUser = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*create user
	const LoginUser = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	//* cuurent user check
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
			setLoader(false);
		});
		return () => {
			unSubscribed();
		};
	}, [auth]);
	//*update user name
	const userUpdate = (profile) => {
		setLoader(true);
		return updateProfile(auth.currentUser, profile);
	};
	//*google sign in or sign up
	const loginGoogle = () => {
		setLoader(true);
		return signInWithPopup(auth, googleProvider);
	};
	//*User Sign Out
	const userSignOut = () => {
		setLoader(true);
		return signOut(auth);
	};
	const info = {user, createUser, LoginUser, userUpdate, loginGoogle, userSignOut, loader};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
