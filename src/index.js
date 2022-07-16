import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';
import "./index.css"
const cont = document.querySelector("#root");

const root = createRoot(cont)

root.render(<App/>)