import { useState } from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser): null;
    });

    const login = (userData,jwt) => {
        setUser(userData);
        setToken(jwt);
        localStorage.setItem('token',jwt);
        localStorage.setItem('user',JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{user,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;