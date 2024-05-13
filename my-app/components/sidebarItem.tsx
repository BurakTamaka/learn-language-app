"use client";
{/* https://nextjs.org/docs/app/building-your-application/rendering/client-components
    https://nextjs.org/docs/messages/react-client-hook-in-server-component 
    nextjs hook component mantığı */}

{/* Bu kodda, use client ifadesi yer alır. Bu ifade, React tarafından tanınmayan özel bir ifadedir ve genellikle React dışı bir ortamda,
 örneğin React Native gibi, React uygulamaları dışındaki ortamlarda kullanılır. Bu ifade, özel bir ortamda, bu örnekte bir müşteri 
(client) ortamında kullanılması gerektiğini belirtir. Bu nedenle, bu kodun bir React uygulamasında kullanılması durumunda, use client 
ifadesi anlam ifade etmez ve kodun işlevselliğini etkilemez. */}
import Link from 'next/link';
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
    label: string,
    iconSrc: string,
    href: string
};

export const SidebarItem = ({
    label,
    iconSrc,
    href,
}: Props) =>{
    const pathname = usePathname(); {/* mevcut sayfanın URL'sini almanıza yardımcı olur. Bu, genellikle kullanıcıya gösterilen içeriği, URL'ye bağlı olarak değiştirmek veya belirli bir sayfanın URL'sini kullanarak dinamik içerik yüklemek için kullanılabilir. */}
    const active = pathname === href;
    
    return(
        <Button variant={active ? "sidebarOutline" : "sidebar"} className='justify-start h-[50px]' asChild>
            <Link href={href}>
                <Image src={iconSrc} alt={label} className='mr-5' height={30} width={30}/>
                {label}
            </Link>
        </Button>
    );
}