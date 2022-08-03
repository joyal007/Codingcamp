import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

// import {EditorView as CodeMirror,basicSetup} from 'codemirror'
// import { UnControlled as CodeMirror } from 'react-codemirror2'
// import 'codemirror-addon-indent-guide';

import { dracula } from '@uiw/codemirror-theme-dracula';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import Split from 'react-split'
import './CodeEditor.css'
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript'
import React, { useState, useEffect } from 'react'
import DropDown from '../DropDown/DropDown';
import CodeTitle from './CodeTitle';
import codeDescription from './codeDescription'
import EditorFooter from './EditorFooter';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Result } from 'postcss';
// import{indentUnit} from '@codemirror/language'
import key from '../../config/key'

function CodeEditor() {

  const [code, setCode] = useState("")
  const [currentLang, setCurrentLang] = useState("python")
  const [currentTitle, setCurrentTitle] = useState('Description')
  const [result,setResult]=useState([]);
  const [errSubmit,setErrSubmit]=useState(false);
  const [currentCodeFooter, setCurrentFooter] = useState('testcase')
  const [testCase, setTestcase] = useState('')
  const [fetch, setFetch] = useState(false);
  const params = useParams()
  const [description, setDescription] = useState()
  const [loadingSubmit,setLoadingSubmit]=useState(false)


  useEffect(() => {
    const getFetch = async () => {
      const response = await axios.post(`${key.baseUrl}/problemlist/${params.title}`)
      
      // console.log(response)
      setDescription(response.data)
      // console.log("type =>"+typeof response.data.testcase.output)
      if (typeof response.data.testcase.output ==='undefined')
        setTestcase(response.data.testcase.input)
      else
        setTestcase(response.data.testcase.input + "\n" + response.data.testcase.output)
      setCode(response.data.code);
    }
    getFetch()
    setTimeout(()=>{
      setFetch(true)
    },2500)
  }, [])
  
  const props = { setCurrentLang, currentLang, }

  const footer = { currentCodeFooter, setCurrentFooter, testCase, setTestcase, code,setCurrentTitle ,setResult,setErrSubmit,setLoadingSubmit}
  if (!fetch) {
    return (


      <div class="col-3 flex !mt-96 justify-center items-center">
        <div class="snippet" data-title=".dot-spin">
          <div class="stage">
            <div class="dot-spin"></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Split
        className='split-row h-screen  '
        gutterAlign="center"
        gutterSize={15}
        direction="horizontal"
        minSize={400}
      >
        <div className="h-screen overflow-scroll">
          <CodeTitle currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} />
          {codeDescription(currentTitle, description,result,errSubmit,loadingSubmit)}

        </div>
        <div className='font-sans'>
          <DropDown {...props} />
          <CodeMirror
            
            className='codemirror'
            value={code}
            height='500px'
            theme={dracula}
            extensions={[python()]}
            options={{
              lineNumbers:false,
              indentUnit:"4",
              indentGuide:true,
              tabSize:4,
              
              theme:'monokai',
              keyMap:'sublime'

            }}
            onChange={(value) => {
              setCode(value)
              
            }}
            
          />
        {/* <div id="codemirror" className="h-[500px]"></div> */}
          <EditorFooter className="w-full " {...footer} />
        </div>
      </Split>
    </>
  );
}
export default CodeEditor;

