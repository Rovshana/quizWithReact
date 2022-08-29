import { useState, useEffect } from "react"
import wrongSound from '../assets/wrong.wav'
import correct from '../assets/correct.mp3'
import useSound from 'use-sound'
export function Quiz({data, setStop, questionNum, setQuestionNum}) {
   
    
const [question, setQuestion] =  useState(0)
const [selectedAnswer, setSelectedAnswer] = useState(0)
const [className, setClassName] = useState("answer")
const [wrong] = useSound(wrongSound)
    const [correctSound] = useSound(correct)
    useEffect(()=>{
     wrong()
        
    }, [])
const delay = (duration, callback) =>{
    setTimeout(() => {
        callback()
    }, duration);

}
useEffect(() => {
    console.log(data);
    console.log(questionNum);
    setQuestion(data[questionNum -1])
 console.log(question)

}, [data, questionNum])

const handleClick = (item)=>{
setSelectedAnswer(item)
setClassName("answer active")
delay(3000, ()=>{setClassName(item.correct ? "answer correct" : "answer wrong")})
delay(5000, ()=>{
    if(item.correct){
        correctSound()
        delay(2000, ()=>{setQuestionNum(prev=>prev + 1)
            setSelectedAnswer(null)})
        
    }else{
        wrong()
        setStop(true)
    }
})

}
    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
          
            <div className="answers">
                {
                    question.answers?.map((item)=>(
<div className={selectedAnswer === item ? className : "answer"} onClick={()=>handleClick(item)}>{item.text}</div>
                    ))
                }
                
                
            </div>
            
        </div>
    )
}
