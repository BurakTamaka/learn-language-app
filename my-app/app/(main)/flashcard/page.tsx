"use client"

import "./styles.css"
import { useState } from "react";

const questions = [
    {
        id:3457,
        question: "I went to the park yesterday.",
        answer: "Dün parka gittim"
    },
    {
        id:7336,
        question: "She is studying for her exams.",
        answer: "Sınavları için çalışıyor"
    },
    {
        id:8832,
        question: "I am planning to travel to Italy next summer.",
        answer: "Gelecek yaz İtalya'ya seyahat etmeyi planlıyorum."
    },
    {
        id:1297,
        question: "She has been working at the same company for five years.",
        answer: "Beş yıldır aynı şirkette çalışıyor."
    },
    {
        id:9103,
        question: "Can you recommend a good restaurant in this area?",
        answer: "Bu bölgede iyi bir restoran tavsiye edebilir misin?"
    },
]

const FlashcardPage = () => {

    const [selectedId,setSelectedId] = useState(null);

    function handleClick(id){
        setSelectedId(id !== selectedId ? id : null);
    }
    
    return(
        <div className="flex flex-row-reverse gap-[48px] pr-[400px]">
           <div className="flashcards">
            {questions.map((question) => (
                <div 
                    key={question.id} 
                    onClick={() => handleClick(question.id)}
                    className={question.id === selectedId ? "selected" : ""}
                    
                    >
                    <p>
                        {question.id === selectedId ? question.answer : question.question}
                        </p>
                </div> 
            ))}
        </div> 
        </div>
        
    )
}


export default FlashcardPage;