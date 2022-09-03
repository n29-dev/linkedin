import React, { useEffect, useState, useContext } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, signOut } from "firebase/auth";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

// context for storing user information
const AuthContext = React.createContext();

// function for accessing context within any component
function useAuth() {
    return useContext(AuthContext);
}

// declarative function for sharing user information between all components
function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [userAdditionalInfo, setUserAdditionalInfo] = useState(null);
    const [loading, setLoading] = useState(true)

    // adding subscribtion for any user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser({ ...user });
            setLoading(false);
        })

    }, [auth])

    // create new user
    async function createNewUser(email, password, onSuccess = () => { }, onError = () => { }) {

        try {
            await createUserWithEmailAndPassword(auth, email, password)

            // if user is successfully created onSuccess is invoced
            onSuccess(auth.currentUser)

        } catch (error) {
            // if any error occurs the onError function is invocked
            onError(error)
        }

    }

    // login existing user
    async function logInUser(email, password, onSuccess = () => { }, onError = () => { }) {

        try {
            // if user is successfully signedIn onSuccess is invoced
            await signInWithEmailAndPassword(auth, email, password)
            onSuccess(auth.currentUser)

        } catch (error) {
            // if any error occurs the onError function is invocked
            onError(error)
        }

    }

    // logout user 
    async function logOutUser(onSucces = () => { }) {

        try {
            await signOut(auth);
            // if user is successfully signedIn onSuccess is invoced
            onSucces(auth.currentUser);
        } catch (error) {
            console.log('error while logout', error)
        }
    }

    // get user additional info 
    async function getUserAdditionalData(onSucces, onError) {
        if (currentUser.uid) {
            try {
                const docsSnapshot = await getDoc(doc(db, 'users', currentUser.uid));
                if (docsSnapshot.exists()) {
                    const data = docsSnapshot.data();
                    setUserAdditionalInfo(data);
                    onSucces(docsSnapshot.data(data))
                }
            } catch (error) {
                onError(error);
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            additionalInfo: userAdditionalInfo,
            loading,
            getUserAdditionalData,
            setCurrentUser,
            createNewUser,
            logInUser,
            logOutUser

        }}>
            {children}
        </AuthContext.Provider>
    )
}

// export provider and context
export default AuthProvider;

export { useAuth };
