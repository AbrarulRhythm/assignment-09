import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// Google Provider
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In User
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Sign In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Update User Profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // Reset Password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // Sign Out User
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        googleSignIn,
        updateUser,
        resetPassword,
        userSignOut,
        loading,
        setLoading,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;