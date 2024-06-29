import { auth } from "@clerk/nextjs/server"; 

const adminIds = [
    "user_2gNiX4C4WP0ypOS8Bs0wRNzx5nJ"
];

export const isAdmin = () => {
    const {userId} = auth();

    if(!userId){
        return false;
    }
    
    return adminIds.indexOf(userId) !== -1;
}