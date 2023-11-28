import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../config/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const ThemeContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        axiosSecure
          .get(`users/${user.email}`)
          .then((res) => {
            setUserRole(res.data.role);
          })
          .catch(() => {
            setLoading(true);
          });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [axiosSecure, loading]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };

  return (
    <div>
      <ThemeContext.Provider
        value={{
          login,
          logout,
          createUser,
          user,
          loading,
          googleLogin,
          updateUserProfile,
          userRole,
          setLoading,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default AuthProvider;
