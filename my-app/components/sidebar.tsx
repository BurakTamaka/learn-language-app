import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from 'next/link';
import { SidebarItem } from "./sidebarItem";

{/*Bu özellik sayesinde layout sınıfındaki <Sidebar/> kısmına tekrar bir classname atama imkanı tanıyoruz */}
type Props = {
    className?: string;
}


export const Sidebar = ({className} : Props) =>{
    return(
        <div className={cn("h-full lg:w-[256px] lg:fixed left-0 top-0 px-4  border-r-2 flex flex-col",
            className 
        )}>
            <Link href="/">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.jpeg" height={40} width={40} alt="logo" />
                    <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">Learn Language</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="learn" href="/learn" iconSrc="/learn.svg"/>
            </div>
            
        </div>
    );
}