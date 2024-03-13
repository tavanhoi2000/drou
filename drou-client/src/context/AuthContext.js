import { createContext, useState, useContext } from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);   
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider;