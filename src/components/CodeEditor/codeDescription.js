import Description  from "./Description"
import React from 'react'
import Discussion from "./Discussion"
import Submission from "./Submission"
import Solution from "./Solution"

const codeDescription =(currentTitle,data,result,errSubmit,loadingSubmit)=>{
    // console.log(data)
    if(currentTitle ==="Description")
        return <Description description={data}/>
    else if(currentTitle==='Solution')
        return <Solution/>
    else if (currentTitle ==='Discussion')
        return <Discussion/>
    else 
        return <Submission result={result} err={errSubmit} loading={loadingSubmit}/>
}

export default codeDescription;