import FeatureCards from "./FeatureCards";
import graduation from "../assets/images/graduation.png";
import book from "../assets/images/book.png";
import progress from "../assets/images/progress.png";
import students from "../assets/images/students.png";

const Features = () =>  {
    return (
        <section className="max-w-300 mx-1 md:mx-auto mb-15 py-20 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCards icon={graduation} title="Create Classes" description="Organize students into classes with unique codes for easy joining."/>
            <FeatureCards icon={book} title="Build Quizzes" description="Create multiple-choice and true/false questions with time limits."/>
            <FeatureCards icon={progress} title="Track Progress" description="View detailed results and performance analytics for each student."/>
            <FeatureCards icon={students} title="Manage Students" description="Add, remove, and monitor student progress across all classes."/>
        </section>
    );
}

export default Features;