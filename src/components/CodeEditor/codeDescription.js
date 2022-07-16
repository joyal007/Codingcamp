import Description  from "./Description"
import Discussion from "./Discussion"
import Submission from "./Submission"
import Solution from "./Solution"

const codeDescription =(currentTitle)=>{
    if(currentTitle ==="Description")
        return <Description/>
    else if(currentTitle==='Solution')
        return <Solution/>
    else if (currentTitle ==='Discussion')
        return <Discussion/>
    else 
        return <Submission/>
}

export default codeDescription;