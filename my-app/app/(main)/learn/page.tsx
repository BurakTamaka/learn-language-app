import {StickyWrapper} from "@/components/stickyWrapper"
import { FeedWrapper } from "@/components/feedWrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/userProgress";

const LearnPage = () => {
    return(
        
        <div className="flex flex-row-reverse gav-[48px] px-6">
            {/* "flex-row-reverse" kaldırsaydık <StickyWrapper> <FeedWrapper> yerini değiştirseydik bir problem olmazdı*/}
            <StickyWrapper>
                <UserProgress 
                    activeCourse={{title: "English", imageSrc: "/gb.svg"}} 
                    hearts={5} 
                    points={100} 
                    hasActiveSubscription={false}/>
            </StickyWrapper>   
            <FeedWrapper>
                <Header title="English"/> 
                <div className="space-y-4">
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>
                    <div className="h-[700px] bg-red-300"></div>

                </div>
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;

