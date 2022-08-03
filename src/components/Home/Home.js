import React, { useEffect, useState,Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../CodeEditor/CodeEditor.css'
import key from '../../config/key'
import "../Mock/style.css";
import QuestionBox from "../Mock/QuestionBox";
import quizService from "../../quizService/index";
import Result from "../Mock/Result";
import AnswerBox from "../Mock/AnswerBox";


function Home() {
  const [fetched, setFetched] = useState(false)
  const [questionList, setQuestions] = useState([])

  useEffect(() => {
    setFetched(false)
    const fetch = async () => {
      const response = await axios.get(key.baseUrl+'/problemlist')
     
      // console.log(response.data)
      setQuestions(response.data)
    }
    fetch()
    setTimeout(()=>{
      setFetched(true)
    },1500)
  }, [])
  console.log(questionList)
  if (!fetched) {
    return (
    //   <div className="ui segment">
    //   <div className="ui active dimmer">
    //     <div className="ui text loader">Loading</div>
    //   </div>
    //   <p></p>
    // </div>
    <div class="col-3 flex justify-center items-center">
        <div class="snippet !mt-96 " data-title=".dot-spin">
          <div class="stage">
            <div class="dot-spin"></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex">
    <div className=" w-[60%] h-full mt-14 mx-5  flex flex-col bg-white drop-shadow-lg rounded-lg pt-2">
      <div className="flex flex-row font-medium text-lg text-gray-400 mx-3 my-2">
        <span className="w-20 pl-1">
          Status
        </span>
        <span className="w-72 pl-1">
          Title
        </span>
        <span className="w-24 pl-1">
          Solution
        </span>
        <span className="w-32 pl-1">
          Acceptance
        </span>
        <span className="w-32 pl-1">
          Difficulty
        </span>
      </div>
      <hr  className=""/>
      {
        fetched && questionList.map((e,i) => { 
         return(
          <div className={`${i%2==0?'bg-slate-200':'bg-white'} my-auto h-16 flex flex-col py-3 `}>
         <Link className="" to={`/problems/${e.title}`}>
           <div className="flex flex-row text-black text-lg cursor-pointer py-1  mx-4 ">
            <span className="w-20 pl-1 text-base">
            ✅
            </span>
            <span className="w-72 pl-1">
              {e.id +". "+ e.title}
            </span>
            <span className="w-24 pl-1">
              ___
            </span>
            <span className="w-32 pl-1">
              {getRandomInt(50,100)}%
            </span>
            <span className={`w-32 pl-1 ${e.difficulty==='Easy'?"text-green-700":(e.difficulty==='Medium'?'text-orange-400':'text-red-500')}`}>
              {e.difficulty}
            </span>
            
          </div>
          {/* <div className="ui divider "/> */}
          </Link>
          </div>
          )
        })
      }
      <div className="h-1">

      </div>
    </div>
    <div className="h-screen w-[40%]">
    <Quiz/>
    </div>
    </div>
  )
}


// import React,  from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

class Quiz extends Component {
    state = {
        questionbank: [],
        scores: 0,
        responses: 0,
        count: 0
    };
    getQuestions = () =>{
        quizService().then(question => {
            this.setState({
                questionbank: question
            });
        });
        

    };
    computeAnswer = (answer,correctAnswer) => {

        if(answer === correctAnswer){
            this.setState({
                scores: this.state.scores + 1
            })
        }
      this.setState({
        responses: this.state.responses < 5 ? this.state.responses +1 : 5
      })  
      
    }
    viewAns = () =>{
        this.setState({
            count: 1
        })
    }
    playAgain = () =>{
        this.getQuestions();
        this.setState({
            scores:0,
            responses:0,
            count:0
        })
    }
    componentDidMount() {
        this.getQuestions();
    }
    render(){
        return(
            
            <div className="container h-screen overflow-scroll relative">
                <div className="title text-2xl h-20 fixed z-10 w-full ">Take a Quick TechQuiz</div>
                <div className='mt-20'>
              {this.state.questionbank.length > 0 &&
              this.state.responses < 5 &&
              this.state.questionbank.map(
                ({question,answers,correct,questionId}) => (
                    <QuestionBox
                    question={question} 
                    options={answers} 
                    key={questionId} 
                    selected={answer => this.computeAnswer(answer,correct)}
                    />
                )
              )}
              
              { this.state.responses === 5 ? (<Result scores={this.state.scores} viewAns={this.viewAns} playAgain={this.playAgain} question={this.state.questionbank}  count={this.state.count}/>):null}
              </div>
            </div>

        );
    }
}

export default Home

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}