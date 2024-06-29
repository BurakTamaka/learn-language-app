import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type Props = {
    activeCourse: typeof courses.$inferSelect; // veritabanı türleriyle değiştircez (replace with database types)
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}


export const UserProgress = ({activeCourse, points, hearts, hasActiveSubscription}:Props) => {
    return(
        <div className="flex items-center justify-between gab-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} 
                        className="rounded-md border" width={32} height={32}/>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/lightning.svg" height={30} width={30} alt="Points" className="mr-2"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/heart.svg" height={30} width={30} alt="Heart" className="mr-2"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>
        </div>
    )
}