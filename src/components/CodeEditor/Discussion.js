import React,{useEffect,useState} from 'react'
import axios from 'axios'
import key from '../../config/key'
import {useParams} from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'

function Discussion({discussions}) {
  const [loading,setLoading] = useState(false)
  const [data,setData]=useState([])
  const param = useParams()
  useEffect(()=>{
    const fetch =async ()=>{
      const response = await axios.post(`${key.baseUrl}/disussion/${param.title}`);
      setData(response.data)

    }
    fetch()
  },[])
  return (
    <div className="flex flex-col justify-center items-start relative">
      <div className='absolute rounded border bg-blue-900 right-3 top-2 text-white px-2 py-1 cursor-pointer'>
      ➕ NEW
      </div>
      <div className='w-full'>
      {
        data.map(e=>{
          return(
           <SingleDiscussion className='' data={e}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default Discussion

const SingleDiscussion=({data})=>{
  const [expand,setExpand] = useState(false)
  return(
    <div className="flex flex-col justify-center items-start py-7 border my-1 ">
      <div className="w-full relative text-xl font-medium ml-3">
        {data.title} 
        <div className="absolute right-20 top-0" onClick={()=>{setExpand(!expand)}}>
          <img className="h-10"src={dropdown}/>
        </div>
      </div>
      {
        expand && <div>
          <div>
            {data.content.msg}
          </div>

        </div>


      }
    </div>
  )
}