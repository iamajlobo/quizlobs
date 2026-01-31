import { NavLink } from "react-router-dom";

const  NavBar = () => {
    return (
        <div className="border-b-2 border-gray-100 px-5 md:px-0">
            <nav className="max-w-300 mx-auto flex justify-between items-center py-3 md:px-10">
                <h1 className="text-xl font-semibold flex items-center gap-2">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    QuizLobs
                </h1>
                <div className="flex gap-2 items-center">
                    <NavLink to='/login' className='text-blue-600 font-semibold text-sm px-3'>Sign in</NavLink>
                    <NavLink to='/register' className='bg-blue-600 text-white py-2 px-3 text-sm rounded-sm hidden md:block'>Get Started</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;