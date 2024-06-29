"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import {usePracticeModal} from "@/store/use-practice-modal"

export const PracticeModal = () => {
    const router = useRouter();
    const[isClient, setClient] = useState(false);
    const {isOpen,close} = usePracticeModal();

    useEffect(() => setClient(true), []);

    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/heart.svg"
                            alt="heart"
                            height={100}
                            width={100}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Dersi Tekrar et
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                    Kalpleri ve puanları yeniden kazanmak için derslerini tekrar et. 
                    Pratik derslerinde kalp veya puan kaybetmezsiniz!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="w-full flex flex-col gap-y-4">
                        <Button 
                            variant="primary" 
                            className="w-full" 
                            size="lg" 
                            onClick={close}>
                            Anladım
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}