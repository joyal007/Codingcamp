import React from "react";
const AnswerBox = ({question,correct}) => {
    
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            <div className="answer">{correct}</div>
        </div>
    )
}

export default AnswerBox;