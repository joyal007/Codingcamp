import React from 'react'

function LanguageChoice() {
    return (
        <>
            <select class="ui simple bg-white font-sans text-md hover:bg-slate-100 dropdown">
                <option value=""  >Gender</option>
                <option value="1" className="hover:bg-slate-100" >Male</option>
                <option value="0">Female</option>
            </select>
        </>
    )
}

export default LanguageChoice
