import { useState,useContext, useEffect } from 'react';
import signIn from '../assets/images/signin.png';
import {NavLink, useNavigate} from 'react-router-dom'; 
import RoleButton from './RoleButton';
import { RoleContext } from '../context/RoleContext';
import { AuthContext } from '../context/AuthContext';
import {loginUser} from '../api/authApi'; 

const LoginForm = () => {
    const {role} = useContext(RoleContext);
    const {user,login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState({});
    const [response, setResponse] = useState({});
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password,
            role: role
        }
        try {
            const response = await loginUser(credentials);
            const result = response.data.data;
            setResponse(result);
            login(result.user,result.token);
            setEmail('');
            setPassword('');
            const destinationPath = (result.user.role === 'teacher')? '/teacher':'/student';
            navigate(`${destinationPath}/dashboard`);

        }catch(error){
            if(error.response && error.response.data?.error){
                setErrors(error.response.data.error);
            }else { 
                console.error("Network or Server Error", error.message);
            }
        }
    }

    return (
        <div className="border border-gray-200 shadow-md rounded-md w-full md:w-100 p-4 md:p-7 bg-white ">
            <RoleButton/>
            <form onSubmit={handleOnSubmit}>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Email</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="youremail@gmail.com" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='email'/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Password</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="••••••••" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="my-3">
                    <button className='text-[14px] text-white bg-blue-600 flex items-center justify-center gap-2 w-full py-2 rounded-md hover:cursor-pointer hover:bg-blue-700' type="submit">
                        <img className='w-4' src={signIn} alt="Login Account" />
                        Sign In
                    </button>
                </div>
                <div className='mt-4 text-center'>
                    <p className='text-[12px] md:text-sm'>Don't have an account? <NavLink to='/register' className='text-blue-600'>Create One</NavLink></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;