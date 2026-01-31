import DashboardCard from "../../components/DashboardCard";
import SideBar from "../../components/SideBar";



const TeacherDashboard = ()=> {
    return(
        <main className="h-screen grid grid-cols-12">
            <aside className="border border-gray-200 col-span-2 flex justify-between flex-col">
                <SideBar/>
            </aside>
            <section className="col-span-10">
                <h1 className="border-b border-gray-200 p-[12.3px] text-xl ">Dashboard</h1>
                <div className="m-5 grid grid-cols-4 gap-5">
                    <DashboardCard title='Total Classes'/>
                    <DashboardCard title='Total Students'/>
                    <DashboardCard title='Published Quizzes'/>
                    <DashboardCard title='Total Attempts'/>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    );
}

export default TeacherDashboard;