import { redirect } from "next/navigation";

import { lessons, units as unitsSchema, userSubscription} from "@/db/schema";
import {StickyWrapper} from "@/components/stickyWrapper"
import { FeedWrapper } from "@/components/feedWrapper";
import { UserProgress } from "@/components/userProgress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription,  } from "@/db/queries";

import { Unit } from "./unit";
import { Header } from "./header";
import { Promo } from "@/components/promo";


const LearnPage = async() => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const usersubscriptionData = getUserSubscription();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([userProgressData, unitsData,courseProgressData, lessonPercentageData, usersubscriptionData])

    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses")
    }

    if(!courseProgress){
        redirect("/courses")
    }

    const isPro = !!userSubscription?.isActive;

    return(      
        <div className="flex flex-row-reverse gav-[48px] px-6">
            {/* "flex-row-reverse" kaldırsaydık <StickyWrapper> <FeedWrapper> yerini değiştirseydik bir problem olmazdı*/}
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse} 
                    hearts={userProgress.hearts} 
                    points={userProgress.points} 
                    hasActiveSubscription={isPro}
                />
                {!isPro && (
                    <Promo/>
                ) }
                
            </StickyWrapper>   
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title}/> 
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson as typeof lessons.
                                $inferSelect & {
                                    unit: typeof unitsSchema.$inferSelect;
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;

