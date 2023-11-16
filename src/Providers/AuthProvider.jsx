// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../config/firebaseConfig';



export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const loginWithGoogle = () =>{
        setLoder(true)
        return signInWithPopup(auth, googleProvider)
    }
    const [user,setUser] = useState(null)
    const [loader,setLoder] = useState(true)
    const createUser = (email , password) =>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const singIn = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singOut = () => {
        setLoder(true)
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoder(false);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authinfo = {
        user,
        loginWithGoogle,
        createUser,
        singIn,
        singOut,
        updateUserProfile,
        loader
       
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;