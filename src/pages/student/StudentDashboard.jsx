import { useState,useContext } from "react";

import DashboardCard from "../../components/DashboardCard";
import SideBar from "../../components/SideBar";
import bviolet from '../../assets/images/bviolet.png';
import gcheck from '../../assets/images/gcheck.png';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';
import bmuted from '../../assets/images/bmuted.png';
import thropy from '../../assets/images/thropy.png';
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const StudentDashboard = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const {user} = useContext(AuthContext);
    if(user.user.role !== 'student') {
        return <Navigate to='/login'/>
    }
    return(
        <main className="h-screen grid grid-cols-12 relative">
            <aside className={`border border-gray-200 lg:col-span-2 md:col-span-3 md:flex justify-between flex-col bg-white h-screen w-50 md:w-full absolute top-0 ${isOpen?'left-0':'-left-70'} md:left-0 md:relative transition-all ease-linear duration-400`}>
                <SideBar/>
            </aside>
            <section className="col-span-12 lg:col-span-10 md:col-span-9">
                <h1 className="border-b border-gray-200 p-[12.3px] text-xl flex justify-between items-center gap-1">
                    My Dashboard
                    <img className="w-7 block md:hidden transition-all ease-in-out duration-700" onClick={()=>setIsOpen(!isOpen)} src={isOpen ? close : menu} alt="Menu Icon" />
                </h1>
                <div className="m-5 grid md:grid-cols-3 gap-5">
                    <DashboardCard title='Enrolled Classes' icon={bviolet} count="0"/>
                    <DashboardCard title='Completed Quizzes' icon={gcheck} count="8/10"/>
                    <DashboardCard title='Average Score' icon={thropy} count="15%"/>
                </div>
                <div className="m-5">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">My Classes</h3>
                    </div>
                    <div className="w-full h-50 my-2 flex justify-center items-center border border-gray-200 shadow-sm rounded-md">
                        <div className="flex flex-col items-center">
                            <img className="w-10" src={bmuted} alt="Students Icon" />
                            <p className="my-3 text-gray-500 text-sm">You haven't join any classes yet</p>
                            <button className="text-[12px] bg-blue-600 text-white py-2 px-3 rounded-sm hover:cursor-pointer hover:bg-blue-700">+ Join Your First Class</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default StudentDashboard;