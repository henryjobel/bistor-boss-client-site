// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../config/firebaseConfig';
import UseAxios from '../Components/Hoocks/UseAxios';



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
    const axiosPublic = UseAxios();
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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoder(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])


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