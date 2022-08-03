import React from 'react'

function Submission({result,err,loading}) {
  let count=0;
  if(loading){
    return(
      <div class="ui segment h-full w-full m-0">
  <div class="ui active dimmer inverted">
    <div class="ui medium text loader">Loading</div>
  </div>
  <p></p>
  <p></p>
</div>
    )
  }
  if(err){
    return<div className="text-xl font-medium flex flex-col justify-center items-center h-full px-5">
      <div className="text-center py-auto px-auto text-red-500 ">
        There is some ERROR in your CODE Please try Run Code before next Submit
      </div>
    </div>
  }
  if (result.length==0){
    return <div className="text-2xl font-medium flex flex-col justify-center items-center h-full">
      <div className="text-center py-auto px-auto text-slate-300 ">
      No Submission Yet
      </div>
    </div>
  }
  else{
    
    result.map(e=>{
      if(e==='True')
        count++;
      return '';
    }
      )
  }
  return (
    <div className="h-full text-xl flex flex-col   pl-9 py-7">
      <div className="my-3 text-amber-400 mx-auto"> Success Rate: {count}/{result.length-1}</div>
      
        <div className="grid grid-cols-3 gap-x-3 gap-y-3">
        {result.map((e,i)=>{
          return <div className="my-4  justify-center items-center">
            {e=='True'?<div className='text-green-300'>{`✅ TestCase ${i+1}`}</div>:(e=='False'?<div className="text-red-300">{`❌ TestCase ${i+1}`}</div>:'')}
          
          </div>
        })  
      }    
        </div>
        
        
    </div>
  )
}

export default Submission
