import React from 'react'
import CodeEditor from './components/CodeEditor/CodeEditor'
import Home from './components/Home/Home'
import {
  BrowserRouter as  Router,
  Routes,
  Route

} from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='problems/:title' element={<CodeEditor/>}/>
      </Routes>
    <div>
      {/* <a href='/auth/google'>login with google</a> */}
      {/* <CodeEditor/>
      <Home/> */}
    </div>
    </Router>
  )
}

export default App
