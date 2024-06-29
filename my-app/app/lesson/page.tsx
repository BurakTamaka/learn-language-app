import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";
import { userSubscription } from "@/db/schema";

const LessonPage = async() =>{
    const lessonData = getLesson();
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const[
        lesson,
        userProgress,
        userSubscription,
    ] = await Promise.all([
        lessonData,
        userProgressData,
        userSubscriptionData,
    ]);

    if(!lesson || !userProgress){
        redirect("/learn");
    }

    const initialPrecentage = lesson.challenges.filter((challenge) => challenge.completed).length / lesson.challenges.length * 100;

    return(
        <Quiz
            initialLessonId = {lesson.id}
            initialLessonChallenges = {lesson.challenges}
            initialHearts = {userProgress.hearts}
            initialPercentage = {initialPrecentage}
            userSubscription = {userSubscription}

        />
    );
};

export default LessonPage;