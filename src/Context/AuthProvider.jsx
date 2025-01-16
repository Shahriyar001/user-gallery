import { Children, createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {};
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
