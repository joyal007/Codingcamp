import React, { useState } from 'react'
import drop from '../../assets/dropdown.svg'

function DropDown({ setCurrentLang: setSelect, currentLang: select }) {
    const [collapse, setCollapse] = useState(false)
    // const [select, setSelect] = useState('Python')


    const listLang = ['python', 'javascript', 'c', 'java']

    return (
        <div className="flex flex-col relative  w-32 text-md font-sans font-medium ">
            <div className="flex p-3 bg-gray-200 rounded shadow-slate-500 shadow-sm  justify-between items-center w-32 h-11 cursor-pointer 	 " onClick={() => { setCollapse(!collapse) }}>
                {select.charAt(0).toUpperCase() + select.slice(1)}
                <img alt="drop-down" className="h-6" src={drop} />
            </div>
            <ul className={`flex rounded absolute z-10 top-7  shadow-md bg-slate-200 mt-1 py-1  flex-col justify-center items-center ${!collapse ? 'hidden' : 'block'} `}>

                {
                    listLang.map(e => {
                        return <li onClick={() => {
                            setCollapse(false)
                            setSelect(e)
                        }} className="hover:bg-white  cursor-pointer w-32 h-9 pt-2 text-center " >
                            {e.charAt(0).toUpperCase() + e.slice(1)}
                        </li>
                    })
                }

            </ul>

        </div>
    )
}

export default DropDown
