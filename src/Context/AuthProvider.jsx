import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import Auth from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const signInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password)
  }
  const signOutUser = ()=>{
    setLoading(true);
    return signOut(Auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth , currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
