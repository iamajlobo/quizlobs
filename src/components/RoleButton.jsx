import {useContext } from "react";
import { RoleContext} from "../context/RoleContext";

const RoleButton = () => {
    const {role,setRole}= useContext(RoleContext);
    const blue = 'text-sm w-full py-3 rounded hover:cursor-pointer bg-blue-600 text-white hover:bg-blue-700';
    const white = 'text-sm w-full py-3 rounded hover:cursor-pointer bg-gray-300 hover:bg-gray-400';

    return (
        <>
            <h5 className="text-[10px] font-bold py-2">I am</h5>
            <div className="flex justify-center gap-3">
                <button className={(role === 'teacher') ? blue:white} onClick={()=>setRole('teacher')}>Teacher</button>
                <button className={(role === 'student') ? blue:white} onClick={()=>setRole('student')}>Student</button>
            </div>
        </>
    );
}

export default RoleButton;