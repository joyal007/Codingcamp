import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { set } from 'mongoose'
import key from '../../config/key'

function EditorFooter({ currentCodeFooter, setCurrentFooter, testCase, setTestcase, code, setCurrentTitle, setResult, setErrSubmit ,setLoadingSubmit}) {
    const [runCodeResult, setRunCode] = useState([])
    const [loading, setLoading] = useState(false)
    const [err,setErr] = useState(false)
    const params = useParams()
    const footerSet = () => {
        if (currentCodeFooter == "testcase")
            return <TestCase testCase={testCase} setTestcase={setTestcase} />
        else if (currentCodeFooter == "result")
            return <Result data={runCodeResult} testCase={testCase} loading={loading} err={err}/>
    }

    return (
        <div className='w-full h-48 '>
            <div className="flex flex-row border-t-[1px] text-gray-500 font-medium text-base bg-gray-200 bg-opacity-50 ">
                <div onClick={() => { setCurrentFooter('testcase') }} className={`px-3 py-2 border h-full cursor-pointer ${currentCodeFooter == 'testcase' ? 'bg-white border-none' : ''}`}>
                    TestCase
                </div>
                <div onClick={() => { setCurrentFooter('result') }} className={`px-3 py-2 border h-full cursor-pointer ${currentCodeFooter == 'result' ? 'bg-white border-none' : ''}`}>
                    Run Code Result
                </div>
            </div>
            {footerSet()}
            <div className="w-full">
                <div className="relative bottom-0  flex flex-row justify-between items-stretch  text-base text-gray-500 font-medium ">
                    <div className="px-3 ">
                        Console
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="px-3 mx-3 cursor-pointer border-2 py-1 rounded-md " onClick={() => { runCode(params.title, testCase, code, setRunCode, setCurrentFooter, setLoading,setErr) }}>
                            ►  RunCode
                        </div>
                        <div className="mx-3 px-5 cursor-pointer border-2  bg-slate-800 py-1 rounded-md " onClick={
                            () => { fetch(params, code, setCurrentTitle, setResult, setErrSubmit,setLoadingSubmit) }
                        }>
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorFooter;

const runCode = async (title, testCase, code, setRunCode, setCurrentFooter, setLoading,setErr) => {
    // console.log('title'+title);
    // console.log('testcase'+testCase)
    setErr(false)
    setLoading(true)
    let response;
    try {
        response = await axios.get(key.baseUrl+'/runcode', {
            params: {
                title: title,
                testcase: testCase,
                code: code
            }
        })
    } catch (err) {
        setErr(true)
        console.log(err.response)
        setRunCode(err.response.data)
    }
    setCurrentFooter('result')
    setTimeout(() => {
        setLoading(false)
    }, 1500)


    // console.log(response.data)
    setRunCode(response.data)

}


const fetch = async (params, code, setCurrentTitle, setResult, setErrSubmit,setLoadingSubmit) => {
    let response;
    setErrSubmit(false)
    setLoadingSubmit(true)
    try {
        response = await axios.get(`${key.baseUrl}/submit/${params.title}`, {
            params: {
                code: code
            }
        })
    }
    catch (err) {
        console.log("response=>" + err.response.data)
        setErrSubmit(true)
        setCurrentTitle('Submission')
    }
    setTimeout(()=>{
    setLoadingSubmit(false)
    },1500)
    setResult(response.data);
    setCurrentTitle('Submission')

}



const TestCase = ({ testCase, setTestcase }) => {

    return (
        <div className="h-[154px]">
            <textarea

                className=
                " w-full h-full "
                value={testCase}
                onChange={(e) => {
                    setTestcase(e.target.value)
                }}
            />
        </div>
    )
}
const Result = ({ data, testCase, loading ,err}) => {
    if (loading) {
        return <div class="ui segment h-[130px]">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">Verifying Your Code</div>
            </div>
            <p></p>
        </div>
    }
    if(err){
        let li = data.split('\n')
        console.log(li)
        return(
            <div className="h-44 flex justify-center text-lg text-red-500 items-center">
                {li[li.length-2]}
            </div>
        )
    }
    return (
        <div className="h-44 w-full text-base flex flex-col justify-between py-2 pl-3 relative">
            {
                typeof data[0] == 'undefined' ? <div className="text-xl absolute w-full h-full bg-white flex justify-center items-center text-slate-300">Run Your Code to See Output</div> : data[0] === data[1] ? <div className="text-green-700 text-xl">Accepted</div> : <div className="text-red-700 text-xl">Wrong Answer</div>
            }
            <div className="flex flex-row my-1">
                <div className='w-28'>
                    Your Input
                </div>
                <div className="border w-full h-9 pt-1 pl-1">
                    {testCase}
                </div>
            </div>
            <div className="flex flex-row my-1">
                <div className='w-28'>
                    Output
                </div>
                <div className='border w-full pt-1 pl-1 h-9'>
                    {data[1]}
                </div>
            </div>
            <div className="flex flex-row my-1">
                <div className='w-28'>
                    Expected
                </div>
                <div className='border w-full pt-1 pl-1 h-9'>
                    {data[0]}
                </div>
            </div>
        </div>
    )
}