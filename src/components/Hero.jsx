import { NavLink } from "react-router-dom";
const Hero = () => {
    return (
        <section className="bg-blue-50/50">
            <div className="max-w-300 mx-auto flex justify-center items-center flex-col text-center py-24">
                <h1 className="text-4xl md:text-6xl font-semibold px-2 md:px-15 lg:px-50 tracking-tight">
                    Create and Take Quizzes
                    <span className="text-blue-600"> Made Simple</span>
                </h1>
                <h5 className="text-[14px] md:text-sm  px-5 text-gray-500 md:px-20 lg:px-65 py-5">
                    A modern quiz platform for teachers and students. Create engaging quizzes, manage classes, and track performance all in one place.
                </h5>
                <div className="flex gap-5 items-center mt-3">
                    <NavLink to='/' className='text-sm text-white bg-blue-600 py-2 md:py-3 px-2 md:px-5 rounded-md border-2 border-blue-600'>I'm a Teacher</NavLink>
                    <NavLink to='/' className='text-sm text-blue-600 bg-white px-2 md:px-5 py-2 md:py-3 rounded-md border-2 border-blue-600'>I'm a Student</NavLink>
                </div>
            </div>
        </section>
    );
}

export default Hero;