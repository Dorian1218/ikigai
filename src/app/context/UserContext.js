"use client"

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
import { auth } from "../config";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password).then(() => {
      
    });
  };

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then(() => {
      window.location.href = "/home"

    });
  };

  const logout = async () => {
    return await signOut(auth).then(() => toast.success("Successfully logged out"));
  };

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {window.location.href = "/home"})
      .catch((err) => {})
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
    value={{ createUser, login, logout, user, signInWithGoogle }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};