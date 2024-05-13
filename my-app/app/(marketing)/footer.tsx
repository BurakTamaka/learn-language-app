import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () =>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-scree-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/es.svg" alt="Spanish" height={32} width={40} className="mr-4 rounded-md"/>
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/gb.svg" alt="English" height={32} width={40} className="mr-4 rounded-md"/>
                    English
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/de.svg" alt="German" height={32} width={40} className="mr-4 rounded-md"/>
                    German
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/tr.svg" alt="Turkish" height={32} width={40} className="mr-4 rounded-md"/>
                    Turkish
                </Button>
            </div>    
        </footer>

    );
}