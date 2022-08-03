import React from "react"
import { Link } from "react-router-dom"

const Result = ({scores,viewAns,playAgain,question,count}) => {
    if (count==1){
        return  (
            <>
            {
                question.map(e=>{
                    return (
                        <div className="questionBox">
                <div className="question">{e.question}</div>
                <div className="answer">{e.correct}</div>
               
                </div> 
                    )
                })
            }
<button className="playBtn2" onClick={playAgain}>
        Retake Quiz!
    </button>
    </>
        )
    }

    return (<div className='w-full h-full border'>
        <div className="score-board">
        <div className="score">You scored {scores} / 5 correct answers!</div>
        <button className="playBtn" onClick={playAgain}>
            Retake Quiz!
        </button>
         <button className="ViewAns" onClick={viewAns}>
            View Answers
        </button>
         </div>
   
      
       
     </div>)
    
}

export default Result