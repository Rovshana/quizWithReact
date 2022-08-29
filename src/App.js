import "./app.css"
import data from './data.json'
import {useState, useEffect} from 'react'
import { Quiz } from "./components/quiz";
import questions from './questions.json'
import { Timer } from "./components/Timer";
import { Start } from "./components/Start";
function App() {
  
  const [user, setUser] = useState(null)
  const [questionNum, setQuestionNum] = useState(1)
  const [stop, setStop] = useState(false) 
  const [earned, setEarned] = useState('$ 0')
  useEffect(() => {
    questionNum > 1 && setEarned(data.find((money)=> money.id === questionNum -1).amount)
  }, [data, questionNum])
  return <div className="app">
{user ? (<>
  <div className="main">
    {stop ?( <h1 className="earned">You earned:{earned} </h1>
     
     ): (<>
    <div className="top">
      <div className='timer'><Timer setStop={setStop} questionNum={questionNum}/></div>
    </div>
    <div className="bottom">
    <Quiz data ={questions} setStop={setStop} setQuestionNum={setQuestionNum} questionNum={questionNum}/>

    </div>

 
  </>)}
  </div>
  <div className="pyramid">
    <ul className="moneyList">
      {
        data?.map((item, index)=>(<li className={questionNum === item.id ? "moneyListItem active" : "moneyListItem"}>

        <span className="moneyListItemNum">{item.id}</span>
        <span className="moneyListitemAmount">{item.amount}</span>
      </li>)).reverse()
      }



    </ul>
  </div>
</>) : <Start setUser={setUser} />}
  
  </div>;
}

export default App;
