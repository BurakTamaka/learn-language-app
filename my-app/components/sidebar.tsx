import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from 'next/link';
import { SidebarItem } from "./sidebarItem";
import { ClerkLoading, ClerkLoaded, UserButton} from "@clerk/nextjs";
import { Loader, User } from "lucide-react";

{/*Bu özellik sayesinde layout sınıfındaki <Sidebar/> kısmına tekrar bir classname atama imkanı tanıyoruz */}
type Props = {
    className?: string;
}


export const Sidebar = ({className} : Props) =>{
    return(
        <div className={cn("h-full lg:w-[256px] lg:fixed left-0 top-0 px-5  border-r-2 flex flex-col",
            className 
        )}>
            <Link href="/">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.jpeg" height={40} width={40} alt="logo" />
                    <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">Learn Language</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="learn" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem label="leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg"/>
                <SidebarItem label="quests" href="/quests" iconSrc="/quests.svg"/>
                <SidebarItem label="flashcard" href="/flashcard" iconSrc="/flashcard.svg"/>
                <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
}