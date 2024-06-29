import { getCourses, getUserProgress } from "@/db/queries";
import {List} from "./list"

const CoursesPage = async () => {
    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData
    ])
    return(
        <div className="h h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Courses Page
            </h1>
            <List
                courses = {courses}
                activeCoursesId={userProgress?.activeCourseId}
            />

            
        </div>
    );
}

export default CoursesPage;