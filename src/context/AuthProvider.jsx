import { useState } from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({
        user:{
            id: 1001,
            fullname: "Aj Lobo",
            email: "ajlobo@gmail.com",
            role: 'student'
        }
    });

    const login = (userData,jwt) => {
        setUser(userData);
        setToken(jwt);
        localStorage.setItem('token',jwt);
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{user,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;