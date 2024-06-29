import "dotenv/config"
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, {schema});

const main = async() => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.challenges);
        await db.delete(schema.lessons);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription)

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/es.svg"
            },
            {
                id:2,
                title:"English",
                imageSrc:"/gb.svg"
            },
            {
                id:3,
                title:"German",
                imageSrc:"/de.svg"
            },
            {
                id:4,
                title:"Turkish",
                imageSrc:"/tr.svg"
            },
        ]);

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:2,
                title: "Unit 1",  // Spanish
                description: "Temel seviye ingilizce öğren",
                order:1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,  // Unit 1 (learn basic)
                order:1,
                title:"İsimler" // nouns
            },
            {
                id:2,
                unitId:1,  // Unit 1 (learn basic)
                order:2,
                title:"Fiiller"
            },
            {
                id:3,
                unitId:1,  // Unit 1 (learn basic)
                order:3,
                title:"Fiiller"
            },
            {
                id:4,
                unitId:1,  // Unit 1 (learn basic)
                order:4,
                title:"Fiiller"
            },
            {
                id:5,
                unitId:1,  // Unit 1 (learn basic)
                order:5,
                title:"Fiiller"
            },
            
        ])

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,  // Nouns
                type:"SELECT",
                order:1,
                question:'Bunlar hangisi "Adam"? '
            },       
            {
                id:2,
                lessonId:1,  // Nouns
                type:"ASSIST",
                order:2,
                question:'"Adam"'
            },
            {
                id:3,
                lessonId:1,  // Nouns
                type:"SELECT",
                order:3 ,
                question:'Bunlar hangisi "robot"?'
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            // cevap
            // id auting increment
            {
                challengeId:1, // bunlardan hangisi "adam"
                imageSrc: "/man.svg",
                correct:true,
                text:"The man",
                auidoSrc: "/gb_man.mp3",
            },
            {
                challengeId:1, 
                imageSrc: "/woman.svg",
                correct:false,
                text:"The woman",
                auidoSrc: "/gb_woman.mp3",
            },
            {
                challengeId:1, 
                imageSrc: "/animal.svg",
                correct:false,
                text:"The animal",
                auidoSrc: "/gb_animal.mp3",
            },
            {
                challengeId:1, 
                imageSrc: "/robot.svg",
                correct:false,
                text:"The robot",
                auidoSrc: "/gb_robot.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            // cevap
            {
                challengeId:2, //"adam"
                correct:true,
                text:"The man",
                auidoSrc: "/gb_man.mp3",
            },
            {
                challengeId:2, // bunlardan hangisi "adam"
                correct:false,
                text:"The woman",
                auidoSrc: "/gb_woman.mp3",
            },
            {
                challengeId:2, // bunlardan hangisi "adam"
                correct:false,
                text:"The animal",
                auidoSrc: "/gb_animal.mp3",
            },
            {
                challengeId:2, // bunlardan hangisi "adam"
                correct:false,
                text:"The robot",
                auidoSrc: "/gb_robot.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            // cevap
            {
                challengeId:3, // bunlardan hangisi "robot"
                imageSrc: "/man.svg",
                correct:false,
                text:"The man",
                auidoSrc: "/gb_man.mp3",
            },
            {
                challengeId:3, 
                imageSrc: "/woman.svg",
                correct:false,
                text:"The woman",
                auidoSrc: "/gb_woman.mp3",
            },
            {
                challengeId:3, 
                imageSrc: "/animal.svg",
                correct:false,
                text:"The animal",
                auidoSrc: "/gb_animal.mp3",
            },
            {
                challengeId:3, 
                imageSrc: "/robot.svg",
                correct:true,
                text:"The robot",
                auidoSrc: "/gb_robot.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId:2,  // Nouns
                type:"SELECT",
                order:1,
                question:'Bunlar hangisi "Adam"? '
            },       
            {
                id:5,
                lessonId:2,  // Nouns
                type:"ASSIST",
                order:2,
                question:'"Adam"'
            },
            {
                id:6,
                lessonId:2,  // Nouns
                type:"SELECT",
                order:3 ,
                question:'Bunlar hangisi "robot"?'
            },
        ]);

        console.log("Seeding finished");
    }catch(error){
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();