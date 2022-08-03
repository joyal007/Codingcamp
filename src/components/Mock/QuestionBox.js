import React, { useState,useEffect } from "react";

const QuestionBox = ({question,options,selected}) => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        
    },[])
    
    const [answer,setAnswer]= useState(options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text,index) => {
               return<> <button
                    key={index}
                    className="answerBtn"
                    onClick={()=> {
                        setCount(count+1)
                        console.log(count)
                        setAnswer([text]);
                        
                        // count===1 ? selected(text):null
                        if(count===0)
                            {selected(text)
                                console.log('count')
                            }

                    }}
                    >
                       {text} 
                    </button>
                    
                    </>
                })}
            
        </div>
    )
}

export default QuestionBox;