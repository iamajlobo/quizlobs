import { useState } from "react";
import { RoleContext } from "./RoleContext";


const RoleProvider  = ({children}) => {
    const [role,setRole] = useState('student');
    return (
        <RoleContext.Provider value={{role,setRole}}>
            {children}
        </RoleContext.Provider>
    );
}

export default RoleProvider;