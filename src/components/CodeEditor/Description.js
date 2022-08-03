import React from 'react'

function Description({description}) {
  console.log(description)
  return (
    <div className="mx-3 my-5 text-lg font-serif font-thin">
     <span className="font-sans text-xl font-medium">
      {description.id +". "+ description.title}
     </span>
     <div className={`my-1 ${description.difficulty ==='Easy'?'text-green-600':(description.difficulty==='Medium'?'text-orange-500':'text-red-500')}`} >
      {description.difficulty}
      </div>
    <hr/>
    <div >
      {description.question.map((e)=>{
        return(
          <div className="my-3 font-light font-sans">
            {e}
          </div>
        )
      }
      )}
    </div>
    <div className='my-3'>
      {description.example.map((e,index)=>{
        return <div className="my-2">
          <div>Example {index+1+" :"}</div>
          <div className='bg-slate-200 w-full bg-opacity-70 py-4 px-2 my-3 font-sans'>
            <div>
              <span className=" font-semibold text-lg">Input :</span> <span className='font-normal text-lg'>{e.input}</span>
            </div>
            <div>
              <span className="font-semibold text-lg" >Output :</span> <span className="font-normal text-lg">{e.output}</span>
            </div>
            {e.explanation}
          </div>
        </div>
      })}
    </div>
    <div className="my-3">
      Constraints
      <div>
        {description.constraint.map(e=>{
          return <div className='font-sans font-light my-2'>
            {"* "+e}
          </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Description
