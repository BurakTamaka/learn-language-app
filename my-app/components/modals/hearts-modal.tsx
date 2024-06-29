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
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
    const router = useRouter();
    const[isClient, setClient] = useState(false);
    const {isOpen,close} = useHeartsModal();

    useEffect(() => setClient(true), []);

    const onClick = () => {
        close();
        router.push("/store");
    }

    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                            src="/dead-face.svg"
                            alt="face"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Canın bitti!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Preminum hesap al ya da satın alma mağazasına git.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="w-full flex flex-col gap-y-4">
                        <Button variant="primary" className="w-full" size="lg" onClick={onClick}>
                            Sonsuz can al
                        </Button>
                        <Button 
                            variant="primaryOutline" 
                            className="w-full" 
                            size="lg" 
                            onClick={close}>
                            Hayır, teşekkürler
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}