import createAccount from '../assets/images/create-account.png';
import {NavLink} from 'react-router-dom'; 
import RoleButton from './RoleButton';

const RegisterForm = () => {
    return (
        <div className="border border-gray-200 shadow-md rounded-md w-full md:w-100 p-4 md:p-7 bg-white mb-10">
            <RoleButton/>
            <form>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Full Name</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Juan Dela Cruz"/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Email</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="youremail@gmail.com"/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Password</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="••••••••"/>
                </div>
                <div className="my-2">
                    <h5 className="text-[10px] font-bold py-2">Confirm Password</h5>
                    <input className="w-full text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="••••••••"/>
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