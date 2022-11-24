import React, {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const auth = getAuth(app);

	const [user, setUser] = useState('Rabbani');

	//*create user
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*create user
	const LoginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const info = {user, createUser, LoginUser};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
