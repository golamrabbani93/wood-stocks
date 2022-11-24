import React, {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';
import {createBrowserRouter} from 'react-router-dom';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const auth = getAuth(app);

	const [user, setUser] = useState('Rabbani');

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const info = {user, createUser};
	return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
