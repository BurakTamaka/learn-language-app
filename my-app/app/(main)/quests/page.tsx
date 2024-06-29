import Image from "next/image";
import { redirect } from "next/navigation";
import { UserProgress } from "@/components/userProgress";
import { FeedWrapper } from "@/components/feedWrapper";
import { StickyWrapper } from "@/components/stickyWrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";

const quests = [
    {
        title:"20 XP kazan",
        value:20,
    },
    {
        title:"50 XP kazan",
        value:50,
    },
    {
        title:"120 XP kazan",
        value:100,
    },
    {
        title:"300 XP kazan",
        value:300,
    },
    {
        title:"500 XP kazan",
        value:500,
    },
]

const QuestsPage = async() => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const[userProgress,userSubscription,] = await Promise.all([userProgressData,userSubscriptionData,]);

    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses")
    }

    const isPro = !!userSubscription?.isActive;

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
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
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/quests.svg"
                        alt="quests"
                        height={90}
                        width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Quests
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Görevleri tamamla puan kazan!
                    </p>
                    <ul className="w-full">
                        {quests.map((quest) => {
                            const progress = (userProgress.points / quest.value) * 100;

                            console.log({progress, value:quest.value })

                            return(
                                <div className="flex items-center w-full p-4 gap-x-4 border-t-2" key={quest.title}>
                                    <Image src="/lightning.svg"  alt="point" width={60} height={60} /> 
                                    <div className="flex flex-col gap-y-2 w-full">
                                        <p className="text-neutral-700 text-xl font-bold">
                                            {quest.title}
                                        </p>
                                        <Progress value={progress} className="h-3"/> 
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default QuestsPage;