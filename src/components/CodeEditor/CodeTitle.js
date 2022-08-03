import React from 'react'
import description from '../../assets/description.svg'
import message from '../../assets/message.svg'
import solution from '../../assets/solution.svg'
import timer from '../../assets/timer.svg'
function CodeTitle({ currentTitle, setCurrentTitle }) {
    const codeTitles = [{ title: 'Description', svg: description }, { title: 'Solution', svg: solution }, { title: 'Discussion', svg: message }, { title: 'Submission', svg: timer }]
    return (
        <div className='bg-gray-200 h-12  text-gray-500 font-sans text-lg font-small  bg-opacity-50 '>
            <span className='max-w-[40rem] h-full grid grid-cols-4 justify-start'>
                {
                    codeTitles.map((e) => {
                        return (
                            <div onClick={() => { setCurrentTitle(e.title) }} className={`border cursor-pointer text-ellipse whitespace-pre max-w-[36rem]  px-3 flex overflow-hidden text-ellipsis justify-around items-center ${currentTitle === e.title ? 'bg-white border-b-0' : ''}  h-full`}>

                                <img alt="icon-title" className='px-1 h-6 ' src={e.svg} />
                                <div className='text-ellipse whitespace-pre overflow-hidden'>
                                    {e.title}
                                </div>
                            </div>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default CodeTitle
