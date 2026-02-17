import createAccount from '../assets/images/create-account.png';
import RoleButton from './RoleButton';

import {NavLink} from 'react-router-dom'; 
import { useState, useContext, useEffect } from 'react';
import { RoleContext } from '../context/RoleContext';
import { register } from '../api/authApi';

const RegisterForm = () => {
    const {role} = useContext(RoleContext);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState({});

    const [fullname,setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    
    useEffect(()=>{
        console.log(response);
    },[response]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let splitName = fullname.split(" ");
        let capitalizedName = splitName.map((e) => e.slice(0,1).toLocaleUpperCase() + e.slice(1,).toLocaleLowerCase());
        let newFullname = capitalizedName.join(" ");

        const newUser = {fullname: newFullname, email: email,password: password, role: role};
        try {
            const response = await register(newUser);
            setResponse(response.data);
            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }catch(error){
            if(error.response && error.response.data?.error){
                setErrors(error.response.data.error);
            }else { 
                console.error("Network or Server Error", error.message);
            }
        }
    }
    
    return (
        <div className="border border-gray-200 shadow-md rounded-md w-full md:w-100 p-4 md:p-7 bg-white mb-10">
            <RoleButton/>
            <form onSubmit={handleOnSubmit}>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Full Name</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Juan Dela Cruz" name="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} autoCapitalize='words' autoComplete='name'/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Email</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="youremail@gmail.com" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='email'/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Password</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="••••••••" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Confirm Password</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="••••••••" name="confirm-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <div className="my-3">
                    <button className='text-[14px] text-white bg-blue-600 flex items-center justify-center gap-2 w-full py-2 rounded-md hover:cursor-pointer hover:bg-blue-700' type="submit">
                        <img className='w-4' src={createAccount} alt="Create Account" />
                        Create Account
                    </button>
                </div>
                <div className='mt-4 text-center'>
                    <p className='text-[12px] md:text-sm'>Already have an account? <NavLink to='/login' className='text-blue-600'>Sign in</NavLink></p>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;