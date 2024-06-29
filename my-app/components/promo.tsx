"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
    return(
        <div className="space-y-4 p-4 rounded-xl border-2 ml-10">
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <Image 
                        src="/unlimited.svg"
                        alt="Pro"
                        height={26} width={26}
                    /> 
                    <h3 className="font-bold text-lg"> 
                        Premium hesap satın al
                    </h3>
                </div>
                <p className="text-muted-foreground">
                    Sınırsız can ve daha fazlası!
                </p>
            </div>
            <Button variant="super" className="w-full" size="lg">
                <Link href="/shop">
                    Şimdi yükselt
                </Link>
            </Button>
            
            
        </div>
    );
};