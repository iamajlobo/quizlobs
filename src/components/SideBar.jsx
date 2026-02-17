import { NavLink, useNavigate } from "react-router-dom";
import profile from '../assets/images/profile.png';
import { useContext } from "react";
import { AuthContext} from "../context/AuthContext";

const SideBar = () => {
    const {user,logout} = useContext(AuthContext);
    const role = user.role;
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <div className="h-screen flex flex-col justify-between">
            <div>
                <h1 className="text-xl font-semibold flex items-center gap-2 border-b border-gray-200 p-3">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <NavLink to='/dashboard'>QuizLobs</NavLink>
                </h1>
                <div className="border-b border-gray-200 flex items-center gap-2 py-3 px-5">
                    <div className="bg-blue-300 rounded-full max-h-10 p-3 inline-block">
                        <img className="w-3" src={profile} alt="Profile" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold">{user.fullname}</h3>
                        <h6 className="text-[12px] text-gray-500">{role.slice(0,1).toUpperCase() + role.slice(1,)}</h6>
                    </div>
                </div>
                { (role === 'teacher') ? (
                    <div className="px-2">
                        <h5 className="text-[12px] text-gray-500 pt-5 pb-2 px-3">Menu</h5>
                        <div className="flex items-center gap-2 bg-blue-100 p-2 rounded-sm hover:cursor-pointer">
                            <img className="w-4" src={profile} alt="" />
                            <NavLink className='text-sm'>Dashboard</NavLink>
                        </div>
                    </div> ) : (
                    <div className="px-2 mt-2">
                        <button className="text-[12px] bg-blue-600 text-white py-2 w-full rounded-sm hover:cursor-pointer hover:bg-blue-700">+ Join Class</button>
                    </div>
                )}
            </div>
            <div onClick={handleLogout} className="border-t border-gray-200 p-3 flex items-center gap-2 hover:cursor-pointer hover:bg-black/5">
                <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20.75H15C14.8011 20.75 14.6103 20.671 14.4697 20.5303C14.329 20.3897 14.25 20.1989 14.25 20C14.25 19.8011 14.329 19.6103 14.4697 19.4696C14.6103 19.329 14.8011 19.25 15 19.25H18C18.2969 19.2758 18.5924 19.1863 18.8251 19.0001C19.0579 18.814 19.21 18.5453 19.25 18.25V5.77997C19.21 5.48462 19.0579 5.21599 18.8251 5.0298C18.5924 4.84362 18.2969 4.75415 18 4.77997H15C14.8011 4.77997 14.6103 4.70096 14.4697 4.5603C14.329 4.41965 14.25 4.22889 14.25 4.02997C14.25 3.83106 14.329 3.6403 14.4697 3.49964C14.6103 3.35899 14.8011 3.27997 15 3.27997H18C18.3468 3.26522 18.693 3.31899 19.019 3.43821C19.3449 3.55742 19.6442 3.73974 19.8996 3.97473C20.155 4.20972 20.3616 4.49277 20.5075 4.80768C20.6535 5.12259 20.7359 5.46319 20.75 5.80997V18.22C20.7359 18.5668 20.6535 18.9074 20.5075 19.2223C20.3616 19.5372 20.155 19.8202 19.8996 20.0552C19.6442 20.2902 19.3449 20.4725 19.019 20.5917C18.693 20.711 18.3468 20.7647 18 20.75Z" fill="#000000"></path> <path d="M11 16.75C10.9015 16.7504 10.8038 16.7312 10.7128 16.6934C10.6218 16.6557 10.5393 16.6001 10.47 16.53C10.3296 16.3893 10.2507 16.1987 10.2507 16C10.2507 15.8012 10.3296 15.6106 10.47 15.47L13.94 12L10.47 8.52997C10.3375 8.38779 10.2654 8.19975 10.2688 8.00545C10.2723 7.81115 10.351 7.62576 10.4884 7.48835C10.6258 7.35093 10.8112 7.27222 11.0055 7.26879C11.1998 7.26537 11.3878 7.33749 11.53 7.46997L15.53 11.47C15.6705 11.6106 15.7494 11.8012 15.7494 12C15.7494 12.1987 15.6705 12.3893 15.53 12.53L11.53 16.53C11.4608 16.6001 11.3782 16.6557 11.2872 16.6934C11.1962 16.7312 11.0986 16.7504 11 16.75Z" fill="#000000"></path> <path d="M15 12.75H4C3.80109 12.75 3.61032 12.671 3.46967 12.5303C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697C3.61032 11.329 3.80109 11.25 4 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75Z" fill="#000000"></path></svg>
                Logout
            </div>
        </div>
    );
}

export default SideBar;