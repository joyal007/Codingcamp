import React,{useEffect,useState} from 'react'
import axios from 'axios'
import key from '../../config/key'
import {useParams} from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'

function Discussion() {
  const [loading,setLoading] = useState(false)
  const [form ,setForm] = useState(false)
  const [data,setData]=useState([])
  const param = useParams()
  const [discussion,setDiscussion]=useState({})
  
  useEffect(()=>{
    const fetch =async ()=>{
      setLoading(true)
      const response = await axios.post(`${key.baseUrl}/disussion/${param.title}`);
      console.log(response.data.discussion)
      // console.log(response.data.discussion.length)
      setData(response.data.discussion)
      setLoading(false)
    
    }
    fetch()
  },[])
  const submit = async()=>{

    axios.get(`${key.baseUrl}/discussion/add/${param.title}`,{
      params:{...discussion}
    }
    )
    setData([...data,discussion])
    setDiscussion({})
    setForm(false)
  }
  return (
    <div className="flex flex-col justify-center items-start relative w-full px-2">
      <div className='absolute rounded border bg-blue-900 right-3 top-2 text-white  cursor-pointer text-lg px-2 py-1 z-10' onClick={()=>{setForm(true)}}>
      <span className="text-3xl font-bold h-4">+</span> <span className="text-xl">NEW</span>
      </div>
      <div className='w-full'>
      {
        data.length !=0 ?(data.map(e=>{
          return(
           <SingleDiscussion className='' data={e}/>
          )
        })):(<div className="text-2xl text-slate-300 flex items-center justify-center h-screen"><div className='text-center'>No Discussion Yet</div></div>)
      }
      </div>
      {form&&<div className="w-full absolute z-50 bg-white  rounded left-0 top-1">
        <div className='text-center w-full text-xl font-medium text-slate-300 my-3 '>
          Start a New Discussion
        </div>
        <form   className='flex flex-col border mx-2'>
        <input type="text" className='m-3 rounded h-14 pl-2 border ' name="title" required  placeholder='Title' value ={discussion.title} onChange={(e)=>{setDiscussion({...discussion,title:e.target.value})}}/>
        <textarea placeholder="Any Comments" className="  h-32 m-3 rounded pl-2 border "
        value={discussion.discussion}
        onChange={(e) => {
          setDiscussion({...discussion,discussion:e.target.value})}}
          />
        <textarea placeholder="Any CodeSnippet" className=" h-32 m-3 rounded pl-2 border "
        value={discussion.code}
        onChange={(e) => {
          setDiscussion({...discussion,code:e.target.value})}}
          />        
        <button type="button" onClick={()=>{submit()}} className='m-3 rounded  text-xl bg-blue-900 h-10 border my-3 text-white'>Post</button>
      </form>
      </div>

      
      }

    </div>
  )
}



export default Discussion

const SingleDiscussion=({data})=>{
  const [expand,setExpand] = useState(false)
  return(
    <div className="flex flex-col justify-center items-start py-7 border my-1 relative">
      <div className="w-full relative text-xl font-medium ml-3 cursor-pointer h-full font-" onClick={()=>{setExpand(!expand)}}>
        {data?.title} 
        <div className="absolute right-20 top-0" >
          <img className="h-10"src={dropdown}/>
        </div>
      </div>
      {
        expand && <div className='w-full'>
          <div>
            {data?.discussion}
          </div>
          <pre className="mx-auto bg-slate-200 bg-opacity-70 mt-5 w-full p-4">
            {data?.code}
            </pre>
        </div>


      }
    </div>
  )
}