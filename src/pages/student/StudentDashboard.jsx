
const StudentDashboard = () =>{
    return(
        <main className="h-screen grid grid-cols-12">
            <aside className="border border-gray-200 col-span-2 flex justify-between flex-col">
                <SideBar/>
            </aside>
            <section className="col-span-10">
                <h1 className="border-b border-gray-200 p-3">Dashboard</h1>
            </section>
        </main>
    );
}

export default StudentDashboard;